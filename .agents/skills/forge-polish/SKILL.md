---
name: forge-polish
description: Final quality pass checking every value against your design system. The last command before shipping.
user-invokable: true
---

# /forge-polish — Final Polish

Run all audits in sequence:
1. /forge-color-audit
2. /forge-type-audit
3. /forge-spacing-audit
4. /forge-elevation
5. /forge-a11y

Combine results into a single prioritized report.

If adherence score is 90+: ready to ship.
If 80-89: list the remaining fixes.
If below 80: block shipping until fixed.
