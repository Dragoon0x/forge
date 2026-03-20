---
name: forge-spacing-audit
description: Find every spacing value in the codebase that doesn't match your scale. Lists violations by file and line.
user-invokable: true
---

# /forge-spacing-audit — Spacing Audit

Extract every padding, margin, gap, and relevant width/height value.

Compare against your spacing scale. Report each off-scale value with:
- File and line
- Property (padding, margin-top, gap, etc.)
- Current value
- Nearest scale value
- Pixel difference
