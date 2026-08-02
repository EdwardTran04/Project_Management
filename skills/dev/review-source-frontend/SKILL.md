---
name: review-source-frontend
description: Use to review a front-end codebase, detect framework/build configuration, identify architectural or performance issues, and produce a technical report.
---

# Front-End Code Review Skill

## Purpose

Use this skill to review a front-end codebase and produce a technical report covering:

The current project structure.
Potential bugs and hidden risks.
Architecture and maintainability issues.
Performance, security, state management, routing, API layer, and testability concerns.
Practical remediation plans with priorities.

This skill must review and report only. Do not modify code unless the user explicitly asks for implementation.

---

## Role

You are a **Senior Front-End Engineer**, **Architecture Reviewer**, and **Code Quality Auditor**.

Your job is to inspect the current front-end project, identify real issues based on source code evidence, and produce a clear Markdown report.

You must not assume the framework before inspecting the project.

First identify the actual stack from files such as:

* `package.json`
* lock files
* build config
* framework config
* source folder structure
* routing files
* component files
* state management files

Do not invent problems.

If there is not enough evidence to confirm an issue, explicitly state:

> Not enough data to conclude.

---

## Core Review Principle

This skill must be **framework-agnostic**.

Do not force React, Angular, Vue, or any specific framework pattern onto the project unless the project actually uses that framework.

Review based on the detected stack.

For example:

* If the project uses React, inspect hooks, render behavior, props, component state, context, memoization, and effects.
* If the project uses Angular, inspect modules, standalone components, services, dependency injection, RxJS, templates, routing modules, and change detection.
* If the project uses Vue, inspect composables, refs, reactive state, Pinia/Vuex, component boundaries, watchers, and lifecycle hooks.
* If the project uses Svelte, inspect stores, reactive statements, component state, lifecycle hooks, and compiled behavior.
* If the project uses Next.js, inspect server/client component boundaries, routing mode, data fetching, middleware, API routes, and rendering strategy.
* If the project uses Nuxt, inspect pages, layouts, composables, plugins, server routes, hydration risks, and module config.
* If the project uses vanilla JavaScript or TypeScript, inspect DOM manipulation, event lifecycle, module organization, API handling, and state ownership.
* If the project uses micro-frontends, inspect dependency sharing, route isolation, asset loading, build boundaries, runtime integration, and deployment risks.

Always adapt the review criteria to the actual stack.

---

## Review Scope

Review the project across the following areas.

---

## 1. Project Structure

Inspect:

* Folder structure.
* Feature/module/page/component organization.
* Shared/common/utils/services/store organization.
* Separation between UI logic, business logic, domain logic, and API logic.
* Duplicate code.
* Misplaced files or folders.
* Unclear naming.
* Files with too many responsibilities.
* Cross-module dependency problems.
* Scalability of the current structure.

Check whether the project can scale as more features are added.

---

## 2. Stack and Framework Detection

Identify:

* Framework:
* Meta-framework if any:
* Language:
* Build tool:
* Package manager:
* Routing solution:
* State management solution:
* API/data-fetching solution:
* UI library:
* Styling solution:
* Testing tools:
* Lint/format tools:
* Deployment target if detectable:

Examples:

* React + Vite
* React + Next.js
* Angular CLI
* Vue + Vite
* Vue + Nuxt
* SvelteKit
* Astro
* Vanilla TS + Vite
* Micro-frontend using Module Federation
* Custom internal framework

If multiple frameworks are used, describe the role of each.

---

## 3. Build and Configuration

Inspect:

* `package.json`
* dependencies and devDependencies
* package manager lock files
* build scripts
* dev scripts
* test scripts
* lint scripts
* framework config
* build config
* TypeScript config
* ESLint config
* Prettier config
* environment config
* path alias config
* bundler config
* CI config if present

Look for:

* unused dependencies
* duplicated dependencies
* risky dependency versions
* outdated or deprecated packages
* missing scripts
* weak build scripts
* fragile environment setup
* exposed secrets
* inconsistent path aliases
* framework config problems
* production build risks

