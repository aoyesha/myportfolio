---
inclusion: auto
---

# Kiroverse Developer Portfolio — Design System Rules

## Overview

This document defines the design system extracted from the Figma portfolio design for **Aoyesha Ayen's Developer Portfolio**. All implementations must follow these tokens, patterns, and rules to achieve pixel-perfect parity with the design.

**Tech Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS 4

---

## 1. Design Tokens

### Colors

```
Primary:
  accent:           #C3B1FF   (lavender purple — CTAs, links, highlights)
  accent-dark:      #1E0031   (deep purple — About page background)

Neutral:
  white:            #FFFFFF   (headings, primary text on dark)
  offwhite:         #C7C7C7   (body text, secondary text, nav links)
  dark-gray:        #484848   (borders, dividers, skill chip borders)
  card-bg:          #1A1A1A   (project image backgrounds, input fields)
  icon-bg:          #222222   (social icon circle backgrounds)
  black:            #0A0A0A   (button text on accent, tag backgrounds)

Background:
  gradient-start:   rgba(193, 51, 131, 1)   (pink-magenta)
  gradient-mid:     rgba(131, 50, 142, 1)   (purple)
  gradient-mid2:    rgba(99, 50, 148, 1)    (deep purple)
  gradient-end:     rgba(68, 49, 153, 1)    (indigo-purple)
```

### Tailwind CSS 4 Token Mapping

```css
@theme {
  --color-accent: #C3B1FF;
  --color-accent-dark: #1E0031;
  --color-neutral-white: #FFFFFF;
  --color-neutral-offwhite: #C7C7C7;
  --color-neutral-dark-gray: #484848;
  --color-neutral-card: #1A1A1A;
  --color-neutral-icon: #222222;
  --color-neutral-black: #0A0A0A;
}
```

### Typography

| Token | Font Family | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------------|--------|------|-------------|----------------|-------|
| Heading/One | Bebas Neue | 400 | 101px | 0.9 | 0 | Hero headline, page titles |
| Heading/Two | Bebas Neue | 400 | 76px | 1.0 | 0 | Section headings |
| Heading/Three | Manrope | 500 | 32px | 1.4 | 0 | Project titles, subtitles |
| Heading/Four | Manrope | 500 | 24px | 1.3 | -1% | Experience job titles |
| Heading/Five | Manrope | 600 | 16px | 1.5 | 0 | Label text, sublabels |
| Body/Medium | Manrope | 400 | 18px | 1.5 | 0 | Body paragraphs |
| Body/Small | Manrope | 500 | 16px | 1.6 | 0 | Small text, form labels |
| Misc/Button | Manrope | 700 | 16px | 1.0 | 0 | Button labels (uppercase) |
| Misc/Link | Manrope | 700 | 16px | 1.5 | 0 | Link text (uppercase, accent) |
| Misc/Tag | Manrope | 500 | 14px | 1.5 | 0 | Project tags/badges |
| Misc/Pill | Manrope | 700 | 16px | 1.0 | 0 | Skill chips (uppercase) |
| Nav/Logo | Bebas Neue | 400 | 32px | 1.5 | -1% | Navigation logo |
| Nav/Link | Manrope | 500 | 16px | 1.5 | -3% | Navigation links |

### Fonts to Import

```
Google Fonts:
  - Bebas Neue (weight: 400)
  - Manrope (weights: 400, 500, 600, 700)
```

### Spacing Scale

```
4px   — micro (underline offset)
8px   — tight (text stacks, label-input gap)
12px  — input padding-y
16px  — standard (text blocks, tag padding-x, chip gap, input padding-x)
20px  — button padding-y
24px  — nav padding-y, social gaps, form field gaps
32px  — nav link gap, information sections
40px  — hero content gap, form-to-button, contact-to-socials
48px  — project card gap, about heading-to-cta
60px  — nav padding-x
80px  — section padding-y, experience items gap
108px — content left margin
120px — between project cards
```

### Border Radius

