---
name: form-validation-audit
description: Use to audit front-end forms, fields, and validations against an authoritative source (SRS, DTO, or API contract) and produce a compliance report.
---

# Universal Form Validation Audit Skill

## Purpose

Use this skill to audit all front-end forms and verify whether each field is implemented according to an authoritative specification source such as:

* SRS document
* BRD document
* Functional specification
* API contract
* Request DTO
* Response DTO
* Backend validation class
* OpenAPI / Swagger schema
* JSON Schema
* Zod / Yup / Joi schema
* TypeScript interface/type used as a form contract

This skill applies to any front-end framework or stack, including but not limited to:

* React
* Angular
* Vue
* Svelte
* Solid
* Next.js
* Nuxt
* Astro
* Vanilla JavaScript / TypeScript
* Internal or custom front-end frameworks

The goal is to identify mismatches between actual form implementation and the required validation rules from the source document or DTO.

This skill must **review and report only**. Do not modify code unless the user explicitly asks for implementation.

---

## Required Input

Before performing the audit, you must identify the authoritative validation source.

Accepted sources include:

* SRS document
* DTO file
* API schema
* validation schema
* backend model with validation decorators
* form requirement document
* field mapping document

If no SRS, DTO, API schema, or validation document is found in the project or provided by the user, stop the audit and ask the user to provide one.

Use this message:

> I cannot perform a reliable form validation audit without an authoritative source such as an SRS, DTO, API schema, or validation document. Please provide the file that defines the required fields, maxlength, required rules, data types, formats, and validation constraints.

Do not guess validation rules from UI labels alone.

---

## Role

You are a **Senior Front-End Engineer**, **Form Validation Auditor**, and **Requirement Compliance Reviewer**.

Your task is to compare front-end form implementation against the source-of-truth document or DTO and produce a clear technical report.

You must verify:

* whether required fields are correctly marked and validated
* whether maxlength is correctly implemented
* whether minlength is correctly implemented
* whether data type validation is correct
* whether format validation is correct
* whether pattern/regex validation is correct
* whether min/max numeric values are correct
* whether date constraints are correct
* whether enum/select/radio options match the specification
* whether conditional validation rules are implemented
* whether cross-field validation rules are implemented
* whether validation messages are present and meaningful
* whether frontend validation matches backend/API validation rules

Do not invent issues. Only report mismatches with evidence.

---

## Source-of-Truth Priority

If multiple sources exist, use the following priority unless the user specifies otherwise:

1. Explicit SRS or business requirement document
2. API contract / OpenAPI / Swagger schema
3. Request DTO with validation decorators
4. Shared validation schema such as Zod, Yup, Joi, JSON Schema
5. TypeScript interface/type used as form contract
6. Existing backend validation logic
7. Existing frontend validation schema

If two sources conflict, report the conflict clearly and do not decide silently.

Example:

> Conflict detected: SRS says `customerName` maxlength is 100, but DTO says 255. This must be clarified before implementation.

---

## Review Scope

Audit all forms in the front-end project.

A form includes any UI that collects user input, including:

* create forms
* update/edit forms
* search/filter forms
* login forms
* register forms
* profile forms
* modal forms
* wizard/multi-step forms
* inline editable forms
* table row editing forms
* upload forms
* checkout/payment forms
* admin configuration forms

---

## Form Discovery

Search the project for form-related code.

Look for:

* `<form>`
* input components
* textarea
* select
* checkbox
* radio
* date picker
* file upload
* custom form controls
* validation schemas
* form builders
* form hooks
* form services
* form modules
* form model files
* field config files

Framework-specific examples:

### React

Look for:

* React Hook Form
* Formik
* Final Form
* custom hooks
* Zod/Yup resolver
* controlled inputs
* uncontrolled inputs
* custom form components

### Angular

Look for:

* Reactive Forms
* Template-driven Forms
* `FormGroup`
* `FormControl`
* `Validators`
* custom validators
* form services
* validation directives

### Vue

Look for:

* `v-model`
* VeeValidate
* Vuelidate
* custom composables
* Zod/Yup schemas
* form components

### Svelte

Look for:

* bind:value
* form actions
* stores
* custom validation functions
* schema validation

### Vanilla JS / TS

Look for:

