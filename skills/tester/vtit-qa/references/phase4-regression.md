# Phase 4: Regression Suite

## Suite Structure

| Suite Type | Duration | Frequency | Coverage |
|------------|----------|-----------|----------|
| Smoke | 15-30 min | Daily / per build | Critical paths only |
| Targeted | 30-60 min | Per change area | Affected areas |
| Full | 2-4 hours | Weekly / pre-release | Comprehensive |
| Sanity | 10-15 min | After hotfix | Quick validation |

## Building a Regression Suite

**Step 1: Identify Critical Paths** — What can users NOT live without? What handles sensitive data? What's used most frequently?

**Step 2: Prioritize Test Cases**

| Priority | Description | Must Run |
|----------|-------------|----------|
| **Critical** | Business-critical, security, blocking release | Always |
| **High** | Major features, common flows | Weekly+ |
| **Medium** | Edge cases, minor features | Releases |
| **Low** | Cosmetic, minor UI improvements | Backlog |

**Step 3: Execution Order** — Smoke first → Critical → High → Medium → Low/Exploratory.

## Pass/Fail Criteria

**PASS:** All Critical tests pass, 90%+ High pass, no critical bugs open.
**FAIL (Block Release):** Any Critical fails, critical severity bug, security vulnerability, data loss scenario.
