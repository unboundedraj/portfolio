"use client";

import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import p1i1 from "@/assets/projects/p1i1.png";
import p1i2 from "@/assets/projects/p1i2.png";
import p1i3 from "@/assets/projects/p1i3.png";
import p1i4 from "@/assets/projects/p1i4.png";
import p1i5 from "@/assets/projects/p1i5.png";
import p1i6 from "@/assets/projects/p1i6.png";
import p1i7 from "@/assets/projects/p1i7.png";
import p1i8 from "@/assets/projects/p1i8.png";
import p1i9 from "@/assets/projects/p1i9.png";
import p2i1 from "@/assets/projects/p2i1.png";
import p2i2 from "@/assets/projects/p2i2.png";
import p2i3 from "@/assets/projects/p2i3.png";
import p2i4 from "@/assets/projects/p2i4.png";
import p2i5 from "@/assets/projects/p2i5.png";
import p2i6 from "@/assets/projects/p2i6.png";
import p2i7 from "@/assets/projects/p2i7.png";
import p3i1 from "@/assets/projects/p3i1.png";
import p3i2 from "@/assets/projects/p3i2.png";
import p3i3 from "@/assets/projects/p3i3.png";
import p3i4 from "@/assets/projects/p3i4.png";
import p3i5 from "@/assets/projects/p3i5.png";
import p4i1 from "@/assets/projects/p4i1.png";
import p4i2 from "@/assets/projects/p4i2.png";
import p4i3 from "@/assets/projects/p4i3.png";
import p4i4 from "@/assets/projects/p4i4.png";
import p4i5 from "@/assets/projects/p4i5.png";
import p4i6 from "@/assets/projects/p4i6.png";
import p4i7 from "@/assets/projects/p4i7.png";
import p5i1 from "@/assets/projects/p5i1.jpeg";
import p5i2 from "@/assets/projects/p5i2.png";
import p5i3 from "@/assets/projects/p5i3.png";
import p5i4 from "@/assets/projects/p5i4.png";
import p5i5 from "@/assets/projects/p5i5.png";
import p5i6 from "@/assets/projects/p5i6.png";
import p5i7 from "@/assets/projects/p5i7.png";
import p5i8 from "@/assets/projects/p5i8.png";
import p5i9 from "@/assets/projects/p5i9.png";
import p5i10 from "@/assets/projects/p5i10.png";
import p5i11 from "@/assets/projects/p5i11.png";
import { assetSrc } from "@/lib/assetSrc";

type Project = {
  id: number;
  title: string;
  images: string[];
  description: string;
  techStack: { name: string; icon: string }[];
  timeline: string;
  domain?: string;
  discontinued?: boolean;
  githubLink?: string;
  liveLink?: string;
};

