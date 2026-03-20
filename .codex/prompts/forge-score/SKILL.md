---
name: forge-score
description: Score how well the codebase adheres to your design system. 0-100, where 100 means every value references a token and every pattern follows the system.
user-invokable: true
---

# /forge-score — System Adherence Score

Run `/forge-audit` and compute an adherence score:

- 100: Every color, spacing, font, and shadow value references the system
- 80-99: Minor drift (a few raw values, mostly tokenized)
- 60-79: Significant drift (many raw values mixed with tokens)
- Below 60: The system exists but isn't being followed

Score breakdown by category: Color adherence, Spacing adherence, Typography adherence, Surface adherence.

Target: 90+ for production code.
