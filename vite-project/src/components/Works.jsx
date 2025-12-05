import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Layout, Server, Smartphone, Globe } from 'lucide-react';

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState({});
  const projectRefs = useRef([]);

  // Sample projects data
  const projects = [
    {
      id: 1,
      images: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop'
      ],
      description: 'A full-stack e-commerce platform with real-time inventory management and secure payment processing',
      techStack: [
        { name: 'React', icon: <Layout className="w-5 h-5" /> },
        { name: 'Node.js', icon: <Server className="w-5 h-5" /> },
        { name: 'MongoDB', icon: <Database className="w-5 h-5" /> }
      ],
      timeline: 'Mar 2024 - May 2024'
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
      ],
      description: 'Mobile-first social networking app with real-time messaging and content sharing capabilities',
      techStack: [
        { name: 'React Native', icon: <Smartphone className="w-5 h-5" /> },
        { name: 'Firebase', icon: <Database className="w-5 h-5" /> },
        { name: 'TypeScript', icon: <Code2 className="w-5 h-5" /> }
      ],
      timeline: 'Jun 2024 - Aug 2024'
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop'
      ],
      description: 'AI-powered analytics dashboard for business intelligence with interactive data visualizations',
      techStack: [
        { name: 'Next.js', icon: <Globe className="w-5 h-5" /> },
        { name: 'Python', icon: <Code2 className="w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <Database className="w-5 h-5" /> }
      ],
      timeline: 'Sep 2024 - Nov 2024'
    }
  ];

  const [currentImages, setCurrentImages] = useState(
    projects.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {})
  );

  // Image carousel effect
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

        // Calculate distance from viewport center
        const distance = Math.abs(viewportCenter - elementCenter);
        const maxDistance = windowHeight / 2 + elementHeight / 2;

        // Calculate scale and opacity (1 when centered, decreasing as it moves away)
        let progress = 1 - Math.min(distance / maxDistance, 1);
        progress = Math.max(0, progress);

        // Easing function for smoother transition
        const eased = progress * progress * (3 - 2 * progress);

        // Scale from 0.6 to 1
        const scale = 0.6 + (eased * 0.4);
        // Opacity from 0 to 1 for more dramatic effect
        const opacity = eased;

        setVisibleProjects(prev => ({
          ...prev,
          [index]: { scale, opacity }
        }));
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
    <div className="min-h-screen py-20 px-6" style={{ backgroundColor: '#101010' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-16 text-center">My Works</h1>
        
        <div className="space-y-32">
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
                <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800 shadow-gray-900/50">
                  {/* Image Container */}
                  <div className="relative h-96 overflow-hidden">
                    {project.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`Project ${project.id} - ${imgIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
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
                          className="w-2 h-2 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: currentImages[project.id] === imgIndex ? '#ffffff' : '#666666'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8">
                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack and Timeline Container */}
                    <div className="flex items-end justify-between">
                      {/* Tech Stack */}
                      <div className="flex-1">
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-3">Tech Stack</h3>
                        <div className="flex gap-4 flex-wrap">
                          {project.techStack.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
                            >
                              <span className="text-blue-400">{tech.icon}</span>
                              <span className="text-gray-300 text-sm">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="text-right ml-8">
                        <p className="text-gray-500 text-sm mb-1">Timeline</p>
                        <p className="text-gray-300 font-medium">{project.timeline}</p>
                      </div>
                    </div>
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