"use client";

import React,{ useState, useEffect } from "react";
import { Code2, Palette, Database, Smartphone, Zap, Trophy } from "lucide-react";

const skills = [
  { name: "JavaScript ES6+", level: 95, category: "frontend", icon: Code2 },
  { name: "React.js", level: 92, category: "frontend", icon: Code2 },
  { name: "Next.js", level: 88, category: "frontend", icon: Code2 },
  { name: "TypeScript", level: 85, category: "frontend", icon: Code2 },
  { name: "CSS3/SCSS", level: 95, category: "design", icon: Palette },
  { name: "Tailwind CSS", level: 92, category: "design", icon: Palette },
  { name: "Responsive Design", level: 95, category: "design", icon: Smartphone },
  { name: "Node.js", level: 75, category: "backend", icon: Database },
  { name: "MongoDB", level: 70, category: "backend", icon: Database },
  { name: "Git/GitHub", level: 90, category: "tools", icon: Zap },
];

const experiences = [
  {
    title: "Frontend Developer",
    company: "Denovo Workspace",
    period: "2022 - Present",
    description:
      "Built 8+ high-performance React and Next.js applications, improving user retention by 20% through intuitive UI/UX. Integrated REST APIs and Firebase for real-time data, reducing latency by 15%. Led SEO and performance optimization, boosting Lighthouse scores by 25% and organic traffic by 10%. Mentored 2 junior developers, establishing a reusable component library that cut development time by 12%. Partnered with design and backend teams to deliver accessible, responsive features on Vercel and AWS. ",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "React/Next JS Intern",
    company: "ThinkNext Technologies",
    period: "2021 - 2022",
    description:
      " Developed 5 web applications using React.js, increasing user engagement by 15%. Optimized code through reviews, reducing bugs by 10% and improving scalability by 18%.",
    technologies: ["JavaScript", "React", "CSS3", "HTML5" , "Next.js"],
  },
];

export default function About() {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skills.forEach((skill) => {
        animated[skill.name] = skill.level;
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const categories = ["all", "frontend", "design", "backend", "tools"];
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 glow-text">
            About{" "}
            <span className=" bg-clip-text ">
              Me
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          React.js/Next.js Developer with 3+ years of experience building scalable, high-performance web applications using the MERN stack. Delivered 8+ production-ready projects, improving user engagement by up to 25% through modern UI/UX and responsive design. Expert in clean, maintainable code and agile collaboration. 
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text">
            <span className=" bg-clip-text ">
              Skills & Expertise
            </span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "gradient-purple text-white glow-purple"
                    : "glass-morphism hover:glow-purple hover:text-purple-400"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-morphism p-6 rounded-xl hover:glow-purple transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-purple-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="gradient-purple h-2 rounded-full transition-all duration-1000 ease-out glow-purple"
                    style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text">
            <span className=" bg-clip-text ">
              Experience
            </span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-morphism p-8 rounded-xl hover:glow-purple transition-all duration-300 relative"
              >
                <div className="absolute -left-4 top-8 w-8 h-8 gradient-purple rounded-full glow-purple" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl text-purple-400 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-gray-400 font-medium">{exp.period}</div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 glass-morphism rounded-full text-sm text-purple-400 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, number: "2+", label: "Years Experience" },
              { icon: Code2, number: "12+", label: "Projects Completed" },
              { icon: Zap, number: "8+", label: "Technologies" },
              { icon: Smartphone, number: "100%", label: "Mobile Responsive" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glass-morphism p-6 rounded-xl hover:glow-purple transition-all duration-300 group"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold glow-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
