---
name: forge-elevation
description: Audit elevation consistency. Checks that shadow usage follows a logical hierarchy — cards < dropdowns < modals.
user-invokable: true
---

# /forge-elevation — Elevation Audit

Scan all box-shadow declarations:

1. Map each to the nearest system elevation level
2. Check logical hierarchy (nested elements shouldn't have higher elevation)
3. Flag arbitrary shadows not in the system
4. Suggest fixes for inconsistencies
