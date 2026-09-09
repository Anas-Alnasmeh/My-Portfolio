# Anas Alnasmeh — Portfolio

A single-page portfolio for a Frontend Web Developer, built with React,
modern CSS (no framework), and Framer Motion.

## Stack

- React 19 (JavaScript, no TypeScript)
- Vite
- Framer Motion — page/section/card animations
- React Icons
- Axios — contact form submission
- Hand-written CSS design system (`src/styles/tokens.css`)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Structure

```
src/
  components/   shared UI: Navbar, Footer, Loader, Reveal, MagneticButton
  sections/     one file + one stylesheet per page section
  data/         content, separated from markup (edit here to update copy)
  hooks/        useScrollSpy, useCounter, useMousePosition, usePrefersReducedMotion
  styles/       tokens.css (design system) + base.css (globals/utilities)
  utils/        constants.js — name, email, social links, contact endpoint
```

## Before you deploy

1. **`src/utils/constants.js`** — set your real name, email, GitHub/LinkedIn
   URLs, resume link, and a real `CONTACT_ENDPOINT` (e.g. a Formspree
   endpoint or your own API route).
2. **`src/data/projects.js`, `certificates.js`, `testimonials.js`, `blog.js`**
   — replace the placeholder content with your real projects and copy.
3. **`src/sections/projects.css`** — the project cards currently render a
   placeholder gradient tile (`.project-card__media`); swap in real
   screenshots via an `<img>` if you'd like.
4. **`index.html`** — update the OG/Twitter meta `og:image` and `og:url`
   once the site has a real domain.

## Design system notes

- Colors, type scale, spacing, radii, shadows, and motion durations are all
  CSS custom properties in `src/styles/tokens.css` — change a value there
  and it propagates everywhere.
- The navbar is styled as an editor tab bar (hero.jsx, about.jsx, ...) as
  the page's signature visual motif, tying the chrome back to the
  "frontend developer" identity.
- `prefers-reduced-motion` is respected globally (`base.css`) and in the
  counter/magnetic-button hooks individually.
