import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import trip from '../assets/trip.png';
import t20 from '../assets/dashboard.png';
import component from '../assets/com.png';
const projects = [
  {
    title: "AI Trip Planner",
    description: "An AI-powered trip planner using Gemini API to generate personalized multi-day itineraries with dynamic weather insights, budget estimates, and activity recommendations.",
    tags: ["React", "Node.js", "Gemini"],
    github: "https://github.com/kaushal16s?tab=repositories",
    link: "https://trip-rosy-ten.vercel.app/",
    color: "from-blue-500 to-cyan-500",
    image: trip
  },
  {
    title: "T20-Cricket-WC-Data-Analysis",
    description: "Analyzed T20 World Cup 2022 data to identify and select top-performing players for a Dream 11 team lineup. ",
    tags: ["Python", "Pandas", "Matplotlib", "Powerbi", "Excel"],
    github: "https://github.com/kaushal16s?tab=repositories",
    color: "from-purple-500 to-pink-500",
    image: t20
  },
  {
    title: "AI Component Generator",
    description: "A web application that generates complete, ready to-use UI components using AI (Google Gemini API) based on user descriptions. ",
    tags: ["React", "Vite", "Gemini", "Tailwind"],
    github: "https://github.com/kaushal16s?tab=repositories",
    color: "from-orange-500 to-red-500",
    image: component
  },

];

function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-[12vw] sm:text-[15vw] font-display font-medium leading-none tracking-tight text-white mb-4">
          PROJECTS
        </h1>
        <div className="flex flex-col items-center gap-2">
          <p className="text-neutral-400 font-sans tracking-[0.2em] text-sm sm:text-base uppercase">
            TAKE A LOOK AT MY WORK
          </p>
          <p className="font-serif italic text-3xl sm:text-4xl text-white">
            what i have built
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl bg-neutral-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
          >
            {/* Project Image Placeholder (Gradient) */}
            <div className={`h-64 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative overflow-hidden`}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay group-hover:mix-blend-normal"
                />
              )}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a href={project.link} target="_blank" rel="noreferrer" className="bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/20 transition-colors">
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                  {project.title}
                </h3>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
              </div>

              <p className="text-neutral-400 mb-6 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/kaushal16s?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-lg"
        >
          View More Projects
          <ArrowUpRight size={20} />
        </a>
      </div>

      {/* My Stacks Section */}
      <div className="max-w-7xl mx-auto mt-32 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-medium text-white mb-4">MY STACKS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
            { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", invert: true },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },

          ].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center p-6 bg-neutral-900/30 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-full h-full object-contain transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] ${tech.invert ? "invert" : ""}`}
                />
              </div>
              <span className="text-neutral-400 font-medium group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Projects