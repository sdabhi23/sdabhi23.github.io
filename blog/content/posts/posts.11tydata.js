export default {
  tags: ["posts"],
  layout: "post.njk",
  // A JS function permalink is resolved independently of the (disabled)
  // markdown template engine, unlike a templated "{{ ... }}" string.
  permalink: (data) => `/blog/${data.page.fileSlug}/index.html`,
};
