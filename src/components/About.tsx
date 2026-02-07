import { about } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="mb-10 text-3xl font-bold text-zinc-100">{about.title}</h2>
        </Reveal>
        <div className="space-y-6 text-zinc-400">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <p className="leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
