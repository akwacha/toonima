'use client';
import { useState } from "react";
import { RiFlashlightLine, RiFireLine, RiTimeLine, RiStarLine } from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "@/data/constants";

const CATEGORIES = ["All", "Action", "Sci-Fi", "Fantasy", "Drama", "Horror"];

const OriginalsPage = () => {
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredProjects = filter === "All" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => (p as any).category === filter);

  return (
    <div className="bg-[#edf7f6] min-h-screen pt-24 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#102321] text-white p-8 md:p-16">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F56476] opacity-10 skew-x-12 translate-x-20" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 text-[#F56476] mb-6">
              <RiFlashlightLine className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Toonima Exclusives</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              The <span className="text-[#F56476]">Original</span> <br /> Vanguard.
            </h1>
            <p className="text-stone-400 text-sm font-medium leading-relaxed mb-10 max-w-md">
              Hand-picked narratives, world-class artistry, and stories you won't find anywhere else in the paddock.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#102321] px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#F56476] hover:text-white transition-all shadow-lg active:scale-95">
                Start Reading
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER BAR --- */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-stone-200 pb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-[#F56476] text-white shadow-md shadow-[#F56476]/20" 
                    : "bg-white text-stone-500 hover:text-[#102321] border border-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-stone-400">
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#102321] transition-colors">
              <RiFireLine size={16} /> Popular
            </span>
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#102321] transition-colors">
              <RiTimeLine size={16} /> Newest
            </span>
          </div>
        </div>
      </section>

      {/* --- ORIGINALS GRID --- */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Card */}
              <div className="relative aspect-[3/4.5] overflow-hidden rounded-[2rem] mb-4 shadow-xl shadow-[#102321]/5 border border-stone-200 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-[#F56476]/20">
                <img
                  src={project.image.src}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                   <div className="bg-[#102321] text-white p-2 rounded-xl backdrop-blur-md">
                      <RiStarLine size={14} className="text-[#F56476]" />
                   </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#102321] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/60 text-[8px] font-bold uppercase tracking-[0.3em] mb-1">Status: Weekly</p>
                      <p className="text-white text-[10px] font-black uppercase tracking-widest">Enter Series</p>
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2">
                <p className="text-[9px] font-black text-[#F56476] uppercase tracking-[0.2em] mb-1">
                  {(project as any).category || "Original"}
                </p>
                <h3 className="text-base font-black text-[#102321] leading-tight uppercase tracking-tighter italic group-hover:text-[#F56476] transition-colors line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-[10px] font-bold text-stone-400 mt-2 uppercase tracking-widest">
                  {(project as any).views || "2.4M"} READS
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default OriginalsPage;