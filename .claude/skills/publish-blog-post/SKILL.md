---
name: publish-blog-post
description: Publish a plain-text writing draft as a blog post at /blog on shreydabhi.dev. Use when the user asks to publish, add, or push a writing draft to the blog.
---

# Publish a blog post

Convert a draft in `blog/drafts/` (or draft text supplied directly in the request) into a Markdown post under `blog/content/posts/`, then commit and push it.

## Non-negotiable content rule

Preserve the user's writing exactly. Do not rewrite, edit, correct, summarize, improve, reorder, or remove words. The only allowed transformations are:

- Extracting metadata explicitly provided (title, description, slug, date).
- Wrapping the body in Markdown frontmatter.
- Formatting fixes strictly required by Markdown/YAML syntax (e.g. escaping a literal `---` at the start of a line).

If the title, description, or slug is missing, ask for it. Do not invent missing metadata. Date defaults to today if not given.

## Post format

Each post is `blog/content/posts/YYYY-MM-DD-<slug>.md`:

```md
---
title: <title>
description: <description>
---

<body, verbatim>
```

The `YYYY-MM-DD` prefix in the filename sets the publish date (Eleventy reads it automatically) and the sort order on the listing page. `<slug>` becomes the URL: `/blog/<slug>/`.

## Workflow

1. Read the draft file, or use the draft text supplied directly in the request.
2. Confirm or obtain title, description, and slug for any that are missing. Use today's date unless one is given.
3. Check `blog/content/posts/` for a filename collision on that date + slug.
4. Write the post file exactly as shown above.
5. Run `cd blog && pnpm install && pnpm run build` and confirm it succeeds.
6. If the draft came from `blog/drafts/`, remove the draft file (ask first if it's unclear whether the user wants it deleted).
7. Commit and push to the current branch.
8. Report the created file, the commit, and the post's URL (`https://shreydabhi.dev/blog/<slug>/`) once merged and deployed.

Never publish if the build fails, the slug already exists, or metadata is ambiguous. Never modify the draft file's wording, even when asked to "clean it up" — ask instead whether they want the words changed or just formatted.
