---
name: forge-touch
description: Verify all interactive elements meet 44×44px minimum touch target size. Suggests padding increases using your spacing scale.
user-invokable: true
---

# /forge-touch — Touch Target Check

Scan buttons, links, inputs, selects:

1. Calculate effective touch area (element + padding)
2. Flag anything below 44×44px
3. Suggest padding increase from your spacing scale
4. Check spacing between adjacent targets (minimum --space-2)
