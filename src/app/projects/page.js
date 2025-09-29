"use client";
import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Total Power ToolKit",
    description: "A full-featured online tool store built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "/ToolsKit.png",
    technologies: ["Next.js", "TypeScript", "Context API", "Tailwind CSS"],
    liveUrl: "https://totalpowertools.in/",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Sound Effect Buttons",
    description: "A Next.js application that provides a collection of sound effect buttons for various purposes, including gaming, streaming, and entertainment.",
    image: "SoundEffectButtons.png",
    technologies: ["Next.js", "Firebase", "Material-UI", "Redux" ,"Framer Motion"],
    liveUrl: "https://www.soundeffectbuttons.com/",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Lord Calculator",
    description: "A Next.js application that provides a collection of calculators for various purposes, including finance, health, and education.",
    image: "LordCalculator.png",
    technologies: ["React/Next.js", "Responsive Design", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://lordcalculator.com/",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Virtual Drums",
    description: "A virtual drumming experience with realistic drum sounds, customizable kits, and interactive tutorials.",
    image: "Drums.png",
    technologies: ["React", "Tone.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://virtual-drums-six.vercel.app/",
    githubUrl: "https://github.com/MehulSharma333/Virtual-drums",
    featured: false
  },
  {
    id: 5,
    title: "BrainWave",
    description: "A parallax scrolling website showcasing modern UI/UX design with smooth animations and interactive elements.",
    image: "BrainWave.png",
    technologies: ["React", "Parallax", "Framer Motion", "Responsive Design"],
    liveUrl: "https://brainwave-qj1r26o2c-mehulsharma333s-projects.vercel.app/",
    githubUrl: "https://github.com/MehulSharma333/Brainwave",
    featured: false
  },
  {
    id: 6,
    title: "LazyPoint NYC",
    description: "A restaurant website for LazyPoint NYC, featuring menu, reservations, and location details.",
    image: "LazyNyc.png",
    technologies: ["Next.js", "MongoDB", "Axios", "Tailwind CSS" , "Jquery" , "Responsive Design"],
    liveUrl: "https://www.lazypointnyc.com/",
    githubUrl: "#",
    featured: true
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects; 
  

  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 glow-text">
            My <span className="bg-clip-text ">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore my collection of web applications and digital experiences. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>
      </section>

    

      {/* Projects Grid */}
      <section className="py-10 pb-20 ">
        <div className="max-w-7xl mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative "
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-morphism rounded-xl   overflow-hidden hover:glow-purple transition-all duration-500 transform hover:scale-105 ">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-all duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <a
                        href={project.liveUrl}
                        className="p-3 glass-morphism rounded-full hover:glow-purple transition-all duration-300 hover:scale-110"
                        aria-label="View Live"
                      >
                        <Eye className="w-5 h-5 text-purple-400" />
                      </a>
                     {!project.featured && <a
                        href={project.githubUrl}
                        className="p-3 glass-morphism rounded-full hover:glow-purple transition-all duration-300 hover:scale-110"
                        aria-label="View Code"
                      >
                        <Github className="w-5 h-5 text-purple-400" />
                      </a>}
                      <a
                        href={project.liveUrl}
                        className="p-3 glass-morphism rounded-full hover:glow-purple transition-all duration-300 hover:scale-110"
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-5 h-5 text-purple-400" />
                      </a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 gradient-purple rounded-full text-sm font-medium glow-purple">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs glass-morphism rounded-full text-purple-400 border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex-1 py-2 px-4 gradient-purple rounded-lg text-center font-medium hover:glow-purple transition-all duration-300 hover:scale-105"
                      >
                        Live Site
                      </a>
                      {!project.featured && <a
                        href={project.githubUrl}
                        className="py-2 px-4 glass-morphism rounded-lg font-medium hover:glow-purple transition-all duration-300 hover:scale-105 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </a>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}