'use client';
import { useState, useEffect } from "react";
import { RiCloseFill, RiMenu3Fill, RiSearchLine } from "react-icons/ri";
import Link from "next/link";

const LINKS = [
  { name: 'Originals', link: '/originals' },
  { name: 'Categories', link: '/categories' },
  { name: 'Rankings', link: '/rankings' },
  { name: 'Canvas', link: '/canvas' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar "weight"
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (searchActive) setSearchActive(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-[#edf7f6]/90 backdrop-blur-xl border-b border-stone-200 shadow-sm py-0' 
        : 'bg-[#edf7f6] border-b border-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* --- Logo Section --- */}
        <div className={`flex items-center gap-8 transition-all duration-500 ${searchActive ? 'opacity-0 -translate-x-4 md:opacity-100 md:translate-x-0' : 'opacity-100 translate-x-0'}`}>
          <Link href="/" className="flex items-center shrink-0 z-10 group">
            <div className="bg-[#F56476] p-1.5 rounded-sm rotate-[-2deg] shadow-sm group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
              <h2 className="text-xl font-black text-white leading-none tracking-tighter italic">
                TOONIMA
              </h2>
            </div>
          </Link>

          {/* Desktop Links with Animated Underline */}
          <div className="hidden lg:flex items-center gap-8 border-l border-stone-300/40 pl-8">
            {LINKS.map((link, index) => (
              <Link 
                key={index} 
                href={link.link} 
                className="text-[11px] font-black uppercase tracking-widest text-stone-800 hover:text-[#F56476] transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F56476] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* --- Unified Search & Actions --- */}
        <div className={`flex items-center justify-end transition-all duration-300 ${searchActive ? 'flex-1' : 'gap-2 md:gap-4'}`}>
          
          <div className={`relative flex items-center justify-end transition-all duration-500 ease-out ${
            searchActive ? 'w-full md:w-96 px-4 md:px-0' : 'w-10'
          }`}>
             <input 
                type="text"
                autoFocus={searchActive}
                placeholder="Search series, creators, tags..."
                className={`h-11 rounded-2xl bg-white border border-stone-200 text-xs font-bold text-stone-900 focus:outline-none focus:ring-4 focus:ring-[#F56476]/10 focus:border-[#F56476] transition-all duration-500 ${
                  searchActive 
                    ? 'w-full pl-5 pr-12 opacity-100 scale-100 shadow-xl' 
                    : 'w-0 opacity-0 scale-95 pointer-events-none'
                }`}
                onBlur={() => setSearchActive(false)}
             />
             <button 
                onClick={() => setSearchActive(!searchActive)}
                className={`z-20 p-2.5 transition-all duration-500 rounded-xl ${
                    searchActive 
                      ? 'absolute right-6 md:right-1 bg-[#102321] text-white shadow-lg rotate-90' 
                      : 'text-stone-500 hover:bg-white hover:text-[#F56476] hover:shadow-md'
                }`}
             >
                {searchActive ? <RiCloseFill size={22} /> : <RiSearchLine size={22} />}
             </button>
          </div>

          {/* Auth/Publish with Motion */}
          <div className={`hidden md:flex items-center gap-5 text-[11px] font-black text-stone-600 ml-4 ${searchActive ? 'hidden xl:flex' : ''}`}>
            <Link href="/login" className="hover:text-[#F56476] transition-all hover:-translate-y-0.5 tracking-widest">LOG IN</Link>
            <Link 
              href="/creatordash" 
              className="bg-[#102321] text-white px-7 py-3 rounded-xl hover:bg-[#F56476] hover:shadow-[0_10px_20px_rgba(245,100,118,0.3)] transition-all shadow-md active:scale-95 tracking-widest"
            >
              PUBLISH
            </Link>
          </div>

          {/* Mobile Menu Button Animation */}
          <div className={`lg:hidden relative z-[110] ${searchActive ? 'hidden' : 'block'}`}>
            <button 
              onClick={toggleMenu} 
              className={`text-stone-900 p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-[#F56476] text-white rotate-180' : 'bg-transparent'}`}
            >
              {isOpen ? <RiCloseFill size={28} /> : <RiMenu3Fill size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`lg:hidden fixed inset-0 bg-[#edf7f6] z-[100] transition-all duration-500 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="px-8 pt-32 pb-10 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-8">
            {LINKS.map((link, index) => (
              <Link 
                key={index} 
                href={link.link} 
                onClick={() => setIsOpen(false)}
                className="text-5xl font-black uppercase italic text-stone-900 hover:text-[#F56476] tracking-tighter transition-all hover:translate-x-4"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="space-y-6 pb-12">
            <hr className="border-stone-200" />
            <Link href="/creatordash" className="block text-2xl font-black text-[#F56476] uppercase italic tracking-tighter">PUBLISH YOUR WORK</Link>
            <Link href="/login" className="block text-xl font-black text-stone-400 uppercase italic tracking-tighter">Account Settings</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;