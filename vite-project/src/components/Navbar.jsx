import { useState, useEffect } from "react"
import { Menu, X, ChevronRight, Download, MousePointerClick } from "lucide-react"
import urImage from "../assets/ur.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Add smooth scroll behavior to html
  useEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = 'smooth'
    
    // Fallback for browsers that don't support smooth scroll
    if (!('scrollBehavior' in html.style)) {
      console.warn('Smooth scroll not supported, using polyfill')
    }
    
    return () => {
      html.style.scrollBehavior = 'auto'
    }
  }, [])

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Works", id: "works" },
    { name: "Contact", id: "contact" },
    { name: "Resume", id: "resume", isSpecial: true },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1000 // 1 second
      let start = null

      const smoothScroll = (currentTime) => {
        if (start === null) start = currentTime
        const elapsed = currentTime - start
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress))
        
        if (progress < 1) {
          requestAnimationFrame(smoothScroll)
        }
      }

      requestAnimationFrame(smoothScroll)
      setIsOpen(false)
    }
  }

  const NavLink = ({ link, index }) => {
    const isHov = activeIndex === index

    if (link.isSpecial) {
      return (
        <button
          onClick={() => scrollToSection(link.id)}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative px-4 py-1.5 text-sm font-semibold transition-all duration-300 rounded-full overflow-hidden group flex items-center gap-1.5"
          style={{
            backgroundColor: isHov ? '#2a2a2a' : 'transparent',
            color: '#a0a0a0',
            transform: isHov ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
            boxShadow: isHov ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Download className="w-3.5 h-3.5" />
          <span className="relative z-10">{link.name}</span>
        </button>
      )
    }

    return (
      <button
        onClick={() => scrollToSection(link.id)}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
        className="relative px-3 py-2 text-xs font-semibold transition-all duration-300 group overflow-hidden rounded-xl"
        style={{
          color: isHov ? '#a0a0a0' : '#b0b0b0',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
        }}
      >
        <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300">
          {link.name}
        </span>
        
        <div
          className="absolute inset-0 rounded-xl transform transition-all duration-500"
          style={{
            background: 'rgba(60, 60, 60, 0.3)',
            transform: (activeIndex === index) ? "scale(100)" : "scale(90)",
            opacity: (activeIndex === index) ? 1 : 0,
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-1/2 h-0.5 w-full transition-all duration-300 ease-out"
          style={{
            transform: `translateX(-50%) scaleX(${(isHov) ? 1 : 0})`,
            transformOrigin: 'center',
            backgroundColor: '#a0a0a0',
          }}
        ></div>
      </button>
    )
  }

  return (
    <>
      {/* iPhone 14 Notch Container - ADJUST OPACITY HERE */}
      <div
        className="fixed top-0 z-50 md:left-[90px] md:right-[90px] left-4 right-4"
        style={{
          backgroundColor: 'rgba(16, 16, 16, 0.7)', // ← CHANGE 0.9 TO ANY VALUE (0-1) | 0.7 = 70% opaque, 0.5 = 50% opaque
          backdropFilter: 'blur(10px)',
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px',
          paddingTop: '12px',
          paddingBottom: '12px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Dynamic Island - Absolutely centered */}
          <nav 
            className="absolute left-1/2 transform -translate-x-1/2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex items-center justify-between backdrop-blur-2xl rounded-full shadow-lg border border-gray-600 border-opacity-50 overflow-visible"
              style={{
                backgroundColor: '#121111',
                width: isHovered ? 'calc(100vw - 32px)' : '90px',
                maxWidth: isHovered ? '550px' : '90px',
                paddingLeft: '0.875rem',
                paddingRight: '0.875rem',
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
                transition: 'width 1500ms cubic-bezier(0.16, 1, 0.3, 1), max-width 1500ms cubic-bezier(0.16, 1, 0.3, 1)',
                transformOrigin: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Logo and Download Icon - Always Visible */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => scrollToSection('home')}
                  className="relative z-10 flex items-center gap-1.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 group flex-shrink-0"
                  style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
                >
                  <div className="relative flex-shrink-0">
                    <img 
                      src={urImage} 
                      alt="UR" 
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover border-2 transition-all duration-500 group-hover:rotate-[360deg] flex-shrink-0"
                      style={{
                        borderColor: '#a0a0a0',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                      }}
                    />
                    {/* Rotating ring effect on hover */}
                    <span 
                      className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"
                      style={{
                        borderColor: '#a0a0a0',
                        boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
                      }}
                    />
                  </div>
                </button>

                {/*Orbit Icon - Only visible in collapsed state */}
                <div 
                  className={`flex-shrink-0`}
                  style={{
                    transition: 'all 1500ms cubic-bezier(0.16, 1, 0.3, 1)', // ← MATCHING SMOOTH EASING
                    opacity: isHovered ? 0 : 1,
                    transform: isHovered ? 'scale(0)' : 'scale(1)',
                    width: isHovered ? '0' : 'auto',
                  }}
                >
                  <MousePointerClick  className="w-4 h-4 md:w-5 md:h-5 ml-2 text-gray-400" />
                </div>
              </div>

              {/* Navigation Links - Only visible when hovered */}
              <div 
                className="hidden md:flex items-center gap-1"
                style={{
                  transition: 'all 1200ms cubic-bezier(0.34, 1.56, 0.64, 1)', // ← MATCHING SMOOTH EASING
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0.95)',
                  pointerEvents: isHovered ? 'auto' : 'none',
                }}
              >
                {navLinks.map((link, index) => (
                  <NavLink key={link.id} link={link} index={index} />
                ))}
              </div>

              {/* Mobile menu button - Only visible when hovered on mobile */}
              <button
                onClick={toggleMenu}
                className="md:hidden relative p-2 rounded-xl"
                aria-label="Toggle menu"
                style={{
                  background: isOpen ? 'rgba(60, 60, 60, 0.3)' : 'transparent',
                  transition: 'all 1500ms cubic-bezier(0.16, 1, 0.3, 1)', // ← MATCHING SMOOTH EASING
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0)',
                }}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className="absolute inset-0 h-6 w-6 text-gray-300"
                    style={{
                      transition: 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: isOpen ? 'rotate(180deg) scale(0)' : 'rotate(0deg) scale(1)',
                      opacity: isOpen ? 0 : 1,
                    }}
                  />
                  <X
                    className="absolute inset-0 h-6 w-6"
                    style={{ 
                      color: '#ffffff',
                      transition: 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: isOpen ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
                      opacity: isOpen ? 1 : 0,
                    }}
                  />
                </div>
              </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 backdrop-blur-2xl rounded-3xl p-4 shadow-xl border border-gray-600 border-opacity-50 md:hidden z-40 flex flex-col gap-2 w-64"
                style={{
                  backgroundColor: '#121111',
                  animation: 'fadeIn 0.3s ease-out',
                }}
              >
                {navLinks.map((link, idx) => {
                  
                  if (link.isSpecial) {
                    return (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="group flex items-center justify-between px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 border w-full"
                        style={{
                          backgroundColor: '#2a2a2a',
                          color: '#a0a0a0',
                          borderColor: '#2a2a2a',
                          animation: `slideInMobile 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s both`,
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                          cursor: 'pointer',
                        }}
                      >
                        <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                          <Download className="w-4 h-4" />
                          {link.name}
                        </span>
                        <ChevronRight className="h-5 w-5 opacity-100 translate-x-0 transition-all duration-300" />
                      </button>
                    )
                  }
                  
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center justify-between px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 border border-transparent w-full"
                      style={{
                        color: '#b0b0b0',
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        animation: `slideInMobile 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s both`,
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        cursor: 'pointer',
                      }}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ChevronRight 
                        className="h-5 w-5 transition-all duration-300"
                        style={{
                          color: '#a0a0a0',
                          opacity: 0,
                          transform: 'translateX(-8px)',
                        }}
                      />
                    </button>
                  )
                })}
              </div>
            )}
          </nav>

          {/* Time Display - Right End (positioned relatively) */}
          <div className="text-gray-400 text-sm md:text-base font-bold ml-auto">
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
  )
}