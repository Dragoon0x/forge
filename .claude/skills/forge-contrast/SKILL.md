---
name: forge-contrast
description: Check WCAG contrast ratios across your entire token system. Tests every text token against every surface token.
user-invokable: true
---

# /forge-contrast — Contrast Matrix

Generate a contrast matrix:

Test every text color against every surface color in your system:
- text on surface → must pass AA (4.5:1)
- text on surface-elevated → must pass AA
- text-secondary on surface → must pass AA for large text (3:1)
- accent on surface → must pass AA for UI components (3:1)

Report: pass/fail for each combination with actual ratio and required ratio.
