---
name: forge-palette
description: Regenerate the 50-950 shade palette from the current brand color in .forge.json. Updates the palette section without changing other parts of the system.
user-invokable: true
---

# /forge-palette — Regenerate Palette

Recompute 11 shades from the brand color:

- 50: near-white with hue tint (background)
- 100-200: subtle fills, hover states
- 300-400: borders, secondary elements
- 500: the brand color itself (primary accent)
- 600-700: hover/pressed states for accent
- 800-900: dark mode surfaces
- 950: near-black with hue tint (dark mode text backgrounds)

Output: updated palette in .forge.json + CSS custom properties.
