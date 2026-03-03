"use client";

import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../../data/constants";

// Adventure-themed timeframes to match the Releases style
const PHASES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Archives"];

const About = () => {
  const [selectedPhase, setSelectedPhase] = useState("Thu");

  // Keeping 12 items for a clean 2-row layout on desktop
  const displayProjects = PORTFOLIO_PROJECTS.slice(0, 12);

  return (
    <section className="bg-[#edf7f6] py-24 border-b border-stone-200" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Header & Navigation --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-1">
            <h4 className="text-[#F56476] font-black tracking-[0.2em] uppercase text-[10px]">
              The Daily Scroll
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-[#102321] uppercase tracking-tighter italic">
              Recent Odysseys
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-1.5 bg-white/50 p-1.5 rounded-2xl border border-stone-200 shadow-sm">
            {PHASES.map((phase) => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 ${
                  selectedPhase === phase 
                    ? "bg-[#102321] text-white shadow-lg shadow-[#102321]/20 scale-105" 
                    : "text-stone-400 hover:text-[#102321] hover:bg-white"
                }`}
              >
                {phase}
              </button>
            ))}
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-[#F56476] text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all">
            Full Chronicle <span className="text-lg">→</span>
          </button>
        </div>

        {/* --- Grid Layout (Matching Releases Card Styling) --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-14">
          {displayProjects.map((project: any, index) => (
            <div key={project.id || index} className="group cursor-pointer relative">
              
              {/* Image Container with Release-style shadows and curves */}
              <div className="relative aspect-[3/4.2] overflow-hidden rounded-[1.5rem] mb-4 transition-all duration-500 group-hover:-translate-y-3 border border-stone-200/50 shadow-sm bg-white group-hover:shadow-2xl group-hover:shadow-[#102321]/10">
                <img
                  src={project.image?.src || project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3 bg-[#102321] text-[8px] text-white px-2.5 py-1 rounded-lg font-black uppercase tracking-widest shadow-lg border border-white/10">
                  {selectedPhase === "Archives" ? "Legacy" : "Active"}
                </div>

                {/* Adventure Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102321]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                   <span className="text-white text-[9px] font-black uppercase tracking-widest border-b-2 border-[#F56476] pb-1">
                     Enter Story
                   </span>
                </div>
              </div>

              {/* Metadata aligned with Releases style */}
              <div className="px-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="h-[1px] w-3 bg-[#F56476]" />
                  <p className="text-[9px] text-[#F56476] font-black uppercase tracking-[0.15em]">
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
                  {/* Pulse dot for active releases */}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F56476] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
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