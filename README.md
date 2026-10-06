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

Trek screenshots use the original console and asset renderers with an isolated local fixture server. Revenue Radar screenshots use its existing demo builder and original dashboard with fictional scenario fixtures. The sample operator, groups, listing, prices, booking figures, and outcomes are fictional. Captures do not execute the original production backends. Client logos and contact details are excluded except for the explicitly presented Trek product name and mark. Private capture harnesses and client source are not part of this repository.

The hero gallery uses Evan’s supplied photographs. Web exports omit embedded EXIF/location metadata; original uploads are not included. No journal pages or private reference documents are published.

## Recorded walkthroughs

Selected Work leads with self-hosted, captioned MP4 walkthroughs (48 seconds for Trek; 34 seconds for Revenue Radar). Native controls provide play, pause, seeking, and full screen. Nothing auto-plays; video data is requested on playback. Each video also has WebVTT captions and an expandable text transcript.

These are edited sequences of actual locally captured interfaces and renderer outputs with fictional fixtures. They do not show a live model run or operate client backends. The Trek sample uses its existing Evening newsletter design and original print renderers, with a fictional greeting substituted into its recipient merge field. Photographs are public-domain NPS / Victoria Stauffenberg images: [bridge](https://npgallery.nps.gov/AssetDetail/f825bda3-7342-470e-a377-9ca9b4bc1fcb), [river](https://npgallery.nps.gov/AssetDetail/8be9f9f5-5584-4598-bc2b-858128caa5bc), and [trail](https://npgallery.nps.gov/AssetDetail/6797d83a-3666-4a82-bffd-4774bd6f04bb). These images illustrate a fictional trip, not an advertised client departure. No travel photographs are generated.
