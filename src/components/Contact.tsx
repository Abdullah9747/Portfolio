import { site } from "@/data/portfolio";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800/80 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-4 text-3xl font-bold text-zinc-100">Get in Touch</h2>
        <p className="mb-10 max-w-2xl text-zinc-400">
          Have a project in mind or want to work together? Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactForm />
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-cyan-400">
              Or reach us directly
            </h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cyan-400">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cyan-400">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
