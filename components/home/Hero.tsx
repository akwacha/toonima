"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT } from "../../data/constants";
import { RiArrowRightLine, RiFocus2Line } from "react-icons/ri";

const featured = [
  { id: 1, title: "Midnight City", img: "https://placehold.co/400x600" },
  { id: 2, title: "Ashes of Tomorrow", img: "https://placehold.co/400x600" },
  { id: 3, title: "Golden Sands", img: "https://placehold.co/400x600" },
  { id: 4, title: "Silent Thunder", img: "https://placehold.co/400x600" },
  { id: 5, title: "Hidden Truth", img: "https://placehold.co/400x600" },
];

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const infiniteItems = [...featured, ...featured, ...featured];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const scrollSpeed = 0.8; // Slower, more "curated" feel

    const scroll = () => {
      if (!paused) {
        el.scrollLeft += scrollSpeed;
        if (el.scrollLeft >= el.scrollWidth / 3) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [paused]);

  return (
    <section className="bg-[#edf7f6] pt-20 pb-24 border-b border-stone-200 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 relative flex flex-col items-center">
        
        {/* --- HEADER BLOCK --- */}
        <div className="w-full relative z-20 flex flex-col items-center text-center mb-[-4rem] lg:mb-[-6rem]">
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up">
            <span className="w-8 h-[1px] bg-[#102321]" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F56476]">
              {HERO_CONTENT.subtitle}
            </p>
            <span className="w-8 h-[1px] bg-[#102321]" />
          </div>

          <h1 className="text-7xl md:text-9xl lg:text-[13rem] uppercase font-black tracking-[ -0.05em] italic leading-[0.8] text-[#102321] select-none">
            {HERO_CONTENT.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-[#F56476]" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
        </div>

        {/* --- MAIN HERO IMAGE --- */}
        <div className="w-full relative group">
          <div className="absolute inset-0 bg-[#102321]/10 rounded-[3rem] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
          <div className="relative overflow-hidden rounded-[3rem] border border-stone-200 shadow-2xl">
            <img
              src={HERO_CONTENT.image.src}
              className="w-full h-[50vh] lg:h-[75vh] object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
              alt="Hero Artwork"
            />
            {/* Artistic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#102321]/40 to-transparent opacity-60" />
            <div className="absolute bottom-10 left-10 text-white">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  <RiFocus2Line className="text-[#F56476] animate-pulse" />
                  Featured Story
               </div>
            </div>
          </div>
        </div>

        {/* --- CURATED CAROUSEL SECTION --- */}
        <div className="w-full mt-24">
          <div className="flex justify-between items-end mb-10 px-2">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#102321]">
                The <span className="text-[#F56476]">Exhibition</span>
              </h2>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-400 mt-2">
                Hand-picked narratives for the week
              </p>
            </div>
            <div className="hidden md:flex gap-4 items-center text-[10px] font-black uppercase tracking-widest text-[#102321]">
              See More <RiArrowRightLine />
            </div>
          </div>

          <div
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-6 overflow-x-auto no-scrollbar py-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            } as React.CSSProperties}
          >
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            {infiniteItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="min-w-[280px] group cursor-pointer"
              >
                <div className="relative h-[380px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700"
                  />
                  {/* Subtle Label on Image */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <RiArrowRightLine className="-rotate-45 text-[#102321]" />
                  </div>
                </div>
                <div className="mt-6 space-y-1">
                  <p className="text-[9px] font-black text-[#F56476] uppercase tracking-widest">Issue #{index + 1}</p>
                  <h3 className="font-black uppercase tracking-tight italic text-lg text-[#102321] group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;