# Portfolio

Personal site — [zahra-hanifi.github.io](https://zahra-hanifi.github.io)

A single-page portfolio built as my first project in React, Next.js and TypeScript,
coming from six years of Vue and Nuxt.

## Stack

- Next.js 16 (App Router)
- React 19, TypeScript (`strict`)
- Tailwind CSS v4
- Static export (`output: "export"`), deployed to GitHub Pages via GitHub Actions

## Notes on a few decisions

**Server Components by default.** The only client component is `Reveal`, which
handles the scroll-in animation. It takes its content through `children` rather
than rendering it itself, so every section it wraps stays a Server Component and
never reaches the client bundle.

**The hero is not animated.** It sits above the fold and is the LCP element, so
gating it behind an `IntersectionObserver` would mean waiting for hydration
before the page shows anything. Everything below it fades in on scroll.

**Content is typed, not inlined.** Projects, roles and stats live in
`src/app/content` as `as const satisfies` data. The literal types survive, and a
missing or misspelled field is a compile error rather than an empty card in
production.

**Theming through CSS variables.** Colours are defined once in `globals.css` and
exposed to Tailwind via `@theme inline`, so utility classes and raw CSS read from
the same source.

## Running locally

```bash
npm install
npm run dev
```