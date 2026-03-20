---
name: forge-rhythm
description: Enforce vertical rhythm using your system's baseline grid. Ensures heading margins, paragraph spacing, and section padding are multiples of the baseline.
user-invokable: true
---

# /forge-rhythm — Vertical Rhythm

Baseline = body line-height × base font-size (e.g., 1.6 × 16 = 25.6, round to 24px).

Check:
- Heading margin-top: multiple of baseline
- Heading margin-bottom: baseline or half
- Paragraph margin: one baseline unit
- Section padding: multiple of baseline

Fix violations by snapping to nearest baseline multiple.
