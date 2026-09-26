# Blog

Static blog built with [Eleventy](https://www.11ty.dev/), published at `/blog` on shreydabhi.dev.

Eleventy also passthrough-copies the sibling `../site/` (the portfolio) into its own output root (see `eleventy.config.js`), so a single build and a single dev server produce and serve the *whole* site — portfolio at `/` and blog at `/blog` — with no manual copy step, and editing either `site/` or `blog/content/` live-reloads.

## Structure

- `content/posts/` — one Markdown file per post, named `YYYY-MM-DD-slug.md`
- `content/_includes/` — layouts (`base.njk`, `post.njk`)
- `content/index.njk` — the `/blog` listing page
- `content/assets/` — blog-only CSS; `/css/shared.css` (tokens, fonts, header/footer chrome) is reused so the blog matches the rest of the site
- `drafts/` — unfinished writing that hasn't been published yet

## Writing a post

Drop unfinished writing into `drafts/`, then when it's ready, create `content/posts/YYYY-MM-DD-your-slug.md`:

```md
---
title: Your title
description: One-line description for the listing page
---

Your post body, in Markdown.
```

The date in the filename sets the publish date and sort order; the slug becomes the URL (`/blog/your-slug/`).

## Local preview

```bash
cd blog
pnpm install
pnpm run serve
```

Serves the whole site at `http://localhost:8080/` — portfolio at `/`, blog at `/blog/` — and watches both `site/` and `blog/content/` for live reload. Leave it running while you edit either one.

## Build

```bash
cd blog
pnpm install
pnpm run build
```

Output goes to `blog/_site/` and is the complete site (portfolio + blog). The GitHub Actions workflow (`.github/workflows/gh-pages.yml`) runs this on push to `master` and uploads `blog/_site/` directly — no separate assembly step.
