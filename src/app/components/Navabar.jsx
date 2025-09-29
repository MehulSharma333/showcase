"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState  } from "react";
import { Home, User, Briefcase, Mail, Menu, X  } from "lucide-react";

const navigationItems = [
  { title: "Home", href: "/" , icon: Home },
  { title: "About", href: "/about", icon: User },
  { title: "Projects", href: "/projects", icon: Briefcase },
  { title: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    useEffect(() => {
    const newParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 8}px`,
      height: `${Math.random() * 8}px`,
      animationDelay: `${Math.random() * 20}s`,
      animationDuration: `${15 + Math.random() * 10}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((style, i) => (
        <div key={i} className="particle" style={style} />
      ))}
    </div>

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-morphism glow-purple" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold glow-text hover:text-purple-400 transition-colors duration-300"
            >
              &lt;Portfolio/&gt;
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      active
                        ? "text-purple-400 glow-purple bg-purple-900/20"
                        : "hover:text-purple-400 hover:glow-purple"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-900/20 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden glass-morphism border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                      active
                        ? "text-purple-400 glow-purple bg-purple-900/20"
                        : "hover:text-purple-400 hover:glow-purple"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}