# Master Locator Selection Strategy

> Stability and readability of locators dictate the health of our automation framework.
> Core Rule: NEVER locate elements using style-bound DOM structures. Build locators on semantic properties.

## 1. Master Priority Map

Select locators in this strict order (highest to lowest priority):

1. **Accessibility / Aria Attributes** (Semantic, screen-reader friendly)
2. **Dedicated Test Attributes** (`data-testid`, `data-test`, `data-qa`)
3. **Primary Identity Attributes** (`id`, `resource-id`, `name`)
4. **CSS Selector**
5. **Relational XPath** (Locating elements based on proximity or hierarchical relationship to stable landmarks)

## 2. Stability Rules

Every locator must guarantee:
- **Uniqueness**: Matches exactly **one** target element in scope.
- **Resilience**: Survives styling/layout updates (e.g., changes in div wrappers, grid/flexbox reshuffles).

**STRICTLY FORBIDDEN:**
- Dynamic CSS class names or temporary hashes (e.g., `css-1n2xyz-btn`).
- Brittle `nth-child` or `nth-of-type` sequences when cleaner semantic alternatives exist.
- Auto-generated or framework-generated IDs.
- Position-based absolute XPaths (e.g., `/html/body/div[3]/div[2]/form/button`).

## 3. Locator Verification Protocol

Before embedding any locator in code:
1. Verify it matches **exactly one** DOM element.
2. Confirm the matched element is the actual interactive element (avoid overlay blockers / shadow DOM elements).
3. Reload/navigate the page and re-verify the locator holds.
4. Verify the locator remains stable across dynamic page states (loading, empty state, populated state).