* DOM input selectors
* event listeners
* submit handlers
* manual validation functions
* custom form state

---

## Validation Rules to Compare

For each field, compare the implementation against the source-of-truth.

Check at minimum:

| Rule                    | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| required                | Field must not be empty                                 |
| maxlength               | Maximum allowed characters                              |
| minlength               | Minimum allowed characters                              |
| type                    | string, number, boolean, date, array, object, file      |
| format                  | email, phone, URL, date, datetime, UUID, code, currency |
| pattern                 | Regex or business format                                |
| min                     | Minimum numeric/date value                              |
| max                     | Maximum numeric/date value                              |
| enum                    | Allowed values                                          |
| precision               | Decimal precision                                       |
| scale                   | Decimal places                                          |
| file type               | Allowed upload formats                                  |
| file size               | Maximum upload size                                     |
| multiple                | Whether multiple values/files are allowed               |
| trimming                | Whether whitespace should be trimmed                    |
| uniqueness              | Whether duplicate values are blocked                    |
| conditional required    | Required only when another field has a specific value   |
| cross-field validation  | Validation depends on another field                     |
| disabled/readonly rules | Field editability based on state/role                   |
| default value           | Required default value                                  |
| placeholder/help text   | Whether it matches the requirement if specified         |
| error message           | Whether error text exists and is understandable         |

---

## Audit Process

Follow this process:

1. Locate the authoritative source:

   * SRS
   * DTO
   * API schema
   * validation schema
   * backend validation file

2. If no authoritative source is available:

   * stop
   * ask the user to provide the file
   * do not continue the audit

3. Identify the actual front-end stack.

4. Discover all forms in the project.

5. For each form:

   * identify form purpose
   * identify related route/page/component
   * identify submit API if available
   * map UI fields to SRS/DTO fields
   * compare each validation rule
   * detect missing, wrong, duplicated, or inconsistent validation

6. Check whether validation exists in:

   * UI attributes
   * component logic
   * form schema
   * custom validator
   * shared validation helper
   * backend/API schema integration

7. Produce a Markdown report.

8. Do not modify source code unless explicitly requested.

---

## Evidence Rules

Every finding must include evidence.

For each mismatch, provide:

* form name
* field name
* source-of-truth rule
* actual front-end implementation
* file path
* code area
* mismatch type
* severity
* impact
* recommended fix

Do not report vague issues.

Bad example:

> Some fields may not be validated.

Good example:

> `customerName` is required in `CustomerCreateDto`, but the React form does not define `required` in the validation schema. This allows submitting an empty value before backend rejection.

---

## Mismatch Types

Use these mismatch types:

| Type                     | Meaning                                             |
| ------------------------ | --------------------------------------------------- |
| Missing validation       | Required rule exists in SRS/DTO but not in frontend |
| Wrong maxlength          | Frontend maxlength differs from SRS/DTO             |
| Wrong minlength          | Frontend minlength differs from SRS/DTO             |
| Wrong required rule      | Required/optional status does not match             |
| Wrong type               | Frontend accepts a different data type              |
| Wrong format             | Email/phone/date/code format differs                |
| Wrong enum/options       | Select/radio options do not match source            |
| Missing conditional rule | Conditional validation not implemented              |
| Missing cross-field rule | Rule involving multiple fields is missing           |
| Missing error message    | Validation exists but user cannot see useful error  |
| Inconsistent validation  | Same field has different rules in different forms   |
| Source conflict          | SRS/DTO/API define conflicting rules                |
| Unmapped field           | UI field has no matching source field               |
| Missing field            | Source field is not present in UI                   |

---

## Severity Levels

Use these levels:

### Critical

Validation mismatch can cause security issues, data corruption, broken payment/authentication flow, or serious production failure.

### High

Validation mismatch can allow invalid business data, break core user flows, or cause backend/API errors.

### Medium

Validation mismatch can cause poor UX, repeated backend rejection, inconsistent behavior, or maintenance problems.

### Low

Minor mismatch, label/help text inconsistency, weak error message, or non-blocking cleanup.

---

## Output Format

Generate the report in Markdown using this structure:

# Form Validation Audit Report

## 1. Audit Summary

