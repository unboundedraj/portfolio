"use client"

import { useState, useEffect, useRef } from "react"
import aboutImage from "../assets/about.png"

const About = () => {
  const skills = [
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
  ]

  const slogan = " I want to know how much of an impact I can make before I leave. "

  const CarouselRow = ({ direction }) => (
    <div className="relative overflow-hidden h-12 lg:h-14 mb-3">
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
        className="flex gap-3 lg:gap-4 whitespace-nowrap"
        style={{
          animation: direction === "left" ? "scrollLeft 20s linear infinite" : "scrollRight 20s linear infinite",
        }}
      >
        {[...Array(5)].map((_, groupIdx) =>
          skills.map((skill, skillIdx) => (
            <div
              key={`${direction}-${groupIdx}-${skillIdx}`}
              className="flex-shrink-0 border-2 border-red-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded"
            >
              <p className="text-xs sm:text-sm lg:text-base font-extralight whitespace-nowrap">{skill}</p>
            </div>
          )),
        )}
      </div>
    </div>
  )

  return (
    <>
      <section id="about"
        className="w-full min-h-screen bg-[#101010] overflow-hidden flex items-center justify-center relative "
      >
        <div className="relative w-full max-w-6xl mx-auto px-4 py-20">
          <div className="space-y-8">
            {/* Question */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black mb-6" style={{ color: "#adb5bd" }}>
                Who is <span style={{
                  background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>unboundedraj</span>?
              </h2>
            </div>

            {/* Content with Image and Description */}
            <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-2">
              {/* Image */}
              <div className="shrink-0 w-full lg:w-1/3 flex justify-center">
                <img 
                  src={aboutImage} 
                  alt="unboundedraj" 
                  className="w-64 h-80 lg:w-72 lg:h-96 object-contain rounded-2xl"
                />
              </div>

              {/* Description */}
              <div className="text-center space-y-6 lg:w-2/3">
                <p className="text-base sm:text-lg lg:text-xl font-light lg:mr-10 lg:mt-12 text-gray-300 leading-relaxed">
                 " I'm a self-taught Full Stack Developer and Software Engineer who is currently in final year of college. I am passionate about designing digital solutions that address real-world challenges. My journey spans across multiple disciplines—from crafting intuitive user experiences through UI/UX design and photography, to creating compelling content that resonates. I believe in the intersection of technology and creativity, where thoughtful design meets powerful code to build products that truly matter. When I'm not coding, you'll find me exploring music, which fuels my creativity and provides inspiration for everything I do."
                </p>
              </div>
            </div>

            {/* Skills Carousel */}
            <div>
              <CarouselRow direction="left" />
              <CarouselRow direction="right" />
            </div>
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="w-full bg-[#101010] flex items-center justify-center relative overflow-hidden py-12">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        `}</style>
        
        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-red-600 text-4xl sm:text-5xl lg:text-6xl">"</span>
            {slogan}
            <span className="text-red-600 text-4xl sm:text-5xl lg:text-6xl">"</span>
          </h1>
        </div>
      </section>
    </>
  )
}

export default About