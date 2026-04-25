"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";

import logoContentstack from "@/assets/contentstack_logo.jpeg";
import logoKv from "@/assets/kv_logo.jpg";

const fontSpaceGrotesk = "var(--font-space-grotesk), var(--font-poppins), ui-sans-serif, system-ui, sans-serif";
const fontInter = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const fontOrbitron = "var(--font-orbitron), ui-sans-serif, system-ui, sans-serif";

/** Remote logos (Wikimedia Commons / English Wikipedia). KV & Contentstack use `src/assets`. */
const LOGO_APS =
  "https://upload.wikimedia.org/wikipedia/en/b/be/APS_Pune_logo.jpg";
const LOGO_AIT =
  "https://upload.wikimedia.org/wikipedia/en/6/6a/AIT_Pune_logo.gif";

type JourneyMilestone = {
  id: string;
  title: string;
  period: string;
  /** Full place name / address line — shown under the title in Orbitron. */
  location: string;
  /** Optional logo: remote URL or imported static asset (`next/image`). */
  logoUrl?: string | StaticImageData;
  /** Accessible name for the logo (defaults to `title`). */
  logoAlt?: string;
  /** Optional score / percentage — golden neon, shown above the body copy. */
  marks?: string;
  /** Optional CGPA (college) — same golden neon treatment as `marks`. */
  cgpa?: string;
  description: string;
  images?: { src: StaticImageData; alt: string }[];
};

const MILESTONES: JourneyMilestone[] = [
  {
    id: "born",
    title: "Born",
    period: "Port Blair",
    location: "Port Blair, Andaman and Nicobar Islands, India",
    description: "Where it started — then years of new schools, cities, and people across India.",
  },
  {
    id: "aps-chandimandir",
    title: "Initial schooling",
    period: "Standards 1–3",
    location: "Army Public School (APS), Chandimandir, Panchkula, Haryana, India",
    logoUrl: LOGO_APS,
    logoAlt: "Army Public School (India) logo",
    description: "Early years shaped by routine, discipline, and learning alongside peers.",
  },
  {
    id: "aps-lucknow",
    title: "APS Nehru Road",
    period: "Standards 4–5",
    location: "Army Public School, Nehru Road, Lucknow, Uttar Pradesh, India",
    logoUrl: LOGO_APS,
    logoAlt: "Army Public School (India) logo",
    description: "Continued building basics with a heavier tilt toward academics and steady habits.",
  },
  {
    id: "kv-thiruvananthapuram",
    title: "KV AFS Akkulam",
    period: "Standards 5–7",
    location: "Kendriya Vidyalaya, Air Force Station Akkulam, Thiruvananthapuram, Kerala, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    description: "Middle school in a new region — new peers, new syllabus, quick adaptation.",
  },
  {
    id: "kv-shillong",
    title: "KV Happy Valley",
    period: "Standards 7–9",
    location: "Kendriya Vidyalaya, Happy Valley, Shillong, Meghalaya, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    description: "Hill-town years — balancing classwork with growing curiosity about tech beyond textbooks.",
  },
  {
    id: "kv-lucknow-10",
    title: "KV Lucknow Cantt",
    period: "Class 10",
    location: "Kendriya Vidyalaya, Lucknow Cantt, Uttar Pradesh, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    marks: "94.6%",
    description: "Board year — solid footing before committing fully to the science stream.",
  },
  {
    id: "kv-lucknow-11",
    title: "KV Lucknow Cantt",
    period: "Class 11 · PCM",
    location: "Kendriya Vidyalaya, Lucknow Cantt, Uttar Pradesh, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    marks: "88%",
    description: "PCM year — drilling fundamentals for boards and engineering entrance prep.",
  },
  {
    id: "kv-lucknow-12",
    title: "KV Lucknow Cantt",
    period: "Class 12",
    location: "Kendriya Vidyalaya, Lucknow Cantt, Uttar Pradesh, India",
    logoUrl: logoKv,
    logoAlt: "Kendriya Vidyalaya Sangathan logo",
    marks: "95%",
    description: "Final school year — closing this chapter before undergrad engineering.",
  },
  {
    id: "ait-pune",
    title: "B.E. Computer Engineering",
    period: "Army Institute of Technology, Pune",
    location: "Army Institute of Technology (AIT), Alandi Road, Dighi Hills, Pune, Maharashtra, India",
    logoUrl: LOGO_AIT,
    logoAlt: "Army Institute of Technology, Pune logo",
    cgpa: "8.65",
    description: "Undergrad computer engineering — systems thinking, serious code, and shipping real projects.",
  },
  {
    id: "contentstack-intern",
    title: "Associate Software Engineering Intern",
    period: "Contentstack",
    location: "Contentstack — headless CMS & composable DXP (product company)",
    logoUrl: logoContentstack,
    logoAlt: "Contentstack",
    description:
      "Product engineering at a product-led org: a headless CMS and digital experience platform — shipping features, integrations, and customer-facing experiences.",
  },
];

