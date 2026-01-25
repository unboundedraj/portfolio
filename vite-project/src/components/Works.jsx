import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Import project 1 images
import p1i1 from '../assets/projects/p1i1.png';
import p1i2 from '../assets/projects/p1i2.png';
import p1i3 from '../assets/projects/p1i3.png';
import p1i4 from '../assets/projects/p1i4.png';
import p1i5 from '../assets/projects/p1i5.png';
import p1i6 from '../assets/projects/p1i6.png';
import p1i7 from '../assets/projects/p1i7.png';
import p1i8 from '../assets/projects/p1i8.png';
import p1i9 from '../assets/projects/p1i9.png';

// Import project 2 images
import p2i1 from '../assets/projects/p2i1.png';
import p2i2 from '../assets/projects/p2i2.png';
import p2i3 from '../assets/projects/p2i3.png';
import p2i4 from '../assets/projects/p2i4.png';
import p2i5 from '../assets/projects/p2i5.png';
import p2i6 from '../assets/projects/p2i6.png';
import p2i7 from '../assets/projects/p2i7.png';

// Import project 3 images
import p3i1 from '../assets/projects/p3i1.png';
import p3i2 from '../assets/projects/p3i2.png';
import p3i3 from '../assets/projects/p3i3.png';
import p3i4 from '../assets/projects/p3i4.png';
import p3i5 from '../assets/projects/p3i5.png';

// Import project 4 images
import p4i1 from '../assets/projects/p4i1.png';
import p4i2 from '../assets/projects/p4i2.png';
import p4i3 from '../assets/projects/p4i3.png';
import p4i4 from '../assets/projects/p4i4.png';
import p4i5 from '../assets/projects/p4i5.png';
import p4i6 from '../assets/projects/p4i6.png';
import p4i7 from '../assets/projects/p4i7.png';

