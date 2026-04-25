"use client";

import { useState, useEffect, type ComponentType } from "react";
import Image from "next/image";
import { assetSrc } from "@/lib/assetSrc";
import dhruvImage from "@/assets/dhruv.png";
import glassImage from "@/assets/glass.jpg";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaYoutube, FaReddit } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

/** Laptop / tablet landscape — matches `portfolio/vite-project/Hero1.jsx` (inline clamp). */
const LAPTOP_PORTRAIT = "clamp(150px, 40vw, 354px)";

/** Top landing band: gradient, portrait, socials, name (scroll target `#home`). */
export default function Hero() {
  const [showCreepy, setShowCreepy] = useState(false);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setShowCreepy(true);
      setTimeout(() => setShowCreepy(false), 150);
      setTimeout(() => setShowCreepy(true), 300);
      setTimeout(() => setShowCreepy(false), 450);
    }, 10000);

    return () => clearInterval(flickerInterval);
  }, []);

  const allSocials = [
    { name: "Github", icon: FaGithub, color: "#000000", link: SOCIAL_LINKS.github },
    { name: "Linkedin", icon: FaLinkedin, color: "#0A66C2", link: SOCIAL_LINKS.linkedin },
    { name: "X", icon: FaXTwitter, color: "#000000", link: "https://x.com" },
    { name: "Instagram", icon: FaInstagram, color: "#E4405F", link: SOCIAL_LINKS.instagram },
    { name: "Youtube", icon: FaYoutube, color: "#FF0000", link: SOCIAL_LINKS.youtube },
    { name: "Codeforces", icon: SiCodeforces, color: "#1F1C8F", link: SOCIAL_LINKS.codeforces },
    { name: "Leetcode", icon: SiLeetcode, color: "#FFA500", link: SOCIAL_LINKS.leetcode },
    {
      name: "Reddit",
      icon: FaReddit,
      color: "#FF4500",
      link: "https://www.reddit.com/user/Zestyclose_Law_6137/",
    },
  ];

  function SocialCircle({
    name,
    icon: Icon,
    color,
    link,
    isSmall = false,
    overlapMargin = true,
  }: {
    name: string;
    icon: ComponentType<{ size?: number; color?: string }>;
    color: string;
    link: string;
    isSmall?: boolean;
    overlapMargin?: boolean;
  }) {
    const margin = overlapMargin ? (isSmall ? "-8px" : "-15px") : "0";
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon group hover:z-50"
        style={{
          width: isSmall ? "50px" : "80px",
          height: isSmall ? "50px" : "80px",
          borderRadius: "50%",
          backgroundColor: color,
          margin,
          position: "relative",
          transition: "transform 0.3s ease-in",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        title={name}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Icon size={isSmall ? 30 : 54} color="#d3d3d3" />
      </a>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full overflow-hidden rounded-b-[48px] sm:rounded-b-[72px] md:flex md:min-h-screen md:items-center md:justify-center md:rounded-b-[100px] lg:rounded-b-[150px]"
      style={{
        backgroundImage: showCreepy
          ? `linear-gradient(to right, rgba(249, 115, 22, 0.95), rgba(239, 68, 68, 0.95)), url(${assetSrc(glassImage)})`
          : "linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: showCreepy ? "multiply" : "normal",
        transition: "background-image 0.05s ease-in-out",
      }}
    >
      <div
        className="relative z-10 flex min-h-[100dvh] flex-col items-stretch px-4 pt-[max(5.5rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden"
      >
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-4">
          <div className="relative w-[min(88vw,22rem)] shrink-0 sm:w-[min(82vw,24rem)]">
            <div className="relative mx-auto aspect-square w-full max-w-[min(88vw,22rem)] overflow-hidden rounded-full border-4 border-black shadow-2xl sm:max-w-[min(82vw,24rem)]">
              <Image
                src={dhruvImage}
                alt="Dhruv Raj Singh"
                width={384}
                height={384}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 768px) 88vw, 354px"
              />
            </div>
            <div className="absolute -right-1 -bottom-1 h-10 w-10 animate-pulse rounded-full bg-yellow-400 opacity-25 sm:h-12 sm:w-12" />
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-1 pb-2">
          <p
            className="text-center font-sans font-extrabold tracking-tight text-[#101010]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(1rem, 3.8vw, 1.35rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            HEY THERE I&apos;M
          </p>
          <span
            className="max-w-[100vw] px-1 text-center font-sans font-extrabold tracking-tight break-words text-[#ced4da]"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(1.75rem, 9.5vw, 3.25rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              paintOrder: "stroke fill",
            }}
          >
            DHRUV RAJ SINGH
          </span>
        </div>

        <div className="mt-8 flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-3 px-1 pb-3">
          {allSocials.map((social, idx) => (
            <SocialCircle key={social.name + idx} {...social} isSmall overlapMargin={false} />
          ))}
        </div>
      </div>

      {/* md+: portrait center aligned with social row (both at 40% + translateY -50%) */}
      <div className="pointer-events-none absolute top-[40%] left-1/2 z-[1] hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-full border-4 border-black shadow-2xl"
            style={{ width: LAPTOP_PORTRAIT, height: LAPTOP_PORTRAIT }}
          >
            <Image
              src={dhruvImage}
              alt="Dhruv Raj Singh"
              fill
              className="object-cover"
              priority
              sizes="(min-width: 768px) min(40vw, 354px), 90vw"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-12 w-12 animate-pulse rounded-full bg-yellow-400 opacity-20 md:h-24 md:w-24" />
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-1/2 hidden translate-y-20 md:block"
        style={{ right: "calc(50% + 120px)" }}
      >
        <span
          className="font-sans font-extrabold"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(24px, 5vw, 64px)",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            color: "#101010",
          }}
        >
          HEY THERE
        </span>
      </div>

      <div
        className="pointer-events-none absolute top-1/2 hidden translate-y-20 md:block"
        style={{ left: "calc(50% + 100px)", marginLeft: "30px" }}
      >
        <span
          className="font-sans font-extrabold"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(24px, 5vw, 64px)",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            color: "#101010",
          }}
        >
          I&apos;M
        </span>
      </div>

      <div
        className="absolute left-0 right-0 hidden items-center justify-center gap-2 px-4 md:flex md:gap-6"
        style={{
          zIndex: 5,
          top: "40%",
          transform: "translateY(-50%)",
          width: "100%",
        }}
      >
        {allSocials.slice(0, 4).map((social, idx) => (
          <SocialCircle key={social.name + idx} {...social} />
        ))}
        <div style={{ width: LAPTOP_PORTRAIT, height: LAPTOP_PORTRAIT }} />
        {allSocials.slice(4).map((social, idx) => (
          <SocialCircle key={social.name + (idx + 4)} {...social} />
        ))}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 hidden flex-col items-center justify-center px-4 md:flex lg:px-8"
        style={{ height: "40vh" }}
      >
        <span
          className="z-10 max-w-[95vw] break-words text-center font-sans font-extrabold"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "clamp(48px, 10vw, 160px)",
            lineHeight: "1.1",
            letterSpacing: "-1px",
            color: "#ced4da",
            paintOrder: "stroke fill",
          }}
        >
          DHRUV RAJ SINGH
        </span>
      </div>
    </section>
  );
}
