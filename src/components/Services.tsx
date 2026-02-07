import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-zinc-100">What We Offer</h2>
        <p className="mb-12 max-w-2xl text-zinc-400">
          We help teams and startups ship AI-powered products—from prototypes to production.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-hover rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <h3 className="mb-2 font-semibold text-zinc-100">{service.title}</h3>
              <p className="text-sm text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
