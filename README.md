# ProcureTEX Design System

Brand and social media asset guidelines for **ProcureTEX** — 3 November 2026 · Circa, Amsterdam.

---

## Brand at a glance

| Token | Value |
|---|---|
| Electric Purple | `#863DFF` |
| Dark Blue | `#060a27` |
| Green (lime accent) | `#cbff2e` |
| Light Purple | `#dfe0ff` |
| Pink | `#f7aef3` |
| Cyan Blue | `#23f6f0` |
| White | `#ffffff` |
| Font | Space Grotesk |
| Visual motif | Node/circle pattern — inspired by neural network connectivity |
| Tagline | The best-of-breed community event |
| Event date | 3 November 2026 |
| Venue | Circa, Amsterdam |
| URL | procuretex.com |

---

## Typography

**Typeface: Space Grotesk** (all weights)

| Weight | Use |
|---|---|
| Light | Body copy, supporting text |
| Regular | Headlines (in caps), subheadings |
| SemiBold | Highlights, labels |
| Bold | Key headlines, speaker names, emphasis |

Rules:
- Headlines are typically ranged left
- Centred text only used within node shapes or on full-bleed photography
- Font substitute: Arial (web/email fallback only)

---

## Colour rules

- **Electric Purple `#863DFF`** — primary brand colour, backgrounds, gradients
- **Dark Blue `#060a27`** — deepest background, text on light
- **Lime `#cbff2e`** — accent only: labels, CTAs, company names, highlights, capsule borders. Never body copy
- **Light Purple `#dfe0ff`** — secondary/muted text, soft accents
- Gradients: max 3 colours. Purple-to-blue, purple-to-pink, purple-to-dark are all valid
- Backgrounds always dark — never white or light

---

## Logo

- **Primary:** White wordmark + lime TEX mark — use on dark backgrounds
- **On light:** Black wordmark + purple TEX mark
- **On purple:** White wordmark + lime TEX mark
- Clear space: minimum cap-height of the "O" on all four sides
- Never stretch, rotate, recolour, add shadow, or recreate

---

## Graphics

The brand pattern is a **node system** — circles and connections inspired by a neural network. It represents connection, innovation, and forward thinking.

Usage:
- Pattern can be used as full background, edge texture, or isolated nodes
- Nodes/capsules are used to frame key text (headlines, CTAs)
- Pattern colour should match a primary brand colour
- Photos are **blended into** the graphic using the node shapes — not placed as separate blocks. Use luminosity blend mode with a purple colour overlay so the person bleeds into the background

---

## Asset templates

| File | Format | Use |
|---|---|---|
| `components/templates.html` | 480×480px (1:1) + 480×270px (16:9) | Speaker cards, partner posts, LinkedIn banners |
| `tokens/brand.css` | CSS variables | All brand tokens |

---

## How to generate assets with Claude

Go to [claude.ai](https://claude.ai) and use these prompt templates.

---

### Speaker card (single)

```
Using the ProcureTEX brand system:
- Font: Space Grotesk (Bold for name, Regular for role, Light for body)
- Background: dark #060a27 with radial purple gradient #863DFF
- Accent: lime #cbff2e for labels, CTAs, company name
- Node circle pattern overlay at low opacity
- Photo blended into background using luminosity blend + purple overlay (not a separate block)

Create a 480×480px LinkedIn speaker card for:
Name: [Full name]
Title: [Job title]
Company: [Company name]

Add date capsule "3 Nov 2026 · Amsterdam" in lime, "Speaker" label in purple capsule, "Save your spot →" CTA in lime, procuretex.com in footer.
```

---

### Multi-speaker card (3 speakers)

```
Using the ProcureTEX brand system (Space Grotesk font, #060a27 dark background, #863DFF purple gradient, #cbff2e lime accent, node circle pattern), create a 480×480px speakers card:

Speaker 1: [Name] · [Title] · [Company]
Speaker 2: [Name] · [Title] · [Company]
Speaker 3: [Name] · [Title] · [Company]

List speakers vertically with small rounded thumbnails (52×52px, border-radius 12px, lime border). Headline "Meet the speakers" in Space Grotesk Bold. Add "Save your spot →" CTA and procuretex.com footer.
```

---

### Partner post

```
Using the ProcureTEX brand system (Space Grotesk font, #060a27 dark background, #863DFF purple radial gradient, #cbff2e lime accent, node circle pattern overlay), create a 480×480px community partner post for:

Partner name: [Company name]
[Attach partner logo]

Layout: ProcureTEX logo top-left, partner logo centred in a rounded box with lime border, "Proud partner of" in muted text (Space Grotesk Light), "ProcureTEX" large bold below. Event date and procuretex.com in footer.
```

---

### LinkedIn banner (16:9)

```
Using the ProcureTEX brand system (Space Grotesk font, #060a27 dark background, #863DFF purple gradient, #cbff2e lime accent, node pattern), create a 480×270px LinkedIn banner:

Headline: [2–4 words]
Subtext: [Speaker name, session or event detail]
[Attach photo if applicable — blend into background using luminosity mode]

Add lime date capsule "3 Nov 2026 · Amsterdam", "Register now →" CTA in lime pill, procuretex.com in footer.
```

---

## Exporting

Open the HTML file in Chrome, then screenshot at the exact canvas size using CleanShot, Shottr, or browser dev tools at 2× for retina. Or bring into Figma via the HTML-to-Figma plugin.

---

## Adding new asset types

```
Using the ProcureTEX design system (Space Grotesk font, Electric Purple #863DFF, Lime #cbff2e, Dark Blue #060a27, node circle pattern), create a new [asset type] at [dimensions]. Follow the same structure as the existing components.
```
