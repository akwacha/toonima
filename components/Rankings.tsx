'use client';
import { useState } from "react";
import { RiArrowUpSFill, RiArrowDownSFill, RiTrophyLine, RiFireLine, RiUserFill } from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "../data/constants";

const GENRES = ["All", "Action", "Romance", "Fantasy", "Comedy", "Drama", "Sci-fi", "Thriller"];
const TABS = ["ORIGINALS", "CANVAS"];
const FILTERS = ["All", "Male", "Female", "Top 100"];

const Rankings = () => {
  const [activeTab, setActiveTab] = useState("ORIGINALS");
  const [activeGenre, setActiveGenre] = useState("All");

  return (
    <div className="bg-[#edf7f6] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- HEADER TABS (Exact Webtoon Style) --- */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-stone-200">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-12 py-3 rounded-full text-xs font-black tracking-widest transition-all ${
                  activeTab === tab ? "bg-[#102321] text-white" : "text-stone-400 hover:text-[#102321]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* --- MAIN CONTENT (LEFT) --- */}
          <div className="flex-1">
            
            {/* TOP 3 PODIUM - WEBTOON STYLE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {PORTFOLIO_PROJECTS.slice(0, 3).map((project, index) => (
                <div key={project.id} className={`relative group cursor-pointer ${index === 0 ? 'md:scale-105 z-10' : ''}`}>
                  <div className={`rounded-3xl overflow-hidden border-2 transition-all ${index === 0 ? 'border-[#F56476] shadow-2xl shadow-[#F56476]/10' : 'border-white shadow-xl'}`}>
                    <div className="relative aspect-[3/4]">
                      <img src={project.image.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={project.name} />
                      <div className="absolute top-4 left-4 bg-[#102321] text-white w-10 h-10 rounded-full flex items-center justify-center font-black italic border-2 border-[#F56476]">
                        {index + 1}
                      </div>
                    </div>
                    <div className="p-5 bg-white">
                      <h3 className="font-black uppercase italic text-sm truncate text-[#102321]">{project.name}</h3>
                      <p className="text-[10px] text-stone-400 font-bold uppercase mt-1">{(project as any).author || "TOONIMA STUDIO"}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* THE LIST (4 - 10+) */}
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-stone-200">
              <div className="divide-y divide-stone-100">
                {PORTFOLIO_PROJECTS.slice(3, 12).map((project, index) => (
                  <div key={project.id} className="flex items-center p-4 hover:bg-[#edf7f6]/50 transition-colors group">
                    <div className="w-16 flex flex-col items-center justify-center">
                      <span className="text-xl font-black italic text-[#102321]">{index + 4}</span>
                      {index % 3 === 0 ? (
                        <RiArrowUpSFill className="text-green-500" />
                      ) : index % 3 === 1 ? (
                        <RiArrowDownSFill className="text-red-500" />
                      ) : (
                        <div className="h-4 flex items-center"><div className="w-2 h-0.5 bg-stone-300" /></div>
                      )}
                    </div>

                    <div className="w-16 h-20 shrink-0 overflow-hidden rounded-lg mr-6">
                      <img src={project.image.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                    </div>

                    <div className="flex-1">
                      <p className="text-[9px] font-black text-[#F56476] uppercase tracking-widest mb-1">
                        {(project as any).category || "Action"}
                      </p>
                      <h4 className="text-sm font-black uppercase italic text-[#102321] tracking-tight truncate max-w-[200px] md:max-w-xs">{project.name}</h4>
                      <p className="text-[10px] font-bold text-stone-400 uppercase">{(project as any).author || "Studio"}</p>
                    </div>

                    <div className="hidden md:flex flex-col items-end mr-8">
                       <div className="flex items-center gap-1 text-[#102321] font-black text-xs">
                          <RiFireLine className="text-[#F56476]" /> {(project as any).views || "1.2M"}
                       </div>
                       <p className="text-[8px] font-black text-stone-400 uppercase tracking-widest">Score</p>
                    </div>

                    <button className="bg-[#102321] text-white text-[9px] font-black px-5 py-2.5 rounded-full transition-all tracking-widest uppercase hover:bg-[#F56476]">
                      READ
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- SIDEBAR FILTERS (RIGHT) --- */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-8">
              
              {/* Demographics */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#F56476]">Demographics</h4>
                <div className="grid grid-cols-2 gap-2">
                  {FILTERS.map(f => (
                    <button key={f} className="py-2 text-[10px] font-black uppercase rounded-xl border border-stone-100 hover:bg-[#102321] hover:text-white transition-all">
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Genres */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#F56476]">Top Genres</h4>
                <div className="flex flex-col gap-1">
                  {GENRES.map(g => (
                    <button 
                      key={g} 
                      onClick={() => setActiveGenre(g)}
                      className={`text-left px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                        activeGenre === g ? "bg-[#102321] text-white shadow-lg shadow-[#102321]/20 translate-x-2" : "text-stone-400 hover:bg-[#edf7f6] hover:text-[#102321]"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rankings;