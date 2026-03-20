---
name: forge-type-fix
description: Snap all font sizes to the nearest step in your type scale. Replaces arbitrary values with var(--type-step) references.
user-invokable: true
---

# /forge-type-fix — Type Auto-Fix

For each off-scale font-size:
1. Find nearest type scale step
2. Replace with var(--type-[step]) reference
3. Show before/after

Also fixes line-height to match the scale's recommended values.
