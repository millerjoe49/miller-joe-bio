import Link from "next/link";
import { posts } from "./posts";

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <section className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
          Notes on NetSuite delivery, applied AI, and how I actually use these tools day to
          day.
        </p>
      </section>

      <div className="divide-y divide-black/[.08] dark:divide-white/[.145]">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block py-6 first:pt-0"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {post.date}
            </p>
            <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              {post.title}
            </h2>
            <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
