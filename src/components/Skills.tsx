import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="mb-12 text-3xl font-bold text-zinc-100">Technical Skills</h2>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Reveal>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-cyan-400">Languages</h3>
            </Reveal>
            <ul className="flex flex-wrap gap-2">
              {skills.languages.map((s) => (
                <Reveal key={s} delay={0.03}>
                  <li className="rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300">{s}</li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-cyan-400">Frameworks & Libraries</h3>
            </Reveal>
            <ul className="flex flex-wrap gap-2">
              {skills.frameworks.map((s) => (
                <Reveal key={s} delay={0.03}>
                  <li className="rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300">{s}</li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-cyan-400">Tools</h3>
            </Reveal>
            <ul className="flex flex-wrap gap-2">
              {skills.tools.map((s) => (
                <Reveal key={s} delay={0.03}>
                  <li className="rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300">{s}</li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
