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
- Guided screenshot tours of the original product interfaces, captured locally with fictional sample data.
- Existing sanitized excerpt downloads remain at their original URLs for compatibility. They are not promoted in the site.

The client repositories are private. The tours navigate recorded screenshots only. They do not generate or send marketing content, connect to PriceLabs, or change real prices. Reported time savings are attributed to the clients, not independent measurements.

## Editing

- `lib/content.ts`: profile, project copy, experience, biography, writing, and social links.
- `lib/content.ts`: typed media, tour steps, sample scenarios, and decision branches.
- `app/editorial.css`: the paper-and-ink visual theme; `app/globals.css` contains the shared demo and case-study styles.
- `components/product-tour.tsx`: screenshot navigation, scenario selection, approval and hold branches, and reset.

Run `node scripts/generate-social-preview.cjs` to regenerate the social image. Its font and the site's fonts are self-hosted; their license notices are in `public/fonts/`.

Personal photographs belong to Evan Camire and are included for this portfolio. Publishing this source does not grant permission to reuse his likeness. See `public/code/README.md` for the limitations of the selected code excerpts.

## Publication boundaries

This repository does not contain credentials, deployment account configuration, subscriber data, the source resume, application drafts, or private project history. Deployment is managed separately. Running the portfolio performs no external product actions.

## Product capture provenance

The homepage galleries and case-study hero previews use four screenshots supplied by Evan on October 6, 2026 for public use, showing the actual Trek Travel library and chat and Revenue Radar reports and chat. These captures are product evidence, not fictional fixtures. Separately, the detailed scenario tours use the original interfaces in isolated local environments with fictional sample data. Portfolio controls never execute client backends. Private capture harnesses and client source are not part of this repository.

The hero gallery uses Evan’s supplied photographs. Web exports omit embedded EXIF/location metadata; original uploads are not included. No journal pages or private reference documents are published.

## Product galleries

Selected Work presents two screenshot galleries with short descriptions. Trek shows chat and library; Revenue Radar AI Agent shows reports and chat. Images remain clickable, without separate full-size buttons or evidence badges. The galleries navigate captured interface states only. Full case studies retain their detailed scenario tours and rendered sample outputs. Videos are no longer displayed anywhere on the site; existing media URLs remain available for compatibility.

Replace homepage screenshots and phase descriptions in `workGalleries` in `lib/content.ts`. Use product screenshots approved for public use; keep fictional tour assets clearly distinguished. Keep descriptions clear about the difference between a captured state and a live product action.

The fictional Trek walkthrough captures use the current main-branch console and canvas design engine (source revision ba3a016), including the Poster newsletter, Journey itinerary, and Handout renderer. Sample operator portraits and contacts are substituted locally. Revenue Radar uses its original frontend and chat interface (source revision a3e3ad3), with predetermined fictional chat replies in the isolated capture environment. No live model calls occur. Photographs are public-domain NPS / Victoria Stauffenberg images: [bridge](https://npgallery.nps.gov/AssetDetail/f825bda3-7342-470e-a377-9ca9b4bc1fcb), [river](https://npgallery.nps.gov/AssetDetail/8be9f9f5-5584-4598-bc2b-858128caa5bc), and [trail](https://npgallery.nps.gov/AssetDetail/6797d83a-3666-4a82-bffd-4774bd6f04bb). These images illustrate a fictional trip, not an advertised client departure. No travel photographs are generated.

Revenue Radar copy was checked against the private repository scheduler and auto-apply implementation. The daily cycle defaults to 05:00 America/New_York and automatically applies eligible proposals, with configured write gates and approval exceptions. This source review establishes implemented behavior; the portfolio is not a live production health monitor.
