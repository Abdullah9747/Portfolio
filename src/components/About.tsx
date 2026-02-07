import { about } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-3xl font-bold text-zinc-100">{about.title}</h2>
        <div className="space-y-6 text-zinc-400">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
