---
name: forge-focus
description: Generate a focus ring system using your system's accent color. Creates consistent :focus-visible styles for all interactive elements.
user-invokable: true
---

# /forge-focus — Focus Ring System

Generate focus styles from your accent token:

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: inherit;
}

Adapt for:
- Buttons: ring follows button radius
- Inputs: ring follows input radius
- Links: underline offset instead of ring (optional)
- Cards: ring follows card radius
