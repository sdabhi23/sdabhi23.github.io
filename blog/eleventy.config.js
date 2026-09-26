export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "content/assets": "blog/assets" });

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  eleventyConfig.addFilter("isoDate", (dateObj) =>
    new Date(dateObj).toISOString().slice(0, 10)
  );

  // RFC 822 date, as required by the pubDate/lastBuildDate fields in RSS 2.0.
  eleventyConfig.addFilter("dateRfc822", (dateObj) =>
    new Date(dateObj).toUTCString()
  );

  return {
    // Post bodies are plain Markdown — don't run them through a template
    // engine first, so literal {{ }} / {% %} in a post (code samples, JSON,
    // etc.) render as-is instead of being interpreted.
    markdownTemplateEngine: false,
    dir: {
      input: "content",
      output: "_site",
    },
  };
}
