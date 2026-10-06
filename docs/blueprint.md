# Blueprint: Timothy O Design — One-Page Business Website

**Version:** 1.0
**Date:** 2026
**Owner:** Timothy O Design
**Contact:** 08124696937 · akinniyiobaloluwa71@gmail.com

---

## 1. Project Overview

| Field | Value |
|---|---|
| Client | Timothy O Design |
| Industry | Graphic Design · Web Development · Branding · Digital |
| Site type | Single-page marketing website (one-page scroll) |
| Stack | HTML5 · CSS3 · Vanilla JavaScript (ES6+) |
| Dependencies | None (no frameworks, no jQuery, no build tools) |
| Target | Fast load, mobile-first, accessible, SEO-ready |
| Primary goal | Generate inquiries via contact form, phone, or email |
| Secondary goal | Establish credibility as a designer/developer |

**Out of scope (v1):** blog, CMS, user accounts, portfolio CMS, payment, analytics dashboard.

---

## 2. File Tree
timothy-o-design/
│
├── index.html # Single page, all sections
├── styles.css # All styling, mobile-first
├── script.js # All interactivity
│
├── assets/
│ ├── logo.png # White-on-transparent logo
│ ├── logo.svg # Preferred: scalable version
│ ├── favicon.ico # Browser tab icon
│ └── og-image.jpg # 1200×630 social share preview
│
└── README.md # Optional: how to run/deploy

text

**Rule:** No nested folders beyond `assets/`. Keep the tree flat.

---

## 3. Design System

### 3.1 Color Tokens

| Token | Hex | Usage |
|---|---|---|
| --color-blue | #0A3D91 | Header, hero bg, primary buttons, footer |
| --color-blue-dark | #062A66 | Hover state on blue elements |
| --color-white | #FFFFFF | Text on blue, card backgrounds |
| --color-gray-light | #F5F7FA | Section backgrounds (alternating) |
| --color-gray-mid | #D1D5DB | Borders, dividers |
| --color-text | #1A1A1A | Body text on light backgrounds |
| --color-text-muted | #6B7280 | Secondary text, captions |
| --color-error | #DC2626 | Form validation errors |
| --color-success | #16A34A | Form success message |

### 3.2 Typography

| Element | Size (mobile → desktop) | Weight | Line-height |
|---|---|---|---|
| h1 (hero) | 2rem → 3.5rem | 700 | 1.15 |
| h2 (section titles) | 1.75rem → 2.5rem | 700 | 1.2 |
| h3 (card titles) | 1.125rem → 1.25rem | 600 | 1.3 |
| Body | 1rem → 1.0625rem | 400 | 1.65 |
| Small / caption | 0.875rem | 400 | 1.5 |

**Font stack:** system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
**Optional upgrade:** Inter or Poppins via Google Fonts (one family, two weights: 400 + 700).

### 3.3 Spacing Scale

--space-xs: 0.5rem (8px)
--space-sm: 1rem (16px)
--space-md: 1.5rem (24px)
--space-lg: 3rem (48px)
--space-xl: 5rem (80px)

Sections use --space-xl vertical padding on desktop, --space-lg on mobile.

### 3.4 Breakpoints

| Name | Min-width | Layout shift |
|---|---|---|
| Mobile | 0 | Single column, stacked |
| Tablet | 768px | 2-column services grid, inline nav |
| Desktop | 1024px | 4-column services, wider container |

### 3.5 Container

- Max-width: 1100px
- Horizontal padding: 1.25rem mobile, 2rem desktop
- Centered with margin-inline: auto

---

## 4. Page Architecture (Wireframe Map)
┌──────────────────────────────────────────────┐
│ HEADER (sticky) │
│ Logo ······· nav ······· [Get a quote] │
├──────────────────────────────────────────────┤
│ HERO │
│ ─ Big headline (h1) │
│ ─ Subheadline │
│ ─ [See my work] [Contact me] │
├──────────────────────────────────────────────┤
│ SERVICES │
│ ─ Section title + subtitle │
│ ─ [Card] [Card] [Card] [Card] │
├──────────────────────────────────────────────┤
│ ABOUT │
│ ─ Section title │
│ ─ Short bio paragraph │
├──────────────────────────────────────────────┤
│ CONTACT │
│ ─ Section title + subtitle │
│ ─ [Name] [Email] [Message] [Send] │
│ ─ Phone + email links │
├──────────────────────────────────────────────┤
│ FOOTER │
│ ─ Copyright · Phone · Email │
└──────────────────────────────────────────────┘

