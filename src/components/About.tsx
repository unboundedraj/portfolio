"use client";

import aboutImage from "@/assets/about.png";
import { assetSrc } from "@/lib/assetSrc";

const ABOUT_SKILLS = [
  "Full Stack Developer",
  "Software Engineer",
  "Web Developer",
  "AI Enthusiast",
  "React Developer",
  "App Developer",
  "UI/UX Designer",
  "Backend Engineer",
  "Photography Enthusiast",
  "Editor",
  "Content Creation",
  "Book Reader",
] as const;

function AboutCarouselRow({ direction, skills }: { direction: "left" | "right"; skills: readonly string[] }) {
  return (
    <div className="relative h-12 w-full overflow-hidden lg:h-14">
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
      <div
        className="flex gap-3 whitespace-nowrap lg:gap-4"
        style={{
          animation: direction === "left" ? "scrollLeft 20s linear infinite" : "scrollRight 20s linear infinite",
        }}
      >
        {[...Array(5)].map((_, groupIdx) =>
          skills.map((skill, skillIdx) => (
            <div
              key={`${direction}-${groupIdx}-${skillIdx}`}
              className="flex-shrink-0 rounded border-2 border-[#affc41] px-4 py-2 text-white lg:px-6 lg:py-3"
            >
              <p className="whitespace-nowrap text-xs font-extralight sm:text-sm lg:text-base">{skill}</p>
            </div>
          )),
        )}
      </div>
    </div>
  );
}

export default function About() {
  const slogan = " I want to know how much of an impact I can make before I leave. ";

  return (
    <>
      <section id="about" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#101010]">
        <div className="relative mx-auto w-full max-w-6xl px-4 py-20">
          <div className="space-y-8">
            <div className="text-center">
              <h2
                className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl sm:tracking-tighter lg:text-8xl lg:tracking-[-0.04em]"
                style={{
                  color: "#adb5bd",
                  fontFamily: "var(--font-space-grotesk), var(--font-poppins), ui-sans-serif, system-ui, sans-serif",
                }}
              >
                Who is{" "}
                <span className="font-semibold text-[#affc41] sm:font-bold" style={{ fontFamily: "inherit" }}>
                  unboundedraj
                </span>
                ?
              </h2>
            </div>

            <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-2">
              <div className="flex w-full shrink-0 justify-center lg:w-1/3">
                <img
                  src={assetSrc(aboutImage)}
                  alt="unboundedraj"
                  className="h-80 w-64 rounded-2xl object-contain lg:h-96 lg:w-72"
                />
              </div>

              <div className="space-y-6 text-center lg:mt-12 lg:w-2/3 lg:mr-10">
                <p className="text-base font-light leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
                  &quot; As a self-taught Software Engineer, I build full stack applications that solve real world problems.
                  Currently in my final year of college, I have dedicated my journey to mastering software craftsmanship. I
                  use my background in design and content to inform my engineering process, ensuring products are both
                  functional and user centric. Whether I am tackling complex logic or drawing inspiration from music, my
                  goal remains the same: building software that truly matters. &quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Edge-to-edge marquee (outside max-w-6xl so trains span full viewport width) */}
        <div className="w-full space-y-3 pb-2">
          <AboutCarouselRow direction="left" skills={ABOUT_SKILLS} />
          <AboutCarouselRow direction="right" skills={ABOUT_SKILLS} />
        </div>
      </section>

      <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#101010] py-12">
        <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">
          <h1
            className="text-3xl leading-tight font-black tracking-tight text-white sm:text-4xl sm:tracking-tighter lg:text-5xl lg:tracking-[-0.03em]"
            style={{
              fontFamily: "var(--font-space-grotesk), var(--font-poppins), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            <span className="text-4xl text-red-600 sm:text-5xl lg:text-6xl">&quot;</span>
            {slogan}
            <span className="text-4xl text-red-600 sm:text-5xl lg:text-6xl">&quot;</span>
          </h1>
        </div>
      </section>
    </>
  );
}
