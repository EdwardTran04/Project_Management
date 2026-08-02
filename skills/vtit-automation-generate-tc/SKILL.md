---
name: vtit-automation-generate-tc
description: VTiT internal skill to generate, verify, and self-repair automation test case (.tc) files via the vtit-ide-mcp server.
---

# vtit-automation-generate-tc

This skill guides the AI Agent to systematically design, generate, run, and self-heal VTiT automation test cases (`.tc` files) based on natural language descriptions or manual test plans.

---

## 📅 When to Use
Trigger this skill whenever the user requests the creation, conversion, execution, or debugging of an automation test case (`.tc`) file.

---

## 🛠️ Step-by-Step Execution Pipeline

### Step 1: MCP Server Availability Verification (Mandatory Gate)
Before doing any design or work, check if the lazy-loaded MCP server `vtit-ide-mcp` is available.
- **If NOT available**: IMMEDIATELY stop execution and ask the user to install it with these exact steps:
  > *Install/upgrade to the latest VTIT IDE -> Open "Tools" menu -> Click "MCP Server Config" and complete the setup instructions.*
- **If available**: Proceed to Step 2.

### Step 2: Reference Analysis
Analyze `./references/sample.tc` to fully understand the JSON structure, platform keys, variables syntax (`{{input.xxx}}`, `{{var.xxx}}`), commands arrays, conditions, and teardown commands.

### Step 3: Draft Test Planning & User Confirmation
1. Parse the user's input:
   - **Case A (Natural Language)**: Deduce the logical user flow and create high-level steps.
   - **Case B (Detailed Steps/Manual TC)**: Map the provided steps to web interactions.
2. Outline a detailed, sequential draft plan (e.g., "1. Open browser to url..., 2. Click button..., 3. Type input...").
3. Present the draft plan to the user and request confirmation before proceeding.

### Step 4: Keyword Schema Resolution
Invoke the `vtit-ide-mcp` tool `get_tc_schema_and_keywords` to retrieve the current API keywords and schema. Store this catalog in memory.

### Step 5: Step-by-Step Interactivity, DOM Analysis & Generation
Execute the confirmed test plan sequentially. For each action:
1. **Analyze Keyword Fit**: Select the most appropriate keyword from the stored MCP catalog.
2. **Execute via MCP**: Use the `vtit-ide-mcp` tool `play_command` to immediately execute the single command block against the active browser session for live verification.
3. **Verify DOM & Visuals**: After execution, fetch session status, screenshot, and DOM structure using `get_session_debug_info`.
4. **XPath Strategy**:
   - Check if the target element's XPath/selector physically exists on the active DOM.
   - **Crucial Rule**: Never hallucinate XPaths. Always extract them directly from the active DOM and screenshot using the locator priority guidelines in `./rules/locator_strategy.md`.
   - If an XPath is incorrect or missing, notify the user immediately and automatically re-analyze the active DOM/screenshot to find the correct path.
5. **Self-Diagnose & Resolve**: If a step fails due to missing inputs or incomplete descriptions, logically deduce the necessary sequence (e.g., waiting for loading spinner, scrolling into view).
6. **Append Command**: Once the XPath is validated and the command succeeds, append it to the `.tc` command array.
   - Note: One user-described step may map to multiple steps in the `.tc` file (e.g., Click to open list -> Wait -> Type filter -> Click option).

### Step 6: Trial Playback, Polling & Self-Repair Loop
Once the `.tc` file is constructed:
1. **Save Target File**: Save the finalized `.tc` file using the MCP tool `create_or_update_tc` to ensure workspace sync (e.g., `[projectPath]/test-case/demo-test.tc`).
2. **Start Playback**: 
   - Record the current start timestamp: `startTime = Date.now()`.
   - Call the `play_tc` tool (specifying `testCasePath`, `projectPath`, `browser`, and `headless`) and capture the returned `playbackId`.
3. **Asynchronous Polling via Playback Status**:
   - Poll the MCP tool `get_playback_status` (passing the `playbackId` returned from `play_tc`) every **2 to 3 seconds**.
   - If `status` is `"running"` (or any transitional status like `"paused"`, `"pausing"`, `"new"`), continue polling.
   - If `status === "finished"`, stop polling. The response will contain the `reportPath`.
   - Limit total polling duration to **120 seconds** to prevent infinite hanging.
