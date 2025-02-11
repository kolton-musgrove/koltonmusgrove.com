import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: Blog,
})

function Blog() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Blog</h1>
      <p>This is the blog page.</p>
    </div>
  )
}
