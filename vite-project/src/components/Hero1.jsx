import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero1() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between overflow-hidden relative">
      {/* Import Google Fonts and Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap');
        
        .font-syne {
          font-family: 'Syne', sans-serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }
          100% {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
        }

        .animate-slide-in-down {
          animation: slideInDown 0.8s ease-out;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        .animate-fade-scale {
          animation: fadeInScale 1s ease-out 0.4s both;
        }

        .animate-text-reveal {
          animation: textReveal 1.2s ease-out;
        }

        .glow-text {
          text-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation Hint - Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-5"></div>

      {/* Main Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-12">
        {/* Background glow effect */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-full blur-3xl opacity-40 transition-all duration-1000 ${isLoaded ? 'scale-100' : 'scale-0'}`}></div>
        </div>

        {/* Top subtitle */}
        <div className={`mb-6 animate-slide-in-down ${isLoaded ? '' : 'opacity-0'}`}>
          <p className="text-xs font-poppins uppercase tracking-widest text-gray-500 font-light">
            Welcome to my portfolio
          </p>
        </div>

        {/* Main Name - Single Line with Animation */}
        <div className="relative w-full overflow-hidden mb-6">
          <h1 className={`text-center font-syne font-black tracking-tight glow-text transition-all duration-1000 ${isLoaded ? 'animate-text-reveal' : 'opacity-0'}`} style={{
            fontSize: 'clamp(2rem, 8vw, 4rem)',
            lineHeight: '1',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap'
          }}>
            DHRUV RAJ SINGH
          </h1>
        </div>

        {/* Divider with animation */}
        <div className={`w-20 h-1 bg-black mb-6 transform transition-all duration-700 ${isLoaded ? 'scale-x-100' : 'scale-x-0'}`} style={{
          transformOrigin: 'center'
        }}></div>

        {/* Descriptive text with stagger */}
        <div className={`text-center space-y-3 animate-slide-in-up ${isLoaded ? '' : 'opacity-0'}`}>
          <p className="text-sm lg:text-base font-poppins text-gray-600 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
            Full Stack Developer • MERN Stack • React.js • UI/UX Developer
          </p>
          <p className="text-xs font-poppins text-gray-500 font-light uppercase tracking-widest">
            Building elegant solutions • Constantly learning
          </p>
        </div>
      </div>

      {/* Bottom Section - Premium CTA and Info */}
      <div className={`px-4 py-8 lg:py-10 animate-fade-scale ${isLoaded ? '' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-6">
          {/* Left - Skills */}
          <div className="space-y-4 flex-1">
            <p className="text-xs font-poppins uppercase tracking-widest text-gray-500 font-light">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {[
                'Full Stack',
                'Frontend',
                'Backend',
                'MERN Stack',
                'React',
                'Node.js',
                'UI/UX',
                'App Dev'
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="inline-block"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${0.5 + idx * 0.05}s both`
                  }}
                >
                  <span className="px-4 py-2 text-xs font-poppins border border-gray-300 rounded-full text-gray-700 hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer font-medium inline-block hover-lift">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-all duration-300 font-poppins font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 group shadow-lg hover:shadow-2xl hover-lift">
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-300 font-poppins font-semibold text-sm uppercase tracking-wider hover-lift">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-5 h-5 text-gray-400 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}