4. **Result Verification & Self-Repair Loop**:
   - Call the MCP tool `get_playback_result` (passing `projectPath` and the `reportPath` returned by `get_playback_status`).
   - Read the `result` field in the response (which will be `"passed"` or `"failed"`).
   - If `result === "passed"`, the test case succeeded. Skip to Step 6.
   - If `result === "failed"`, the test case failed. Initiate the Self-Repair Loop:
     - Identify the failing step ID, keyword, name, and step index from the `errors` attribute of the report. Utilize the `absoluteScreenshotPath` or `screenshotPath` (if present) for visual validation.
   - Use these proven heuristics to automatically heal the failing step:
     - **Locator Timeout / Element Not Found**: Insert a `waitForElementPresent` command right before the failing step, or refine the selector following `./rules/locator_strategy.md`.
     - **Input / Type Failure**: Add a `click` command to focus the input element *before* executing the `type` command.
     - **API Failure**: Verify request headers, body structures, and string interpolation payloads to guarantee valid JSON formatting.
   - Apply edits via `create_or_update_tc` and increment the execution attempt counter.
5. **Retry Threshold**: Repeat playback and repair up to **5 times**. If it still fails after 5 retries, display the detailed report, failing logs, and recommend structural changes to the user.
6. **Verification Summary**: Upon a successful trial run (status `"passed"` in the final report), output the report path and summarize the automated fixes applied.

---

## 📁 Strict .tc File Structural Specifications (JSON Schema Rules)

You must build the `.tc` files following these strict structural requirements derived from `./references/sample.tc`:

### 1. General Schema Root
The root JSON structure must strictly contain:
```json
{
  "testPlatform": "web",
  "name": "<test_case_name>",
  "setupCommands": [],
  "commands": [],
  "tearDownCommands": [],
  "variable": {
    "inputVariable": {},
    "outputVariable": {},
    "localVariable": {}
  },
  "comment": ""
}
```

### 2. Standard Lifecycle Commands
- **setupCommands**: Always populate with `"keyword": "open"` (and URL parameter) and screen expansion/preparation.
- **tearDownCommands**: Always populate with cleanup keywords like `"keyword": "closeBrowser"` to release resources.

### 3. ID Generation
Every command object in the `"commands"`, `"setupCommands"`, and `"tearDownCommands"` arrays (including nested children) must have a unique `"id"` field assigned with a newly generated **UUID v4**.

### 4. Variables Scope & References
- **Input Variables**: Declare all custom input keys with default blank values inside `"variable.inputVariable"`. Reference them in command arguments using:
  `{{input.variableName}}`
- **Output/Dynamic Variables**: Extract dynamic elements/text via keywords (e.g. `getAttributeValue` saving to `output: "var.myId"`). Reference these dynamic variables using:
  `{{var.variableName}}`

### 5. Control Flow & Block Mapping Rules (`if`, `while`, `forEach`)
When writing conditional blocks or loops:
- **Parent Command**:
  - Contains `"keyword": "if"` (or `while`, `forEach`).
  - Contains the condition inside `input.target` (e.g. `"target": "{{input.dontTypeSearch}} != 1"`).
  - Contains `"requireChildren": true`.
  - Nested steps go inside the parent's `"children"` array.
- **Child Commands (inside `children` array)**:
  - Must define `"parentId"` matching the parent block ID.
  - Must define `"nodes"` as an array containing the parent block ID: `[ "parent-uuid" ]`.
  - Must define `"level": 1` (or incremented relative to nesting depth).
- **Matching Sibling End Command**:
  - Immediately following the block command in the parent `"commands"` array, a sibling command with `"keyword": "end"` and `"input": {}` must be declared.

---

## 🚫 Crucial Mandatory Rules

### 1. Element Existence First
Always confirm the XPath exists on the DOM **before** mapping the command keyword. An accurate XPath is a prerequisite for keyword execution.

### 2. Zero-Hallucination Locator Strategy
Locators must strictly follow the priority map in `./rules/locator_strategy.md`:
1. Accessibility / Aria Attributes
2. Dedicated Test ID (`data-testid`, etc.)
3. ID / Name
4. CSS Selector
5. Relational XPath

### 3. Modular Reusability
If you analyze repetitive logic or step patterns (e.g., login flows, complex date selectors), package them into a dedicated `.tc` file and use the `import` keyword command if supported.

### 4. Self-Healing Autonomy
Do not give up on the first failure. The agent must independently inspect intermediate DOM states, adjust wait times, apply `scrollToElement`, and heal broken selectors dynamically.

### 5. Strict MCP Tool Usage
You must absolutely use the available MCP tools (`play_tc`, `get_playback_result`, `create_or_update_tc`, etc.) to perform operations. Writing custom scripts (such as Node.js, Python, or shell scripts) to execute playbacks or poll results is strictly forbidden if an MCP tool exists that performs that function. All actions must go through the MCP server.

### 6. Zero-Fabrication Rule (No Hallucinated Evidence)
The agent must never fabricate data, execution status, or assume test results. Every reported state, pass/fail result, software bug, or screenshot reference must be backed by clear, convincing evidence queried directly from the actual playback report file (`index.rp`) and the output of the official MCP tools.

