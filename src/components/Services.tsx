"use client";
import { services } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-4 text-3xl font-bold text-zinc-100"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
        >
          What I Offer
        </motion.h2>
        <motion.p
          className="mb-12 max-w-2xl text-zinc-400"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          I help teams and startups ship AI-powered products—from prototypes to production.
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="card-hover rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 + i * 0.06 }}
            >
              <h3 className="mb-2 font-semibold text-zinc-100">{service.title}</h3>
              <p className="text-sm text-zinc-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
