"use client"

import { useState, useEffect, useRef } from "react"

const About = () => {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    "Full Stack Developer",
    "Web Development",
    "UI/UX Design",
    "Backend Engineering",
    "Photography",
    "Creative Direction",
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if section is in viewport
      if (sectionRect.top < windowHeight && sectionRect.bottom > 0) {
        setIsInView(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-[#101010] overflow-hidden flex items-center justify-center relative"
    >
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

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
        `}
      </style>

      <div className="relative w-full max-w-6xl mx-auto px-4 py-20">
        {/* Who is unboundedraj - appears when section is in view */}
        {isInView && (
          <div className="space-y-8">
            {/* Question */}
            <div
              className="text-center"
              style={{
                animation: "fadeIn 0.8s ease-out",
              }}
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                Who is <span className="text-red-600">unboundedraj</span>?
              </h2>
            </div>

            {/* Description */}
            <div
              className="text-center space-y-4"
              style={{
                animation: "fadeIn 0.8s ease-out 0.2s both",
              }}
            >
              <p className="text-base sm:text-lg lg:text-xl font-light text-gray-300">
                Self-taught full stack developer solving real problems through code and creative thinking.
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-light text-gray-400">
                How much of an impact can I leave before I leave?
              </p>
            </div>

            {/* Skills Carousel */}
            <div
              className="mt-8"
              style={{
                animation: "fadeIn 0.8s ease-out 0.4s both",
              }}
            >
              {/* Left to Right Carousel */}
              <div className="relative overflow-hidden h-12 lg:h-14 mb-3">
                <div
                  className="flex gap-3 lg:gap-4 whitespace-nowrap"
                  style={{
                    animation: "scrollLeft 20s linear infinite",
                  }}
                >
                  {[...Array(5)].map((_, groupIdx) =>
                    skills.map((skill, skillIdx) => (
                      <div
                        key={`left-${groupIdx}-${skillIdx}`}
                        className="flex-shrink-0 border-2 border-red-600 text-red-600 px-4 lg:px-6 py-2 lg:py-3 rounded"
                      >
                        <p className="text-xs sm:text-sm lg:text-base font-light whitespace-nowrap">{skill}</p>
                      </div>
                    )),
                  )}
                </div>
              </div>

              {/* Right to Left Carousel */}
              <div className="relative overflow-hidden h-12 lg:h-14">
                <div
                  className="flex gap-3 lg:gap-4 whitespace-nowrap"
                  style={{
                    animation: "scrollRight 20s linear infinite",
                  }}
                >
                  {[...Array(5)].map((_, groupIdx) =>
                    skills.map((skill, skillIdx) => (
                      <div
                        key={`right-${groupIdx}-${skillIdx}`}
                        className="flex-shrink-0 border-2 border-red-600 text-red-600 px-4 lg:px-6 py-2 lg:py-3 rounded"
                      >
                        <p className="text-xs sm:text-sm lg:text-base font-light whitespace-nowrap">{skill}</p>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