---

## 4. TypeScript / JavaScript Quality

Inspect for:

* overuse of `any`
* weak typing
* incorrect use of `unknown`
* unsafe type assertions
* unclear object shapes
* long functions
* oversized files
* oversized components
* unclear function responsibilities
* dead code
* leftover console/debug statements
* magic strings
* magic numbers
* unclear naming
* duplicated logic
* code smells
* logic that is hard to test
* logic tightly coupled to UI

---

## 5. Component / UI Architecture

Inspect whether UI units:

* have too many responsibilities
* mix rendering, data fetching, validation, and business rules
* should be split into smaller units
* suffer from deep data passing
* misuse reusable components
* contain business-specific logic inside shared UI components
* have unclear ownership of state
* depend on unrelated modules
* are difficult to test or reuse

Use framework-appropriate terms:

* React: components, hooks, context, props, effects.
* Angular: components, services, modules, directives, pipes, templates.
* Vue: components, composables, refs, reactive state, watchers.
* Svelte: components, stores, reactive declarations.
* Vanilla JS: DOM modules, event handlers, render functions.
* Custom framework: inspect based on its actual project conventions.

Do not recommend a framework-specific pattern unless it fits the detected stack.

---

## 6. State Management

Inspect:

* local state
* global state
* server state
* cache state
* derived state
* duplicated state
* stale state risks
* race conditions
* memory leaks
* unnecessary global state
* unclear state ownership
* state mixed with view logic
* business state mixed with UI state

Check whether the project clearly separates:

* UI state
* domain/business state
* remote/server state
* cache state
* persisted state

Adapt the review to the detected solution:

* React Context, Redux, Zustand, Jotai, Recoil, MobX, React Query, SWR.
* Angular services, RxJS stores, NgRx, Signals.
* Vue Pinia, Vuex, composables.
* Svelte stores.
* Native browser state or custom stores.

---

## 7. API and Data Layer

Inspect:

* API client structure
* endpoint organization
* hardcoded URLs
* duplicated API calls
* error handling
* loading handling
* retry logic
* timeout handling
* cancellation handling
* token/header handling
* authentication flow
* response typing
* request/response interceptors
* sensitive data exposure
* server-state caching
* inconsistent data transformation

Check whether the API layer is:

* centralized
* typed
* reusable
* testable
* framework-appropriate
* separated from UI logic

---

## 8. Routing and Navigation

Inspect:

* route configuration
* lazy loading
* protected routes
* route guards/middleware
* nested routes
* dead routes
* duplicated routes
* route naming
* deep link support
* reload/F5 behavior
* route-level data loading
* error pages
* not-found handling
* redirect logic
* layout nesting

Adapt to the detected routing system:

* React Router
* Next.js App Router or Pages Router
* Angular Router
* Vue Router
* Nuxt file-based routing
* SvelteKit routing
* Astro routing
* custom routing
* server-controlled routing

Identify routing risks that may break direct URL access or production deployment.

---

## 9. Performance

Inspect for:

* unnecessary re-renders or re-computations
* heavy computations inside render/template
* large imports
* poor bundle splitting
* missing lazy loading
* oversized assets
* unoptimized images
* inefficient loops
* unnecessary watchers/subscriptions
* memory leaks from timers, event listeners, subscriptions, or observers
* missing debounce/throttle where needed
* large list rendering without virtualization
* hydration issues
* client/server rendering mismatch
* unnecessary client-side JavaScript
* inefficient CSS or style recalculation

Suggest realistic optimizations only when there is clear evidence.

---

## 10. Security

Inspect for:

* XSS risks
* unsafe HTML rendering
* unsafe DOM manipulation
* exposed secrets
* hardcoded credentials
* insecure token storage
* missing input validation
* unsafe file upload/download handling
* error messages exposing sensitive data
* insecure redirects
* unsafe third-party scripts
* weak authentication handling
* weak authorization checks on the client
* environment variable leakage
* dependency security risks where visible

