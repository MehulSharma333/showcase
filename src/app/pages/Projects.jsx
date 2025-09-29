"use client";
import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store built with React and Next.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, drag & drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations, dark theme, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracking application with price alerts, portfolio management, and market analysis.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop",
    technologies: ["React", "CoinGecko API", "Redux Toolkit", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Full-stack blog platform with markdown support, comment system, and admin content management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=800&h=600&fit=crop",
    technologies: ["Next.js", "MongoDB", "Markdown", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === "all" 
    ? projects 
    : filter === "featured" 
      ? projects.filter(p => p.featured)
      : projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 glow-text">
            My <span className=" bg-clip-text ">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore my collection of web applications and digital experiences. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: "all", label: "All Projects" },
              { key: "featured", label: "Featured" },
              { key: "others", label: "Others" }
            ].map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'gradient-purple text-white glow-purple'
                    : 'glass-morphism hover:glow-purple hover:text-purple-400'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-morphism rounded-xl overflow-hidden hover:glow-purple transition-all duration-500 transform hover:scale-105">
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
                      <a
                        href={project.githubUrl}
                        className="p-3 glass-morphism rounded-full hover:glow-purple transition-all duration-300 hover:scale-110"
                        aria-label="View Code"
                      >
                        <Github className="w-5 h-5 text-purple-400" />
                      </a>
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
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="py-2 px-4 glass-morphism rounded-lg font-medium hover:glow-purple transition-all duration-300 hover:scale-105 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </a>
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