import { projects, featuredProject } from "@/data/portfolio";
import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold text-zinc-100">Projects</h2>

        <div className="mb-16">
          <FeaturedProject />
        </div>

        <h3 className="mb-8 text-xl font-semibold text-zinc-300">Other work</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={i}
              className="card-hover flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="font-semibold text-zinc-100">{project.title}</h3>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-cyan-400 hover:underline"
                    aria-label="Read more"
                  >
                    →
                  </a>
                )}
              </div>
              <p className="mb-3 text-xs font-medium text-cyan-400/90">{project.tech}</p>
              <p className="flex-1 text-sm text-zinc-400">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
