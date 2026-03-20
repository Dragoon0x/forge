---
name: forge-color-audit
description: Find every color in the codebase that isn't in your palette or token system. Lists orphan colors with suggested replacements.
user-invokable: true
---

# /forge-color-audit — Color Audit

Extract every hex, rgb, rgba, hsl value from CSS files.

For each:
- Is it in the palette? → ok
- Is it referenced by a token? → ok
- Is it a third-party color (danger red, success green)? → ok
- Otherwise → orphan, needs replacement

Report: list of orphan colors with the nearest palette shade and suggested token.
