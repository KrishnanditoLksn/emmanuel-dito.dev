# Project Revamp Report: Neobrutalism Style

## Overview
This project has been revamped from its legacy state to a modern **Neobrutalism** aesthetic, drawing structural inspiration from **Dodonut.com** for the About section. The design focuses on high contrast, bold typography, stark borders, and proportional spacing.

## Technical Changes

### 1. Styling Foundation
- **Tailwind Configuration**: Added custom extensions for `boxShadow` (neo), `borderWidth` (4, 8), and a vibrant `neo` color palette.
- **Global CSS**: Defined base styles in `index.css` for the body and created reusable utility classes: `.neo-border`, `.neo-shadow`, `.neo-card`, and `.neo-button`.

### 2. Component Revamps
- **Navbar**: Sticky header with thick bottom border, bold neobrutalist logo, and redesigned mobile menu.
- **About Section**: Redesigned as a "Manifesto" style grid. Features bold headers, numbered value blocks, and high-impact color accents (yellow, pink, green).
- **Description Section**: Clean 2-column layout with a stylized neobrutalist card for the profile image.
- **Skills Section**: Displayed as a collection of neobrutalist "stamps" or blocks with hover effects.
- **Projects Section**: Updated project cards with thick borders, hard shadows, and distinct category tags.
- **Resume Section**: High-contrast call-to-action with a large neobrutalist download button.
- **Footer**: Stark black background with vibrant neobrutalist social buttons and clear spacing.

### 3. Design Principles Applied
- **Proportionality**: Used consistent `max-w-7xl` containers and standardized padding/margins.
- **Non-overlapping Elements**: Utilized grid gaps and flex spacing to ensure clear separation of content.
- **Aesthetics**: Bold borders (`border-4`), hard offset shadows (`shadow-neo`), and stark color blocks.

## How to Run
```bash
npm install
npm run dev
```

## Reference
- Design Style: [Neobrutalism](https://www.neobrutalism.dev/)
- Layout Inspiration: [Dodonut](https://dodonut.com/)
