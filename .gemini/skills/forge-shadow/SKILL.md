---
name: forge-shadow
description: Regenerate the shadow elevation system tinted with your brand hue. Produces 5 levels from sm to 2xl.
user-invokable: true
---

# /forge-shadow — Regenerate Shadows

From the brand color's hue, generate 5 shadow levels:

sm: subtle card edge → 0 1px 2px hsla(hue, 20%, 20%, 0.04)
md: standard card → layered for depth
lg: dropdown/popup → stronger, wider spread
xl: modal/dialog → dramatic elevation
2xl: hero/spotlight → maximum elevation

Shadows use brand-tinted color, not generic gray. This creates visual cohesion.