```
4px   — form inputs (--radius-input)
12px  — project image cards (--radius-card)
16px  — large image containers (--radius-image)
100px — buttons, chips, social icons, tags (--radius-pill)
```

### Elevation / Shadows

```
None. Design relies on:
  - Color contrast for depth
  - Border separators (#484848, 1px solid)
  - Radial gradient background
```

### Borders & Dividers

```
Section dividers:   1px solid #484848
List item borders:  1px solid #484848 (top border per row)
Skill chip border:  1px solid #484848
```

---

## 2. Reusable Component Definitions

### Navbar

- Fixed top bar, full width, transparent background
- Height: 96px | Padding: 24px vertical, 60px horizontal
- Logo (left): Bebas Neue 32px, #C7C7C7, tracking-tight
- Links (right): Manrope Medium 16px, #C7C7C7, gap 32px
- Items: Home | Projects | About | Contact
- Mobile: Hamburger menu

### Hero Section

- Two-column: text (left, ~689px) + circular portrait (right, ~505px)
- Heading: "hi, i am" + name — Heading/One (101px Bebas Neue)
- Subheading: Body/Medium, #C7C7C7
- CTA row: Primary button + LinkedIn icon + GitHub icon (gap 16px)
- Background: Radial gradient (pink → purple → indigo)

### Button (Primary)

- Background: #C3B1FF | Text: #0A0A0A, bold, uppercase
- Height: 54px | Radius: 100px (pill)
- With icon: pl-24 pr-6, 42px circle arrow icon right
- Without icon: px-40 py-20
- Hover: Subtle scale/opacity transition

### Button (Secondary / Skill Chip)

- Background: transparent | Border: 1px solid #484848
- Text: #FFFFFF, bold, uppercase | Radius: 100px
- Padding: 20px vertical, 40px horizontal
- Hover: Border → #C3B1FF or subtle fill

### Social Icon Button

- Size: 54px circle | Background: #222222 | Radius: 100px
- Icon: 26px centered
- Hover: Background lighten or accent border

### Project Card

