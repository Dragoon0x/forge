---
name: forge-grid
description: Snap all spacing values in the codebase to your system's grid. Replaces arbitrary padding, margin, and gap values.
user-invokable: true
---

# /forge-grid — Grid Snap

Scan every padding, margin, and gap declaration.

For values not on the 4px grid:
1. Find nearest scale value
2. Replace with var(--space-N)
3. Show before/after with pixel difference

Report: total values checked, on-grid %, off-grid count, corrections applied.
