"use client";

import { useState, useEffect } from "react";
import { assetSrc } from "@/lib/assetSrc";
import Image1 from "@/assets/hero/1.jpeg";
import Image2 from "@/assets/hero/2.jpeg";
import Image3 from "@/assets/hero/3.png";
import Image4 from "@/assets/hero/4.jpeg";
import Image5 from "@/assets/hero/5.jpeg";
import Image6 from "@/assets/hero/6.jpeg";
import Image7 from "@/assets/hero/7.jpeg";
import Image8 from "@/assets/hero/8.jpeg";

const HERO_IMAGES = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
];

const TEXT_SEQUENCE = ["Being Creative", "Being Delusional", "Being Awesome", "Being Limitless"];

/** Second band: cycling taglines + “unboundedraj” treatment (follows `Hero`). */
export default function SubHero() {
  const [displayText, setDisplayText] = useState("Being Creative");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let sequenceIndex = 0;
    let isInBoundedRaj = false;
    let textDuration: ReturnType<typeof setTimeout> | undefined;
    let transitionDuration: ReturnType<typeof setTimeout> | undefined;
    let boundedRajTimeout: ReturnType<typeof setTimeout> | undefined;

    const cycleTexts = () => {
      if (!isInBoundedRaj) {
        textDuration = setTimeout(() => {
          transitionDuration = setTimeout(() => {
            sequenceIndex = (sequenceIndex + 1) % TEXT_SEQUENCE.length;

            if (sequenceIndex === 0) {
              isInBoundedRaj = true;
              setDisplayText("unboundedraj");
              setCurrentImageIndex(0);

              boundedRajTimeout = setTimeout(() => {
                isInBoundedRaj = false;
                sequenceIndex = 0;
                setDisplayText(TEXT_SEQUENCE[0]);
                cycleTexts();
              }, 8000);

              return;
            }

            setDisplayText(TEXT_SEQUENCE[sequenceIndex]);
            cycleTexts();
          }, 300);
        }, 1000);
      }
    };

    cycleTexts();

    return () => {
      if (textDuration) clearTimeout(textDuration);
      if (transitionDuration) clearTimeout(transitionDuration);
      if (boundedRajTimeout) clearTimeout(boundedRajTimeout);
    };
  }, []);

  useEffect(() => {
    if (displayText === "unboundedraj") {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
      }, 1000);

      return () => {
        clearInterval(imageInterval);
      };
    }
  }, [displayText]);

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col bg-[#101010] sm:min-h-screen sm:justify-center md:items-center">
      <style>{`
        @keyframes glitch {
          0%, 100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(10% 0 65% 0);
            transform: translate(-2px, -2px);
          }
          40% {
            clip-path: inset(50% 0 10% 0);
            transform: translate(2px, 2px);
          }
          60% {
            clip-path: inset(25% 0 58% 0);
            transform: translate(-2px, 2px);
          }
          80% {
            clip-path: inset(55% 0 30% 0);
            transform: translate(2px, -2px);
          }
        }

        .glitch-text {
          animation: glitch 0.3s ease-in-out;
        }

        .subhero-text-container {
          position: relative;
          display: inline-block;
          word-break: break-word;
          background: linear-gradient(135deg, #e0e0e0 0%, #808080 50%, #404040 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .unbounded-text-with-image {
          position: relative;
          display: inline-block;
          background-size: cover;
          background-position: center;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: white;
          word-break: break-word;
        }

        @keyframes apocalypseGlow {
          0%, 100% {
            text-shadow: 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 30px #FF8C00;
            filter: brightness(1.2);
          }
          50% {
            text-shadow: 0 0 20px #FFD700, 0 0 40px #FFA500, 0 0 60px #FF8C00, 0 0 80px #FF6347;
            filter: brightness(1.5);
          }
        }

        .apocalypse-glow {
          animation: apocalypseGlow 2s ease-in-out infinite;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap');

        @media (max-width: 640px) {
          .subhero-text-container,
          .unbounded-text-with-image {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-3 pt-[max(5rem,env(safe-area-inset-top))] pb-8 sm:flex sm:flex-none sm:items-center sm:justify-center sm:px-4 sm:py-10 sm:pt-10 md:min-h-0 md:py-12 lg:py-16">
        <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center text-center sm:flex-none sm:justify-center">
          {displayText === "unboundedraj" ? (
            <div className="relative inline-block w-full max-w-[min(100%,24rem)] sm:max-w-none">
              <p className="mb-2 text-base font-light tracking-wide text-gray-400 sm:mb-1 sm:text-base md:text-lg lg:text-xl">
                Aka
              </p>
              <h1
                className="unbounded-text-with-image text-[clamp(2.5rem,12.5vw,4.75rem)] font-bold leading-[1.05] tracking-tight sm:text-6xl sm:leading-tight md:text-7xl lg:text-[158px]"
                style={{
                  backgroundImage: `url(${assetSrc(HERO_IMAGES[currentImageIndex]!)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                unboundedraj
              </h1>
            </div>
          ) : (
            <div className="relative inline-block w-full max-w-[min(100%,26rem)] sm:max-w-none">
              <p className="mb-2 text-base font-light tracking-wide text-gray-400 sm:mb-1 sm:text-base md:text-lg lg:text-xl">
                I&apos;m known for
              </p>
              <h1 className="subhero-text-container text-[clamp(2.35rem,11.5vw,4.25rem)] font-bold leading-[1.06] tracking-tight sm:text-6xl sm:leading-tight md:text-7xl lg:text-[122px]">
                {displayText}
              </h1>
            </div>
          )}
        </div>

        <div className="mt-auto flex shrink-0 flex-col items-center justify-center gap-2 pt-6 sm:mt-8 sm:pt-0 md:mt-10">
          <p
            className="apocalypse-glow font-sans text-lg font-light tracking-wide text-yellow-400 sm:text-xs md:text-xs lg:text-2xl"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            # No Limits
          </p>
        </div>
      </div>
    </section>
  );
}