const neonGoldStat: CSSProperties = {
  fontFamily: fontOrbitron,
  color: "#fde68a",
  textShadow:
    "0 0 10px rgba(253, 224, 71, 0.95), 0 0 22px rgba(250, 204, 21, 0.75), 0 0 42px rgba(245, 158, 11, 0.45), 0 0 64px rgba(217, 119, 6, 0.25)",
};

function JourneyMilestoneCard({
  milestone,
  align,
  visible,
}: {
  milestone: JourneyMilestone;
  align: "left" | "right";
  visible: boolean;
}) {
  const slideFrom = align === "left" ? "-translate-x-10" : "translate-x-10";

  return (
    <div
      className={`relative z-[1] max-w-xl transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:max-w-3xl ${
        align === "left" ? "ml-0 mr-auto lg:pr-8" : "ml-auto mr-0 lg:pl-8"
      } ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100 blur-0"
          : `${slideFrom} translate-y-10 opacity-0 blur-sm`
      }`}
    >
      <article
        className={`rounded-2xl border border-white/[0.08] bg-zinc-950/55 p-5 shadow-lg shadow-black/30 backdrop-blur-md transition-shadow duration-700 sm:p-6 ${
          align === "left" ? "lg:text-right" : "lg:text-left"
        } ${visible ? "shadow-[0_0_40px_-8px_rgba(139,92,246,0.25)]" : "shadow-black/20"}`}
      >
        <div
          className={`mb-2 flex items-start gap-3 ${align === "left" ? "lg:flex-row-reverse" : ""} ${
            align === "left" ? "lg:justify-end" : ""
          }`}
        >
          {milestone.logoUrl ? (
            <div
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/50 ${
                align === "left" ? "lg:ml-0" : ""
              }`}
            >
              <Image
                src={milestone.logoUrl}
                alt={milestone.logoAlt ?? milestone.title}
                fill
                className="object-contain p-1.5"
                sizes="56px"
                unoptimized={
                  typeof milestone.logoUrl === "string" &&
                  milestone.logoUrl.endsWith(".svg")
                }
              />
            </div>
          ) : null}
          <div className={`min-w-0 flex-1 ${align === "left" ? "lg:text-right" : ""}`}>
            <p
              className="mb-1 text-[0.65rem] font-semibold tracking-[0.2em] text-violet-300/80 uppercase"
              style={{ fontFamily: fontSpaceGrotesk }}
            >
              {milestone.period}
            </p>
            <h3
              className="mb-0 text-xl font-semibold tracking-tight text-white sm:text-2xl"
              style={{ fontFamily: fontSpaceGrotesk }}
            >
              {milestone.title}
            </h3>
          </div>
        </div>
        <p
          className="mb-3 text-[0.7rem] leading-snug font-medium tracking-[0.06em] text-violet-200/95 sm:text-xs sm:tracking-[0.08em]"
          style={{ fontFamily: fontOrbitron }}
        >
          {milestone.location}
        </p>
        {milestone.marks ? (
          <p className="mb-3 text-2xl font-semibold tabular-nums tracking-wide sm:text-3xl" style={neonGoldStat}>
            {milestone.marks}
          </p>
        ) : null}
        {milestone.cgpa ? (
          <div className="mb-3">
            <p
              className="mb-1 text-[0.65rem] font-semibold tracking-[0.22em] text-amber-200/90 uppercase"
              style={{ fontFamily: fontOrbitron }}
            >
              CGPA
            </p>
            <p className="text-2xl font-semibold tabular-nums tracking-wide sm:text-3xl" style={neonGoldStat}>
              {milestone.cgpa}
            </p>
          </div>
        ) : null}
        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base" style={{ fontFamily: fontInter }}>
          {milestone.description}
        </p>
        {milestone.images && milestone.images.length > 0 && (
          <div
            className={`mt-4 flex flex-wrap gap-3 ${align === "left" ? "lg:justify-end" : "lg:justify-start"}`}
          >
            {milestone.images.map((img) => (
              <div
                key={img.alt}
                className={`relative aspect-video w-full max-w-[280px] overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-all delay-100 duration-700 sm:max-w-xs ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="320px" />
              </div>
            ))}
          </div>
        )}
      </article>
    </div>
  );
}

