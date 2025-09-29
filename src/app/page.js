"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react";
import HomePage from "./home/page";

// Define navigation with Next.js filesystem-based routes
const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Projects", url: "/projects", icon: Briefcase },
  { title: "Contact", url: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
    

      {/* Homepage as default */}
      <HomePage />
    </div>
  );
}
