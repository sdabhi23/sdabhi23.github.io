export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "content/assets": "blog/assets" });

  // Merge the portfolio's static files into the same output, at the root,
  // so one Eleventy build/serve produces the whole site (portfolio + blog)
  // and one dev server watches and live-reloads both — no manual copy step.
  eleventyConfig.addPassthroughCopy({ "../site": "." });

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