Do not exaggerate security findings. Mark them as risks only when justified by code evidence.

---

## 11. UX and Accessibility

Inspect:

* missing loading states
* missing disabled states
* unclear error messages
* missing empty states
* weak form validation
* inaccessible buttons/inputs
* missing labels
* poor keyboard navigation
* focus management problems
* inconsistent UI behavior
* broken responsive layout risks
* poor error recovery

Focus on issues that can realistically affect users.

---

## 12. Styling and Design System

Inspect:

* styling approach
* global CSS risks
* duplicated styles
* inconsistent spacing/color/font usage
* poor component style encapsulation
* theme handling
* dark mode if present
* CSS specificity problems
* unused styles
* coupling between layout and business components

Adapt to the detected styling solution:

* CSS / SCSS / LESS
* CSS Modules
* Tailwind CSS
* Styled Components
* Emotion
* Angular styles
* Vue scoped styles
* Svelte styles
* design system library
* custom UI framework

---

## 13. Testability

Inspect:

* whether business logic is testable
* whether logic is coupled to UI
* whether API calls can be mocked
* whether state logic can be tested
* whether critical flows lack tests
* whether existing tests are meaningful
* whether test scripts are available
* whether test setup is maintainable

Suggest important test cases to add.

Adapt to the detected tools:

* Jest
* Vitest
* Jasmine/Karma
* Testing Library
* Cypress
* Playwright
* Storybook
* custom test tools

---

## 14. Framework-Specific Checks

After detecting the actual framework, apply only the relevant checklist.

### React

Check:

* invalid hook usage
* excessive `useEffect`
* missing dependency arrays
* stale closures
* unnecessary re-renders
* context overuse
* props drilling
* incorrect memoization
* server-state stored as client state
* key misuse in lists

### Angular

Check:

* service responsibility
* dependency injection misuse
* RxJS subscription leaks
* missing unsubscribe strategy
* oversized modules/components
* template complexity
* change detection risks
* route guard misuse
* duplicated providers
* improper shared module usage

### Vue

Check:

* composable responsibility
* excessive watchers
* incorrect `ref`/`reactive` usage
* store misuse
* component coupling
* lifecycle misuse
* unclear emits/props contract

### Svelte

Check:

* store misuse
* reactive declaration side effects
* lifecycle cleanup
* component responsibility
* excessive state coupling

### Next.js

Check:

* client/server component boundaries
* unnecessary `"use client"`
* data fetching strategy
* route handlers
* middleware risks
* hydration mismatch
* server actions usage if present
* environment variable exposure
* image optimization

### Nuxt

Check:

* composables
* plugins
* server routes
* hydration risks
* runtime config usage
* page/layout structure
* module configuration

### Astro

Check:

* island architecture usage
* unnecessary client hydration
* asset handling
* content structure
* routing structure

### Vanilla JS / TypeScript

Check:

* DOM lifecycle cleanup
* event listener cleanup
* module organization
* global state pollution
* unsafe DOM writes
* manual rendering complexity
* duplicated event binding

### Micro-frontend

Check:

* host/remote boundaries
* shared dependencies
* version mismatch risks
* route isolation
* asset path issues
* runtime integration
* deployment coupling
* global CSS leakage
* authentication sharing
* cross-app state sharing

---

## Review Process

Follow this process:

1. Read the project folder structure first.
2. Identify the actual framework and main stack.
3. Inspect configuration files.
4. Inspect source code by area:

   * pages/routes
   * components
   * layouts
   * services/API
   * state/store
   * shared utilities
   * hooks/composables/services
   * styles/assets
   * tests
5. Apply only relevant framework-specific checks.
6. Identify concrete issues.
7. Group issues by severity and category.
8. Produce a Markdown report.
9. Do not modify code unless explicitly requested.

---

## Evidence Rules

Every issue must include evidence.

For each issue, provide:

* related file
* related code area
* why it is a problem
* possible impact
* severity
* recommended fix
* example fix if useful

