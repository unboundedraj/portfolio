import type { MiniProject } from "./types";

export const MINI_PROJECTS: MiniProject[] = [
	{
		id: "quickcall",
		title: "QuickCall",
		description:
			"A lightweight mini project focused on fast calling workflows and a clean demo experience.",
		previewUrl: "https://quickcall.vercel.app/",
		links: [
			{
				label: "Live Demo",
				href: "https://quickcall.vercel.app/",
			},
			{
				label: "GitHub",
				href: "https://github.com/unboundedraj/Quickcall",
			},
		],
		stack: ["Next.js", "Vercel"],
		status: "Live",
	},
{
		id: "jarvis",
		title: "Jarvis",
		description: "An experimental assistant UI and tooling demo built as a mini project.",
		previewUrl: "https://jarvis-theta-roan-88.vercel.app",
		links: [
			{
				label: "Live Demo",
				href: "https://jarvis-theta-roan-88.vercel.app",
			},
			{
				label: "GitHub",
				href: "https://github.com/unboundedraj/Jarvis",
			},
		],
		stack: ["Next.js", "Vercel"],
		status: "Live",
	},
];