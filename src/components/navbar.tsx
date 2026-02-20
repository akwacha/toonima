'use client';
import { useState } from "react";
import { RiCloseFill, RiMenu3Fill, RiSearchLine } from "react-icons/ri";

const LINKS = [
  { name: 'Originals', link: '/originals' },
  { name: 'Categories', link: '/categories' },
  { name: 'Rankings', link: '/rankings' },
  { name: 'Canvas', link: '/canvas' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* --- Logo & Main Links --- */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center">
            <div className="bg-[#00D564] p-1.5 rounded-sm rotate-[-2deg] shadow-sm">
              <h2 className="text-xl font-black text-white leading-none tracking-tighter">
                TOONIMA
              </h2>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 border-l border-stone-200 pl-8">
            {LINKS.map((link, index) => (
              <a 
                key={index} 
                href={link.link} 
                className="text-[13px] font-bold uppercase tracking-tight text-stone-800 hover:text-[#00D564] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* --- Right Side Actions --- */}
        <div className="flex items-center gap-4">
          
          {/* 🔍 SEARCH FIELD */}
          <div className={`relative flex items-center transition-all duration-300 ${searchActive ? 'w-48 md:w-64' : 'w-10'}`}>
             <input 
                type="text"
                placeholder="Search projects..."
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
                className={`w-full h-9 pl-4 pr-10 rounded-full bg-stone-100 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#00D564] transition-all ${
                  searchActive ? 'opacity-100' : 'opacity-0 md:opacity-100 md:bg-transparent cursor-pointer'
                }`}
             />
             <RiSearchLine className={`absolute right-3 text-lg transition-colors ${searchActive ? 'text-[#00D564]' : 'text-stone-400'}`} />
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] font-bold text-stone-500 ml-2">
            <a href="#" className="hover:text-black transition-colors">CREATORS 101</a>
            <a href="#" className="bg-black text-white px-5 py-1.5 rounded-full hover:bg-stone-800 transition-all shadow-sm">
              PUBLISH
            </a>
            <a href="#" className="hover:text-black transition-colors">LOG IN</a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl text-stone-900 focus:outline-none"
            >
              {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 absolute w-full left-0 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="px-6 py-8 flex flex-col gap-6">
            {/* Mobile Search */}
            <div className="relative flex items-center">
                <input 
                    type="text"
                    placeholder="Search for series or creators"
                    className="w-full h-12 pl-4 pr-10 rounded-lg bg-stone-100 text-sm outline-none"
                />
                <RiSearchLine className="absolute right-4 text-stone-400 text-xl" />
            </div>

            {LINKS.map((link, index) => (
              <a 
                key={index} 
                href={link.link} 
                className="text-lg font-bold uppercase text-stone-900 hover:text-[#00D564]"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-stone-100" />
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-bold text-[#00D564] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D564] animate-pulse"></span>
                PUBLISH YOUR WORK
              </a>
              <a href="#" className="text-sm font-bold text-stone-500">LOG IN / SIGN UP</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;