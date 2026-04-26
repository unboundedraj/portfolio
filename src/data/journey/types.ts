import type { StaticImageData } from "next/image";

/**
 * Optional proof / credential for a timeline milestone.
 * Prefer screenshots under `src/assets/journey/certificates/` (e.g. `journey-cert-01-*.png`),
 * import in `milestones.ts`, and set `image` + `alt`. The Journey UI shows small tiles;
 * hover enlarges (no visible captions).
 */
export type JourneyCertificate = {
  id: string;
  /** Accessible description of the credential (required). */
  alt: string;
  /** Screenshot or scan — import from `@/assets/journey/certificates/...`. */
  image?: StaticImageData;
  /** Optional visible label (e.g. external link rows). Omit for image-only tiles. */
  label?: string;
  /** External document URL (non-image credentials). */
  href?: string;
};

export type JourneyMilestone = {
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
  /** Certificates / diplomas / offer letters for this point (rendered when non-empty). */
  certificates?: JourneyCertificate[];
};