function useRevealOnce() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

function MilestoneRow({ milestone, index }: { milestone: JourneyMilestone; index: number }) {
  const { ref, visible } = useRevealOnce();
  /** First milestone on the right; then alternate left / right. */
  const alignLeft = index % 2 !== 0;

  return (
    <div ref={ref} className="relative grid grid-cols-1 gap-5 pb-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-0 lg:pb-24">
      <div className="hidden lg:block">
        {alignLeft ? <JourneyMilestoneCard milestone={milestone} align="left" visible={visible} /> : null}
      </div>

      <div className="relative flex justify-center lg:w-9">
        <div
          className={`relative z-[2] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-400/60 bg-[#101010] shadow-[0_0_14px_rgba(167,139,250,0.55),0_0_28px_rgba(99,102,241,0.28)] transition-all duration-700 ease-out ${
            visible ? "scale-100 ring-2 ring-violet-400/35" : "scale-[0.65] ring-0"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-200 to-indigo-500 shadow-[0_0_8px_rgba(196,181,253,0.85)] transition-transform duration-500 ${
              visible ? "scale-100" : "scale-0"
            }`}
          />
        </div>
      </div>

      <div className="hidden lg:block">
        {!alignLeft ? <JourneyMilestoneCard milestone={milestone} align="right" visible={visible} /> : null}
      </div>

      <div className="lg:col-span-3 lg:hidden">
        <JourneyMilestoneCard milestone={milestone} align={alignLeft ? "left" : "right"} visible={visible} />
      </div>
    </div>
  );
}

export default function Journey() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerScrolled, setHeaderScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = headerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = 1 - Math.min(Math.max((rect.bottom - vh * 0.15) / (vh * 0.85), 0), 1);
      setHeaderScrolled(t);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="journey" className="relative overflow-hidden bg-[#101010] pb-24 pt-16 sm:pb-32 sm:pt-20">
      <div className="relative z-[1] mx-auto max-w-full ">
        <header ref={headerRef} className="flex flex-col items-center text-center">
          <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32"
              style={{
                background: "linear-gradient(to bottom, #101010 0%, rgba(16,16,16,0.82) 40%, transparent 100%)",
              }}
            />

            <div className="relative h-[57vw] w-full overflow-hidden">
              {/* Full circle with viewport-width diameter; only bottom semicircle is visible due to clipping */}
              <div
                aria-hidden
                className="absolute left-1/2 top-0 z-0 h-[100vw] w-[100vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/85"
                style={{
                  boxShadow:
                    "0 0 20px rgba(196,181,253,0.9), 0 0 56px rgba(129,140,248,0.62), 0 0 110px rgba(99,102,241,0.44), inset 0 0 24px rgba(255,255,255,0.2)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[26vw] bg-gradient-to-b from-[#101010] via-[#101010] to-transparent"
              />

              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <h2
                  className="text-center text-[clamp(1.7rem,6vw,4.25rem)] font-bold tracking-[clamp(0.06em,0.45vw,0.12em)] text-white uppercase transition-[opacity,transform] duration-500 ease-out"
                  style={{
                    fontFamily: fontOrbitron,
                    opacity: 0.55 + headerScrolled * 0.45,
                    transform: `translateY(${(1 - headerScrolled) * 10 - 12}px)`,
                    textShadow: "0 0 14px rgba(255,255,255,0.35), 0 0 34px rgba(129,140,248,0.32)",
                  }}
                >
                  My Journey
                </h2>
              </div>
            </div>
          </div>
        </header>

        <div className="relative mx-auto mt-2 max-w-5xl px-2 sm:mt-4 sm:px-4">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 w-[2px] -translate-x-1/2"
            style={{
              top: "calc(-1 * clamp(34px, 7vw, 130px))",
              background: "rgba(196, 181, 253, 0.95)",
              boxShadow:
                "0 0 14px rgba(196,181,253,0.95), 0 0 30px rgba(167,139,250,0.8), 0 0 54px rgba(129,140,248,0.6)",
            }}
          />

          <div className="relative space-y-2 pt-8 sm:pt-12">
            {MILESTONES.map((milestone, index) => (
              <MilestoneRow key={milestone.id} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
