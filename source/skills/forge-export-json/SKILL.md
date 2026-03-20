---
name: forge-export-json
description: Export your design system as W3C Design Tokens JSON format. Compatible with Style Dictionary, Figma Tokens, and token management tools.
user-invokable: true
---

# /forge-export-json — Export JSON

Output W3C Design Tokens format:
{
  "color": { "brand": { "50": { "$value": "...", "$type": "color" } } },
  "semantic": { ... },
  "typography": { ... },
  "spacing": { ... },
  "shadow": { ... },
  "radius": { ... }
}
