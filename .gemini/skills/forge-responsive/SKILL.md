---
name: forge-responsive
description: Check responsive behavior using your system's spacing scale. Verifies that spacing reduces proportionally at smaller breakpoints.
user-invokable: true
---

# /forge-responsive — Responsive Check

At each breakpoint (640, 768, 1024, 1280px):
1. Verify section padding scales down
2. Check that font sizes remain readable
3. Verify touch targets are 44×44px on mobile
4. Check line measure at each width

Report issues per breakpoint.
