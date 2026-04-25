import type { StaticImageData } from "next/image";

export function assetSrc(mod: string | StaticImageData): string {
  return typeof mod === "string" ? mod : mod.src;
}