text

**Background rhythm (alternating):**

| Section | Background |
|---|---|
| Header | White (or blue on scroll) |
| Hero | Blue (--color-blue) |
| Services | White |
| About | Light gray (--color-gray-light) |
| Contact | Blue (--color-blue) |
| Footer | Dark blue (--color-blue-dark) |

---

## 5. Component Specifications

### 5.1 Header

| Property | Spec |
|---|---|
| Position | sticky; top: 0; z-index: 100 |
| Layout | Flex: logo left, nav right |
| Mobile | Hamburger button (3 lines) toggles nav panel |
| Desktop | Horizontal inline nav |
| Scroll behavior | Optional: add shadow when scrolled |
| Nav links | Services · About · Contact · Get a quote (CTA) |

**States:** default, scrolled (shadow), mobile-open (panel visible), hover on links.

### 5.2 Hero

| Property | Spec |
|---|---|
| Height | min-height: 70vh or auto with generous padding |
| Background | Solid --color-blue, optional subtle radial gradient |
| Alignment | Centered on mobile, left-aligned on desktop |
| Content | h1, p, two a buttons |
| Buttons | Primary (white bg, blue text) + Ghost (white border, white text) |

**Copy angle:** value proposition + credibility + clear next step.

### 5.3 Services (4 Cards)

| Property | Spec |
|---|---|
| Grid | 1 col mobile → 2 col tablet → 4 col desktop |
| Card style | White bg, border-radius: 12px, soft shadow, padding --space-md |
| Hover | transform: translateY(-4px) + stronger shadow |
| Content | Icon (emoji or SVG) · h3 · short paragraph |
| Cards | Graphic Design · Web Development · Branding · Digital |

### 5.4 About

| Property | Spec |
|---|---|
| Layout | Centered text, max-width 65ch |
| Content | Section title + 2–3 sentence bio |
| Background | --color-gray-light |

**Copy angle:** who Timothy is, what he does, why clients trust him.

### 5.5 Contact

| Property | Spec |
|---|---|
| Layout | Form on left/top, contact details on right/bottom |
| Form fields | Name (text), Email (email), Message (textarea) |
| Validation | Client-side, inline errors below each field |
| Submit | Prevent default, validate, show success message |
| Contact links | tel:08124696937 and mailto:akinniyiobaloluwa71@gmail.com |
| Background | --color-blue with white form card |

**Form states:**

| State | Behavior |
|---|---|
| Default | Empty fields, no errors |
| Invalid | Red border + red error text under field |
| Valid | Green success message replaces form OR appears below |
| Submitting | Button disabled + "Sending…" (visual only on v1) |

### 5.6 Footer

| Property | Spec |
|---|---|
| Layout | Flex, space-between on desktop; stacked on mobile |
| Content | © [year] Timothy O Design · phone link · email link |
| Year | Injected via JS (new Date().getFullYear()) |
| Background | --color-blue-dark, white text |

---

## 6. JavaScript Module Map
script.js
│
├── initNav() → hamburger toggle + aria-expanded + close on link click
├── initSmoothScroll() → intercept anchor clicks, scrollIntoView({behavior:'smooth'})
├── initForm() → validation, error rendering, success state
├── initYear() → inject current year into #year
└── init() → runs all above on DOMContentLoaded

text

| Function | Trigger | Side effect |
|---|---|---|
| initNav | Click on hamburger | Toggles .is-open class on nav |
| initSmoothScroll | Click on a[href^="#"] | Smooth scroll to target |
| initForm | Submit event | Validates, blocks submit, shows messages |
| initYear | Page load | Sets footer year text |