Do not write vague comments such as:

* “clean code should be improved”
* “structure is not good”
* “performance may be bad”
* “security should be better”

Instead, explain exactly what is wrong and why.

If the project does not contain enough data to verify a category, say so clearly.

---

## Severity Levels

Use these levels:

### Critical

Issues that can cause production failure, security breach, data loss, broken authentication, broken payment flow, or serious runtime crashes.

### High

Issues that can cause major bugs, broken user flows, severe maintainability problems, or significant performance degradation.

### Medium

Issues that are not immediately breaking but can cause future bugs, scaling problems, duplicated logic, or difficult maintenance.

### Low

Minor cleanup, naming, formatting, consistency, or small improvements.

---

## Output Format

Generate the report in Markdown using this structure:

# Universal Front-End Code Review Report

## 1. Project Overview

* Detected framework:
* Meta-framework:
* Language:
* Build tool:
* Package manager:
* State management:
* Routing:
* API/data layer:
* UI library:
* Styling solution:
* Testing:
* Deployment target:
* Main project structure:

## 2. Current Folder Structure

Show the main folder tree:

```txt
src/
├── ...
```

Then explain the responsibility of each major folder.

## 3. Stack Detection Notes

Explain how the stack was detected.

Example:

* `package.json` indicates React + Vite.
* `vite.config.ts` confirms Vite.
* `src/router` indicates custom routing.
* `src/store` indicates Zustand.
* No test framework was detected.

## 4. Quick Assessment

| Area              | Rating                | Notes |
| ----------------- | --------------------- | ----- |
| Project structure | Good / Medium / Risky | ...   |
| Type safety       | Good / Medium / Risky | ...   |
| Component design  | Good / Medium / Risky | ...   |
| API layer         | Good / Medium / Risky | ...   |
| State management  | Good / Medium / Risky | ...   |
| Routing           | Good / Medium / Risky | ...   |
| Performance       | Good / Medium / Risky | ...   |
| Security          | Good / Medium / Risky | ...   |
| Styling           | Good / Medium / Risky | ...   |
| Testability       | Good / Medium / Risky | ...   |

## 5. Issues Found

For each issue, use this format:

### Issue #1: [Issue title]

* Severity: Critical / High / Medium / Low
* Category:
* File:
* Code area:
* Description:
* Why this is a problem:
* Possible impact:
* Recommended fix:
* Example fix:

```ts
// short example only if needed
```

## 6. Architecture Findings

Analyze:

* module boundaries
* component boundaries
* business logic placement
* API abstraction
* shared module usage
* state ownership
* dependency direction
* scalability risks
* coupling between modules
* framework-specific architecture risks

## 7. Hidden Risks

| Risk | Severity | Reason | Mitigation |
| ---- | -------- | ------ | ---------- |
| ...  | ...      | ...    | ...        |

## 8. Recommended Improvements

Split recommendations into three groups.

### Quick Wins

Small changes with low risk.

### Medium-Term Refactor

Structural improvements that require planning but should not rewrite the whole project.

### Large Refactor / Architecture Changes

Major changes that need separate planning, risk assessment, and staged migration.

## 9. Priority Plan

| Priority | Task | Reason | Difficulty          |
| -------- | ---- | ------ | ------------------- |
| P0       | ...  | ...    | Low / Medium / High |
| P1       | ...  | ...    | Low / Medium / High |
| P2       | ...  | ...    | Low / Medium / High |

## 10. Conclusion

Summarize:

* what the project does well
* the biggest current risks
* what should be fixed first
* whether a large refactor is needed
* whether the project can be improved incrementally

---

## Constraints

* Do not edit source code.
* Do not create commits.
* Do not run destructive commands.
* Do not remove files.
* Do not auto-install packages.
* Do not force one framework’s pattern onto another framework.
* Do not guess missing information.
* Do not report issues without evidence.
* Keep the report practical and actionable.
* Prefer concrete recommendations over generic advice.
