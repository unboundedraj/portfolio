"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { assetSrc } from "@/lib/assetSrc";
import img1 from "@/assets/team/1.jpeg";
import img2 from "@/assets/team/2.jpeg";
import img3 from "@/assets/team/3.jpeg";
import img4 from "@/assets/team/4.jpeg";
import img5 from "@/assets/team/5.jpeg";
import img6 from "@/assets/team/6.jpeg";
import img7 from "@/assets/team/7.jpeg";
import img8 from "@/assets/team/8.jpeg";
import img9 from "@/assets/team/9.jpeg";
import img10 from "@/assets/team/10.jpeg";
import img11 from "@/assets/team/11.jpeg";
import img12 from "@/assets/team/12.jpeg";
import img13 from "@/assets/team/13.jpeg";
import img14 from "@/assets/team/14.jpeg";
import img15 from "@/assets/team/15.jpeg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
].map(assetSrc);

/** Orbit radius: slightly larger on laptop (lg+) so the ring uses more horizontal space. */
const RADIUS_DEFAULT = 450;
const RADIUS_LAPTOP = 530;
const LAPTOP_MQ = "(min-width: 1024px)";

export default function Quote() {
  const [offset, setOffset] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [circleRadius, setCircleRadius] = useState(RADIUS_DEFAULT);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);

  useLayoutEffect(() => {
    const mq = window.matchMedia(LAPTOP_MQ);
    const apply = () => setCircleRadius(mq.matches ? RADIUS_LAPTOP : RADIUS_DEFAULT);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const containerHeight = Math.max(900, circleRadius * 2 + 100);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      setOffset((scrollRef.current * 0.4) % (images.length * 100));
    };

    let scrollAttached = false;
    const t = window.setTimeout(() => {
      setIsClient(true);
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      scrollAttached = true;
    }, 0);

    return () => {
      window.clearTimeout(t);
      if (scrollAttached) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const extendedImages = [...images, ...images, ...images, ...images, ...images];

  const calculateCirclePosition = (index: number) => {
    const anglePerCard = (2 * Math.PI) / images.length;
    const angle = index * anglePerCard - offset / 50;

    const x = Math.cos(angle) * circleRadius;
    const y = Math.sin(angle) * circleRadius;

    const tilt = (angle * 180) / Math.PI;

    const round = (n: number) => Math.round(n * 1000) / 1000;
    return { x: round(x), y: round(y), tilt: round(tilt) };
  };

  return (
    <section className="my-10 w-full overflow-hidden bg-[#101010] py-20">
      <div className="flex w-full items-center justify-center">
        <div
          ref={containerRef}
          className="relative flex items-center justify-center"
          style={{
            height: `${containerHeight}px`,
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          <div
            className="absolute rounded-full border border-gray-700 opacity-20"
            style={{
              width: `${circleRadius * 2}px`,
              height: `${circleRadius * 2}px`,
              left: `calc(50% - ${circleRadius}px)`,
              top: `calc(50% - ${circleRadius}px)`,
            }}
          />

          <div className="absolute z-10 flex items-center justify-center px-8 text-center md:px-32 lg:px-64">
            <span className="text-2xl font-extralight text-gray-300">
              <span className="text-3xl font-normal text-green-400">›</span> I value great teamwork, but my deepest
              productivity comes from quiet, independent focus.{" "}
              <span className="text-3xl font-normal text-green-400">‹</span>
            </span>
          </div>

          <div className="absolute z-20 h-full w-full">
            {isClient
              ? extendedImages.map((img, idx) => {
                  const { x, y, tilt } = calculateCirclePosition(idx);

                  return (
                    <div
                      key={`${idx}-image`}
                      className="absolute h-40 w-32 overflow-hidden rounded-xl border-2 border-gray-700 shadow-lg transition-all duration-300 hover:shadow-2xl"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${tilt + 90}deg)`,
                        transformOrigin: "center center",
                        left: "50%",
                        top: "50%",
                        zIndex: 20,
                      }}
                    >
                      <img
                        src={img}
                        alt={`Team member ${(idx % images.length) + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
