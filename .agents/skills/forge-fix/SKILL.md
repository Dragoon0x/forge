---
name: forge-fix
description: Auto-fix design system violations. Replaces raw hex values with token references, snaps spacing to the scale, and normalizes font usage.
user-invokable: true
---

# /forge-fix — Auto-Fix Violations

Apply automatic fixes for all violations found by /forge-audit:

1. Replace raw hex values with var(--token-name) references
2. Snap spacing values to nearest scale value
3. Replace non-system fonts with the configured display/body/mono fonts
4. Normalize font-size values to type scale steps
5. Replace arbitrary shadows with system elevations

Shows before/after for every change. Requires confirmation before writing.
