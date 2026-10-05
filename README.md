# Evan Camire’s portfolio

Personal portfolio for employers, clients, and collaborators, built with Next.js, TypeScript, and React.

**Live site:** https://evan-camire-portfolio.vercel.app/

## Run locally

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No environment variables or credentials are required.

```sh
npm run typecheck
npm run build
```

The production build exports static files to `out/`. The site has no backend, CMS, model calls, or delivery connections.

## What is here

- A personal homepage with selected work, experience, biography, writing, and contact links.
- Two detailed case studies at `/work/marketing-workflow` and `/work/pricing-workflow`.
- Client-side demonstrations with fictional data and predetermined responses.
- Selected, sanitized code excerpts already published in the case studies, with notes explaining their scope.

The client repositories are private. The demonstrations do not generate or send marketing content, connect to PriceLabs, or change real prices. Reported time savings are attributed to the clients, not independent measurements. Historical test results display the date they were verified; they are not tests run by this portfolio’s build.

## Editing

- `lib/content.ts`: profile, project copy, experience, biography, writing, and social links.
- `lib/evidence.ts`: code evidence and its explanatory notes.
- `app/editorial.css`: the paper-and-ink visual theme; `app/globals.css` contains the shared demo and case-study styles.
- `components/demos.tsx`: the predetermined interactive demonstrations.

Run `node scripts/generate-social-preview.cjs` to regenerate the social image. Its font and the site's fonts are self-hosted; their license notices are in `public/fonts/`.

Personal photographs belong to Evan Camire and are included for this portfolio. Publishing this source does not grant permission to reuse his likeness. See `public/code/README.md` for the limitations of the selected code excerpts.

## Publication boundaries

This repository does not contain credentials, deployment account configuration, subscriber data, the source resume, application drafts, or private project history. Deployment is managed separately. Merely running the local demonstrations performs no external actions.