const WORKS_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Devdocs",
    images: [p4i1, p4i2, p4i3, p4i4, p4i5, p4i6, p4i7].map(assetSrc),
    description:
      "A comprehensive documentation website and developer portal where different developers and teams can contribute and collaborate on documentation for their websites and projects. Featuring a user-friendly interface for both contributors and readers.",
    techStack: [
      { name: "Next.js", icon: "Next.js" },
      { name: "Contentstack", icon: "Contentstack" },
      { name: "Launch", icon: "Launch" },
    ],
    timeline: "Jan 26",
    domain: "devdocs.contentstackapps.com",
    liveLink: "https://devdocs.contentstackapps.com",
  },
  {
    id: 2,
    title: "Pradaan Portal",
    images: [p3i1, p3i2, p3i3, p3i4, p3i5].map(assetSrc),
    description:
      "A centralized donations platform built on the MERN stack that enables seamless donation management and tracking. The platform provides an intuitive interface for donors to contribute and organizations to manage fundraising campaigns.",
    techStack: [
      { name: "React", icon: "React" },
      { name: "Node.js", icon: "Node.js" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "Express", icon: "Express" },
    ],
    timeline: "May 2024 - Jul 2024",
    domain: "pradaanportal.vercel.app",
    githubLink: "https://github.com/unboundedraj/pradaan-portal",
    liveLink: "https://pradaanportal.vercel.app",
  },
  {
    id: 3,
    title: "Client Website",
    images: [p1i1, p1i2, p1i3, p1i4, p1i5, p1i6, p1i7, p1i8, p1i9].map(assetSrc),
    description:
      "Web application for Rudrapriya Medical Equipments pvt ltd. The project serves as a client project for one of my client showcasing their company details and services that they provide.",
    techStack: [
      { name: "React", icon: "React" },
      { name: "Node.js", icon: "Node.js" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "Express", icon: "Express" },
    ],
    timeline: "Mar 2024 - May 2024",
    domain: "rudrapriyamedicalequipmentspvtltd.vercel.app",
    githubLink: "https://github.com/unboundedraj/Rudrapriya",
    liveLink: "https://rudrapriyamedicalequipmentspvtltd.vercel.app",
  },
  {
    id: 4,
    title: "Case Study",
    images: [p2i1, p2i2, p2i3, p2i4, p2i5, p2i6, p2i7].map(assetSrc),
    description:
      "An intelligent attack detection framework for autonomous vehicles that leverages machine learning to identify and mitigate cybersecurity threats in real-time vehicle systems",
    techStack: [
      { name: "Python", icon: "Python" },
      { name: "TensorFlow", icon: "TensorFlow" },
      { name: "Machine Learning", icon: "Machine Learning" },
    ],
    timeline: "Jan 2024 - Apr 2024",
    githubLink: "https://github.com/yourusername/case-study",
  },
  {
    id: 5,
    title: "Novasunsolar",
    images: [p5i1, p5i2, p5i3, p5i4, p5i5, p5i6, p5i7, p5i8, p5i9, p5i10, p5i11].map(assetSrc),
    description:
      "Client website for Novasunsolar, a solar energy solutions provider. The project showcased their products, services, and sustainability initiatives.",
    techStack: [
      { name: "React", icon: "React" },
      { name: "Node.js", icon: "Node.js" },
      { name: "MongoDB", icon: "MongoDB" },
      { name: "Express", icon: "Express" },
    ],
    timeline: "Oct 2023 - Dec 2023",
    domain: "novasunsolar.com",
    discontinued: true,
    githubLink: "https://github.com/unboundedraj/novasunsolar",
    liveLink: "https://www.novasunsolar.com",
  },
];

const techIcons: Record<string, string> = {
    React: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
    "Node.js": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg",
    MongoDB: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg",
    Express: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg",
    "React Native": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
    Firebase: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg",
    "Machine Learning": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scikitlearn.svg",
    Python: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg",
    TensorFlow: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tensorflow.svg",
    "Next.js": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg",
    Contentstack: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/contentstack.svg",
    Launch: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg",
};

const techGradients: Record<string, string> = {
    React: "from-cyan-400 to-blue-500",
    "Node.js": "from-yellow-400 to-amber-500",
    MongoDB: "from-green-500 to-teal-500",
    Express: "from-pink-400 to-rose-500",
    "React Native": "from-cyan-400 to-blue-500",
    Firebase: "from-yellow-400 to-orange-500",
    "Machine Learning": "from-purple-400 to-pink-500",
    Python: "from-blue-400 to-indigo-500",
    TensorFlow: "from-orange-400 to-red-500",
    "Next.js": "from-black to-gray-700",
    PostgreSQL: "from-blue-500 to-cyan-500",
    Contentstack: "from-purple-400 to-indigo-500",
    Launch: "from-blue-400 to-cyan-500",
};

