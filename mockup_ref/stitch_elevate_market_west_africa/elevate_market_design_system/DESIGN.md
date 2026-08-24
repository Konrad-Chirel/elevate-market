---
name: Elevate Market Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#3d4a3d'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#6d7b6c'
  outline-variant: '#bccbb9'
  surface-tint: '#006e2f'
  primary: '#006e2f'
  on-primary: '#ffffff'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#4ae176'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#795900'
  on-tertiary: '#ffffff'
  tertiary-container: '#daa300'
  on-tertiary-container: '#533c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#f9bd22'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is built to anchor a high-trust, vibrant multi-vendor marketplace tailored for the West African digital economy. The brand personality is **Professional, Growth-Oriented, and Warm**. It balances the reliability required for financial transactions (Mobile Money) with the kinetic energy of a bustling Beninese marketplace.

The design style is **Corporate Modern with Tactile Warmth**. It avoids the clinical coldness of global SaaS by utilizing a warm background base and organic accent colors. High-quality, realistic photography of local merchants and products is central to the visual narrative, ensuring the UI feels grounded in the local context rather than generic. Transitions are subtle and intentional, utilizing skeleton loaders to maintain perceived performance over varying network speeds.

## Colors
This design system utilizes a palette that signals growth and heritage. 

- **Primary Green (#22C55E):** The core color for trust, success, and financial actions. It is the primary choice for "Buy" buttons and Mobile Money integrations.
- **Saffron Orange (#D97706):** Used for promotional banners, urgency, and high-energy accents. It draws the eye to discounts and featured vendors.
- **Golden Yellow (#FBBF24):** Reserved for "Premium" status, verified badges, and star ratings. It should be used sparingly to maintain its value.
- **Deep Charcoal (#111827):** Used for all primary text to ensure maximum legibility against the warm background.
- **Surface Warmth (#F9FAFB):** A deliberate off-white used to reduce eye strain and provide a more "organic" feel than pure digital white.

## Typography
The typography strategy prioritizes authority in headers and extreme legibility in transactional data.

- **Headlines:** Montserrat provides a geometric, confident structure for brand-level messaging and section titles.
- **Body & Data:** Inter is used for its superior legibility at small sizes, crucial for multi-vendor product descriptions and technical pricing details.
- **Pricing:** Always format as `XX XXX FCFA`. Use a non-breaking space between the thousands and the rest of the figure. The "FCFA" suffix should be the same weight as the numerical value but may be 2px smaller for visual balance in tight layouts.

## Layout & Spacing
The design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile.

- **Rhythm:** All spacing (padding, margins) must be increments of 8px. 
- **Product Grids:** Use a 2-column layout on mobile to maximize the visibility of product photography, moving to 4 or 5 columns on desktop.
- **Safe Zones:** Ensure a minimum 16px margin on mobile devices to prevent content from hitting the edge of the glass.

## Elevation & Depth
The system uses **Tonal Layering** combined with soft, low-opacity shadows to indicate interactivity.

- **Level 0 (Base):** Warm Off-White surface.
- **Level 1 (Cards):** Pure White (#FFFFFF) surface with a subtle 1px border (#E5E7EB) and a 4% opacity black shadow (blur: 4px, y-offset: 2px).
- **Level 2 (Active/Hover):** Increased shadow depth (8% opacity, blur: 12px) to simulate the card lifting toward the user.
- **Skeleton States:** Use a pulsing light-grey gradient animation to fill content containers during data fetch, preventing layout shift.

## Shapes
The shape language is **Rounded**, conveying friendliness and modern accessibility.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Hero sections and large product cards use 1rem (16px) radius to emphasize softness.
- **Badges:** Use "Pill" shapes (full radius) for status indicators (e.g., "In Stock", "Verified Merchant").

## Components
- **Buttons:**
    - *Primary:* Solid Primary Green with White text. Used for "Add to Cart" or "Confirm Payment".
    - *Secondary:* Ghost style with Saffron Orange border and text. Used for "Message Seller".
- **Product Cards:** Must feature a large image ratio (1:1). Price must be clearly visible in the bottom-left corner in `price-display` typography.
- **Input Fields:** Use 8px rounded corners with a subtle 1px border. Focus states must use a 2px Primary Green ring.
- **Chips/Badges:**
    - *Verified:* Golden Yellow background with Charcoal text, featuring a small star icon.
    - *Promo:* Saffron Orange background with White text.
- **Mobile Money Toggle:** A specific component for checkout that highlights the "MoMo" or "Flooz" logo with the Primary Green trust color.
- **Lists:** Use horizontal separators in #E5E7EB with 16px padding to maintain a clean, airy feel in vendor directories.