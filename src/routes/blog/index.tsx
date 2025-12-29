import { createFileRoute, Link } from "@tanstack/react-router";

interface PostMetadata {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  draft: boolean;
}

interface Post {
  frontmatter: PostMetadata;
  content: string;
  slug: string;
}

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const postModules = import.meta.glob("../posts/*.md");

    const posts: Post[] = await Promise.all(
      Object.entries(postModules).map(async ([path, importFn]) => {
        const module = (await importFn()) as {
          frontmatter: PostMetadata;
          content: string;
        };
        const slug = path.replace("../posts/", "").replace(".md", "");
        return {
          ...module,
          slug,
        };
      }),
    );

    posts.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );

    return { posts };
  },
  component: BlogPostsList,
});

function BlogPostsList() {
  const { posts } = Route.useLoaderData();

  const publishedPosts = posts.filter(
    (post) => !import.meta.env.PROD || !post.frontmatter.draft,
  );

  return (
    <div className="text-text flex w-full flex-col items-center md:items-start">
      {publishedPosts.length === 0 && (
        <p className="text-text-light">No blog posts found.</p>
      )}
      {publishedPosts.map((post) => (
        <Link
          to="/blog/$postId"
          className="mb-8 block w-fit"
          params={{ postId: post.slug }}
        >
          <h2 className="text-text-light mb-1 text-2xl font-bold">
            {post.frontmatter.title}
          </h2>
          <time
            className="text-text-dark text-sm"
            dateTime={post.frontmatter.date}
          >
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.frontmatter.description && (
            <p className="mt-3">{post.frontmatter.description}</p>
          )}
          {post.frontmatter.tags && (
            <div className="mt-4 flex flex-wrap text-xs">
              {post.frontmatter.tags.map((tag) => (
                <span key={tag} className="text-text-dark py-1 pr-2 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
