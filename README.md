# Carlos Schrupp — Professional Portfolio

Static professional portfolio built with Astro and prepared for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Run the production checks with:

```bash
npm run check
npm run build
```

The GitHub Pages workflow sets `SITE_URL` and `BASE_PATH` for the repository subpath. A future custom-domain migration can set `BASE_PATH=/` and update `SITE_URL` without restructuring page links.

## Content structure

Project facts and case-study content live in `src/data/projects.ts`. Page presentation is shared through reusable Astro components and the dynamic `/portfolio/[slug]` route.
