import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed inset-0 z-50 pointer-events-none">
      {/* DESKTOP NAVBAR */}
      <div className="hidden md:block fixed top-4 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-auto">
          {/* LEFT: floating logo */}
          <a target="_blank" rel="noopener noreferrer">
            <img
              src="https://see.fontimg.com/api/rf5/nAXDJ/ZGJjOTMwNTk4YjdhNDk5NmJkYTk0MDc5NGI3MmMzNmIub3Rm/QUg/galaxyface.png?r=fs&h=213&w=1500&fg=FFFFFF&bg=141313&tb=1&s=142"
              alt="Stars fonts"
              className="h-8 drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
            />
          </a>

          {/* RIGHT: floating detached pill */}
          <div className="bg-black/60 backdrop-blur-md border border-purple-500/20 rounded-full px-4 py-2 flex flex-row items-center gap-2 shadow-[0_0_30px_rgba(107,33,168,0.25)]">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-purple-500/20"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-purple-500/20"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-purple-500/20"
            >
              About
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR (top bar) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 
      pointer-events-auto flex items-center justify-between h-16 px-4 
      bg-black/5 backdrop-blur-md border-b">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a target="_blank" rel="noopener noreferrer">
            <img
              src="https://see.fontimg.com/api/rf5/nAXDJ/ZGJjOTMwNTk4YjdhNDk5NmJkYTk0MDc5NGI3MmMzNmIub3Rm/QUg/galaxyface.png?r=fs&h=213&w=1500&fg=FFFFFF&bg=141313&tb=1&s=142"
              alt="Stars fonts"
              className="h-8"
            />
          </a>
        </div>

        {/* Menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 rounded-md transition-colors duration-300"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden fixed left-0 right-0 top-16 z-50 pointer-events-auto transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-50 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="mx-2 rounded-xl overflow-hidden bg-black/30 backdrop-blur-md shadow-lg">
          <button
            onClick={() => scrollToSection('home')}
            className="text-white block w-full px-4 py-3 text-base text-left font-medium transition-colors duration-200 hover:bg-stone-700/20"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white block w-full px-4 py-3 text-base text-left font-medium transition-colors duration-200 hover:bg-stone-700/20"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-white block w-full px-4 py-3 text-base text-left font-medium transition-colors duration-200 hover:bg-stone-700/20"
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