**Validation rules:**

| Field | Rule | Error message |
|---|---|---|
| Name | Not empty, min 2 chars | "Please enter your name." |
| Email | Not empty, matches email regex | "Please enter a valid email." |
| Message | Not empty, min 10 chars | "Please write a short message." |

---

## 7. Accessibility Spec

- [ ] All images have descriptive alt (logo: alt="Timothy O Design logo")
- [ ] Form inputs paired with <label for="...">
- [ ] Hamburger button has aria-label and aria-expanded
- [ ] Nav has aria-label="Main navigation"
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] Focus states visible on all interactive elements (:focus-visible outline)
- [ ] Page works with keyboard only (Tab, Enter, Esc)
- [ ] Smooth scroll respects prefers-reduced-motion
- [ ] Form errors announced with role="alert" or aria-live="polite"
- [ ] Heading hierarchy: one h1, then h2 per section, h3 in cards

---

## 8. SEO Spec

| Item | Value |
|---|---|
| <title> | Timothy O Design — Graphic Design & Web Development |
| <meta description> | Timothy O Design creates bold brands and fast websites for small businesses. Graphic design, web development, and digital solutions. |
| <html lang> | en |
| Open Graph | og:title, og:description, og:image (1200×630) |
| Twitter card | summary_large_image |
| Favicon | Linked in <head> |
| Semantic HTML | header, main, section, footer |
| Heading structure | Logical, no skipped levels |

---

## 9. Deployment Targets

| Platform | Method | Cost | Custom domain |
|---|---|---|---|
| Netlify | Drag-and-drop folder | Free | Yes |
| GitHub Pages | Push to main, enable in settings | Free | Yes |
| Vercel | Connect GitHub repo | Free | Yes |

**Form handling (choose one for real submissions):**

| Service | Method | Cost |
|---|---|---|
| Formspree | POST form action to their endpoint | Free tier |
| Web3Forms | Access key + POST | Free |
| Netlify Forms | Add netlify attribute to <form> | Free with Netlify |

---

## 10. Build Order (Dependency Map)
Phase 0: Prep
└─ create files, save logo, define color tokens
│
Phase 1: HTML structure
└─ all sections, semantic, unstyled
│
Phase 2: Content & copy
└─ real text, real contact links
│
Phase 3: CSS base
├─ tokens (variables)
├─ reset & typography
└─ layout containers
│
Phase 4: CSS components
├─ header → hero → services → about → contact → footer
└─ responsive breakpoints
│
Phase 5: JavaScript
├─ nav → smooth scroll → form → year
└─ test each in isolation
│
Phase 6: QA
├─ accessibility pass
├─ responsive pass
└─ SEO pass
│
Phase 7: Deploy
└─ Netlify / GitHub Pages / Vercel

text

**Rule:** Never start a phase before the previous one is complete.

---

## 11. Definition of Done

- [ ] Loads in under 2 seconds on 4G
- [ ] Looks correct on 375px, 768px, 1440px widths
- [ ] All nav links scroll to correct sections
- [ ] Hamburger menu works on mobile
- [ ] Form validates and shows success message
- [ ] Phone and email links work (test on a real phone)
- [ ] No console errors
- [ ] Passes keyboard-only navigation
- [ ] Contrast passes WCAG AA
- [ ] Live URL is shareable
- [ ] Title, description, and OG image are set

---

## 12. Copilot Prompt Map

| Blueprint Section | Copilot Prompt |
|---|---|
| 1–2 (Files, structure) | "Create index.html, styles.css, script.js for a one-page site…" |
| 3 (Design system) | "Add CSS variables for these color tokens…" |
| 4–5 (Sections) | "Build the header / hero / services section as semantic HTML…" |
| 6 (JavaScript) | "Add vanilla JS for nav toggle, smooth scroll, form validation…" |
| 7–8 (A11y, SEO) | "Review for accessibility and add SEO meta tags…" |
| 9 (Deploy) | "Give me a Netlify deploy checklist for a static site…" |

---

*End of blueprint. Version 1.0 — Timothy O Design.*
