interface BlogPost {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  excerpt: string;
  draft: boolean;
  content: string;
  filename: string;
}

function getAllPosts(): BlogPost[] {}

function getPublishedPosts(): BlogPost[] {}

function getPostBySlug(slug: string): BlogPost {}

function getPostsByTopic(topic: string): BlogPost[] {}
