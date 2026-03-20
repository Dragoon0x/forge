---
name: forge-update
description: Regenerate the entire design system from a new brand color while preserving the project type. Updates .forge.json and shows what changed.
user-invokable: true
---

# /forge-update — Update Design System

## Usage
`/forge-update [new-hex-color]`

Reads the current `.forge.json`, replaces the brand color, and recomputes everything: palette, tokens, shadows. Shows a diff of what changed.

If no color is provided, re-reads the brand field from `.forge.json` and regenerates (useful after manually editing the file).
