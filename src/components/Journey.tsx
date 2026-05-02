"use client";

import { FileText } from "lucide-react";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";

import { JOURNEY_MILESTONES, type JourneyCertificate, type JourneyMilestone } from "@/data/journey";

const fontSpaceGrotesk = "var(--font-space-grotesk), var(--font-poppins), ui-sans-serif, system-ui, sans-serif";
const fontInter = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
const fontOrbitron = "var(--font-orbitron), ui-sans-serif, system-ui, sans-serif";

const neonGoldStat: CSSProperties = {
  fontFamily: fontOrbitron,
  color: "#fde68a",
  textShadow:
    "0 0 10px rgba(253, 224, 71, 0.95), 0 0 22px rgba(250, 204, 21, 0.75), 0 0 42px rgba(245, 158, 11, 0.45), 0 0 64px rgba(217, 119, 6, 0.25)",
};

const certificateShellClass =
  "inline-flex max-w-full items-center gap-2 rounded-lg border border-violet-500/25 bg-violet-950/25 px-2 py-1.5 transition-colors hover:border-violet-400/45 hover:bg-violet-950/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400/80";

const HOVER_LEAVE_MS = 220;

/** Certificate tiles and hover preview use a fixed 16:9 frame. */
const CERT_ASPECT = 16 / 9;

type PanelRect = { top: number; left: number; width: number; height: number };

/** Small certificate screenshot; hover (or tap on coarse pointers) shows an enlarged portaled preview. */
function JourneyCertificateImageHover({
  cert,
  cardAlign,
}: {
  cert: JourneyCertificate;
  cardAlign: "left" | "right";
}) {
  const src = cert.image!;
  const rootRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLButtonElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const [panelRect, setPanelRect] = useState<PanelRect | null>(null);

  const cancelLeaveTimer = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelLeaveTimer();
    leaveTimerRef.current = setTimeout(() => {
      setOpen(false);
      setPanelRect(null);
    }, HOVER_LEAVE_MS);
  };

  const updatePanelRect = useCallback(() => {
    const thumb = thumbRef.current;
    if (!thumb) return;
    const r = thumb.getBoundingClientRect();
    const margin = 10;
    const availW = window.innerWidth - margin * 2;
    const availH = window.innerHeight - margin * 2;
    const capW = Math.min(availW, 960);
    const capH = Math.min(availH, 720);
    let w = capW;
    let h = w / CERT_ASPECT;
    if (h > capH) {
      h = capH;
      w = h * CERT_ASPECT;
    }
    let left = cardAlign === "left" ? r.right - w : r.left;
    left = Math.max(margin, Math.min(left, window.innerWidth - w - margin));
    let top = r.bottom + 6;
    if (top + h > window.innerHeight - margin) {
      top = r.top - h - 6;
    }
    top = Math.max(margin, Math.min(top, window.innerHeight - h - margin));
    setPanelRect({ top, left, width: w, height: h });
  }, [cardAlign]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      // avoid synchronous setState inside layout effect
      if (typeof window !== "undefined") window.requestAnimationFrame(() => setPanelRect(null));
      return;
    }
    // defer initial measurement to avoid synchronous setState during layout effect
    if (typeof window !== "undefined") window.requestAnimationFrame(() => updatePanelRect());
    window.addEventListener("scroll", updatePanelRect, true);
    window.addEventListener("resize", updatePanelRect);
    return () => {
      window.removeEventListener("scroll", updatePanelRect, true);
      window.removeEventListener("resize", updatePanelRect);
    };
  }, [open, updatePanelRect]);

  useEffect(() => {
    if (canHover || !open) return;
    const close = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        const el = e.target as HTMLElement | null;
        if (el?.closest?.("[data-journey-cert-popover]")) return;
        setOpen(false);
        setPanelRect(null);
      }
    };
    document.addEventListener("pointerdown", close, true);
    return () => document.removeEventListener("pointerdown", close, true);
  }, [open, canHover]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setPanelRect(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleThumbEnter = () => {
    if (!canHover) return;
    cancelLeaveTimer();
    setOpen(true);
  };

  const handleThumbLeave = () => {
    if (!canHover) return;
    scheduleClose();
  };

  const portal =
    open &&
    panelRect &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        data-journey-cert-popover
        role="dialog"
        aria-label={cert.alt}
        className="pointer-events-auto fixed z-250 overflow-hidden rounded-xl border border-violet-400/40 bg-zinc-950 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.85)]"
        style={{ top: panelRect.top, left: panelRect.left, width: panelRect.width, height: panelRect.height }}
        onMouseEnter={canHover ? cancelLeaveTimer : undefined}
        onMouseLeave={canHover ? scheduleClose : undefined}
      >
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={cert.alt}
            fill
            className="object-contain p-2 sm:p-3"
            sizes="(max-width: 768px) 92vw, 960px"
          />
          {!canHover ? (
            <button
              type="button"
              className="absolute right-2 top-2 z-1 rounded-md border border-white/15 bg-black/70 px-2.5 py-1 text-xs font-medium text-violet-100/95 backdrop-blur-sm"
              style={{ fontFamily: fontInter }}
              onClick={() => {
                setOpen(false);
                setPanelRect(null);
              }}
            >
              Close
            </button>
          ) : null}
        </div>
      </div>,
      document.body,
    );

  return (
    <div
      ref={rootRef}
      className={`relative inline-flex ${cardAlign === "left" ? "self-end" : "self-start"}`}
    >
      <button
        ref={thumbRef}
        type="button"
        className="relative block overflow-hidden rounded-lg border border-violet-500/35 bg-zinc-950/80 shadow-md shadow-black/50 outline-none transition-[border-color,box-shadow] hover:border-violet-400/55 focus-visible:ring-2 focus-visible:ring-violet-400/75"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={cert.alt}
        onMouseEnter={handleThumbEnter}
        onMouseLeave={handleThumbLeave}
        onClick={() => {
          if (!canHover) {
            setOpen((v) => {
              const next = !v;
              if (!next) setPanelRect(null);
              return next;
            });
          }
        }}
      >
        <span className="relative block aspect-video w-27 overflow-hidden sm:w-30">
          <Image src={src} alt="" aria-hidden className="object-cover" fill sizes="120px" />
        </span>
      </button>
      {portal}
    </div>
  );
}

