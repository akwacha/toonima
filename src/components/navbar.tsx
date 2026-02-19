'use client';
import { useState } from "react";
import { RiCloseFill, RiMenu3Fill, } from "react-icons/ri";
// ...existing code...

const LINKS = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
  { name: 'Contact', link: '/contact' },
];

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false)

    const toggleMenu = () => {
        setIsopen(!isOpen)
    }
  return (
  <nav className="border-b-2" style={{ backgroundColor: '#F07E13' }}>
    <div className="max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        <div className="pl-2">
          <a href="#">
            <h2 className="text-3xl font-bold font-gothic-a1" style={{ textShadow: '2px 2px 4px #F05713' }}>Toonima</h2>
          </a>
        </div>

        <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="text-2xl pr-2 focus:outline-none"
            >
              {isOpen ? <RiCloseFill/> : <RiMenu3Fill />}
            </button>
        </div>
        
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
        {LINKS.map((link, index) => (
          <a key={index} href={link.link} className="uppercase text-sm font-medium">
            {link.name}
          </a>
        ))}
        </div>
    </div>
    
    {isOpen && (
      <div className="md:hidden px-4 py-4" style={{ backgroundColor: '#F07E13' }}>
        {LINKS.map((link, index) => (
          <a key={index} href={link.link} className="block uppercase text-sm font-medium py-2">
            {link.name}
          </a>
        ))}
      </div>
    )}

    </nav>
  );
}

export default Navbar;
// ...existing code...