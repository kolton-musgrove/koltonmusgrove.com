/// <reference types="vite/client" />

declare module "*.md" {
  export const frontmatter: Record<string, object>;
  export const content: string;

  const markdown: {
    frontmatter: Record<string, object>;
    content: string;
  };
  export default markdown;
}
