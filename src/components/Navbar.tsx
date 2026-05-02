"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronRight, Download, MousePointerClick } from "lucide-react";
import urImage from "@/assets/ur.jpg";

const RESUME_PATH = "/Dhruvrajsingh_resume_2025.pdf";

const fontOrbitron = "var(--font-orbitron), ui-sans-serif, system-ui, sans-serif";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

    const t = window.setTimeout(() => setTime(format()), 0);
    const timer = window.setInterval(() => setTime(format()), 60000);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = "auto";
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Works", id: "works" },
    { name: "Journey", id: "journey" },
    { name: "Contact", id: "contact" },
    { name: "Resume", id: "resume", isSpecial: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    if (id === "resume") {
      window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
      setIsOpen(false);
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const smoothScroll = (currentTime: number) => {
        if (start === null) start = currentTime;
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
      setIsOpen(false);
    }
  };

  function NavLink({ link, index }: { link: (typeof navLinks)[number]; index: number }) {
    const isHov = activeIndex === index;

    if (link.isSpecial) {
      return (
        <button
          type="button"
          onClick={() => scrollToSection(link.id)}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className="group relative flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide transition-all duration-300"
          style={{
            backgroundColor: isHov ? "#2a2a2a" : "transparent",
            color: "#a0a0a0",
            transform: isHov ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
            boxShadow: isHov ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "none",
            fontFamily: fontOrbitron,
            border: "none",
            cursor: "pointer",
          }}
        >
          <Download className="h-3.5 w-3.5" />
          <span className="relative z-10">{link.name}</span>
        </button>
      );
    }

    return (
      <button
        type="button"
        onClick={() => scrollToSection(link.id)}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
        className="group relative cursor-pointer overflow-hidden rounded-xl border-none bg-transparent px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-300"
        style={{
          color: isHov ? "#a0a0a0" : "#b0b0b0",
          fontFamily: fontOrbitron,
        }}
      >
        <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-105">
          {link.name}
        </span>

        <div
          className="absolute inset-0 scale-90 transform rounded-xl opacity-0 transition-all duration-500"
          style={{
            background: "rgba(60, 60, 60, 0.3)",
            transform: activeIndex === index ? "scale(1)" : "scale(0.9)",
            opacity: activeIndex === index ? 1 : 0,
          }}
        />

        <div
          className="absolute bottom-0 left-1/2 h-0.5 w-full transition-all duration-300 ease-out"
          style={{
            transform: `translateX(-50%) scaleX(${isHov ? 1 : 0})`,
            transformOrigin: "center",
            backgroundColor: "#a0a0a0",
          }}
        />
      </button>
    );
  }

  return (
    <>
      <div
        className="fixed top-0 z-50 left-4 right-4 md:left-[90px] md:right-[90px]"
        style={{
          backgroundColor: "rgba(16, 16, 16, 0.7)",
          backdropFilter: "blur(10px)",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div className="relative flex items-center justify-center">
          <nav
            className="absolute left-1/2 -translate-x-1/2 transform"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="flex items-center justify-between overflow-visible rounded-full border border-gray-600 border-opacity-50 shadow-lg backdrop-blur-2xl"
              style={{
                backgroundColor: "#121111",
                width: isHovered ? "calc(100vw - 32px)" : "90px",
                maxWidth: isHovered ? "620px" : "90px",
                paddingLeft: "0.875rem",
                paddingRight: "0.875rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                transition:
                  "width 1500ms cubic-bezier(0.16, 1, 0.3, 1), max-width 1500ms cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center",
                whiteSpace: "nowrap",
              }}
            >
              <div className="flex flex-shrink-0 items-center gap-1">
                {pathname === "/" ? (
                  <button
                    type="button"
                    onClick={() => scrollToSection("home")}
                    className="group relative z-10 flex flex-shrink-0 cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-sm font-bold text-white transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative flex-shrink-0">
                      <Image
                        src={urImage}
                        alt="UR"
                        width={32}
                        height={32}
                        loading="eager"
                        className="h-7 w-7 flex-shrink-0 rounded-full border-2 object-cover transition-all duration-500 group-hover:rotate-[360deg] md:h-8 md:w-8"
                        style={{
                          borderColor: "#a0a0a0",
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                        }}
                      />
                      <span
                        className="absolute inset-0 scale-125 rounded-full border-2 opacity-0 transition-all duration-500 group-hover:opacity-100"
                        style={{
                          borderColor: "#a0a0a0",
                          boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
                        }}
                      />
                    </div>
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="group relative z-10 flex flex-shrink-0 items-center gap-1.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative flex-shrink-0">
                      <Image
                        src={urImage}
                        alt="UR"
                        width={32}
                        height={32}
                        loading="eager"
                        className="h-7 w-7 flex-shrink-0 rounded-full border-2 object-cover transition-all duration-500 group-hover:rotate-[360deg] md:h-8 md:w-8"
                        style={{
                          borderColor: "#a0a0a0",
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                        }}
                      />
                    </div>
                  </Link>
                )}

                <div
                  className="flex-shrink-0"
                  style={{
                    transition: "all 1500ms cubic-bezier(0.16, 1, 0.3, 1)",
                    opacity: isHovered ? 0 : 1,
                    transform: isHovered ? "scale(0)" : "scale(1)",
                    width: isHovered ? "0" : "auto",
                  }}
                >
                  <MousePointerClick className="ml-2 h-4 w-4 text-gray-400 md:h-5 md:w-5" />
                </div>
              </div>

              <div
                className="hidden items-center gap-1 md:flex"
                style={{
                  transition: "all 1200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scale(1)" : "scale(0.95)",
                  pointerEvents: isHovered ? "auto" : "none",
                }}
              >
                {navLinks.map((link, index) => (
                  <NavLink key={link.id} link={link} index={index} />
                ))}
              </div>

              <button
                type="button"
                onClick={toggleMenu}
                className="relative rounded-xl p-2 md:hidden"
                aria-label="Toggle menu"
                style={{
                  background: isOpen ? "rgba(60, 60, 60, 0.3)" : "transparent",
                  transition: "all 1500ms cubic-bezier(0.16, 1, 0.3, 1)",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "scale(1)" : "scale(0)",
                }}
              >
                <div className="relative h-6 w-6">
                  <Menu
                    className="absolute inset-0 h-6 w-6 text-gray-300"
                    style={{
                      transition: "all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transform: isOpen ? "rotate(180deg) scale(0)" : "rotate(0deg) scale(1)",
                      opacity: isOpen ? 0 : 1,
                    }}
                  />
                  <X
                    className="absolute inset-0 h-6 w-6"
                    style={{
                      color: "#ffffff",
                      transition: "all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transform: isOpen ? "rotate(0deg) scale(1)" : "rotate(180deg) scale(0)",
                      opacity: isOpen ? 1 : 0,
                    }}
                  />
                </div>
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute left-1/2 z-40 mt-2 flex w-[13.5rem] -translate-x-1/2 transform flex-col gap-1 rounded-2xl border border-gray-600 border-opacity-50 px-2.5 py-2 shadow-xl backdrop-blur-2xl md:hidden"
                style={{
                  backgroundColor: "#121111",
                  animation: "fadeIn 0.3s ease-out",
                }}
              >
                {navLinks.map((link, idx) => {
                  if (link.isSpecial) {
                    return (
                      <button
                        type="button"
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="group flex w-full cursor-pointer items-center justify-between rounded-lg border px-2.5 py-2 text-xs font-semibold tracking-wide transition-all duration-300"
                        style={{
                          backgroundColor: "#2a2a2a",
                          color: "#a0a0a0",
                          borderColor: "#2a2a2a",
                          animation: `slideInMobile 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s both`,
                          fontFamily: fontOrbitron,
                        }}
                      >
                        <span className="flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
                          <Download className="h-3 w-3 shrink-0" />
                          {link.name}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 translate-x-0 opacity-100 transition-all duration-300" />
                      </button>
                    );
                  }

                  return (
                    <button
                      type="button"
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="group flex w-full cursor-pointer items-center justify-between rounded-lg border border-transparent bg-transparent px-2.5 py-2 text-xs font-semibold tracking-wide transition-all duration-300"
                      style={{
                        color: "#b0b0b0",
                        animation: `slideInMobile 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s both`,
                        fontFamily: fontOrbitron,
                      }}
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">{link.name}</span>
                      <ChevronRight
                        className="h-3.5 w-3.5 shrink-0 transition-all duration-300"
                        style={{
                          color: "#a0a0a0",
                          opacity: 0,
                          transform: "translateX(-6px)",
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </nav>

          <div
            className="ml-auto text-xs font-semibold tracking-widest text-gray-400 tabular-nums md:text-sm"
            style={{ fontFamily: fontOrbitron }}
          >
            {time}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
