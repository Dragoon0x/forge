# FORGE

> **Experimental** · Built out of curiosity · Educational purposes · DYOR


**Complete design system from one color. 30 seconds.**

Enter a brand color and a project type. FORGE generates a full design foundation: 11-shade color palette, semantic tokens, mathematical type scale with font pairings, spacing scale, shadow system, border radii, and component defaults. Export as CSS variables, Tailwind config, SCSS, W3C design tokens, or Figma tokens.

Then install 43 commands that enforce your system in every AI coding tool.

[**Try the live generator →**](https://dragoon0x.github.io/forge/)

---

## How it works

```
/forge-init #e8590c saas
```

This creates `.forge.json` in your project root — the single source of truth. Every subsequent command references YOUR system, not generic rules.

| What it generates | Details |
|---|---|
| Color palette | 11 shades (50-950) from one hex via HSL interpolation |
| Semantic tokens | surface, text, border, accent, feedback mapped to palette |
| Type scale | Mathematical ratio (1.125-1.500) based on project type |
| Font pairing | Display + body + mono, contextual, no banned fonts |
| Spacing scale | 4px base, 13 steps from 4 to 128 |
| Shadow system | 5 elevations tinted with brand hue |
| Border radii | 6 steps scaled to project context |

## Install

```bash
# All tools (auto-detects your AI harness)
npx skills add dragoon0x/forge

# Claude Code plugin
/plugin marketplace add dragoon0x/forge
```

Works with Claude Code, Cursor, Gemini CLI, Codex CLI, Copilot, Kiro, OpenCode, and Antigravity.

## Project types

| Type | Ratio | Surface | Font style | Radius |
|------|-------|---------|-----------|--------|
| SaaS | Major Third 1.250 | Light, neutral | Geometric sans | 8px |
| Portfolio | Perfect Fourth 1.333 | Dark, dramatic | Serif + sans | 12px |
| E-commerce | Minor Third 1.200 | White, product-focused | Sturdy sans | 6px |
| Docs | Major Second 1.125 | White, max readability | Serif body | 6px |

## 43 commands

### Foundation (6)
| Command | What it does |
|---------|-------------|
| `/forge-init` | Generate full design system from color + type |
| `/forge-update` | Regenerate from new brand color |
| `/forge-audit` | Check code against your system |
| `/forge-score` | 0-100 adherence score |
| `/forge-diff` | Show drift between code and system |
| `/forge-fix` | Auto-fix system violations |

### Color (7)
| Command | What it does |
|---------|-------------|
| `/forge-palette` | Regenerate 50-950 shade palette |
| `/forge-semantic` | Rebuild semantic token mapping |
| `/forge-dark` | Generate dark mode from palette |
| `/forge-contrast` | WCAG contrast matrix |
| `/forge-harmonize` | Add complementary accent color |
| `/forge-color-audit` | Find colors not in system |
| `/forge-color-fix` | Replace rogue colors with tokens |

### Typography (6)
| Command | What it does |
|---------|-------------|
| `/forge-type` | Regenerate type scale |
| `/forge-pair` | Font pairing for project type |
| `/forge-type-audit` | Find off-scale font sizes |
| `/forge-type-fix` | Snap to scale |
| `/forge-measure` | Line length check (45-75 chars) |
| `/forge-rhythm` | Vertical rhythm enforcement |

### Layout (6)
| Command | What it does |
|---------|-------------|
| `/forge-spacing` | Regenerate spacing scale |
| `/forge-grid` | Snap spacing to grid |
| `/forge-spacing-audit` | Find off-scale spacing |
| `/forge-spacing-fix` | Auto-fix spacing |
| `/forge-responsive` | Breakpoint verification |
| `/forge-density` | Whitespace balance audit |

### Surfaces (4)
| Command | What it does |
|---------|-------------|
| `/forge-shadow` | Regenerate brand-tinted shadows |
| `/forge-radius` | Regenerate radius scale |
| `/forge-elevation` | Elevation hierarchy audit |
| `/forge-surface-audit` | Background token compliance |

### Export (5)
| Command | What it does |
|---------|-------------|
| `/forge-export-css` | CSS custom properties |
| `/forge-export-tw` | Tailwind config |
| `/forge-export-scss` | SCSS variables + mixins |
| `/forge-export-json` | W3C Design Tokens JSON |
| `/forge-export-figma` | Figma Tokens Studio format |

### Accessibility (4)
| Command | What it does |
|---------|-------------|
| `/forge-a11y` | Full accessibility audit |
| `/forge-focus` | Focus ring system from accent |
| `/forge-touch` | 44×44px touch target check |
| `/forge-motion` | Reduced motion fallback check |

### Polish (5)
| Command | What it does |
|---------|-------------|
| `/forge-polish` | Final pass against system |
| `/forge-bolder` | Amplify within system range |
| `/forge-quieter` | Soften within system range |
| `/forge-normalize` | Force all values to tokens |
| `/forge-harden` | Error states, i18n, edge cases |

## Export formats

FORGE exports your system in five formats simultaneously:

- **CSS Custom Properties** — `:root` block with dark mode overrides
- **Tailwind Config** — `theme.extend` with colors, fonts, spacing, shadows, radii
- **SCSS** — Variables + mixins for type scale and elevation
- **W3C Design Tokens JSON** — Compatible with Style Dictionary
- **Figma Tokens** — Compatible with Tokens Studio plugin

## Web generator

The [FORGE landing page](https://dragoon0x.github.io/forge/) is a live design system generator. Pick a color, choose a project type, and the entire system generates on the page. Interactive, tweakable, exportable. Client-side only — your color never leaves the browser.

## Development

```bash
git clone https://github.com/dragoon0x/forge.git
cd forge
node build.js          # Compile to all providers
node test/test.js      # Run test suite (401 checks)
```

## License

Apache 2.0. See [LICENSE](LICENSE).

---

Built by [dragoon0x](https://github.com/dragoon0x)

---

## Disclaimer

**This project is experimental software, built out of curiosity and shared for educational purposes only.**

This software is provided "AS IS" without warranty of any kind. The author makes no claims about the accuracy or reliability of design analysis, scoring, or recommendations. Design quality is subjective — scores are heuristic approximations, not definitive assessments. This is not a substitute for professional design review or accessibility auditing. Not affiliated with Anthropic, Cursor, Google, OpenAI, GitHub, Vercel, or any AI tool vendor.

**DYOR — Do Your Own Research.** See [DISCLAIMER.md](DISCLAIMER.md) for full terms.
