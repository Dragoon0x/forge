---
name: forge-pair
description: Get contextual font pairing recommendations based on your project type. Never suggests banned fonts.
user-invokable: true
---

# /forge-pair — Font Pairing

Return font pairing for the current project type:

SaaS: Outfit (display) + DM Sans (body) + JetBrains Mono (code)
Portfolio: Instrument Serif (display) + Outfit (body) + Fira Mono (code)
E-commerce: DM Sans (display) + Outfit (body) + JetBrains Mono (code)
Docs: Newsreader (display) + Source Serif 4 (body) + Fira Mono (code)

Include Google Fonts import link and CSS font-family declarations.

Never suggest: Inter, Roboto, Arial, Helvetica, Open Sans, Lato, Montserrat, Poppins, Nunito, Space Grotesk, Raleway, Source Sans Pro.
