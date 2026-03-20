---
name: forge-radius
description: Regenerate the border radius scale based on project type. SaaS gets moderate, portfolio gets soft, e-commerce gets tight.
user-invokable: true
---

# /forge-radius — Regenerate Radii

Scale: sm, md, lg, xl, 2xl, full

Values per project type:
- SaaS: 4, 8, 12, 16, 24, 9999
- Portfolio: 6, 12, 16, 24, 32, 9999
- E-commerce: 4, 6, 8, 12, 16, 9999
- Docs: 4, 6, 8, 12, 20, 9999

Output as CSS custom properties.