- Layout: Horizontal — image (600px square) + content (flex-1)
- Gap: 48px | Image: bg #1A1A1A, radius 12px, overflow hidden
- Tag: Absolute top-left (16px), bg #0A0A0A, pill, Misc/Tag style
- Title: Heading/Three | Description: Body/Medium
- Info table: Label (white) vs Value (#C7C7C7), top-border rows
- Links: Misc/Link style (#C3B1FF, uppercase, bold) + underline
- Card spacing: 120px between cards

### Skill Chip

- Same as Button Secondary
- Layout: flex-wrap container, gap 16px
- Content: Skill name uppercase

### Contact Form

- Two-column: left (heading + email + socials) / right (form)
- Fields: Name, Email, Subject (single line), Message (textarea ~156px)
- Label: Body/Small, #C7C7C7, mb-8
- Input: bg #1A1A1A, radius 4px, px-16 py-12, white text 18px
- Gap: 24px between fields | Submit: Primary button, mt-40

### Footer / Contact Section

- Left: "Let's connect" (Heading/Two), email (underlined), social icons (32px)
- Right: Contact form
- Copyright: Bottom-left, Body/Small, #C7C7C7, "© 2026 Your Name"

### Experience Block

- Two-column: heading (left, Heading/Two) + entries (right)
- Entry: Job title (Heading/Four) + date (Body/Medium) — justified
- Optional company (Manrope SemiBold 18px, #C3B1FF)
- Description: Body/Medium, #C7C7C7
- Gap between entries: 80px

---

## 3. Layout Rules

### Container

```
Max width:       1440px (design canvas)
Content width:   1224px (108px margin each side)
Center:          mx-auto on content areas
```

### Grid System

```
Two-column split: ~50/50 (600px/600px within 1224px)
Column gap:       24px (contact, skills, experience) or 48px (projects)
Full-width:       Navigation, section dividers, gradient background
```

### Section Structure

```
- Separated by 1px #484848 horizontal line
- Internal padding: 80px top and bottom
- Content starts 108px from left edge
```

---

## 4. Responsive Rules

### Breakpoints

```
sm:    < 640px   (mobile)
md:    640-1024px (tablet)
lg:    1024-1440px (desktop)
xl:    > 1440px  (cap at max-width, center)
```

### Mobile-First Adaptations

```
Navigation:     Hamburger menu → full links at lg
Hero:           Stack vertical, heading 48px → 72px (md) → 101px (lg)
Project Cards:  Stack vertical, image full-width → horizontal at lg
Skills:         Single column → two-column at lg
Contact:        Stack vertical → two-column at lg
Experience:     Stack vertical → two-column at lg
Typography:     Scale down proportionally on mobile
```

---

## 5. Accessibility Rules

```
- All images: descriptive alt text
- Social icons: aria-label (e.g., "LinkedIn profile")
- Keyboard navigation with visible focus states (accent ring, 2px offset)
- Form inputs: associated <label> elements
- Form validation: aria-describedby for error messages
- Semantic HTML: <nav>, <main>, <section>, <article>, <footer>, <form>
- Skip-to-content link (visually hidden until focused)
- Minimum 44px touch targets
- Respect prefers-reduced-motion
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast: verify WCAG AA compliance
```

---

## 6. Implementation Rules

### Project Structure

```
src/
  app/
    layout.tsx            — Root layout (fonts, metadata)
    page.tsx              — Home page (all sections)
    globals.css           — Tailwind directives, CSS variables
  components/
    ui/
      Button.tsx          — Primary/secondary variants
      SocialIcon.tsx      — Circular icon button
      SkillChip.tsx       — Pill-shaped skill tag
      SectionDivider.tsx  — Horizontal divider
      ProjectTag.tsx      — Tag badge
      LinkWithArrow.tsx   — Accent link + underline
    sections/
      Navbar.tsx
      Hero.tsx
      FeaturedProjects.tsx
      ProjectCard.tsx
      About.tsx
      Skills.tsx
      Experience.tsx
      Contact.tsx
      Footer.tsx
  lib/
    constants.ts          — Static data (projects, skills, experiences)
    types.ts              — TypeScript interfaces
```

### Font Setup (Next.js)

```typescript
import { Bebas_Neue, Manrope } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});
```

### Background Gradient

```css
.hero-gradient {
  background: radial-gradient(
    ellipse at center,
    rgba(193, 51, 131, 1) 0%,
    rgba(131, 50, 142, 1) 50%,
    rgba(99, 50, 148, 1) 75%,
    rgba(68, 49, 153, 1) 100%
  );
}
```

### Coding Conventions

```
IMPORTANT: Use design tokens via Tailwind — never hardcode hex values in components
IMPORTANT: Use semantic HTML for every section
IMPORTANT: All components accept a className prop for composition
IMPORTANT: Mobile-first — start mobile, add md: and lg: breakpoints
IMPORTANT: Use Next.js Image component with proper width/height/alt
IMPORTANT: Buttons must be <button> or <a>, never <div>
IMPORTANT: Form inputs must have associated labels

- TypeScript interfaces for all props
- Small, focused components (single responsibility)
- Extract repeated patterns into shared components
- Next.js App Router conventions
- next/font/google for font loading
- Prefer utility classes over @apply
- Static data in separate constants file
- Use react-icons/bi (Boxicons) to match Figma icons
```

### Quick Reference — Tailwind Classes

```
Heading/One:   font-display text-[101px] leading-[0.9] text-neutral-white
Heading/Two:   font-display text-[76px] leading-none text-neutral-white
Heading/Three: font-body text-[32px] font-medium leading-[1.4] text-neutral-white
Body/Medium:   font-body text-[18px] font-normal leading-[1.5] text-neutral-offwhite
Body/Small:    font-body text-[16px] font-medium leading-[1.6] text-neutral-offwhite
Button text:   font-body text-[16px] font-bold leading-none uppercase text-neutral-black
Link text:     font-body text-[16px] font-bold leading-[1.5] uppercase text-accent
```
