'use client';
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const ARTISTS = [
  { name: "Elena Rossi", specialty: "Muralist", description: "Elena blends contemporary textures with classic renovation aesthetics.", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Julian Chen", specialty: "Industrial Sculptor", description: "Julian specializes in raw metal fixtures and minimalist steel structures.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Sasha Meyer", specialty: "Textile Designer", description: "Sasha creates custom upholstery and acoustic wall hangings.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Marcus Thorne", specialty: "Carpentry", description: "Expert in reclaimed wood and hidden storage solutions.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Aria Vance", specialty: "Glass Blower", description: "Crafts bespoke lighting fixtures and glass partitions.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "David Kross", specialty: "Lighting Architect", description: "Focuses on the interplay between natural light and smart LEDs.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Lila Bourne", specialty: "Ceramicist", description: "Creates organic, hand-thrown tiles for premium kitchens.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Kaito Sato", specialty: "Digital Joiner", description: "Our latest addition using 3D printing to create modular wooden joints.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800", badge: "Upcomer" },
];

const Spotlight = () => {
  return (
    <section className="bg-[#edf7f6] text-[#102321]" id="spotlight">
      <div className="max-w-7xl mx-auto py-24 px-4">
        
        <div className="text-center mb-16">
          <h4 className="text-[#F56476] font-black tracking-[0.2em] uppercase text-[10px] mb-3">
            The Creative Collective
          </h4>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic">
            Artists & Visionaries
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ARTISTS.map((artist, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-stone-200 p-6 rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#102321]/5 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#F56476] rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 -z-10 opacity-20" />
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-[#edf7f6] shadow-xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className={`absolute -top-1 -right-2 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-md text-white ${artist.badge === 'Upcomer' ? 'bg-[#102321]' : 'bg-[#F56476]'}`}>
                    {artist.badge}
                  </div>
                </div>
                
                <h3 className="text-lg font-black uppercase tracking-tight mb-1">{artist.name}</h3>
                <p className="text-[10px] text-[#F56476] font-black uppercase tracking-[0.15em] mb-3">
                  {artist.specialty}
                </p>
                <p className="text-xs text-stone-500 leading-relaxed font-medium">
                  {artist.description}
                </p>
              </div>
            ))}
          </div>

          {/* FIX: Increased z-index and relative positioning to ensure mobile clickability */}
          <div className="flex justify-end mt-12 relative z-30">
            <a 
              href="/creators" 
              className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-stone-400 hover:text-[#F56476] transition-all duration-300 py-4"
            >
              <span className="group-hover:tracking-[0.3em] transition-all">Expand the Odyssey</span>
              <div className="flex items-center">
                <div className="w-8 h-[1px] bg-stone-300 group-hover:bg-[#F56476] group-hover:w-12 transition-all duration-500" />
                <RiArrowRightLine className="ml-[-4px] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;