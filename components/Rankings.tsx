'use client';
import { useEffect, useState } from "react";
import { RiArrowUpSFill, RiArrowDownSFill, RiHeartFill, RiDashboard3Line } from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "../data/constants";

const Ranking = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 selection:bg-[#F56476] selection:text-white">
      {/* 🏎️ 5-Column Grid based on Popular Series reference */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16">
        {PORTFOLIO_PROJECTS.map((project, index) => {
          const rank = index + 1; // [cite: 8, 10, 13]
          const isUp = index % 3 !== 0; 
          const movement = Math.floor(Math.random() * 20) + 1; // [cite: 79, 85, 93]
          const views = (project as any).views || "1.2M"; // [cite: 11, 24, 26]
          const genre = (project as any).category || "Action"; // [cite: 9, 15, 29]

          return (
            <div key={project.id} className="relative flex flex-col group">
              
              {/* --- HEADER: TOONIMA TELEMETRY --- */}
              <div className="flex items-end justify-between mb-3 px-1">
                <div className="flex flex-col">
                  <div className={`flex items-center text-[10px] font-black italic tracking-tighter ${isUp ? 'text-[#F56476]' : 'text-stone-400'}`}>
                    {isUp ? <RiArrowUpSFill size={14} /> : <RiArrowDownSFill size={14} />}
                    <span>{movement} POS</span>
                  </div>
                  <h3 className="text-[11px] font-black uppercase text-[#102321]/40 tracking-[0.2em] leading-none mt-1">
                    Sector {rank}
                  </h3>
                </div>
                <RiDashboard3Line className="text-stone-200 group-hover:text-[#F56476] transition-colors" size={16} />
              </div>

              {/* --- THE CARD: CHAMPION'S VISUAL --- */}
              <div className="relative aspect-square overflow-hidden rounded-sm bg-[#102321] shadow-2xl">
                {/* Main Thumbnail */}
                <img 
                  src={project.image.src} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" 
                  alt={project.name} 
                />
                
                {/* Toonima Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#102321]/90 via-transparent to-white/5 opacity-70" />

                {/* THE RANK: From Popular Series View */}
                <div className="absolute bottom-[-10px] left-[-5px] pointer-events-none">
                  <span className="text-7xl font-black text-white italic tracking-tighter leading-none drop-shadow-[0_10px_10px_rgba(16,35,33,0.8)] opacity-90 group-hover:opacity-100 transition-opacity">
                    {rank}
                  </span>
                </div>

                {/* Pole Position Badge */}
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-[#F56476] text-white text-[9px] font-black px-3 py-1 italic skew-x-[-12deg] origin-top-right shadow-lg">
                    POLE POSITION
                  </div>
                )}
              </div>

              {/* --- FOOTER: SERIES DATA --- */}
              <div className="mt-4 space-y-1">
                <h4 className="text-[13px] font-black uppercase italic text-[#102321] tracking-tight line-clamp-1 group-hover:text-[#F56476] transition-colors">
                  {project.name}
                </h4>
                
                <div className="flex items-center justify-between border-t border-stone-100 pt-2">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    {genre}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-black text-[#102321] bg-[#edf7f6] px-2 py-0.5 rounded-full">
                    <RiHeartFill className="text-[#F56476]" size={10} /> 
                    <span>{views}</span>
                  </div>
                </div>
              </div>

              {/* Toonima Performance Line */}
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#F56476] group-hover:w-full transition-all duration-500" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ranking;