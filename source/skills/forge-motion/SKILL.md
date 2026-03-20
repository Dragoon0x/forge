---
name: forge-motion
description: Check that all animations have prefers-reduced-motion fallbacks. Adds them if missing.
user-invokable: true
---

# /forge-motion — Motion Safety

For every animation and transition:

1. Check for prefers-reduced-motion media query
2. If missing, add:
   @media (prefers-reduced-motion: reduce) {
     animation-duration: 0.01ms;
     transition-duration: 0.01ms;
   }
3. Verify final states are preserved (content doesn't disappear)
