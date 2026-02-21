"use client";

import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../../data/constants";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "All"];

const About = () => {
  const [selectedDay, setSelectedDay] = useState("Thu");

  // Keep exactly 12 items for that perfect 2-row desktop grid (6 cols)
  const displayProjects = PORTFOLIO_PROJECTS.slice(0, 12);

  return (
    <section className="bg-[#edf7f6] py-24 border-b border-stone-200" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Header & Navigation --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h4 className="text-[#F56476] font-black tracking-[0.2em] uppercase text-[10px] mb-2">
              Daily Schedule
            </h4>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic text-[#102321]">
              Recent Works
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-1.5 bg-white/50 p-1.5 rounded-2xl border border-stone-200 shadow-sm">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                  selectedDay === day 
                    ? "bg-[#102321] text-white shadow-lg shadow-[#102321]/20 scale-105" 
                    : "text-stone-400 hover:text-[#102321] hover:bg-white"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          
          <button className="hidden md:block text-[#F56476] text-[10px] font-black uppercase tracking-widest hover:opacity-70 transition-opacity">
            View full calendar
          </button>
        </div>

        {/* --- Webtoon Style Grid: Locked to 2 Rows on Desktop --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-10">
          {displayProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              
              {/* Vertical Image Container */}
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-2xl mb-4 shadow-xl shadow-[#102321]/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-[#F56476]/20">
                <img
                  src={project.image.src}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3 bg-[#102321] text-[8px] text-white px-2 py-1 rounded-lg font-black uppercase tracking-widest shadow-lg">
                  {selectedDay === "All" ? "UP" : "NEW"}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102321]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                   <span className="text-white text-[9px] font-black uppercase tracking-widest border-b border-[#F56476]">Read Now</span>
                </div>
              </div>

              {/* Series Info */}
              <div className="px-1 space-y-1">
                <p className="text-[9px] font-black text-[#F56476] uppercase tracking-widest">
                  {project.category || "Original"}
                </p>
                <h3 className="text-sm font-black text-[#102321] leading-tight line-clamp-2 transition-colors group-hover:text-[#F56476]">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-stone-300" />
                    <p className="text-[10px] font-bold text-stone-400">
                      {project.views || "1.2M"} views
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;