"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { hero, site } from "@/data/portfolio";

export default function Hero() {
  // Try profile.png first (transparent BG), then profile.jpeg, profile.jpg, then placeholder
  const [profileSrc, setProfileSrc] = useState<"/profile.png" | "/profile.jpeg" | "/profile.jpg" | null>("/profile.png");
  const isPng = profileSrc === "/profile.png";
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.15]);
  const bgParallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Disable parallax on small screens to avoid mobile jitter/vibration
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="hero-gradient relative min-h-[100vh] pt-20 pb-24 md:min-h-[95vh] md:pt-24 md:pb-32">
      {/* Parallax mesh overlay */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 transform-gpu"
        style={isMobile ? undefined : { y: bgParallaxY, willChange: "transform" }}
      >
        <div className="absolute left-1/2 top-[10%] h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </motion.div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-10 lg:gap-16">
          {/* Copy — Apple-style staggered entrance with slight parallax */}
          <motion.div
            className="lg:col-span-6 transform-gpu"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={isMobile ? undefined : { y: textY, willChange: "transform" }}
          >
            <motion.p
              className="mb-5 inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              {hero.badge}
            </motion.p>
            <motion.h1
              className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              {hero.subheadline}
            </motion.p>
            <motion.ul
              className="mb-10 flex flex-wrap gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {hero.valueProps.map((prop, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2 text-sm text-zinc-500"
                  variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  {prop}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:shadow-cyan-500/30"
              >
                {hero.cta}
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-800/50 px-7 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/50 hover:bg-zinc-800 hover:text-cyan-400"
              >
                {hero.ctaSecondary}
              </Link>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-zinc-600 px-5 py-3.5 text-zinc-400 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-zinc-600 px-5 py-3.5 text-zinc-400 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile photo — use profile.png (transparent BG) or profile.jpeg / profile.jpg */}
          <motion.div
            className={
              (isPng ? "lg:col-span-4 flex justify-center pl-4 md:pl-6" : "lg:col-span-4 flex justify-center lg:justify-end pl-4 md:pl-6") +
              " transform-gpu"
            }
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            style={isMobile ? undefined : { y: imgY, scale: imgScale, willChange: "transform" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-transparent blur-xl"
                style={isMobile ? undefined : { opacity: glowOpacity, willChange: "opacity" }}
              />
              <motion.div
                className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-transparent shadow-2xl ring-1 ring-zinc-700/50 pl-4 md:pl-6 pr-2 md:pr-3 transform-gpu"
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                {profileSrc ? (
                  <Image
                    src={profileSrc}
                    alt={`${site.name} — ${site.tagline}`}
                    width={640}
                    height={640}
                    priority
                    className="aspect-square w-full max-w-[380px] object-cover object-center md:max-w-[460px]"
                    onError={() => {
                      if (profileSrc === "/profile.png") setProfileSrc("/profile.jpeg");
                      else if (profileSrc === "/profile.jpeg") setProfileSrc("/profile.jpg");
                      else setProfileSrc(null);
                    }}
                  />
                ) : (
                  <img
                    src="/avatar.svg"
                    alt={`${site.name}`}
                    width={480}
                    height={480}
                    className="aspect-square w-full max-w-[340px] object-cover object-center md:max-w-[420px]"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
