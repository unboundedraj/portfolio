"use client";

import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Maximize2, RefreshCw } from "lucide-react";

import { MINI_PROJECTS } from "@/data/miniprojects";

const fontSpaceGrotesk = "var(--font-space-grotesk), var(--font-poppins), ui-sans-serif, system-ui, sans-serif";
const fontInter = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const fontOrbitron = "var(--font-orbitron), ui-sans-serif, system-ui, sans-serif";

export function MiniProjectCard({
  project,
}: {
  project: (typeof MINI_PROJECTS)[number];
}) {
  const previewUrl = project.previewUrl ?? project.links.find((link) => /live|demo/i.test(link.label))?.href;

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/9 bg-zinc-950/80 shadow-[0_22px_60px_-26px_rgba(0,0,0,0.8)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-65 border-b border-white/8 bg-zinc-950/90 lg:min-h-80 lg:border-b-0 lg:border-r lg:border-white/8">
          {previewUrl ? (
            <iframe
              title={`${project.title} preview`}
              src={previewUrl}
              loading="lazy"
              className="h-full w-full"
              sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-sm leading-relaxed text-zinc-500" style={{ fontFamily: fontInter }}>
              Preview unavailable for this mini project.
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/55 to-transparent" />
          <div className="absolute right-3 top-3 flex gap-2">
            {previewUrl ? (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/55 text-white/85 backdrop-blur-sm transition-colors hover:bg-black/75 hover:text-white"
                aria-label={`Open ${project.title} preview in a new tab`}
              >
                <Maximize2 className="h-4 w-4" />
              </a>
            ) : null}
            {previewUrl ? (
              <button
                type="button"
                onClick={() => window.open(previewUrl, "_blank", "noopener,noreferrer")}
                className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/55 text-white/85 backdrop-blur-sm transition-colors hover:bg-black/75 hover:text-white"
                aria-label={`Refresh ${project.title} preview`}
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            ) : null}
          </div>
        </div>

        <div className="flex h-full flex-col gap-6 p-6 sm:p-7">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-white" style={{ fontFamily: fontSpaceGrotesk }}>
              {project.title}
            </h3>
            {project.status ? (
              <span
                className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-violet-100 uppercase"
                style={{ fontFamily: fontOrbitron }}
              >
                {project.status}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-zinc-300" style={{ fontFamily: fontInter }}>
            {project.description}
          </p>
        </div>

        {project.stack && project.stack.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-zinc-100"
                style={{ fontFamily: fontInter }}
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-2">
          {project.links.map((link) => {
            const isGitHub = /github/i.test(link.label);
            return (
              <a
                key={link.label + link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
                  isGitHub
                    ? "border-white/12 bg-white/10 text-white hover:bg-white/18"
                    : "border-violet-300/20 bg-violet-400/10 text-violet-50 hover:border-violet-200/35 hover:bg-violet-300/15"
                }`}
                style={{ fontFamily: fontOrbitron }}
              >
                {isGitHub ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
      </div>
    </article>
  );
}

export default function MiniProjects() {
  const hasProjects = MINI_PROJECTS.length > 0;

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-6 sm:pb-28 sm:pt-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-violet-500/10 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-3 text-[0.65rem] font-semibold tracking-[0.28em] text-violet-200/75 uppercase"
            style={{ fontFamily: fontOrbitron }}
          >
            Mini Projects
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl" style={{ fontFamily: fontSpaceGrotesk }}>
            Smaller builds, experiments, and utility ideas
          </h1>
          
        </div>

        {hasProjects ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {MINI_PROJECTS.map((project) => (
              <MiniProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/9 bg-zinc-950/75 p-8 text-center shadow-[0_20px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-10">
            <p className="text-lg font-semibold text-white" style={{ fontFamily: fontSpaceGrotesk }}>
              Mini projects are ready for content
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400" style={{ fontFamily: fontInter }}>
              Add entries in <span className="text-zinc-200">src/data/miniprojects/projects.ts</span> with titles, descriptions, stacks, and links. The page will render them automatically.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/#works"
                className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-400/10 px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:border-violet-200/40 hover:bg-violet-300/15"
                style={{ fontFamily: fontOrbitron }}
              >
                Back to Works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}