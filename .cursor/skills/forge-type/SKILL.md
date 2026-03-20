---
name: forge-type
description: Regenerate the type scale from your .forge.json ratio and base size. Outputs 8 steps with px values and CSS custom properties.
user-invokable: true
---

# /forge-type — Regenerate Type Scale

Recompute the type scale:

Given base (e.g., 16px) and ratio (e.g., 1.250):
- xs: base / ratio² (rounded)
- sm: base / ratio
- base: base
- md: base × ratio
- lg: base × ratio²
- xl: base × ratio³
- 2xl: base × ratio⁴
- 3xl: base × ratio⁵

Output: CSS custom properties and suggested usage per step.
