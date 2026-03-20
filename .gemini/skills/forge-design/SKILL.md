---
name: forge-design
description: Design system generator and enforcer. Generates a complete, project-aware design foundation from a single brand color and project type. Produces color palettes, semantic tokens, mathematical type scales, spacing scales, shadow systems, and border radii. Every command operates on YOUR generated system, not generic rules. Use when building any frontend UI to ensure consistent, intentional design decisions from the first line of code.
user-invokable: false
---

# FORGE — Design System Engine

FORGE generates and enforces a complete design system from two inputs: a brand color and a project type. Every command references YOUR system, stored in `.forge.json`. The AI doesn't guess what good design looks like — it checks your code against your own design language.

## The .forge.json Contract

Running `/forge-init` creates `.forge.json` in the project root. This file is the single source of truth. Every FORGE command reads it. The structure:

```json
{
  "brand": "#e8590c",
  "type": "saas",
  "palette": { "50": "#fff7ed", "100": "...", ..., "950": "#431407" },
  "tokens": { "surface": "palette.50", "text": "palette.900", "accent": "palette.500", ... },
  "typeScale": { "ratio": 1.25, "base": 16, "display": "Outfit", "body": "DM Sans", "mono": "JetBrains Mono" },
  "spacing": { "base": 4 },
  "shadows": { "sm": "...", "md": "...", "lg": "...", "xl": "...", "2xl": "..." },
  "radius": { "sm": 4, "md": 8, "lg": 12, "xl": 16, "2xl": 24, "full": 9999 }
}
```

Changing the `brand` field and running `/forge-update` recomputes the entire system.

## Palette Generation Algorithm

Given one hex color:

1. Convert to HSL. The input maps to the 500 stop.
2. Generate 11 stops (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950).
3. Lighter stops (50-400): increase lightness, decrease saturation proportionally.
4. Darker stops (600-950): decrease lightness, shift hue slightly toward blue (mimics natural light behavior).
5. 50 = near-white with hue tint. 950 = near-black with hue tint.
6. Neither 50 nor 950 is pure white or pure black.

## Project Type Profiles

### SaaS
- Type ratio: Major Third (1.250) — clear hierarchy without drama
- Font pairing: Geometric sans display (Outfit) + clean body (DM Sans)
- Surface: light (palette.50), neutral with strong accent contrast
- Radius: moderate (8px default)
- Density: balanced, with clear information hierarchy

### Portfolio
- Type ratio: Perfect Fourth (1.333) — more visual impact
- Font pairing: Serif display (Instrument Serif) + sans body (Outfit)
- Surface: dark (palette.950), dramatic with subtle text
- Radius: larger (12px default) for softness
- Density: spacious, generous whitespace

### E-commerce
- Type ratio: Minor Third (1.200) — compact, scannable
- Font pairing: Sturdy sans display (DM Sans) + legible body (Outfit)
- Surface: white, maximum product focus
- Radius: smaller (6px default) for density
- Density: tight, efficient use of space

### Docs
- Type ratio: Major Second (1.125) — dense, readable
- Font pairing: Serif body (Source Serif 4) + serif display (Newsreader)
- Surface: white, maximum readability
- Radius: small (6px default), utilitarian
- Density: high, content-first

## Semantic Token Mapping

Tokens reference palette shades, not raw hex values. This means changing the brand color cascades through the entire system.

Required tokens:
- `surface` — primary background
- `surface-elevated` — cards, modals, popups
- `surface-sunken` — recessed areas, inputs
- `text` — primary text
- `text-secondary` — secondary content
- `text-muted` — placeholders, hints
- `border` — default borders
- `border-strong` — emphasized borders
- `accent` — primary interactive color
- `accent-hover` — hover state
- `danger` — error states
- `danger-subtle` — error backgrounds
- `success` — success states
- `success-subtle` — success backgrounds

## Font Banlist

These fonts are NEVER used by any FORGE command:
Inter, Roboto, Arial, Helvetica, system-ui, -apple-system, Open Sans, Lato, Montserrat, Poppins, Nunito, Space Grotesk, Raleway, Source Sans Pro

## Spacing Scale

Base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128.

Every padding, margin, and gap value in the codebase MUST come from this scale. Off-scale values are violations caught by `/forge-spacing-audit`.

## Shadow System

Shadows are tinted with the brand hue, not generic gray. This creates cohesion between elevation and brand identity.

Five levels: sm (subtle), md (cards), lg (dropdowns), xl (modals), 2xl (dramatic).

## Export Formats

FORGE exports in five formats:
1. CSS Custom Properties (`:root` block)
2. Tailwind Config (`theme.extend`)
3. SCSS Variables + Mixins
4. W3C Design Tokens JSON
5. Figma-compatible token file

## Execution Protocol

For every frontend task:

1. **Check** — Does `.forge.json` exist? If not, prompt for `/forge-init`.
2. **Reference** — Read the system before writing any CSS.
3. **Implement** — Use only tokens from the system. No raw hex values. No arbitrary spacing.
4. **Audit** — Run `/forge-audit` to verify adherence.
5. **Fix** — Run `/forge-fix` for automatic corrections.

The AI must never write CSS that uses raw color values when tokens exist. The AI must never use spacing values outside the scale. The AI must never use fonts on the banlist.
