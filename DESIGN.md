---
name: Cyber Defense Elite
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e8bcb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ae8883'
  outline-variant: '#5e3f3c'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690006'
  primary-container: '#ff544b'
  on-primary-container: '#5c0005'
  inverse-primary: '#c00014'
  secondary: '#92ccff'
  on-secondary: '#003351'
  secondary-container: '#3398db'
  on-secondary-container: '#002c47'
  tertiary: '#89ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#3699d1'
  on-tertiary-container: '#002d44'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#92ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-card: '#1F1F1F'
  text-muted: '#8B8B8B'
  background-deep: '#000000'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-gap: 120px
  section-gap-mobile: 64px
  gutter: 24px
  container-max: 1200px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system embodies a **Corporate / Modern** aesthetic with a distinct **Technical High-Fidelity** edge. It is designed for the "kt cloud TECH UP" Cyber Security program, targeting aspiring security professionals who value authority, precision, and institutional reliability.

The visual narrative prioritizes "Information Funneling"—leading users from high-level value propositions (tuition support) to granular technical curriculum details. The mood is serious and sophisticated, utilizing a "Dark Mode" foundation to evoke the atmosphere of a modern Security Operations Center (SOC).

Key stylistic pillars include:
- **Dark Mode Dominance:** Utilizing deep grays and blacks to create a premium, tech-forward environment.
- **Data-Driven Accents:** Using high-contrast primary red and professional blue for critical data points (prices, dates, success metrics).
- **Technical Precision:** Clean borders, systematic grids, and a distinct lack of decorative fluff, ensuring the content remains the focal point.

## Colors

The palette is anchored in a high-contrast dark theme. 

- **Primary Red (#EB1E25):** Reserved for brand identity (kt cloud), primary Call-to-Actions (CTAs), and highlighting urgent data like recruitment limits and monetary benefits.
- **Secondary Blue (#3498DB):** Used as a professional counter-accent for secondary CTAs, "View Details" links, and technical category labels.
- **Surface Hierarchy:** The system uses `#121212` for the main canvas, while `#1F1F1F` acts as the primary container color for cards, accordion items, and input fields to create subtle depth.
- **Typography Colors:** Pure white is used for headings to ensure maximum legibility, while `#8B8B8B` is utilized for metadata and descriptive body text to maintain visual hierarchy.

## Typography

This design system utilizes **Hanken Grotesk** as the primary typeface for its sharp, contemporary geometric forms that align with the technology sector. **JetBrains Mono** is introduced as a secondary label font to emphasize the "Cyber Security" and "Coding" nature of the curriculum.

- **Scale & Contrast:** Large headlines are used for program titles and major section headers. Heavy font weights (600-700) are applied to monetary values and critical program stats.
- **Functional Mono:** The use of JetBrains Mono for step indicators (e.g., "Step 01"), dates, and technical tags provides a "terminal-inspired" aesthetic without sacrificing readability.
- **Mobile Adaptation:** Headlines scale down significantly on mobile to prevent awkward line breaks while maintaining bold presence.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within a 1200px container, and transitions to a fluid single-column layout for mobile.

- **Vertical Rhythm:** A generous `section-gap` of 120px is used to separate major narrative blocks (Hero vs. Curriculum vs. Benefits), providing the "breathing room" required for a premium information-heavy site.
- **Component Stack:** Inside cards and content blocks, an 8px base unit is used. 16px (stack-md) is the standard for related elements, while 32px (stack-lg) separates headlines from body copy.
- **Column Logic:** Benefits and features utilize a 3-column or 4-column grid on desktop, collapsing to 2 columns on tablet and 1 column on mobile.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than heavy shadows. In a dark-themed environment, depth is achieved by "lifting" surfaces with lighter gray shades.

- **Level 0 (Background):** #121212 - The base canvas.
- **Level 1 (Containers):** #1F1F1F - Used for cards and accordion headers. These may feature a very subtle 1px border (#2A2A2A) to define edges against the background.
- **Interactive Layers:** Buttons and active states use pure Primary Red or Secondary Blue. When hovered, elements may use a subtle outer glow (0px 0px 15px) tinted with the primary color to simulate an "active screen" effect.
- **Glassmorphism (Subtle):** The top navigation bar uses a backdrop-blur (20px) with a semi-transparent background (#121212CC) to maintain context while scrolling.

## Shapes

The design system uses **Soft (0.25rem)** roundedness to maintain a professional, slightly rigid technical feel. 

- **Standard Elements:** Buttons, inputs, and small cards use a 4px (0.25rem) radius.
- **Large Containers:** Curriculum sections and major content blocks may scale up to `rounded-lg` (8px) to soften the overall layout slightly without appearing "bubbly."
- **Icons:** Iconography should be housed within square or slightly rounded frames (4px) to reinforce the grid-based technical structure.

## Components

- **Buttons:** Primary buttons are solid Primary Red with white text. Secondary buttons are outlined with 1px Secondary Blue. Height is standardized at 56px for main CTAs to ensure "tappability" on mobile.
- **Accordions (Curriculum):** Used for the 7-month curriculum breakdown. Headers are #1F1F1F with a right-aligned chevron. Expanded states reveal a darker sub-container with bulleted lists.
- **Information Cards:** Features a top-aligned icon or emoji followed by a headline and body text. No shadows; defined by tonal background change.
- **Input Fields:** Dark backgrounds (#1F1F1F) with a 1px border. Focus states change the border color to Primary Red.
- **Benefit Chips:** Small, rounded-full labels used for metadata like "K-Digital Training" or "Employment Support," using a subtle blue-tinted background.
- **Sticky Footer CTA:** A persistent mobile banner in Primary Red to drive conversions regardless of scroll depth.