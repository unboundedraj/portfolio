import type { StaticImageData } from "next/image";

export type MiniProjectLink = {
  label: string;
  href: string;
};

export type MiniProject = {
  id: string;
  title: string;
  description: string;
  stack?: string[];
  links: MiniProjectLink[];
  previewUrl?: string;
  status?: string;
  image?: StaticImageData;
};