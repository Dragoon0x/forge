---
name: forge-diff
description: Show the difference between your .forge.json design system and what's actually in the code. Lists every value that drifts from the system.
user-invokable: true
---

# /forge-diff — System Drift Report

Compare .forge.json against actual CSS:

Output for each drift:
- File and line number
- Property (color, padding, font-size, etc.)
- Current value in code
- Nearest system token
- Suggested replacement

Grouped by severity: critical (color drift), warning (spacing drift), info (shadow/radius drift).
