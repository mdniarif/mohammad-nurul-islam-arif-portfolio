# Mohammad Nurul Islam — Cinematic Portfolio

A responsive React + TypeScript + Vite portfolio adapted from the supplied resume. The visual direction uses a white / near-black / vivid-red editorial palette, a short preloader, animated section reveals, and mobile navigation.

## Run locally

Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Content source and accuracy notes

Content is based on `Mohammad Nurul Islam All Documents.pdf` supplied with the brief.

- Experience, roles, dates, education, skills, training, location and contact information are transcribed from the resume.
- No project metrics, client endorsements, social URLs, or unverified achievements have been invented.
- The resume says “8+ years” in its summary, while its listed employment history begins in January 2020. The website therefore uses “2020—NOW” rather than repeating an experience-duration claim that may need clarification.
- The hero uses a typographic monogram instead of inventing a portrait or character animation. Replace the monogram panel with an approved profile photograph if desired.
- The site does not include a resume download link because a public downloadable copy should be explicitly approved before publishing.

## Main files

- `src/App.tsx` — page content, sections, experience timeline, navigation and interactions.
- `src/styles.css` — design system, responsive layouts, animation and reduced-motion handling.
- `index.html` — metadata and font loading.

## Before publishing

1. Confirm the preferred public phone number and email.
2. Add only verified public social/profile links.
3. Decide whether to publish a downloadable resume.
4. If adding a portrait, use a photograph you have permission to publish.
5. Run `npm run build` and test links and layouts on desktop and mobile.

## Accessibility and performance

- Semantic sections and keyboard-accessible links/buttons.
- Mobile navigation has an accessible label and expanded state.
- Reduced-motion preference disables entrance animations.
- No autoplay video or external media assets are required.
- Google Fonts are loaded externally; system sans-serif fallback remains available.
