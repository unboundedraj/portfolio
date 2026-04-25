"use client";

import React from "react";
import { localLogoModules } from "@/lib/skills-local-logos";

const normalizeName = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const prettifyFilename = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const logoDisplayNameOverrides: Record<string, string> = {
  "apple-icon": "v0.dev",
};

const localLogoEntries = Object.entries(localLogoModules).map(([normalized, src]) => ({
  fileName: `${normalized}.png`,
  normalized,
  src,
}));

const localLogoByName = Object.fromEntries(localLogoEntries.map(({ normalized, src }) => [normalized, src]));

const getLocalLogo = (...nameCandidates: string[]) => {
  for (const candidate of nameCandidates) {
    const match = localLogoByName[normalizeName(candidate)];
    if (match) {
      return match;
    }
  }
  return null;
};

export default function Skills() {
  const [showContent, setShowContent] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
          setShowContent(true);
        }

        if (!entry.isIntersecting) {
          setShowContent(false);
        }
      },
      {
        threshold: [0.1, 0.75],
        rootMargin: "0px",
      },
    );

    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  const baseSkillsData = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      bgColor: "bg-white",
    },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "jQuery",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Firebase Firestore",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "InfluxDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/influxdb/influxdb-original.svg",
    },
    {
      name: "Socket.IO",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
      bgColor: "bg-white",
    },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "OAuth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    {
      name: "Adobe Photoshop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    {
      name: "Eraser.io",
      logo:
        getLocalLogo("erasorio", "eraserio", "erasor", "erasor-io") ||
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      name: "Coolors",
      logo: getLocalLogo("coolors") || "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    { name: "Snapseed", logo: "https://www.gstatic.com/images/branding/product/1x/snapseed_512dp.png" },
    { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    {
      name: "Claude",
      logo:
        getLocalLogo("claude", "anthropic-claude-ai-assistant-logo") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/claude.svg",
      bgColor: "bg-black",
    },
    {
      name: "Gemini",
      logo:
        getLocalLogo("gemini", "google-gemini-ai-logo") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlegemini.svg",
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-500",
    },
    {
      name: "Perplexity",
      logo:
        getLocalLogo("perplexity", "perplexity-ai-logo") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/perplexity.svg",
      bgColor: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
    {
      name: "Deepseek",
      logo:
        getLocalLogo("deepseek", "deepseek-ai-logo") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/deepseek.svg",
      bgColor: "bg-black",
    },
    { name: "Lechat", logo: "https://www.mistral.ai/favicon.ico" },
    {
      name: "Blackbox",
      logo:
        getLocalLogo("blackbox", "blackbox-ai-logo") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/blackbox.svg",
      bgColor: "bg-black",
    },
    {
      name: "Copilot",
      logo: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
      bgColor: "bg-white",
    },
    {
      name: "Vercel",
      logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      bgColor: "bg-white",
    },
    {
      name: "Pinterest",
      logo:
        getLocalLogo("pinterest", "pinterest-logo") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinterest.svg",
      bgColor: "bg-red-500",
    },
    { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
    {
      name: "CMD Terminal",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
      bgColor: "bg-gray-700",
    },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    {
      name: "OneNote",
      logo:
        getLocalLogo("onenote") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftonenote.svg",
      bgColor: "bg-white",
    },
    {
      name: "Adobe Express",
      logo:
        getLocalLogo("adobeexpress") ||
        "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobeexpress.svg",
      bgColor: "bg-white",
    },
  ];

  const explicitlyUsedLocalLogos = new Set([
    "claude",
    "anthropic-claude-ai-assistant-logo",
    "gemini",
    "google-gemini-ai-logo",
    "perplexity",
    "perplexity-ai-logo",
    "deepseek",
    "deepseek-ai-logo",
    "blackbox",
    "blackbox-ai-logo",
    "pinterest",
    "pinterest-logo",
    "onenote",
    "adobeexpress",
    "coolors",
    "erasorio",
    "eraserio",
    "erasor",
    "erasor-io",
  ]);

  const autoDiscoveredLogoSkills = localLogoEntries
    .filter(({ normalized }) => !explicitlyUsedLocalLogos.has(normalized))
    .map(({ fileName, normalized, src }) => ({
      name: logoDisplayNameOverrides[normalized] || prettifyFilename(fileName),
      logo: src,
      bgColor: "bg-white",
    }));

  const skillsData = [...baseSkillsData, ...autoDiscoveredLogoSkills];

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="relative flex h-screen items-center overflow-hidden bg-[#101010] px-6 py-10"
    >
      <div className="animate-float absolute top-20 left-10 h-72 w-72 rounded-full bg-zinc-700/5 blur-3xl" />
      <div
        className="animate-float absolute right-10 bottom-20 h-80 w-80 rounded-full bg-zinc-600/5 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      {showContent && (
        <div className="animate-fadeIn relative z-40 mx-auto w-full max-w-7xl">
          <div className="mb-8 text-center">
            <div className="mb-2 inline-block">
              <span className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-400 uppercase">
                Technical Arsenal
              </span>
            </div>
            <h2 className="mb-2 text-3xl leading-tight font-bold text-white md:text-4xl">Technical Proficiency</h2>
            <p className="mx-auto max-w-2xl text-sm text-zinc-500">
              A comprehensive toolkit of modern technologies and AI-powered tools
            </p>
          </div>

          <div className="scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent relative max-h-[calc(100vh-220px)] overflow-y-auto px-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {skillsData.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="group animate-skillCard"
                  style={{
                    animationDelay: `${index * 0.02}s`,
                  }}
                >
                  <div
                    className={`flex cursor-pointer items-center gap-2.5 rounded-lg border border-zinc-800 px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/50 ${
                      skill.bgColor || "bg-zinc-900/50"
                    }`}
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <p
                      className={`text-sm font-medium whitespace-nowrap ${
                        skill.bgColor && skill.bgColor.includes("white")
                          ? "text-gray-900"
                          : skill.bgColor && !skill.bgColor.includes("zinc")
                            ? "text-white"
                            : "text-zinc-300"
                      }`}
                    >
                      {skill.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-xs text-zinc-600">Constantly learning and expanding my technical horizon</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes skillCard {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in forwards;
        }

        .animate-skillCard {
          animation: skillCard 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thumb-zinc-700::-webkit-scrollbar-thumb {
          background-color: #3f3f46;
          border-radius: 2px;
        }

        .scrollbar-thumb-zinc-700::-webkit-scrollbar-thumb:hover {
          background-color: #52525b;
        }

        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}
