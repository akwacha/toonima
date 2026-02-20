"use client";

import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../constants";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Completed"];

const Portfolio = () => {
  const [selectedDay, setSelectedDay] = useState("Thu");

  // Lock to 18 projects to ensure exactly 3 rows of 6 on Desktop
  const displayProjects = PORTFOLIO_PROJECTS.slice(0, 18);

  return (
    <section className="max-w-7xl mx-auto bg-color border-b-2 border-charcoal-dark/20" id="portfolio">
      <div className="my-20 px-4">
        
        {/* --- Top Navigation --- */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-foreground uppercase tracking-tighter italic">Daily</h2>
          <button className="text-xs font-bold text-bublegum hover:text-azure transition-colors">View all</button>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                selectedDay === day 
                  ? "bg-azure text-charcoal-black shadow-lg" 
                  : "bg-charcoal-dark/10 text-charcoal hover:bg-charcoal-dark/20"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* --- 6x3 Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12">
          {displayProjects.map((project, index) => (
            <div key={project.id} className="group cursor-pointer relative">
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-3 transition-transform duration-300 group-hover:-translate-y-2 border border-charcoal-dark/10">
                <img
                  src={project.image.src}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
                
                {/* Ranking Numbers - Styled with Princeton Orange on hover */}
                {index < 5 && (
                  <div className="absolute -bottom-4 -left-1 text-7xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] italic z-10 opacity-90 group-hover:text-princeton transition-colors duration-300">
                    {index + 1}
                  </div>
                )}
              </div>

              {/* Metadata */}
              <div className="space-y-0.5">
                <p className="text-[10px] text-charcoal font-black uppercase tracking-widest">
                  {project.category || "General"}
                </p>
                <h3 className="text-[13px] font-bold text-foreground leading-snug line-clamp-2 group-hover:text-azure transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1">
                   <span className="text-[11px] font-black text-azure uppercase">
                     {project.views || "1.5M"}
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