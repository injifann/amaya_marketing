import fm from "front-matter";

const allPostFiles = import.meta.glob('../posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

export const posts = Object.entries(allPostFiles)
  .map(([path, rawContent]) => {
    const slug = path
      .split("/")
      .pop()
      .replace(".md", "");

    const { attributes, body } = fm(rawContent);

    return {
      slug,
      title: attributes.title || "Untitled",
      date: attributes.date || "No date",
      content: body,
      tags: attributes.tags || [],
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // newest first