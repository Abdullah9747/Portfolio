import { site } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href={site.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-cyan-400"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
