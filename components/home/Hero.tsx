"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_CONTENT } from "../../data/constants";

const featured = [
  { id: 1, title: "Midnight City", img: "https://placehold.co/300x400" },
  { id: 2, title: "Ashes of Tomorrow", img: "https://placehold.co/300x400" },
  { id: 3, title: "Golden Sands", img: "https://placehold.co/300x400" },
  { id: 4, title: "Silent Thunder", img: "https://placehold.co/300x400" },
  { id: 5, title: "Hidden Truth", img: "https://placehold.co/300x400" },
];

const Hero = () => {
  // 🏎️ Fix 1: Explicitly tell TypeScript this is an HTMLDivElement
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const infiniteItems = [...featured, ...featured];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // 🏎️ Fix 2: Type the animation ID (it's a number in the browser)
    let animationFrameId: number;
    const scrollSpeed = 1;

    const scroll = () => {
      if (!paused) {
        el.scrollLeft += scrollSpeed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [paused]);

  return (
    <section className="bg-[#edf7f6] border-b border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center my-20 w-full text-[#102321]">
        
        {/* --- TITLE --- */}
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-black tracking-tighter italic leading-none">
          {HERO_CONTENT.title}
        </h1>

        {/* --- SUBTITLE --- */}
        <p className="lg:mt-6 text-sm mb-4 font-black uppercase tracking-[0.3em] text-[#F56476]">
          {HERO_CONTENT.subtitle}
        </p>

        {/* --- MAIN HERO IMAGE --- */}
        <div className="w-full px-2">
           <img
            src={HERO_CONTENT.image.src}
            className="w-full h-[65vh] object-cover rounded-[2.5rem] shadow-2xl border border-stone-200"
            alt="Hero"
          />
        </div>

        {/* ⭐ INFINITE FEATURED CAROUSEL */}
        <div className="w-full mt-14 px-2">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic mb-6">
            Featured Content
          </h2>

          <div
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-4 overflow-x-auto no-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            } as React.CSSProperties} // Fix 3: Style type casting
          >
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {infiniteItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="min-w-[240px] h-[320px] bg-white rounded-2xl shadow-xl shadow-[#102321]/5 border border-stone-100 overflow-hidden flex-shrink-0 group cursor-pointer transition-all duration-300 hover:border-[#F56476]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[75%] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-4 font-black uppercase tracking-tight text-sm text-[#102321] group-hover:text-[#F56476] transition-colors">
                  {item.title}
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