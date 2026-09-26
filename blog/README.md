# Blog

Static blog built with [Eleventy](https://www.11ty.dev/), published at `/blog` on shreydabhi.dev.

## Structure

- `content/posts/` — one Markdown file per post, named `YYYY-MM-DD-slug.md`
- `content/_includes/` — layouts (`base.njk`, `post.njk`)
- `content/index.njk` — the `/blog` listing page
- `content/feed.njk` — the RSS feed at `/blog/feed.xml`
- `content/assets/` — blog-only CSS; the portfolio's own CSS (`/css/reset.css`, `/css/root.css`) is reused for fonts and color tokens, so the blog matches the rest of the site
- `drafts/` — unfinished writing that hasn't been published yet

## Writing a post

Drop unfinished writing into `drafts/`, or ask Claude Code to publish it — see `.claude/skills/publish-blog-post/SKILL.md`.

To write directly, create `content/posts/YYYY-MM-DD-your-slug.md`:

```md
---
title: Your title
description: One-line description for the listing and RSS feed
---

Your post body, in Markdown.
```

The date in the filename sets the publish date and sort order; the slug becomes the URL (`/blog/your-slug/`).

## Local preview

```bash
cd blog
npm install
npm run serve
```

Serves the blog at `http://localhost:8080/blog/`.

## Build

```bash
cd blog
npm install
npm run build
```

Output goes to `blog/_site/blog/`. The GitHub Actions workflow (`.github/workflows/gh-pages.yml`) runs this automatically on push to `master` and merges it with `site/` before deploying.
