import matter from "gray-matter";

export default function vitePluginMarkdownLoader() {
  return {
    name: "vite-plugin-markdown-loader",
    async transform(code, id) {
      if (!id.endsWith(".md")) {
        return null;
      }

      try {
        const { data: frontmatter, content } = matter(code);

        const output = `
					export const frontmatter = ${JSON.stringify(frontmatter)};
					export const content = ${JSON.stringify(content)};

					export default { frontmatter, content };
				`;

        return {
          code: output,
          map: null,
        };
      } catch (error) {
        this.error(`Failed to load markdown file: ${error.message}`);
      }
    },
  };
}
