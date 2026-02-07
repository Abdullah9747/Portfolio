"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { hero, site } from "@/data/portfolio";

export default function Hero() {
  // Try profile.jpeg first, then profile.jpg, then placeholder
  const [profileSrc, setProfileSrc] = useState<"/profile.jpeg" | "/profile.jpg" | null>("/profile.jpeg");

  return (
    <section id="hero" className="hero-gradient relative min-h-[100vh] pt-28 pb-24 md:min-h-[95vh] md:pt-36 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy — company-style */}
          <div>
            <p className="mb-5 inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {hero.badge}
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-[1.15] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.headline}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              {hero.subheadline}
            </p>
            <ul className="mb-10 flex flex-wrap gap-4">
              {hero.valueProps.map((prop, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-zinc-500"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  {prop}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
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
            </div>
          </div>

          {/* Profile photo — supports profile.jpeg or profile.jpg */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-transparent blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/80 shadow-2xl ring-1 ring-zinc-700/50">
                {profileSrc ? (
                  <Image
                    src={profileSrc}
                    alt={`${site.name} — ${site.tagline}`}
                    width={480}
                    height={480}
                    priority
                    className="aspect-square w-full max-w-[320px] object-cover md:max-w-[380px]"
                    onError={() => {
                      if (profileSrc === "/profile.jpeg") setProfileSrc("/profile.jpg");
                      else setProfileSrc(null);
                    }}
                  />
                ) : (
                  <img
                    src="/avatar.svg"
                    alt={`${site.name}`}
                    width={480}
                    height={480}
                    className="aspect-square w-full max-w-[320px] object-cover md:max-w-[380px]"
                  />
                )}
              </div>
            </div>
          </div>
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
