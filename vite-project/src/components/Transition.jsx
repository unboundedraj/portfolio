import { useState, useEffect, useRef } from "react"
import img1 from "../assets/team/1.jpeg"
import img2 from "../assets/team/2.jpeg"
import img3 from "../assets/team/3.jpeg"
import img4 from "../assets/team/4.jpeg"
import img5 from "../assets/team/5.jpeg"
import img6 from "../assets/team/6.jpeg"
import img7 from "../assets/team/7.jpeg"
import img8 from "../assets/team/8.jpeg"
import img9 from "../assets/team/9.jpeg"
import img10 from "../assets/team/10.jpeg"
import img11 from "../assets/team/11.jpeg"
import img12 from "../assets/team/12.jpeg"
import img13 from "../assets/team/13.jpeg"
import img14 from "../assets/team/14.jpeg"
import img15 from "../assets/team/15.jpeg"

const Transition = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
  
  const [offset, setOffset] = useState(0)
  const containerRef = useRef(null)
  const scrollRef = useRef(0)
  
  const CIRCLE_RADIUS = 450
  const CARD_SIZE = 120
  const VISIBLE_ANGLE = Math.PI / 3

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
      // Reduced speed from 0.8 to 0.4 (50% slower)
      setOffset((scrollRef.current * 0.4) % (images.length * 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [images.length])

  const extendedImages = [...images, ...images, ...images, ...images, ...images]

  const calculateCirclePosition = (index) => {
    const anglePerCard = (2 * Math.PI) / images.length
    // Reduced rotation speed from /30 to /50 (40% slower)
    const angle = (index * anglePerCard) - (offset / 50)
    
    const x = Math.cos(angle) * CIRCLE_RADIUS
    const y = Math.sin(angle) * CIRCLE_RADIUS
    
    const tilt = (angle * 180) / Math.PI
    
    return { x, y, tilt }
  }

  return (
    <section className="w-full my-10 bg-[#101010] py-20 overflow-hidden">
      <div className="w-full flex items-center justify-center">
        <div
          ref={containerRef}
          className="relative flex items-center justify-center"
          style={{ 
            height: "900px", 
            width: "100%",
            maxWidth: "1400px"
          }}
        >
          {/* Invisible circular guide */}
          <div
            className="absolute rounded-full border border-gray-700 opacity-20"
            style={{
              width: `${CIRCLE_RADIUS * 2}px`,
              height: `${CIRCLE_RADIUS * 2}px`,
              left: `calc(50% - ${CIRCLE_RADIUS}px)`,
              top: `calc(50% - ${CIRCLE_RADIUS}px)`,
            }}
          />

          {/* Center Quote - Lower z-index to stay behind images */}
          <div className="absolute flex items-center justify-center text-center z-10 px-64">
            <span className="text-2xl font-extralight text-gray-300">
              <span className="text-green-400 font-normal text-3xl ">›</span>
              {" "}I value great teamwork, but my deepest productivity comes from quiet, independent focus.{" "}
              <span className="text-green-400 font-normal text-3xl">‹</span>
            </span>
          </div>

          {/* Cards positioned on circle - Higher z-index to appear over text */}
          <div className="absolute w-full h-full z-20">
            {extendedImages.map((img, idx) => {
              const { x, y, tilt } = calculateCirclePosition(idx)
              
              return (
                <div
                  key={`${idx}-image`}
                  className="absolute w-32 h-40 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-700"
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
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Transition