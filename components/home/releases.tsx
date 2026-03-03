"use client";

import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../../data/constants";

// Adventure-themed days: The "Journey" through the week
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Archives"];

const Releases = () => {
  const [selectedDay, setSelectedDay] = useState("Thu");

  // Limiting to 30 projects for a clean 6x5 grid on Desktop
  const displayProjects = PORTFOLIO_PROJECTS.slice(0, 30);

  return (
    <section className="max-w-7xl mx-auto bg-[#edf7f6] border-b border-stone-200" id="portfolio">
      <div className="py-20 px-4">
        
        {/* --- Header Section --- */}
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-1">
            <h4 className="text-[#F56476] font-black tracking-[0.2em] uppercase text-[10px]">
              The Daily Scroll
            </h4>
            <h2 className="text-3xl font-black text-[#102321] uppercase tracking-tighter italic">
              New Odysseys
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#102321] hover:text-[#F56476] transition-all">
            Explore All 
            <span className="w-8 h-[1px] bg-[#102321] group-hover:bg-[#F56476] group-hover:w-12 transition-all" />
          </button>
        </div>

        {/* --- Adventure Navigation --- */}
        <div className="flex flex-wrap gap-3 mb-16">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] transition-all active:scale-95 ${
                selectedDay === day 
                  ? "bg-[#102321] text-white shadow-xl shadow-[#102321]/20 scale-105" 
                  : "bg-white text-stone-400 border border-stone-100 hover:border-[#F56476] hover:text-[#102321]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* --- 6x5 Grid (Odyssey Cards) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-14">
          {displayProjects.map((project: any, index) => (
            <div key={project.id || index} className="group cursor-pointer relative">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] mb-4 transition-all duration-500 group-hover:-translate-y-3 border border-stone-200/50 shadow-sm bg-white group-hover:shadow-2xl group-hover:shadow-[#102321]/10">
                <img
                  src={project.image?.src || project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Adventure Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102321]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Ranking Numbers (Legendary Top 5) */}
                {index < 5 && (
                  <div className="absolute -bottom-6 -left-2 text-8xl font-black text-white italic z-20 opacity-90 group-hover:text-[#F56476] transition-colors duration-300 pointer-events-none select-none"
                       style={{ WebkitTextStroke: '2px rgba(16,35,33,0.1)' }}>
                    {index + 1}
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="px-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="h-[1px] w-3 bg-[#F56476]" />
                  <p className="text-[9px] text-[#F56476] font-black uppercase tracking-[0.2em]">
                    {project.category || "Epic"}
                  </p>
                </div>
                
                <h3 className="text-[13px] font-black text-[#102321] leading-tight uppercase tracking-tight line-clamp-2 group-hover:text-[#F56476] transition-colors italic">
                  {project.name}
                </h3>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">
                    {project.views || "1.2k"} Explorers
                  </span>
                  {/* Small tag for new items */}
                  {index < 6 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F56476] animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small theme-consistent "See more" at bottom */}
        <div className="mt-20 text-center">
            <button className="px-12 py-4 bg-white border border-stone-200 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] text-[#102321] hover:bg-[#102321] hover:text-white hover:shadow-2xl transition-all active:scale-95">
                Continue the Odyssey
            </button>
        </div>
      </div>
    </section>
  );
};

export default Releases;