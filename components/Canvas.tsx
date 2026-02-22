'use client';
import { useState } from "react";
import { RiRocketLine, RiUserHeartLine, RiGlobalLine, RiTrophyLine } from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "@/data/constants";
import Link from "next/link";

const CanvasPage = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  // Mocking extra data since Canvas is high-volume
  const canvasProjects = [...PORTFOLIO_PROJECTS, ...PORTFOLIO_PROJECTS]; 

  return (
    <div className="bg-[#edf7f6] min-h-screen pt-24 pb-20">
      
      {/* --- CANVAS BANNER --- */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-[#102321] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border-b-4 border-[#F56476] overflow-hidden relative">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
              Toonima <span className="text-[#F56476]">Canvas</span>
            </h1>
            <p className="text-stone-400 text-xs font-black uppercase tracking-[0.3em] mb-8">
              The Independent Circuit • Discover New Talent
            </p>
            <Link href="/publish" className="bg-[#F56476] text-white px-8 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-transform inline-block">
              Publish Your Story
            </Link>
          </div>
          
          {/* Decorative Racing Stripe */}
          <div className="hidden md:block absolute right-0 top-0 h-full w-32 bg-[#F56476] opacity-20 skew-x-[-20deg] translate-x-10" />
        </div>
      </section>

      {/* --- TRENDING "PIT STOP" (Horizontal Scroll) --- */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-2 mb-6 text-[#102321]">
          <RiRocketLine className="text-[#F56476]" size={20} />
          <h2 className="text-xl font-black uppercase italic tracking-tighter">Rising Stars</h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar">
          {PORTFOLIO_PROJECTS.slice(0, 8).map((project, i) => (
            <div key={i} className="min-w-[160px] md:min-w-[200px] group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3 border border-stone-200">
                <img src={project.image.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                <div className="absolute bottom-2 left-2 bg-[#F56476] text-white text-[8px] px-2 py-1 rounded font-black uppercase">
                  #{i + 1} Trending
                </div>
              </div>
              <h3 className="text-[11px] font-black uppercase truncate text-[#102321]">{project.name}</h3>
              <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">{(project as any).category || "Action"}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FEED TABS --- */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8 border-b border-stone-200 mb-10">
          {["Popular", "New", "Staff Picks"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative ${
                activeTab === tab ? "text-[#102321]" : "text-stone-400 hover:text-stone-600"
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F56476]" />}
            </button>
          ))}
        </div>

        {/* --- DENSE CANVAS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10">
          {canvasProjects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 shadow-sm group-hover:shadow-xl transition-all duration-300">
                <img src={project.image.src} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                   <div className="flex items-center gap-1 text-white text-[9px] font-black uppercase">
                      <RiUserHeartLine className="text-[#F56476]" /> 12.4K
                   </div>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-black text-[#102321] uppercase tracking-tight line-clamp-1 group-hover:text-[#F56476]">
                  {project.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest">
                    {(project as any).category || "Drama"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CanvasPage;