import React from 'react';

// Import local logos - replace these paths with your actual import paths
import claudeLogo from "../assets/logos/anthropic-claude-ai-assistant-logo.jpg"
import geminiLogo from "../assets/logos/google-gemini-ai-logo.jpg"
import perplexityLogo from "../assets/logos/perplexity-ai-logo.png"
import deepseekLogo from "../assets/logos/deepseek-ai-logo.jpg"
import blackboxLogo from "../assets/logos/blackbox-ai-logo.jpg"
import pinterestLogo from "../assets/logos/pinterest-logo.png"

function Skills() {
  const skillsData = [
    // Backend & Runtime
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      bgColor: "bg-white",
    },

    // Frontend
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "jQuery",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    },

    // Programming Languages
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },

    // Database & Storage
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Firebase Firestore",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "InfluxDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/influxdb/influxdb-original.svg",
    },

    // Tools & Technologies
    {
      name: "Socket.IO",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
      bgColor: "bg-white",
    },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "OAuth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },

    // Design Tools
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    {
      name: "Adobe Photoshop",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
    },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    { name: "Eraser.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Coolors", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Snapseed", logo: "https://www.gstatic.com/images/branding/product/1x/snapseed_512dp.png" },

    // AI & Assistants
    { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    {
      name: "Claude",
      logo: claudeLogo,
      bgColor: "bg-black",
    },
    {
      name: "Gemini",
      logo: geminiLogo,
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-500",
    },
    { name: "Perplexity", logo: perplexityLogo, bgColor: "bg-gradient-to-br from-purple-400 to-pink-500" },
    {
      name: "Deepseek",
      logo: deepseekLogo,
      bgColor: "bg-black",
    },
    { name: "Lechat", logo: "https://www.mistral.ai/favicon.ico" },
    { name: "Blackbox", logo: blackboxLogo, bgColor: "bg-black" },
    { name: "Copilot", logo: "https://github.githubassets.com/images/modules/site/copilot/copilot.png", bgColor: "bg-white" },

    // Deployment & Platforms
    { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", bgColor: "bg-white" },
    { name: "v0", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", bgColor: "bg-white" },
    {
      name: "Pinterest",
      logo: pinterestLogo,
      bgColor: "bg-red-500",
    },

    // B.Tech CS Curriculum & Tools
    { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
    {
      name: "CMD Terminal",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
      bgColor: "bg-gray-700",
    },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "OneNote", logo: "https://cdn-icons-png.flaticon.com/512/732/732220.png", bgColor: "bg-white" },
  ];

  return (
    <div className="h-screen bg-[#101010] py-10 px-6 relative overflow-hidden flex items-center">
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-zinc-700/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-zinc-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-block mb-2">
            <span className="text-xs font-semibold text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 px-3 py-1.5 rounded-full tracking-wide uppercase">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Technical Proficiency
          </h2>
          <p className="text-sm text-zinc-500 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and AI-powered tools
          </p>
        </div>

        {/* Skills Grid - Scrollable */}
        <div className="relative max-h-[calc(100vh-220px)] overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="group"
                style={{
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.02}s`,
                  opacity: 0
                }}
              >
                <div
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/50 cursor-pointer ${
                    skill.bgColor || "bg-zinc-900/50"
                  }`}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-4 h-4 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <p
                    className={`text-xs font-medium whitespace-nowrap ${
                      skill.bgColor && skill.bgColor.includes('white') ? "text-gray-900" : 
                      skill.bgColor && !skill.bgColor.includes('zinc') ? "text-white" : 
                      "text-zinc-300"
                    }`}
                  >
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-5">
          <p className="text-zinc-600 text-xs">
            Constantly learning and expanding my technical horizon 🚀
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thumb-zinc-700::-webkit-scrollbar-thumb {
          background-color: #3f3f46;
          border-radius: 2px;
        }

        .scrollbar-thumb-zinc-700::-webkit-scrollbar-thumb:hover {
          background-color: #52525b;
        }

        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default Skills;