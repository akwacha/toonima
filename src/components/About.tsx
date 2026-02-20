"use client";

import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../constants";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Completed"];

const Portfolio = () => {
  const [selectedDay, setSelectedDay] = useState("Thu");

  // Increased to 30 projects: 5 rows of 6 on Desktop
  const displayProjects = PORTFOLIO_PROJECTS.slice(0, 30);

  return (
    <section className="max-w-7xl mx-auto bg-[#edf7f6] border-b-2 border-stone-200" id="portfolio">
      <div className="my-20 px-4">
        
        {/* --- Top Navigation --- */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-[#102321] uppercase tracking-tighter italic">Daily</h2>
          <button className="text-[10px] font-black uppercase tracking-widest text-[#F56476] hover:text-[#102321] transition-colors">View all</button>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                selectedDay === day 
                  ? "bg-[#102321] text-white shadow-lg" 
                  : "bg-white text-stone-400 border border-stone-200 hover:bg-[#edf7f6] hover:text-[#102321]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* --- 6x5 Grid (30 Cards) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
          {displayProjects.map((project, index) => (
            <div key={project.id} className="group cursor-pointer relative">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-3 transition-transform duration-300 group-hover:-translate-y-2 border border-stone-200 shadow-sm bg-white">
                <img
                  src={project.image.src}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Ranking Numbers (Kept to Top 5 only) */}
                {index < 5 && (
                  <div className="absolute -bottom-4 -left-1 text-7xl font-black text-white drop-shadow-[0_4px_4px_rgba(16,35,33,0.6)] italic z-10 opacity-90 group-hover:text-[#F56476] transition-colors duration-300 pointer-events-none">
                    {index + 1}
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="space-y-0.5">
                <p className="text-[9px] text-[#F56476] font-black uppercase tracking-[0.15em]">
                  {project.category || "General"}
                </p>
                <h3 className="text-[13px] font-black text-[#102321] leading-tight uppercase tracking-tight line-clamp-2 group-hover:text-[#F56476] transition-colors italic">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1 pt-1">
                   <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">
                     {project.views || "1.5M"} Views
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;