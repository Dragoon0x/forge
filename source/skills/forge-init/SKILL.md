---
name: forge-init
description: Generate a complete design system from a brand color and project type. Creates .forge.json with palette, tokens, type scale, spacing, shadows, and radii. This is the starting command — everything else references what it generates.
user-invokable: true
---

# /forge-init — Initialize Design System

## Usage
`/forge-init [hex-color] [project-type]`

Example: `/forge-init #e8590c saas`

Project types: saas, portfolio, ecommerce, docs

## What it generates
1. Color palette: 11 shades (50-950) from the brand color
2. Semantic tokens: surface, text, border, accent, feedback mapped to palette shades
3. Type scale: mathematical ratio based on project type + font pairing
4. Spacing scale: 4px base, 13 steps from 4 to 128
5. Shadow system: 5 elevations tinted with brand hue
6. Border radii: 6 steps scaled to project type

## Output
Creates `.forge.json` in the project root. Every subsequent FORGE command reads this file.

Also outputs CSS custom properties to the console for immediate use.
