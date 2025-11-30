import React, { useState, useEffect } from 'react';
import urImage from "../assets/ur.jpg";
import glassImage from "../assets/glass.jpg";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { SiCodeforces, SiLeetcode, SiHackerrank } from 'react-icons/si';

const Hero1 = () => {
  const [showCreepy, setShowCreepy] = useState(false);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setShowCreepy(true);
      
      // First flicker (show for 150ms)
      setTimeout(() => {
        setShowCreepy(false);
      }, 150);

      // Second flicker (show for 150ms)
      setTimeout(() => {
        setShowCreepy(true);
      }, 300);

      // Return to normal
      setTimeout(() => {
        setShowCreepy(false);
      }, 450);
    }, 10000); // Every 10 seconds

    return () => clearInterval(flickerInterval);
  }, []);

  const allSocials = [
    { name: 'Github', icon: FaGithub, color: '#000000', link: 'https://github.com' },
    { name: 'Linkedin', icon: FaLinkedin, color: '#0A66C2', link: 'https://linkedin.com' },
    { name: 'X', icon: FaXTwitter, color: '#000000', link: 'https://x.com' },
    { name: 'Instagram', icon: FaInstagram, color: '#E4405F', link: 'https://instagram.com' },
    { name: 'Youtube', icon: FaYoutube, color: '#FF0000', link: 'https://youtube.com' },
    { name: 'Codeforces', icon: SiCodeforces, color: '#1F1C8F', link: 'https://codeforces.com' },
    { name: 'Leetcode', icon: SiLeetcode, color: '#FFA500', link: 'https://leetcode.com' },
    { name: 'HackerRank', icon: SiHackerrank, color: '#16db65', link: 'https://hackerrank.com' }
  ];

  const SocialCircle = ({ name, icon: Icon, color, link, isSmall = false }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon group hover:z-50"
      style={{
        width: isSmall ? '50px' : '80px',
        height: isSmall ? '50px' : '80px',
        borderRadius: '50%',
        backgroundColor: color,
        margin: isSmall ? '-8px' : '-15px',
        position: 'relative',
        transition: 'transform 0.3s ease-in',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      title={name}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Icon size={isSmall ? 30 : 54} color="#d3d3d3" />
    </a>
  );



  return (
    <section id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden rounded-b-[100px] lg:rounded-b-[150px]"
      style={{
        backgroundImage: showCreepy
          ? `linear-gradient(to right, rgba(249, 115, 22, 0.95), rgba(239, 68, 68, 0.95)), url(${glassImage})`
          : 'linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: showCreepy ? 'multiply' : 'normal',
        transition: 'background-image 0.05s ease-in-out',
      }}
    >
      {/* Centered Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div
            className="rounded-full mb-30 overflow-hidden shadow-2xl"
            style={{ width: 'clamp(150px, 40vw, 354px)', height: 'clamp(150px, 40vw, 354px)' }}
          >
            <img src={urImage} alt="Dhruv Raj Singh" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-24 md:h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>

      {/* Text beside image - Left */}
      <div
        className="absolute pointer-events-none w-full flex justify-center md:justify-auto md:static md:top-auto md:w-auto md:hidden"
        style={{ top: 'calc(50% + 120px)', right: 'auto', marginRight: 'auto', marginLeft: 'auto' }}
      >
        <span
          className="font-sans font-extrabold font-['Poppins'] text-center"
          style={{
            fontSize: 'clamp(24px, 5vw, 48px)',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            color: '#101010',
          }}
        >
          HEY THERE I'M
        </span>
      </div>

      {/* Text beside image - Right (Desktop only) */}
      <div
        className="absolute top-1/2 translate-y-20 pointer-events-none hidden md:block"
        style={{ right: 'calc(50% + 120px)' }}
      >
        <span
          className="font-sans font-extrabold font-['Poppins']"
          style={{
            fontSize: 'clamp(24px, 5vw, 64px)',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            color: '#101010',
          }}
        >
          HEY THERE
        </span>
      </div>

      {/* Text beside image - Far Right (Desktop only) */}
      <div
        className="absolute top-1/2 translate-y-20 pointer-events-none hidden md:block"
        style={{ left: 'calc(50% + 100px)', marginLeft: '30px' }}
      >
        <span
          className="font-sans font-extrabold font-['Poppins']"
          style={{
            fontSize: 'clamp(24px, 5vw, 64px)',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            color: '#101010',
          }}
        >
          I'M
        </span>
      </div>

      {/* Social Links - Horizontal Line (Desktop) */}
      <div
        className="absolute left-0 right-0 hidden md:flex items-center justify-center gap-2 md:gap-6 px-4"
        style={{
          zIndex: 5,
          top: '40%',
          transform: 'translateY(-50%)',
          width: '100%',
        }}
      >
        {allSocials.slice(0, 4).map((social, idx) => (
          <SocialCircle key={idx} {...social} />
        ))}
        <div style={{ width: 'clamp(150px, 40vw, 354px)', height: 'clamp(150px, 40vw, 354px)' }}></div>
        {allSocials.slice(4).map((social, idx) => (
          <SocialCircle key={idx + 4} {...social} />
        ))}
      </div>

      {/* Full-Width Name at Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center px-4 lg:px-8"
        style={{ height: '40vh' }}
      >
        <span
          className="font-sans font-extrabold font-['Poppins'] text-center break-words"
          style={{
            fontSize: 'clamp(48px, 10vw, 160px)',
            lineHeight: '1.1',
            letterSpacing: '-1px',
            zIndex: 10,
            maxWidth: '95vw',
            color: '#ced4da',
            WebkitTextStroke: '',
            textStroke: '',
            paintOrder: 'stroke fill',
          }}
        >
          DHRUV RAJ SINGH
        </span>

        {/* Social Links - Below Name (Mobile) */}
        <div
          className="md:hidden flex items-center justify-center gap-2 mt-4 flex-wrap"
          style={{
            zIndex: 10,
          }}
        >
          {allSocials.map((social, idx) => (
            <SocialCircle key={idx} {...social} isSmall={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero1;