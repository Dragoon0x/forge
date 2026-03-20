---
name: forge-measure
description: Check line lengths across the interface. Optimal: 45-75 characters per line. Flags containers that are too wide or too narrow for their font size.
user-invokable: true
---

# /forge-measure — Line Measure Check

Calculate line measure for text containers:
container-width / (font-size × 0.5) ≈ characters per line

Flag:
- Over 75 chars: add max-width constraint
- Under 45 chars: container may be too narrow

Suggest max-width values to achieve optimal measure.
