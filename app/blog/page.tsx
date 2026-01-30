import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-20 flex justify-center">
  <div className="w-full max-w-3xl">
    <h1 className="text-4xl font-bold mb-10 text-center">
      <span className="text-white">ML</span>{" "}
      <span className="text-cyan-400">Field Journal</span>
    </h1>

    <ul className="space-y-6">
      {posts.map(post => (
        <li
          key={post.slug}
          className="border border-white/10 p-5 rounded-xl bg-white/5 hover:border-cyan-400/40 transition"
        >
          <Link href={`/blog/${post.slug}`} className="text-xl underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</main>

  );
}