// Import project 5 images
import p5i1 from '../assets/projects/p5i1.jpeg';
import p5i2 from '../assets/projects/p5i2.png';
import p5i3 from '../assets/projects/p5i3.png';
import p5i4 from '../assets/projects/p5i4.png';
import p5i5 from '../assets/projects/p5i5.png';
import p5i6 from '../assets/projects/p5i6.png';
import p5i7 from '../assets/projects/p5i7.png';
import p5i8 from '../assets/projects/p5i8.png';
import p5i9 from '../assets/projects/p5i9.png';
import p5i10 from '../assets/projects/p5i10.png';
import p5i11 from '../assets/projects/p5i11.png';

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState({});
  const projectRefs = useRef([]);

  // Tech stack icons from jsDelivr
  const techIcons = {
    'React': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
    'Node.js': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg',
    'Express': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg',
    'React Native': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
    'Firebase': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg',
    'Machine Learning': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scikitlearn.svg',
    'Python': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tensorflow.svg',
    'Next.js': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg',
    'Contentstack': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/contentstack.svg',
    'Launch': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg'
  };

  // Tech stack gradient colors
  const techGradients = {
    'React': 'from-cyan-400 to-blue-500',
    'Node.js': 'from-yellow-400 to-amber-500',
    'MongoDB': 'from-green-500 to-teal-500',
    'Express': 'from-pink-400 to-rose-500',
    'React Native': 'from-cyan-400 to-blue-500',
    'Firebase': 'from-yellow-400 to-orange-500',
    'Machine Learning': 'from-purple-400 to-pink-500',
    'Python': 'from-blue-400 to-indigo-500',
    'TensorFlow': 'from-orange-400 to-red-500',
    'Next.js': 'from-black to-gray-700',
    'PostgreSQL': 'from-blue-500 to-cyan-500',
    'Contentstack': 'from-purple-400 to-indigo-500',
    'Launch': 'from-blue-400 to-cyan-500'
  };

  // Projects data - Add as many projects as you want
  const projects = [
    {
      id: 1,
      title: 'Devdocs',
      images: [
        p4i1,
        p4i2,
        p4i3,
        p4i4,
        p4i5,
        p4i6,
        p4i7
      ],
      description: 'A comprehensive documentation website and developer portal where different developers and teams can contribute and collaborate on documentation for their websites and projects. Featuring a user-friendly interface for both contributors and readers.',
      techStack: [
        { name: 'Next.js', icon: 'Next.js' },
        { name: 'Contentstack', icon: 'Contentstack' },
        { name: 'Launch', icon: 'Launch' }
      ],
      timeline: 'Jan 26',
      domain: 'devdocs.contentstackapps.com',
      liveLink: 'https://devdocs.contentstackapps.com'
    },
    {
      id: 2,
      title: 'Pradaan Portal',
      images: [
        p3i1,
        p3i2,
        p3i3,
        p3i4,
        p3i5
      ],
      description: 'A centralized donations platform built on the MERN stack that enables seamless donation management and tracking. The platform provides an intuitive interface for donors to contribute and organizations to manage fundraising campaigns.',
      techStack: [
        { name: 'React', icon: 'React' },
        { name: 'Node.js', icon: 'Node.js' },
        { name: 'MongoDB', icon: 'MongoDB' },
        { name: 'Express', icon: 'Express' }
      ],
      timeline: 'May 2024 - Jul 2024',
      domain: 'pradaanportal.vercel.app',
      githubLink: 'https://github.com/unboundedraj/pradaan-portal',
      liveLink: 'https://pradaanportal.vercel.app'
    },
    {
      id: 3,
      title: 'Client Website',
      images: [
        p1i1,
        p1i2,
        p1i3,
        p1i4,
        p1i5,
        p1i6,
        p1i7,
        p1i8,
        p1i9
      ],
      description: 'Web application for Rudrapriya Medical Equipments pvt ltd. The project serves as a client project for one of my client showcasing their company details and services that they provide.',
      techStack: [
        { name: 'React', icon: 'React' },
        { name: 'Node.js', icon: 'Node.js' },
        { name: 'MongoDB', icon: 'MongoDB' },
        { name: 'Express', icon: 'Express' }
      ],
      timeline: 'Mar 2024 - May 2024',
      domain: 'rudrapriyamedicalequipmentspvtltd.vercel.app',
      githubLink: 'https://github.com/unboundedraj/Rudrapriya',
      liveLink: 'https://rudrapriyamedicalequipmentspvtltd.vercel.app'
    },
    {
      id: 4,
      title: 'Case Study',
      images: [
        p2i1,
        p2i2,
        p2i3,
        p2i4,
        p2i5,
        p2i6,
        p2i7
      ],
      description: 'An intelligent attack detection framework for autonomous vehicles that leverages machine learning to identify and mitigate cybersecurity threats in real-time vehicle systems',
      techStack: [
        { name: 'Python', icon: 'Python' },
        { name: 'TensorFlow', icon: 'TensorFlow' },
        { name: 'Machine Learning', icon: 'Machine Learning' }
      ],
      timeline: 'Jan 2024 - Apr 2024',
      githubLink: 'https://github.com/yourusername/case-study'
    },
    {
      id: 5,
      title: 'Novasunsolar',
      images: [
        p5i1,
        p5i2,
        p5i3,
        p5i4,
        p5i5,
        p5i6,
        p5i7,
        p5i8,
        p5i9,
        p5i10,
        p5i11
      ],
      description: 'Client website for Novasunsolar, a solar energy solutions provider. The project showcased their products, services, and sustainability initiatives.',
      techStack: [
        { name: 'React', icon: 'React' },
        { name: 'Node.js', icon: 'Node.js' },
        { name: 'MongoDB', icon: 'MongoDB' },
        { name: 'Express', icon: 'Express' }
      ],
      timeline: 'Oct 2023 - Dec 2023',
      domain: 'novasunsolar.com',
      discontinued: true,
      githubLink:'https://github.com/unboundedraj/novasunsolar',
      liveLink: 'https://www.novasunsolar.com'
    },
    // Add more projects here:
    // {
    //   id: 4,
    //   title: 'Your New Project',
    //   images: [
    //     project4img1,
    //     project4img2,
    //     project4img3
    //   ],
    //   description: 'Description of your project',
    //   techStack: [
    //     { name: 'Tech1', icon: <Code2 className="w-4 h-4" /> },
    //     { name: 'Tech2', icon: <Database className="w-4 h-4" /> }
    //   ],
    //   timeline: 'Dec 2024 - Jan 2025',
    //   githubLink: 'https://github.com/...',
    //   liveLink: 'https://...'
    // }
  ];

  const [currentImages, setCurrentImages] = useState(
    projects.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {})
  );

  // Image carousel effect - rotates through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prev => {
        const newImages = { ...prev };
        projects.forEach(project => {
          newImages[project.id] = (newImages[project.id] + 1) % project.images.length;
        });
        return newImages;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementHeight = rect.height;
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = scrollY + windowHeight / 2;

        if (elementCenter > viewportCenter) {
          const distance = Math.abs(viewportCenter - elementCenter);
          const maxDistance = windowHeight / 2 + elementHeight / 2;

          let progress = 1 - Math.min(distance / maxDistance, 1);
          progress = Math.max(0, progress);

          const eased = progress * progress * (3 - 2 * progress);
          const scale = 0.6 + (eased * 0.4);
          const opacity = eased;

          setVisibleProjects(prev => ({
            ...prev,
            [index]: { scale, opacity }
          }));
        } else {
          setVisibleProjects(prev => ({
            ...prev,
            [index]: { scale: 1, opacity: 1 }
          }));
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div id="works" className="min-h-screen works py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-20 text-white">
          My Works
        </h1>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const visibility = visibleProjects[index] || { scale: 0.6, opacity: 0 };

            return (
              <div
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className="transition-all duration-300 ease-out"
                style={{
                  transform: `scale(${visibility.scale})`,
                  opacity: visibility.opacity
                }}
              >
                {/* Project Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  {/* Serial Number and Project Name / Timeline */}
                  <div className="px-8 pt-6 pb-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-white">
                        {String(index + 1).padStart(2, '0')} | {project.title}
                      </h2>
                      {project.discontinued && (
                        <span className="px-3 py-1 text-xs font-semibold bg-red-500/80 text-white rounded-full">
                          Discontinued
                        </span>
                      )}
                    </div>
                    <p className="text-white/80 text-sm">{project.timeline}</p>
                  </div>

                  {/* Main Content - Side by Side Layout */}
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Left Side - Images */}
                    <div className="relative h-full min-h-96 md:min-h-[500px] overflow-hidden md:col-span-2 rounded-2xl">
                      {project.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
                          style={{
                            opacity: currentImages[project.id] === imgIndex ? 1 : 0
                          }}
                        />
                      ))}

                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {project.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              currentImages[project.id] === imgIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="p-8 flex flex-col justify-between">
                      {/* Description */}
                      <div>
                        <p className="text-white/90 text-base mb-6 leading-relaxed font-normal" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-white text-sm"
                              >
                                <img src={techIcons[tech.icon]} alt={tech.name} className="w-4 h-4" />
                                <span className={`bg-gradient-to-r ${techGradients[tech.name]} bg-clip-text text-transparent font-thin`}>
                                  {tech.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div className="mb-6">
                          <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                            Timeline
                          </h3>
                          <p className="text-white/80 text-base">{project.timeline}</p>
                        </div>

                        {/* Domain */}
                        {project.domain && (
                          <div className="mb-6">
                            <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                              Domain
                            </h3>
                            <p className="text-white/80 text-base break-all">{project.domain}</p>
                          </div>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 flex-wrap">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors duration-300 text-sm font-medium"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 bg-blue-500/80 hover:bg-blue-500 text-white rounded-full transition-colors duration-300 text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;