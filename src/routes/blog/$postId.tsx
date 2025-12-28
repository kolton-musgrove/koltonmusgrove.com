import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import Markdown from "react-markdown";

export const Route = createFileRoute("/blog/$postId")({
  loader: async ({ params }) => {
    return import(`./${params.postId}.md`);
  },
  component: RenderBlogPost,
});

function RenderBlogPost() {
  const routeApi = getRouteApi("/blog/$postId");
  const post = routeApi.useLoaderData();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <article>
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">{post.frontmatter.title}</h1>
          <div className="text-text-dark">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          {post.frontmatter.description && (
            <p className="text-text-dark mt-4 text-lg">
              {post.frontmatter.description}
            </p>
          )}
          {post.frontmatter.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-background text-text rounded px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="prose prose-lg max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </div>
  );
}
