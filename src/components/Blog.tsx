import { blogPosts, site } from "@/data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-zinc-100">Writing</h2>
        <p className="mb-12 max-w-2xl text-zinc-400">
          I write about AI, ML, and building things. Read more on Medium.
        </p>
        <ul className="space-y-4">
          {blogPosts.map((post, i) => (
            <li key={i}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline flex flex-wrap items-baseline justify-between gap-2 rounded-lg py-2 text-zinc-300 hover:text-cyan-400"
              >
                <span>{post.title}</span>
                <span className="text-sm text-zinc-500">{post.date}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-cyan-400 hover:underline"
        >
          View all on Medium →
        </a>
      </div>
    </section>
  );
}