export default function Works() {
  const [visibleProjects, setVisibleProjects] = useState<Record<number, { scale: number; opacity: number }>>({});
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [currentImages, setCurrentImages] = useState<Record<number, number>>(() =>
    WORKS_PROJECTS.reduce<Record<number, number>>((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {}),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const newImages = { ...prev };
        WORKS_PROJECTS.forEach((project) => {
          newImages[project.id] = (newImages[project.id] + 1) % project.images.length;
        });
        return newImages;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementHeight = rect.height;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrollY + windowHeight / 2;

        if (elementCenter > viewportCenter) {
          const distance = Math.abs(viewportCenter - elementCenter);
          const maxDistance = windowHeight / 2 + elementHeight / 2;

          let progress = 1 - Math.min(distance / maxDistance, 1);
          progress = Math.max(0, progress);

          const eased = progress * progress * (3 - 2 * progress);
          const scale = 0.6 + eased * 0.4;
          const opacity = eased;

          setVisibleProjects((prev) => ({
            ...prev,
            [index]: { scale, opacity },
          }));
        } else {
          setVisibleProjects((prev) => ({
            ...prev,
            [index]: { scale: 1, opacity: 1 },
          }));
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const fontOrbitron = "var(--font-orbitron), ui-sans-serif, system-ui, sans-serif";
  const fontInter = "var(--font-inter), ui-sans-serif, system-ui, sans-serif";
  const fontSpaceGrotesk = "var(--font-space-grotesk), var(--font-poppins), ui-sans-serif, system-ui, sans-serif";

  return (
    <div id="works" className="works min-h-screen px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1
          className="mb-16 text-center text-4xl font-bold tracking-tight text-white uppercase sm:mb-20 sm:text-5xl sm:tracking-tighter md:text-6xl md:tracking-[-0.03em]"
          style={{ fontFamily: fontSpaceGrotesk }}
        >
          My Works
        </h1>

        <div className="space-y-16">
          {WORKS_PROJECTS.map((project, index) => {
            const visibility = visibleProjects[index] ?? { scale: 0.6, opacity: 0 };

            return (
              <div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className="transition-all duration-300 ease-out"
                style={{
                  transform: `scale(${visibility.scale})`,
                  opacity: visibility.opacity,
                }}
              >
                <div className="overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/92 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <div className="flex flex-col gap-3 px-5 pt-5 pb-3 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pt-6 sm:pb-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h2
                        className="text-lg font-semibold tracking-wide text-white sm:text-xl md:text-2xl"
                        style={{ fontFamily: fontOrbitron }}
                      >
                        <span className="text-white/50">{String(index + 1).padStart(2, "0")}</span>
                        <span className="mx-2 text-white/30">|</span>
                        {project.title}
                      </h2>
                      {project.discontinued && (
                        <span
                          className="rounded-full bg-red-500/80 px-3 py-1 text-[10px] font-semibold tracking-wide text-white uppercase sm:text-xs"
                          style={{ fontFamily: fontOrbitron }}
                        >
                          Discontinued
                        </span>
                      )}
                    </div>
                    <p
                      className="text-xs tracking-wide text-white/70 tabular-nums sm:text-sm"
                      style={{ fontFamily: fontInter }}
                    >
                      {project.timeline}
                    </p>
                  </div>

                  <div className="grid gap-0 md:grid-cols-3">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/50 md:col-span-2">
                      {project.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000"
                          style={{
                            opacity: currentImages[project.id] === imgIndex ? 1 : 0,
                          }}
                        />
                      ))}

                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
                        {project.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              currentImages[project.id] === imgIndex ? "w-8 bg-white" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col justify-between p-5 sm:p-8">
                      <div>
                        <p
                          className="mb-6 text-xs font-normal leading-relaxed text-zinc-400 sm:text-sm sm:leading-relaxed md:text-base"
                          style={{ fontFamily: fontInter }}
                        >
                          {project.description}
                        </p>

                        <div className="mb-6">
                          <h3
                            className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-zinc-400 uppercase sm:text-xs"
                            style={{ fontFamily: fontOrbitron }}
                          >
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/15 px-3 py-1.5 text-sm text-white backdrop-blur-sm"
                              >
                                <img src={techIcons[tech.icon]} alt={tech.name} className="h-4 w-4" />
                                <span
                                  className={`bg-gradient-to-r ${techGradients[tech.name]} bg-clip-text text-xs font-medium tracking-wide text-transparent sm:text-sm`}
                                  style={{ fontFamily: fontInter }}
                                >
                                  {tech.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h3
                            className="mb-2 text-[11px] font-semibold tracking-[0.22em] text-zinc-400 uppercase sm:text-xs"
                            style={{ fontFamily: fontOrbitron }}
                          >
                            Timeline
                          </h3>
                          <p className="text-sm text-white/85 tabular-nums sm:text-base" style={{ fontFamily: fontInter }}>
                            {project.timeline}
                          </p>
                        </div>

                        {project.domain && (
                          <div className="mb-6">
                            <h3
                              className="mb-2 text-[11px] font-semibold tracking-[0.22em] text-zinc-400 uppercase sm:text-xs"
                              style={{ fontFamily: fontOrbitron }}
                            >
                              Domain
                            </h3>
                            <p
                              className="break-all text-sm text-white/85 sm:text-base"
                              style={{ fontFamily: fontInter }}
                            >
                              {project.domain}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 sm:mt-0 sm:gap-3">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-white/25 sm:px-5 sm:text-sm"
                            style={{ fontFamily: fontOrbitron }}
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full bg-blue-500/85 px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase transition-colors duration-300 hover:bg-blue-500 sm:px-5 sm:text-sm"
                            style={{ fontFamily: fontOrbitron }}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
