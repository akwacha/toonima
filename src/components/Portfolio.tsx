"use client";

import { useState } from "react";
import { PORTFOLIO_PROJECTS } from "../constants";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "All"];

const Portfolio = () => {
  const [selectedDay, setSelectedDay] = useState("Thu");

  // To keep exactly 2 rows on Desktop (6 cols), we need 12 items.
  // To keep 2 rows on Mobile (2 cols), we would only show 4 items.
  // We will use 12 items and adjust grid columns to maintain the 2-row feel.
  const displayProjects = PORTFOLIO_PROJECTS.slice(0, 12);

  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
      <div className="my-20 px-4">
        
        {/* --- Header & Tabs --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-12 mb-10 gap-6">
          <h2 className="text-3xl font-bold tracking-tight">Daily Projects</h2>
          
          <div className="flex flex-wrap gap-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  selectedDay === day 
                    ? "bg-black text-white shadow-md" 
                    : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          
          <button className="hidden md:block text-stone-400 text-sm hover:underline">
            View all
          </button>
        </div>

        {/* --- Webtoon Style Grid: Locked to 2 Rows --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
          {displayProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Vertical Image Aspect Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <img
                  src={project.image.src}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-[9px] text-white px-1.5 py-0.5 rounded font-bold uppercase">
                  Project
                </div>
              </div>

              {/* Info below card */}
              <div className="px-1">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-tight">
                  {project.category || "Renovation"}
                </p>
                <h3 className="text-sm font-bold text-stone-900 leading-tight line-clamp-2 group-hover:text-amber-600">
                  {project.name}
                </h3>
                <p className="text-xs font-bold text-emerald-600 mt-1">
                  {project.views || "1.2M"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;