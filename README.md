# Client Site Shell — Reusable Next.js Starter

One config file. One component swap. Deploy in minutes.

## Project Structure

```
client-site-shell/
├── app/
│   ├── layout.tsx     ← Never touch. Auto-reads from config.ts
│   ├── page.tsx       ← Change ONE import per client
│   └── globals.css    ← Never touch
├── components/
│   └── SpiceGarden.tsx   ← Swap this file per client
├── lib/
│   └── config.ts         ← EDIT THIS per client
└── public/
    ├── favicon.ico        ← Replace per client
    └── og-image.jpg       ← Replace per client (1200x630)
```

## New Client in 6 Steps

1. Duplicate this folder: `cp -r client-site-shell new-client-name`
2. Edit `lib/config.ts` — fill in the client's real info
3. Drop your new component into `components/GoldenWok.tsx`
4. In `app/page.tsx` change the import to your new component
5. `npm run dev` — check locally
6. `npx vercel --prod` — live in seconds

## Colours

All colours flow from `config.ts` as CSS variables:
- `var(--color-primary)` — main brand colour
- `var(--color-secondary)` — accent
- `var(--grad-brand)` — gradient shorthand
- `var(--color-dark)` — page background
- `var(--color-border)` — subtle borders

Change colours in `config.ts` only. Nothing else needed.

## Component Rules

Each client component must:
- Start with `'use client'`
- Be a default export
- Use CSS variables for all brand colours
- Import `siteConfig` from `@/lib/config` for contact/hours/ordering data
"# brightsmile" 
