# Adam Chang — personal website

The personal site of Ching-Hsiang (Adam) Chang, data engineer.
Live at <https://adam-website-tau.vercel.app>.

## What is on the page

- **Hero**: my path drawn as a bronze → silver → gold data pipeline.
- **Experience**: five roles, each with a one-line result and expandable details.
- **Projects**: two live products (Kitchen Clash, 瘋起來) and a searchable outline of my GitHub repositories, grouped by topic.
- **Eswatini**: 237 days of diplomatic alternative service, with a diary heatmap built from my Instagram export and a photo gallery.
- **About and contact**: education, tools, certifications and a one-page résumé PDF.

The whole site is available in English and Traditional Chinese (toggle in the top bar).

## Editing content

All text lives in [`data/content.ts`](data/content.ts): profile, experience, projects, diary data and photo captions, each with an `en` and a `zh` version. Components in `components/` only handle layout.

- Add a GitHub project: append an entry to `REPOS`.
- Add a journey photo: put `name.webp` (about 1440 px) and `name-t.webp` (560 px square) in `public/journey/`, then add it to a chapter in `CHAPTERS`.
- Update the résumé: edit `scripts/resume.html`, then run `npm run resume` (needs Playwright: `npm i -D playwright && npx playwright install chromium`).

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
```

The AI assistant button appears only when a Gemini key is set as `API_KEY` or `VITE_GEMINI_API_KEY` (in `.env.local`, or in the Vercel project settings).
