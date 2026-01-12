"use client";

import React, { useState, useEffect } from "react";

const navItems = [
  { id: "intro", label: "Introduction" },
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "process", label: "Design Process" },
  { id: "insights", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-full lg:w-64 lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-stone-200  z-40 flex flex-col justify-between p-6 lg:p-10">
      <div className="flex justify-between items-center lg:block">
        <a href="#" className="block">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full mb-0 lg:mb-8">
            <span className="serif text-xl italic">N.</span>
          </div>
        </a>
        {/* Mobile Menu Button - hidden on desktop */}
        <button 
          className="lg:hidden text-stone-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col space-y-4 mt-6 pb-4 border-b border-stone-200`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`serif text-xl transition-all ${
              activeSection === item.id
                ? "text-stone-900 italic"
                : "text-stone-500 hover:text-stone-900 hover:italic"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-col space-y-6 mt-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`serif text-2xl transition-all ${
              activeSection === item.id
                ? "text-stone-900 italic"
                : "text-stone-500 hover:text-stone-900 hover:italic"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden lg:block text-xs text-stone-400 uppercase tracking-widest">
        <p>&copy; 2026 Niharika Suru</p>
        <p className="my-2">Visakhapatnam | India </p>
          <p> Remote</p>
      </div>
    </aside>
  );
}
