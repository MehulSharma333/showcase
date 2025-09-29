"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react";

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Frontend Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-50 ">
          <div className="mb-8 animate-float">
            <Code className="w-20 h-20 mx-auto text-purple-400 glow-purple" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            {`Hi, I'm`}{" "}
            <span className=" bg-clip-text">Mehul Sharma</span>
          </h1>

          <div className="text-2xl md:text-4xl mb-8 h-12 flex items-center justify-center">
            <span className="text-purple-400">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting beautiful, responsive, and performant web experiences with
            <span className="text-purple-400"> 3+ years</span> of expertise in modern frontend technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/projects"
              className="px-8 py-4 gradient-purple rounded-full font-semibold text-white hover:scale-105 transform transition-all duration-300 glow-purple flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 glass-morphism rounded-full font-semibold text-white hover:scale-105 transform transition-all duration-300 hover:glow-purple flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 glass-morphism rounded-full hover:glow-purple hover:scale-110 transform transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mx-auto mt-10 text-center  flex justify-center animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-10 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 glow-text">
            <span className=" bg-clip-text ">Tech Stack</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", level: "Expert" },
              { name: "Next.js", level: "Advanced" },
              { name: "TypeScript", level: "Advanced" },
              { name: "Tailwind", level: "Expert" },
              { name: "JavaScript", level: "Expert" },
              { name: "CSS3", level: "Expert" },
            ].map((skill, index) => (
              <div
                key={index}
                className="glass-morphism p-6 rounded-xl hover:glow-purple transform hover:scale-105 transition-all duration-300 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400">{skill.level}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 glass-morphism rounded-full hover:glow-purple transition-all duration-300"
            >
              View Full Skills
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
