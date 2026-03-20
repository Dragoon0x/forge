---
name: forge-color-fix
description: Replace all orphan colors with the nearest token from your system. Converts raw hex values to var(--token) references.
user-invokable: true
---

# /forge-color-fix — Color Auto-Fix

For each orphan color found by /forge-color-audit:

1. Find the nearest palette shade by color distance
2. Map to the most appropriate semantic token
3. Replace raw value with var(--token-name)

Shows before/after. Requires confirmation.
