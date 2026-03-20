---
name: forge-spacing-fix
description: Auto-fix all off-scale spacing values. Snaps to nearest system value and replaces with token reference.
user-invokable: true
---

# /forge-spacing-fix — Spacing Auto-Fix

For each off-scale value from /forge-spacing-audit:
1. Snap to nearest spacing scale value
2. Replace with var(--space-N) reference
3. Show before/after

Conservative: values within 1px of a scale value snap silently. Values more than 4px off require confirmation.
