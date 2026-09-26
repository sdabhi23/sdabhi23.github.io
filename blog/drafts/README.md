# Writing drafts

Drop unfinished writing here as plain-text files. The `publish-blog-post` skill (see `.claude/skills/publish-blog-post/`) turns a draft into a post under `content/posts/` without changing its words.

Provide this metadata in the request, or at the top of the draft file:

```
Title: My post title
Description: One-line description
Slug: my-post-title
Date: 2026-09-26
```

`Date` is optional — if you leave it out, the publish skill uses today's date. Everything after the metadata block is treated as the post body and is written to the Markdown file as-is.
