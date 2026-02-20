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
    /* Navbar BG set to Off-white Azure Mist (#edf7f6) */
    <nav className="bg-[#edf7f6] border-b border-stone-200/60 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* --- Logo Section --- */}
        <div className={`flex items-center gap-8 transition-all duration-300 ${searchActive ? 'opacity-0 pointer-events-none md:opacity-100' : 'opacity-100'}`}>
          <a href="/home" className="flex items-center shrink-0">
            {/* Logo box in Toonima Coral */}
            <div className="bg-[#F56476] p-1.5 rounded-sm rotate-[-2deg] shadow-sm hover:rotate-0 transition-transform duration-300">
              <h2 className="text-xl font-black text-white leading-none tracking-tighter">
                TOONIMA
              </h2>
            </div>
          </a>

          {/* Desktop Links - Hover updated to Coral */}
          <div className="hidden lg:flex items-center gap-6 border-l border-stone-300/40 pl-8">
            {LINKS.map((link, index) => (
              <a 
                key={index} 
                href={link.link} 
                className="text-[12px] font-black uppercase tracking-tight text-stone-800 hover:text-[#F56476] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* --- Unified Search & Actions --- */}
        <div className={`flex items-center justify-end transition-all duration-300 ${searchActive ? 'flex-1' : 'gap-2 md:gap-4'}`}>
          
          <div className={`relative flex items-center justify-end transition-all duration-500 ${
            searchActive ? 'w-full md:w-80 absolute left-0 md:relative px-4 md:px-0' : 'w-10'
          }`}>
             <input 
                type="text"
                placeholder="Search series..."
                autoFocus={searchActive}
                className={`h-10 rounded-full bg-white border border-stone-200 text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#F56476]/20 focus:border-[#F56476] transition-all duration-500 ${
                  searchActive 
                    ? 'w-full pl-5 pr-12 opacity-100 visible shadow-inner' 
                    : 'w-0 opacity-0 invisible p-0'
                }`}
                onBlur={() => setSearchActive(false)}
             />
             <button 
                onClick={() => setSearchActive(!searchActive)}
                className={`z-10 p-2 transition-all duration-300 rounded-full ${
                    searchActive 
                      ? 'absolute right-6 md:right-2 bg-[#F56476] text-white shadow-lg rotate-90 scale-90' 
                      : 'text-stone-500 hover:bg-white hover:text-[#F56476] hover:shadow-sm'
                }`}
             >
                {searchActive ? <RiCloseFill size={20} /> : <RiSearchLine size={20} />}
             </button>
          </div>

          {/* Auth/Publish - Buttons Spiced with Coral */}
          <div className={`hidden md:flex items-center gap-5 text-[11px] font-black text-stone-600 ml-2 ${searchActive ? 'hidden lg:flex' : ''}`}>
            <a href="#" className="hover:text-[#F56476] transition-colors tracking-widest">LOG IN</a>
            <a 
              href="#" 
              className="bg-[#F56476] text-white px-6 py-2.5 rounded-full hover:shadow-[0_0_15px_rgba(245,100,118,0.4)] hover:brightness-105 transition-all shadow-md active:scale-95 tracking-widest"
            >
              PUBLISH
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className={`lg:hidden ${searchActive ? 'hidden' : 'block'}`}>
            <button onClick={toggleMenu} className="text-stone-900 p-1 hover:text-[#F56476] transition-colors">
              {isOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <div className="lg:hidden bg-[#edf7f6] border-t border-stone-200 absolute w-full left-0 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="px-8 py-10 flex flex-col gap-6">
            {LINKS.map((link, index) => (
              <a key={index} href={link.link} className="text-2xl font-black uppercase italic text-stone-900 hover:text-[#F56476] tracking-tighter transition-colors">
                {link.name}
              </a>
            ))}
            <hr className="border-stone-200/60" />
            <div className="flex flex-col gap-5">
              <a href="#" className="text-sm font-black text-[#F56476] uppercase tracking-[0.2em]">PUBLISH YOUR WORK</a>
              <a href="#" className="text-sm font-black text-stone-500 uppercase tracking-widest">Log In / Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;