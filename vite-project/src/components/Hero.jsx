"use client"

import { useState, useEffect } from "react"

// Import images individually from assets folder
import Image1 from "../assets/hero/1.jpeg"
import Image2 from "../assets/hero/2.jpeg"
import Image3 from "../assets/hero/3.png"
import Image4 from "../assets/hero/4.jpeg"
import Image5 from "../assets/hero/5.jpeg"
import Image6 from "../assets/hero/6.jpeg"
import Image7 from "../assets/hero/7.jpeg"
import Image8 from "../assets/hero/8.jpeg"

// Hoisted images array at the top using imported images
const HERO_IMAGES = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8
]

const Hero = () => {
  const [displayText, setDisplayText] = useState("Being Creative")
  const [isGlitching, setIsGlitching] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [glitchCount, setGlitchCount] = useState(0)

  const textSequence = ["Being Creative", "Being Delusional", "Being Awesome", "Being Limitless", "Being Unbounded"]

  useEffect(() => {
    let sequenceIndex = 0
    let isInBoundedRaj = false
    let glitchTriggered = false

    const cycleTexts = () => {
      if (!isInBoundedRaj) {
        // Show text for 1 second, then transition without glitch
        const textDuration = setTimeout(() => {
          // No glitch effect for regular text transitions
          const transitionDuration = setTimeout(() => {
            sequenceIndex = (sequenceIndex + 1) % textSequence.length

            if (sequenceIndex === 0) {
              // Move to "unboundedraj" screen after all texts
              isInBoundedRaj = true
              setDisplayText("unboundedraj")
              setCurrentImageIndex(0)
              setGlitchCount(0) // Reset glitch counter

              // "unboundedraj" stays for 8 seconds
              const boundedRajTimeout = setTimeout(() => {
                isInBoundedRaj = false
                sequenceIndex = 0
                setDisplayText(textSequence[0])
                cycleTexts()
              }, 8000)

              return
            }

            setDisplayText(textSequence[sequenceIndex])
            cycleTexts()
          }, 300) // Transition duration without glitch
        }, 1000) // Text stays for 1 second
      }
    }

    cycleTexts()
  }, [])

  // Handle image rotation and glitch effects during "unboundedraj" display
  useEffect(() => {
    if (displayText === "unboundedraj") {
      const imageInterval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
      }, 1000) // Change image every 1 second

      // Trigger glitch effects only twice during the 8-second period
      const glitchInterval = setInterval(() => {
        if (glitchCount < 2) {
          setIsGlitching(true)
          setGlitchCount(prev => prev + 1)
          
          const glitchTimeout = setTimeout(() => {
            setIsGlitching(false)
          }, 300) // Glitch duration
        }
      }, 3000) // Trigger glitch every 3 seconds until we've done it twice

      return () => {
        clearInterval(imageInterval)
        clearInterval(glitchInterval)
      }
    } else {
      setIsGlitching(false)
    }
  }, [displayText, glitchCount])

  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Glitch effect styles */}
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

        .hero-text-container {
          position: relative;
          display: inline-block;
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
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap');
      `}</style>

      <div className="relative z-10 text-center px-4">
        {displayText === "unboundedraj" ? (
          <div className="relative inline-block">
            {/* Text with image background */}
            <h1
              className={`unbounded-text-with-image text-8xl md:text-9xl font-bold leading-tight ${
                isGlitching ? "glitch-text" : ""
              }`}
              style={{
                backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              unboundedraj
            </h1>
          </div>
        ) : (
          <h1
            className="text-6xl md:text-7xl font-bold text-white leading-tight hero-text-container"
          >
            {displayText}
          </h1>
        )}
        
        {/* Static subtitle that always remains */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-white text-xl md:text-2xl font-mono font-light opacity-80">
            &lt;/&gt;
          </span>
          <p className="text-white text-xl md:text-2xl font-sans font-light tracking-wide" 
             style={{ fontFamily: "'Inter', sans-serif" }}>
            Creative Developer & Content Creator
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero