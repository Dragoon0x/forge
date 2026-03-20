---
name: forge-dark
description: Generate a dark mode variant of your design system. Creates dark-mode token overrides that preserve contrast ratios from the light theme.
user-invokable: true
---

# /forge-dark — Dark Mode Generation

Generate dark mode by remapping tokens:

Light mode surface (palette.50) → Dark mode surface (palette.950)
Light mode text (palette.900) → Dark mode text (palette.50)
Accent colors may shift 1-2 stops lighter to maintain contrast

Output as:
1. CSS @media (prefers-color-scheme: dark) block
2. Updated .forge.json with dark mode token set

Rules:
- Not color inversion — proper surface/text remapping
- Preserve contrast ratios from light mode
- Reduce shadow intensity (shadows are less visible on dark)
- Use surface color shifts instead of shadows for elevation
