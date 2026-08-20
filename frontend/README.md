# Hackathon strategy and production website

A production-ready, multi-route marketing website for an institution-facing hackathon strategy and production company. It uses a warm editorial visual system, strongly prioritizes end-to-end hackathon delivery, and keeps every unknown fact as an editable placeholder.

## Run locally

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed in the terminal. Production checks:

```bash
npm run lint
npm run build
```

## Central content

- Company name, initials, tagline, contact details, social links, hero media, showreel, base URL, and primary CTAs: `content/site.ts`
- Header navigation: `content/navigation.ts`
- Services, service map, event formats, and engagement models: `content/services.ts`
- Five-step process: `content/process.ts`
- FAQs: `content/faqs.ts`
- Hackathons, case-study copy, metadata, media, galleries, timelines, outcomes, and related-project order: `content/hackathons.ts`
- Optional testimonials, team members, and partner logos: `content/testimonials.ts`, `content/team.ts`, and `content/partners.ts`

Empty testimonials, team, partner, and social arrays are hidden automatically. Never add invented entries.

## Add or replace a hackathon

Edit `content/hackathons.ts`. Each project controls the work archive preview, dynamic case-study route, metadata, facts, gallery, outcomes, and next-project navigation. To add a project, duplicate a complete object, choose a unique `slug`, add verified facts, and add its media references.

## Media replacement

The site deliberately displays polished CSS-based editorial placeholders when a `src` is empty, so there are no broken images before real assets are ready. Add optimized media beneath `public/media/`, then set each `src` in the content files.

Expected replacement layout:

```text
public/images/hackathons/
  iims-codefest/
  turboline-iims-2025/
  iims-perceptron-2026/
```

WebP, AVIF, JPEG, and PNG images are supported through `next/image`. Use meaningful alt text for real media.

- Hero: add the file and update `heroMedia` in `content/site.ts`. Set `type` to `"video"` only when a valid video and poster exist.
- Showreel: add the video and poster, set `showreel.videoSrc` and `showreel.posterSrc`, then set `placeholder` to `false`.
- Case-study covers and galleries: update `coverImage.src` and each `gallery[].src` in `content/hackathons.ts`.
- Partner logos: add approved files, then add entries to `content/partners.ts`.
- Social sharing artwork: `public/og.png`.

## Contact email delivery

Copy `.env.example` to `.env.local` and configure:

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

The API validates requests server-side with Zod, uses a honeypot, and sends through Resend without exposing the API key. In local development without configuration, it logs validated data and explicitly reports demo mode. In production without configuration, it returns a clear error and does not show a false success state.

## Deploy

Set the real production URL in `content/site.ts`, add the three email environment variables to the hosting environment, run the production build and deploy. For Vercel, set the project root directory to `frontend`; the included `vercel.json` supplies the correct build command and generates Vercel Build Output API files. Leave the Output Directory override empty. Configure the same variables in Project Settings → Environment Variables.

## Before launch

- [x] Set company name to `Amatrix Labs`
- [x] Set contact email to `rohanmainali@gmail.com`
- [x] Set phone number to `+977 9866265252`
- [x] Set location to `Kathmandu, Nepal`
- [ ] Replace `https://example.com` with the production domain
- [ ] Replace all placeholder media
- [ ] Replace Hackathon 1, 2, and 3
- [ ] Add real project facts and outcomes
- [ ] Add real partner logos only with permission
- [ ] Add real testimonials only with permission
- [ ] Add real team members only with permission
- [ ] Test the contact form and email delivery
- [ ] Add analytics only after selecting a privacy approach
- [ ] Review metadata and social preview
- [ ] Replace the draft privacy copy with an approved policy
- [ ] Test mobile layouts and keyboard navigation
- [ ] Check all external links and social profiles