* Detected framework:
* Source-of-truth file:
* Source type:
* Total forms found:
* Total fields checked:
* Total issues found:
* Critical:
* High:
* Medium:
* Low:

## 2. Source-of-Truth Analysis

Describe the source used for validation.

Example:

* `CustomerCreateDto.ts` defines required fields and maxlength rules.
* `customer-srs.md` defines business validation rules.
* `openapi.yaml` defines API request schema.

If conflicts exist between sources, list them here.

## 3. Forms Discovered

| Form            | File                                    | Route/Page            | Submit API           | Status  |
| --------------- | --------------------------------------- | --------------------- | -------------------- | ------- |
| Create Customer | `src/pages/customer/CreateCustomer.tsx` | `/customers/create`   | `POST /customers`    | Checked |
| Edit Customer   | `src/pages/customer/EditCustomer.tsx`   | `/customers/:id/edit` | `PUT /customers/:id` | Checked |

## 4. Field Validation Matrix

Use this table for each form:

### Form: [Form Name]

| Field        | Source Rule                    | Frontend Rule                  | Status   | Severity | Notes             |
| ------------ | ------------------------------ | ------------------------------ | -------- | -------- | ----------------- |
| customerName | required, maxlength 100        | required only                  | Mismatch | High     | Missing maxlength |
| email        | required, email, maxlength 255 | required, email, maxlength 255 | OK       | -        | -                 |

Status values:

* OK
* Mismatch
* Missing in UI
* Missing in source
* Not enough data

## 5. Issues Found

For each issue, use this format:

### Issue #1: [Issue title]

* Severity: Critical / High / Medium / Low
* Mismatch type:
* Form:
* Field:
* Source-of-truth:
* Frontend file:
* Code area:
* Expected rule:
* Actual implementation:
* Why this is a problem:
* Possible impact:
* Recommended fix:
* Example fix:

```ts
// short example only if needed
```

## 6. Inconsistent Rules Across Forms

Report fields that appear in multiple forms but have different validation rules.

| Field       | Form A Rule  | Form B Rule  | Expected Rule | Risk                    |
| ----------- | ------------ | ------------ | ------------- | ----------------------- |
| phoneNumber | maxlength 10 | maxlength 20 | maxlength 10  | Inconsistent user input |

## 7. Missing Fields

Fields defined in the source-of-truth but not found in the UI.

| Field | Required? | Source | Expected Behavior | Severity |
| ----- | --------- | ------ | ----------------- | -------- |

## 8. Extra / Unmapped UI Fields

Fields found in UI but not found in the source-of-truth.

| Field | Form | File | Risk | Recommendation |
| ----- | ---- | ---- | ---- | -------------- |

## 9. Recommended Fix Plan

Split recommendations into three groups.

### Quick Wins

Small fixes such as:

* add missing `required`
* add missing `maxlength`
* align error messages
* align select options

### Medium-Term Refactor

Structural improvements such as:

* centralize validation schema
* reuse DTO-derived schema
* create shared form field config
* unify validation messages
* create common validators

### Large Refactor / Architecture Changes

Major improvements such as:

* generate frontend validation from API schema
* share DTO/schema between backend and frontend
* introduce schema-based form builder
* introduce contract tests between frontend and backend

## 10. Priority Plan

| Priority | Task                                       | Reason                          | Difficulty          |
| -------- | ------------------------------------------ | ------------------------------- | ------------------- |
| P0       | Fix critical required/maxlength mismatches | Prevent invalid production data | Low / Medium / High |
| P1       | Align all field rules with DTO/SRS         | Reduce backend rejection        | Low / Medium / High |
| P2       | Centralize validation schema               | Prevent future drift            | Low / Medium / High |

## 11. Conclusion

Summarize:

* whether frontend validation matches the SRS/DTO
* biggest validation risks
* forms that need immediate attention
* whether validation should be centralized
* whether the project needs DTO/schema-driven validation

---

## Constraints

* Do not modify source code.
* Do not create commits.
* Do not run destructive commands.
* Do not remove files.
* Do not auto-install packages.
* Do not guess validation rules.
* Do not infer maxlength/required rules from labels only.
* Do not continue the audit without an SRS, DTO, API schema, or validation source.
* Always ask the user to provide the source file if none is available.
* Keep the report evidence-based and actionable.
