---
name: Elite Estate Framework
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f78'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0d1c32'
  on-primary-container: '#76849f'
  inverse-primary: '#b9c7e4'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#675f32'
  on-tertiary: '#ffffff'
  tertiary-container: '#b6ab77'
  on-tertiary-container: '#463f16'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#39475f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#efe3aa'
  tertiary-fixed-dim: '#d2c790'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#4e471c'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is engineered for a high-end real estate brokerage where trust, authority, and exclusivity are paramount. The aesthetic blends **Corporate Modern** efficiency with **Glassmorphism** accents to create a sense of depth and architectural sophistication. 

The target audience consists of high-net-worth investors and luxury homebuyers who value precision and professionalism. The UI should feel like a premium concierge service: expansive, serene, and impeccably organized. We prioritize high-quality imagery, generous whitespace, and subtle motion to guide the user toward lead-generation touchpoints without being intrusive.

## Colors
The palette is directly harmonized with the **FiveX Growth Realty Logo** (`fivex-logo.png`).

- **Primary Emerald Green (#0B3C26):** Deep rich emerald green used for navigation headers, footer backgrounds, and primary CTA cards.
- **Secondary Luxury Gold (#D4AF37 / #C5A059):** High-value gold used for call-to-action buttons, active states, and premium badge borders.
- **Growth Green Highlight (#84C225):** Bright energetic green extracted from the logo's growth arrow, used for stats metrics and active section accents.
- **Champagne Highlight (#F1E5AC):** Used for subtle hover states or delicate background gradients behind secondary sections.
- **Surface Strategy:** Backgrounds utilize the light gray (#F8F9FA) to provide a canvas that feels warmer and more "editorial" than pure white, though white remains the core surface color for cards and interactive components.

## Typography
The typography strategy pairings reflect a "Commercial-meets-Luxury" vibe. 

**Montserrat** is used for all headlines to provide a bold, geometric, and modern architectural feel. **Inter** is utilized for body text and data-heavy interfaces for its exceptional legibility and neutral, systematic tone. 

- Use **display-lg** for hero sections and property titles.
- Use **label-sm** with uppercase tracking for property categories (e.g., "COMMERCIAL," "RESIDENTIAL").
- Maintain generous line-heights to ensure the interface feels "airy" and premium.

## Layout & Spacing
The design system employs a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

- **Spacing Rhythm:** Based on an 8px base unit. 
- **Margins:** Desktop layouts should use wide 64px margins to create a focused, centered content column that feels curated.
- **Section Padding:** Vertically, sections should be separated by at least 80px-120px to prevent visual clutter and allow the high-quality photography to breathe.
- **Card Grids:** Use a 24px gutter for property listings to provide clear separation of visual assets.

## Elevation & Depth
Elevation is achieved through a combination of **Ambient Shadows** and **Glassmorphism**.

1.  **Standard Surface:** Pure white (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(10, 25, 47, 0.05)).
2.  **Glassmorphic Overlays:** Used for navigation bars and image-hover details. These should utilize a 12px backdrop-blur and a semi-transparent white (#FFFFFFCC) with a 1px solid white border at 20% opacity.
3.  **Active Depth:** When a user interacts with a property card, the shadow should deepen slightly and the element should lift by 2px to provide tactile feedback.

## Shapes
This design system utilizes a **Rounded** (Role 2) logic to balance corporate professionalism with approachable luxury.

- **Standard Elements:** Buttons, input fields, and tags use an 8px (0.5rem) radius.
- **Containers:** Property cards and modal windows use a 16px (1rem) radius to feel substantial and modern.
- **Icons:** Should follow a medium-stroke (1.5pt) weight with slightly rounded terminals to match the UI shape language.

## Components
- **Buttons:** Primary buttons are Navy (#0A192F) with white text. Secondary buttons use a Gold (#C5A059) border with gold text. Hover states for primary buttons should subtly transition to a slightly lighter navy with a gold bottom-border (2px).
- **Cards:** Property cards are the primary vessel of the UI. They feature a top-heavy image ratio (3:2), followed by a clean white padding area for typography. The price point should always be in Montserrat Bold.
- **Input Fields:** Use a subtle light-gray fill (#F1F3F5) with an 8px radius. On focus, the border transitions to 1px Gold (#C5A059) with a soft outer glow.
- **Chips/Badges:** Small, uppercase labels for property status (e.g., "FOR SALE," "NEW LISTING"). Use the Champagne highlight (#F1E5AC) as a background with Navy text to indicate premium status.
- **Lead Gen Form:** A floating or anchored card component using the Glassmorphism style (blur + semi-transparent white) to stay visible over high-resolution property images.