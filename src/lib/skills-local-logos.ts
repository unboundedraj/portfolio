import type { StaticImageData } from "next/image";
import adobeExpress from "@/assets/logos/Adobeexpress.png";
import appleIcon from "@/assets/logos/apple-icon.png";
import blackboxAiLogo from "@/assets/logos/blackbox-ai-logo.jpg";
import claude from "@/assets/logos/claude.png";
import coolors from "@/assets/logos/coolors.png";
import deepseekAiLogo from "@/assets/logos/deepseek-ai-logo.jpg";
import erasorio from "@/assets/logos/erasorio.png";
import googleGeminiAiLogo from "@/assets/logos/google-gemini-ai-logo.jpg";
import onenote from "@/assets/logos/onenote.png";
import perplexity from "@/assets/logos/perplexity.png";
import perplexityAiLogo from "@/assets/logos/perplexity-ai-logo.png";
import pinterestLogo from "@/assets/logos/pinterest-logo.png";

function toSrc(mod: string | StaticImageData): string {
  return typeof mod === "string" ? mod : mod.src;
}

/** Normalized filename → public URL for local skill logos (replaces Vite import.meta.glob). */
export const localLogoModules: Record<string, string> = {
  adobeexpress: toSrc(adobeExpress),
  "apple-icon": toSrc(appleIcon),
  blackbox: toSrc(blackboxAiLogo),
  "blackbox-ai-logo": toSrc(blackboxAiLogo),
  claude: toSrc(claude),
  coolors: toSrc(coolors),
  deepseek: toSrc(deepseekAiLogo),
  "deepseek-ai-logo": toSrc(deepseekAiLogo),
  erasorio: toSrc(erasorio),
  eraserio: toSrc(erasorio),
  erasor: toSrc(erasorio),
  "erasor-io": toSrc(erasorio),
  gemini: toSrc(googleGeminiAiLogo),
  "google-gemini-ai-logo": toSrc(googleGeminiAiLogo),
  onenote: toSrc(onenote),
  perplexity: toSrc(perplexity),
  "perplexity-ai-logo": toSrc(perplexityAiLogo),
  pinterest: toSrc(pinterestLogo),
  "pinterest-logo": toSrc(pinterestLogo),
};
