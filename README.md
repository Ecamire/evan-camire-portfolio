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
- Larger original-interface galleries and native HTML Trek output examples, plus a separately hosted interactive Trek display demo.
- Existing sanitized excerpt downloads remain at their original URLs for compatibility. They are not promoted in the site.

The client repositories are private. Portfolio galleries navigate screenshots. The separate Trek demo uses the genuine console UI with a browser-local replay adapter and scripted responses. It does not call models, send marketing content, connect to client databases or APIs, or change real prices. Reported time savings are attributed to the clients, not independent measurements.

## Editing

- `lib/content.ts`: profile, project copy, experience, biography, writing, and social links.
- `lib/content.ts`: typed media, sample-output descriptions, and the external demo address.
- `app/editorial.css`: the paper-and-ink visual theme; `app/globals.css` contains the shared demo and case-study styles.
- `components/trek-samples.tsx`: accessible tabs and native HTML sample documents.
- `components/work-gallery.tsx`: the original screenshot galleries.

Run `node scripts/generate-social-preview.cjs` to regenerate the social image. Its font and the site's fonts are self-hosted; their license notices are in `public/fonts/`.

Personal photographs belong to Evan Camire and are included for this portfolio. Publishing this source does not grant permission to reuse his likeness. See `public/code/README.md` for the limitations of the selected code excerpts.

## Publication boundaries

This repository does not contain credentials, deployment account configuration, subscriber data, the source resume, application drafts, or private project history. Deployment is managed separately. Running the portfolio performs no external product actions.

## Product capture provenance

The homepage galleries and case-study hero previews use four screenshots supplied by Evan on October 6, 2026 for public use, showing the actual Trek Travel library and chat and Revenue Radar reports and chat. These captures are product evidence, not fictional fixtures. Separately, the output examples are saved agent-created work exported from the product library. Portfolio controls never execute client backends. Private capture harnesses and client source are not part of this repository.

The hero gallery uses Evan’s supplied photographs. Web exports omit embedded EXIF/location metadata; original uploads are not included. No journal pages or private reference documents are published.

## Product galleries

Selected Work presents two screenshot galleries with short descriptions. Trek shows chat and library; Revenue Radar AI Agent shows reports and chat. Images remain clickable, without separate full-size buttons or evidence badges. The galleries navigate captured interface states only. The case studies use these same screenshots at a larger width and retain architecture, decisions, testing discussion, and client-reported results. Trek includes distinct native HTML sample documents and a link to the separate keyless demo. Videos are no longer displayed anywhere on the site; existing media URLs remain available for compatibility.

Replace homepage screenshots and phase descriptions in `workGalleries` in `lib/content.ts`. Use product screenshots approved for public use; keep fictional tour assets clearly distinguished. Keep descriptions clear about the difference between a captured state and a live product action.

The Trek output examples are genuine saved agent-created assets captured on October 7, 2026: the Christmas newsletter, Fall Foliage flyer, and Jersey Boys final trip letter. Original artwork is unchanged; newsletter HTML has local asset URLs, responsive fitting, and removed live contact links/tracking. These are saved outputs, not live generation. The trip letter is not presented as an itinerary. SHA-256 evidence is in `public/samples/trek/assets/provenance.json`.

The separate display demo is hosted at https://demo.trektravelhq.com/. Its Cloudflare DNS record points to the standalone Vercel project. The original https://trek-portfolio-demo.vercel.app/ address remains available. The demo is a standalone static service, not a route on the production client server. It includes the genuine October 7 console snapshot but uses prepared, local responses rather than a live model. Each visitor's revisions, approvals, holds and resets are browser-local. Its content security policy prohibits API connections. No backend, client code history, sending infrastructure or credentials are published in this portfolio repository.
