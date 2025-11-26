import { useState, useEffect } from "react"
import { useLocation, Link, useNavigate } from "react-router-dom"
import { Menu, X, ChevronRight, Download } from "lucide-react"
import urImage from "../assets/ur.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
  const location = useLocation()
  const navigate = useNavigate()

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  const neonColors = {
    green: { bg: "rgba(112, 224, 0, 0.1)", shadow: "rgba(112, 224, 0, 0.2)", hex: "#70e000" },
    magenta: { bg: "rgba(255, 32, 110, 0.1)", shadow: "rgba(255, 32, 110, 0.2)", hex: "#ff206e" },
    yellow: { bg: "rgba(251, 255, 18, 0.1)", shadow: "rgba(251, 255, 18, 0.2)", hex: "#fbff12" },
    orange: { bg: "rgba(254, 98, 29, 0.1)", shadow: "rgba(254, 98, 29, 0.2)", hex: "#fe621d" },
    red: { bg: "rgba(255, 0, 34, 0.1)", shadow: "rgba(255, 0, 34, 0.2)", hex: "#ff0022" },
  }

  const navLinks = [
    { name: "Home", path: "/", color: "red" },
    { name: "About", path: "/about", color: "magenta" },
    { name: "Skills", path: "/skills", color: "yellow" },
    { name: "Works", path: "/works", color: "orange" },
    { name: "Contact", path: "/contact", color: "green" },
    { name: "Resume", path: "/resume", color: "red", isSpecial: true },
  ]

  const getCurrentColor = () => {
    const currentLink = navLinks.find(link => link.path === location.pathname)
    return currentLink ? currentLink.color : "red"
  }

  const currentColor = getCurrentColor()
  const currentColorConfig = neonColors[currentColor]

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavLink = ({ link, index }) => {
    const isActive = location.pathname === link.path
    const isHov = activeIndex === index

    if (link.isSpecial) {
      return (
        <Link
          to={link.path}
          onClick={() => setIsOpen(false)}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative px-4 py-1.5 text-sm font-bold transition-all duration-300 rounded-full overflow-hidden group flex items-center gap-1.5"
          style={{
            backgroundColor: currentColorConfig.hex,
            color: '#000',
            transform: isHov ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
            boxShadow: isHov 
              ? `0 0 20px ${currentColorConfig.shadow}, 0 0 40px ${currentColorConfig.shadow}`
              : `0 0 8px ${currentColorConfig.shadow}`,
          }}
        >
          <Download className="w-3.5 h-3.5" />
          <span className="relative z-10">{link.name}</span>
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </div>
        </Link>
      )
    }

    return (
      <Link
        to={link.path}
        onClick={() => setIsOpen(false)}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
        className="relative px-3 py-2 text-xs font-medium transition-all duration-300 group overflow-hidden rounded-xl"
        style={{
          color: isActive ? currentColorConfig.hex : (isHov ? currentColorConfig.hex : 'white'),
        }}
      >
        <span className="relative z-10 group-hover:scale-105 inline-block transition-transform duration-300">
          {link.name}
        </span>
        
        <div
          className="absolute inset-0 rounded-xl transform transition-all duration-500"
          style={{
            background: `linear-gradient(to right, ${currentColorConfig.bg}, ${currentColorConfig.bg})`,
            transform: (activeIndex === index || isActive) ? "scale(100)" : "scale(90)",
            opacity: (activeIndex === index || isActive) ? 1 : 0,
          }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-1/2 h-0.5 w-full transition-all duration-300 ease-out"
          style={{
            transform: `translateX(-50%) scaleX(${(isActive || isHov) ? 1 : 0})`,
            transformOrigin: 'center',
            backgroundColor: currentColorConfig.hex,
          }}
        ></div>
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>
      </Link>
    )
  }

  return (
    <>
      {/* iPhone 14 Notch Container - Increased size */}
      <div
        className="fixed top-0 z-50 md:left-[90px] md:right-[90px] left-6 right-6"
        style={{
          backgroundColor: 'rgba(16, 16, 16, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px',
          paddingTop: '12px',
          paddingBottom: '12px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
        className="fixed top-0 z-50 md:left-[90px] md:right-[90px] left-4 right-4"
      >
        <div className="relative flex items-center justify-center">
          {/* Dynamic Island - Absolutely centered */}
          <nav 
            className="absolute left-1/2 transform -translate-x-1/2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="flex items-center justify-between backdrop-blur-2xl rounded-full shadow-lg border border-gray-600 border-opacity-50 transition-all duration-500 overflow-visible"
              style={{
                backgroundColor: '#121111',
                width: isHovered ? 'max-content' : '90px',
                paddingLeft: isHovered ? '0.875rem' : '0.5rem',
                paddingRight: isHovered ? '0.875rem' : '0.5rem',
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
              }}
            >
              {/* Logo and Download Icon - Always Visible */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <Link
                  to="/"
                  className="relative z-10 flex items-center gap-1.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 group flex-shrink-0"
                >
                  <div className="relative flex-shrink-0">
                    <img 
                      src={urImage} 
                      alt="UR" 
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover border-2 transition-all duration-500 group-hover:rotate-[360deg] flex-shrink-0"
                      style={{
                        borderColor: currentColorConfig.hex,
                        boxShadow: `0 0 10px ${currentColorConfig.shadow}`,
                      }}
                    />
                    {/* Rotating ring effect on hover */}
                    <span 
                      className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"
                      style={{
                        borderColor: currentColorConfig.hex,
                        boxShadow: `0 0 15px ${currentColorConfig.shadow}`,
                      }}
                    />
                  </div>
                </Link>

                {/* Download Icon - Only visible in collapsed state */}
                <div 
                  className={`transition-all duration-500 flex-shrink-0 ${
                    isHovered ? 'opacity-0 scale-0 w-0' : 'opacity-100 scale-100 w-4 md:w-5'
                  }`}
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                </div>
              </div>

              {/* Navigation Links - Only visible when hovered */}
              <div 
                className={`hidden md:flex items-center gap-1 transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {navLinks.map((link, index) => (
                  <NavLink key={link.path} link={link} index={index} />
                ))}
              </div>

              {/* Mobile menu button - Only visible when hovered on mobile */}
              <button
                onClick={toggleMenu}
                className={`md:hidden relative p-2 rounded-xl transition-all duration-300 group ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
                aria-label="Toggle menu"
                style={{
                  background: isOpen ? currentColorConfig.bg : 'transparent',
                }}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 text-gray-300 transition-all duration-500 ${
                      isOpen ? "rotate-180 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-500 ${
                      isOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-0"
                    }`}
                    style={{ color: currentColorConfig.hex }}
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
                  const isActive = location.pathname === link.path
                  
                  if (link.isSpecial) {
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-300 border"
                        style={{
                          backgroundColor: currentColorConfig.hex,
                          color: '#000',
                          borderColor: currentColorConfig.hex,
                          animation: `slideInMobile 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s both`,
                        }}
                      >
                        <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                          <Download className="w-4 h-4" />
                          {link.name}
                        </span>
                        <ChevronRight className="h-5 w-5 opacity-100 translate-x-0 transition-all duration-300" />
                      </Link>
                    )
                  }
                  
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300 border border-transparent"
                      style={{
                        color: isActive ? currentColorConfig.hex : 'white',
                        backgroundColor: isActive ? currentColorConfig.bg : 'transparent',
                        borderColor: isActive ? currentColorConfig.hex : 'transparent',
                        animation: `slideInMobile 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.08}s both`,
                      }}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ChevronRight 
                        className="h-5 w-5 transition-all duration-300"
                        style={{
                          color: currentColorConfig.hex,
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                        }}
                      />
                    </Link>
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