import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Route = createFileRoute("/blog/$postId")({
  loader: async ({ params }) => {
    return import(`../posts/${params.postId}.md`);
  },
  component: RenderBlogPost,
});

function RenderBlogPost() {
  const routeApi = getRouteApi("/blog/$postId");
  const post = routeApi.useLoaderData();

  useDocumentTitle(`${post.frontmatter.title} - Kolton Musgrove`);

  return (
    <div className="mx-auto w-full md:pt-8">
      <article>
        <header className="mb-8">
          <h1 className="text-text-light mb-2 text-3xl font-bold">
            {post.frontmatter.title}
          </h1>
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
            <p className="text-text mt-4 text-lg">
              {post.frontmatter.description}
            </p>
          )}
          {post.frontmatter.tags && (
            <div className="mt-4 flex flex-wrap gap-1">
              {post.frontmatter.tags.map((tag: string) => (
                <span key={tag} className="text-text-dark py-1 pr-2 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div className="prose text-text prose-lg max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </div>
  );
}
