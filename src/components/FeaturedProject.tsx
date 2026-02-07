"use client";

import Image from "next/image";
import { useState } from "react";
import { featuredProject } from "@/data/portfolio";

const PLACEHOLDER = "/observia/placeholder.svg";

export default function FeaturedProject() {
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());
  const projectUrl = featuredProject.projectUrl;
  const companyUrl = featuredProject.companyUrl;

  const handleMediaError = (src: string) => {
    setFailedSrcs((prev) => new Set(prev).add(src));
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900/40">
      <div className="grid gap-0 lg:grid-cols-5">
        {/* Copy */}
        <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Featured project
          </p>
          <h2 className="mb-1 text-2xl font-bold text-zinc-100 sm:text-3xl">
            {featuredProject.title}
          </h2>
          <p className="mb-4 text-sm text-zinc-500">{featuredProject.subtitle}</p>
          <p className="mb-6 text-zinc-400">{featuredProject.description}</p>
          <p className="mb-4 text-xs font-medium text-cyan-400/90">{featuredProject.tech}</p>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
            >
              Visit Observia
              <span aria-hidden>→</span>
            </a>
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-cyan-400"
            >
              Built at {featuredProject.company} ©
            </a>
          </div>
        </div>

        {/* Media: video on top (no controls, autoplay loop), then images below */}
        <div className="grid grid-cols-2 gap-2 p-4 lg:col-span-3 lg:gap-3 lg:p-6">
          {featuredProject.media.map((item, i) => (
            <div
              key={i}
              className={`group relative aspect-video overflow-hidden rounded-xl border border-zinc-700/60 bg-zinc-800/50 ${i === 0 ? "col-span-2" : ""}`}
            >
              {item.type === "video" ? (
                <>
                  {!failedSrcs.has(item.src) ? (
                    <video
                      src={item.src}
                      poster={"poster" in item ? item.poster : undefined}
                      className="h-full w-full object-cover"
                      playsInline
                      muted
                      loop
                      autoPlay
                      onError={() => handleMediaError(item.src)}
                      preload="auto"
                    />
                  ) : null}
                  {failedSrcs.has(item.src) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-800">
                      <img src={PLACEHOLDER} alt={item.alt} className="h-full w-full object-cover opacity-80" />
                    </div>
                  )}
                </>
              ) : (
                <>
                  {!failedSrcs.has(item.src) ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      onError={() => handleMediaError(item.src)}
                    />
                  ) : (
                    <img
                      src={PLACEHOLDER}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Copyright footer */}
      <div className="border-t border-zinc-800 px-6 py-3 text-center text-xs text-zinc-500">
        Observia is a product of{" "}
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline"
        >
          Code District
        </a>
        . All rights reserved.
      </div>
    </article>
  );
}
