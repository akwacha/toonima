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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (searchActive) setSearchActive(false);
  };

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* --- Logo Section --- */}
        <div className={`flex items-center gap-8 transition-all duration-300 ${searchActive ? 'opacity-0 pointer-events-none md:opacity-100' : 'opacity-100'}`}>
          <a href="/" className="flex items-center shrink-0">
            <div className="bg-[#00D564] p-1.5 rounded-sm rotate-[-2deg] shadow-sm">
              <h2 className="text-xl font-black text-white leading-none tracking-tighter">
                TOONIMA
              </h2>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 border-l border-stone-200 pl-8">
            {LINKS.map((link, index) => (
              <a key={index} href={link.link} className="text-[13px] font-bold uppercase tracking-tight text-stone-800 hover:text-[#00D564] transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* --- Unified Search & Actions --- */}
        <div className={`flex items-center justify-end transition-all duration-300 ${searchActive ? 'flex-1' : 'gap-2 md:gap-4'}`}>
          
          <div className={`relative flex items-center justify-end transition-all duration-500 ${
            searchActive ? 'w-full md:w-64 absolute left-0 md:relative px-4 md:px-0' : 'w-10'
          }`}>
             <input 
                type="text"
                placeholder="Search series..."
                autoFocus={searchActive}
                className={`h-9 rounded-full bg-stone-100 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-[#00D564] transition-all duration-500 ${
                  searchActive 
                    ? 'w-full pl-4 pr-10 opacity-100 visible' 
                    : 'w-0 opacity-0 invisible p-0'
                }`}
                onBlur={() => setSearchActive(false)}
             />
             <button 
                onClick={() => setSearchActive(!searchActive)}
                className={`z-10 p-2 transition-colors duration-300 ${
                    searchActive ? 'absolute right-6 md:right-3 text-[#00D564]' : 'text-stone-400 hover:text-black'
                }`}
             >
                {searchActive ? <RiCloseFill size={22} /> : <RiSearchLine size={20} />}
             </button>
          </div>

          {/* Auth/Publish - Desktop Only */}
          <div className={`hidden md:flex items-center gap-4 text-[11px] font-bold text-stone-500 ml-2 ${searchActive ? 'hidden lg:flex' : ''}`}>
            <a href="#" className="hover:text-black transition-colors">LOG IN</a>
            <a href="#" className="bg-black text-white px-5 py-1.5 rounded-full hover:bg-stone-800 transition-all shadow-sm">
              PUBLISH
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className={`lg:hidden ${searchActive ? 'hidden' : 'block'}`}>
            <button onClick={toggleMenu} className="text-2xl text-stone-900 p-1">
              {isOpen ? <RiCloseFill size={26} /> : <RiMenu3Fill size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu (No Search Bar Here) --- */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 absolute w-full left-0 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="px-6 py-8 flex flex-col gap-6">
            {LINKS.map((link, index) => (
              <a key={index} href={link.link} className="text-lg font-bold uppercase text-stone-900 hover:text-[#00D564]">
                {link.name}
              </a>
            ))}
            <hr className="border-stone-100" />
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-bold text-stone-900">PUBLISH YOUR WORK</a>
              <a href="#" className="text-sm font-bold text-stone-500 uppercase">Log In / Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;