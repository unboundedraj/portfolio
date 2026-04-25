"use client";

import { useCallback, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
import footerBg from "@/assets/footer.jpeg";
import { assetSrc } from "@/lib/assetSrc";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

const fontOrbitron = "var(--font-orbitron), ui-sans-serif, system-ui, sans-serif";

function stripMailto(href: string) {
  return href.replace(/^mailto:/i, "");
}

function gmailCompose(to: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
}

function outlookCompose(to: string) {
  return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(to)}`;
}

const CONTACT_MAILBOXES = [
  {
    mailto: SOCIAL_LINKS.email,
    address: stripMailto(SOCIAL_LINKS.email),
  },
  {
    mailto: SOCIAL_LINKS.emailSecondary,
    address: stripMailto(SOCIAL_LINKS.emailSecondary),
  },
] as const;

const RESUME_PATH = "/Dhruvrajsingh_resume_2025.pdf";

const SECTION_BG = "#101010";

const glassPanel =
  "rounded-[1.75rem] border border-white/[0.12] bg-gradient-to-br from-white/[0.09] via-white/[0.04] to-white/[0.02] shadow-[0_24px_64px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-2xl";

export default function Footer() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const copyEmail = useCallback(async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      window.setTimeout(() => setCopiedAddress(null), 2000);
    } catch {
      /* ignore */
    }
  }, []);

  const socials = [
    { label: "GitHub", href: SOCIAL_LINKS.github, icon: Github },
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
    { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
    { label: "YouTube", href: SOCIAL_LINKS.youtube, icon: Youtube },
    { label: "LeetCode", href: SOCIAL_LINKS.leetcode, icon: ArrowUpRight },
    { label: "Codeforces", href: SOCIAL_LINKS.codeforces, icon: ArrowUpRight },
  ] as const;

  return (
    <footer
      id="contact"
      className="relative isolate -mt-16 min-h-[420px] w-full overflow-hidden pt-16 text-zinc-100 sm:-mt-20 sm:pt-20"
    >
      <div aria-hidden className="absolute inset-0 -z-30" style={{ backgroundColor: SECTION_BG }} />

      <div
        aria-hidden
        className="absolute inset-0 -z-20 scale-[1.06] bg-cover bg-center bg-no-repeat opacity-[0.92]"
        style={{
          backgroundImage: `url(${assetSrc(footerBg)})`,
          mixBlendMode: "lighten",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-[8%] left-1/2 -z-10 h-[min(52vh,520px)] w-[min(160vw,1100px)] -translate-x-1/2"
        style={{
          background: `radial-gradient(
            ellipse 100% 100% at 50% 0%,
            rgba(249, 115, 22, 0.72) 0%,
            rgba(234, 88, 12, 0.45) 18%,
            rgba(239, 68, 68, 0.28) 38%,
            rgba(185, 28, 28, 0.12) 55%,
            transparent 72%
          )`,
          filter: "blur(0.5px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-1/2 -z-10 h-[min(38vh,380px)] w-[min(130vw,920px)] -translate-x-1/2 rounded-[100%] opacity-95"
        style={{
          background: `radial-gradient(
            ellipse 95% 70% at 50% 0%,
            rgba(253, 186, 116, 0.55) 0%,
            rgba(249, 115, 22, 0.35) 28%,
            rgba(239, 68, 68, 0.18) 52%,
            transparent 70%
          )`,
          boxShadow: `
            0 0 100px 48px rgba(249, 115, 22, 0.42),
            0 0 160px 72px rgba(239, 68, 68, 0.22),
            0 40px 120px 20px rgba(127, 29, 29, 0.35)
          `,
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,transparent_0%,rgba(16,16,16,0.35)_55%,#101010_100%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(28vh,220px)] sm:h-[min(32vh,260px)]"
        style={{
          background:
            "linear-gradient(to bottom, #101010 0%, rgba(16,16,16,0.9) 16%, rgba(16,16,16,0.5) 40%, rgba(16,16,16,0.14) 65%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div
          className={`p-8 sm:p-10 md:p-12 ${glassPanel}`}
          style={{ WebkitBackdropFilter: "blur(22px)", backdropFilter: "blur(22px)" }}
        >
          <div className="grid gap-12 md:grid-cols-[1fr_1.05fr] md:items-start md:gap-14">
            <div className="space-y-4">
              <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-white/45 uppercase">unboundedraj</p>
              <h2
                className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                style={{ fontFamily: fontOrbitron }}
              >
                Let&apos;s talk
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-white/65">
                Open to collaborations and meaningful work. Reach out by email—pick whichever client you use.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-white/45 uppercase">Email</p>
                <div className="mt-4 space-y-8">
                  {CONTACT_MAILBOXES.map(({ mailto, address }) => (
                    <div key={address} className="space-y-3">
                      <a
                        href={mailto}
                        className="inline-flex max-w-full items-start gap-2 break-all text-base font-medium tracking-tight text-white transition hover:text-orange-200 sm:text-lg md:text-xl"
                      >
                        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-400/90" strokeWidth={1.75} />
                        {address}
                      </a>
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-white/40 uppercase">
                          Open in
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <a
                            href={mailto}
                            className="rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:border-orange-400/40 hover:bg-white/[0.1] hover:text-white"
                          >
                            Default app
                          </a>
                          <a
                            href={gmailCompose(address)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:border-orange-400/40 hover:bg-white/[0.1] hover:text-white"
                          >
                            Gmail
                          </a>
                          <a
                            href={outlookCompose(address)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:border-orange-400/40 hover:bg-white/[0.1] hover:text-white"
                          >
                            Outlook
                          </a>
                          <button
                            type="button"
                            onClick={() => copyEmail(address)}
                            className="rounded-full border border-white/14 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition hover:border-orange-400/40 hover:bg-white/[0.1] hover:text-white"
                          >
                            {copiedAddress === address ? "Copied" : "Copy address"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-3.5 py-2 text-xs font-medium text-white/85 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5 opacity-50" strokeWidth={1.75} />
                  {label}
                </a>
              ))}
            </div>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium tracking-wide text-white/50 sm:gap-x-6">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Skills", "skills"],
                ["Works", "works"],
                ["Journey", "journey"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="uppercase transition hover:text-white"
                >
                  {label}
                </button>
              ))}
              <a
                href={RESUME_PATH}
                download
                title="Download resume"
                aria-label="Download resume (PDF)"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-black/20 px-2.5 py-1.5 text-white/80 transition hover:border-orange-400/35 hover:bg-white/[0.06] hover:text-white"
              >
                <Download className="h-4 w-4 shrink-0 text-orange-400/90" strokeWidth={2} />
                <span className="normal-case">Resume</span>
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/[0.06] pt-8 text-[11px] text-white/40 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Dhruv Raj Singh · unboundedraj</p>
            <p className="text-white/35">Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