function JourneyCertificateBadge({ cert, cardAlign }: { cert: JourneyCertificate; cardAlign: "left" | "right" }) {
  if (cert.image) {
    return <JourneyCertificateImageHover cert={cert} cardAlign={cardAlign} />;
  }

  const linkTitle = cert.label ?? cert.alt;
  const showDocIcon = Boolean(cert.href);
  const body = (
    <>
      {showDocIcon ? (
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 bg-violet-950/40 text-violet-200/90 sm:h-13 sm:w-13"
          aria-hidden
        >
          <FileText className="h-5 w-5 sm:h-5.5 sm:w-5.5" strokeWidth={1.75} />
        </span>
      ) : null}
      <span
        className="min-w-0 max-w-40 truncate text-left text-[0.7rem] font-medium tracking-wide text-violet-100/95 sm:max-w-48 sm:text-xs"
        style={{ fontFamily: fontInter }}
      >
        {linkTitle}
      </span>
    </>
  );

  if (cert.href) {
    return (
      <a
        href={cert.href}
        target="_blank"
        rel="noopener noreferrer"
        className={certificateShellClass}
        title={linkTitle}
      >
        {body}
      </a>
    );
  }

  return (
    <span className={`${certificateShellClass} cursor-default`} title={linkTitle}>
      {body}
    </span>
  );
}

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
      className={`relative z-1 max-w-xl transition-all duration-850 ease-[cubic-bezier(0.22,1,0.36,1)] lg:max-w-3xl ${
        align === "left" ? "ml-0 mr-auto lg:pr-8" : "ml-auto mr-0 lg:pl-8"
      } ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100 blur-0"
          : `${slideFrom} translate-y-10 opacity-0 blur-sm`
      }`}
    >
      <article
        className={`rounded-2xl border border-white/8 bg-zinc-950/55 p-5 shadow-lg shadow-black/30 backdrop-blur-md transition-shadow duration-700 sm:p-6 ${
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
        {milestone.certificates && milestone.certificates.length > 0 ? (
          <div className={`mt-4 ${align === "left" ? "lg:flex lg:flex-col lg:items-end" : ""}`}>
            <ul
              aria-label="Credential images"
              className={`flex list-none flex-wrap gap-2.5 p-0 ${align === "left" ? "lg:justify-end" : "justify-start"}`}
            >
              {milestone.certificates.map((cert) => (
                <li key={cert.id}>
                  <JourneyCertificateBadge cert={cert} cardAlign={align} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {milestone.images && milestone.images.length > 0 && (
          <div
            className={`mt-4 flex flex-wrap gap-3 ${align === "left" ? "lg:justify-end" : "lg:justify-start"}`}
          >
            {milestone.images.map((img) => (
              <div
                key={img.alt}
                className={`relative aspect-video w-full max-w-70 overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-all delay-100 duration-700 sm:max-w-xs ${
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
          className={`relative z-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-400/60 bg-[#101010] shadow-[0_0_14px_rgba(167,139,250,0.55),0_0_28px_rgba(99,102,241,0.28)] transition-all duration-700 ease-out ${
            visible ? "scale-100 ring-2 ring-violet-400/35" : "scale-[0.65] ring-0"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full bg-linear-to-br from-violet-200 to-indigo-500 shadow-[0_0_8px_rgba(196,181,253,0.85)] transition-transform duration-500 ${
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
    <section id="journey" className="relative overflow-hidden bg-[#101010] pb-24 pt-16 sm:pb-32 sm:pt-0">
      <div className="relative z-1 mx-auto max-w-full ">
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
                className="absolute left-1/2 top-0 z-0 h-[100vw] w-screen -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-100/85"
                style={{
                  boxShadow:
                    "0 0 20px rgba(196,181,253,0.9), 0 0 56px rgba(129,140,248,0.62), 0 0 110px rgba(99,102,241,0.44), inset 0 0 24px rgba(255,255,255,0.2)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[26vw] bg-linear-to-b from-[#101010] via-[#101010] to-transparent"
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

        <div className="mx-auto mt-2 max-w-5xl px-2 sm:mt-4 sm:px-4">
          {/* Line height matches milestones only; quote sits below, not on the stroke. */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 w-0.5 -translate-x-1/2"
              style={{
                top: "calc(-1 * clamp(34px, 7vw, 130px))",
                background: "rgba(196, 181, 253, 0.95)",
                boxShadow:
                  "0 0 14px rgba(196,181,253,0.95), 0 0 30px rgba(167,139,250,0.8), 0 0 54px rgba(129,140,248,0.6)",
              }}
            />

            <div className="relative z-1 space-y-2 pt-8 sm:pt-12">
              {JOURNEY_MILESTONES.map((milestone, index) => (
                <MilestoneRow key={milestone.id} milestone={milestone} index={index} />
              ))}
            </div>
          </div>

          <p
            className="mx-auto max-w-3xl px-4 pt-10 pb-6 text-center text-[clamp(0.7rem,2.1vw,0.95rem)] font-medium tracking-[0.18em] text-violet-100/90 sm:pt-12 sm:tracking-[0.26em]"
            style={{
              fontFamily: fontOrbitron,
              textShadow:
                "0 0 12px rgba(196, 181, 253, 0.45), 0 0 28px rgba(129, 140, 248, 0.22), 0 0 48px rgba(99, 102, 241, 0.12)",
            }}
          >
            &ldquo;And miles to go before I sleep&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
