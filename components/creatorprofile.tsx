'use client';
import { useState } from "react";
import { 
  RiCheckDoubleFill, RiUserFollowFill, RiLineChartLine, 
  RiFlashlightFill, RiTwitterXFill, RiInstagramLine,
  RiGlobalLine, RiVerifiedBadgeFill, RiMailSendLine
} from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "../data/constants";

const CreatorProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  // Stats for the Creator "Dashboard" look
  const stats = [
    { label: "Total Reads", value: "2.4M", icon: <RiLineChartLine size={24} /> },
    { label: "Subscribers", value: "85K", icon: <RiUserFollowFill size={24} /> },
    { label: "Series", value: "4", icon: <RiFlashlightFill size={24} /> },
  ];

  return (
    <div className="bg-[#EDF7F6] min-h-screen text-black selection:bg-[#F56476] selection:text-black">
      
      {/* --- 🖼️ CREATOR BANNER --- */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <img 
          src={PORTFOLIO_PROJECTS[4].image.src} 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 scale-110" 
          alt="Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F56476]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 pb-32">
        
        {/* --- 👤 CREATOR HEADER --- */}
        <div className="flex flex-col md:flex-row gap-10 items-start md:items-end mb-16">
          {/* Profile Picture with Redline Shadow */}
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-[2.5rem] border-4 border-[#0a0a0a] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-stone-900 shrink-0 relative group">
              <img src={PORTFOLIO_PROJECTS[0].image.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Creator" />
              <div className="absolute inset-0 border-2 border-white/5 rounded-[2.5rem] pointer-events-none" />
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">StoneInk Studios</h1>
                <RiVerifiedBadgeFill className="text-[#F56476] drop-shadow-[0_0_10px_#F56476]" size={32} />
              </div>
              <p className="text-[#F56476] text-xs font-black uppercase tracking-[0.4em] opacity-80">Verified Toonima Alpha Creator</p>
            </div>
            
            <p className="text-stone-400 max-w-2xl text-base md:text-lg leading-relaxed font-medium">
              Malawian Digital Artist & Storyteller. Pushing the boundaries of African 
              animation and comics. Creator of <span className="text-[#F56476] italic">'Midnight City'</span> and <span className="text-[#F56476] italic">'Kwachas Quest'</span>. 🇲🇼
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] italic transition-all duration-300 shadow-[0_10px_20px_rgba(245,100,118,0.3)] ${
                  isFollowing ? 'bg-white text-black scale-95' : 'bg-[#F56476] text-black hover:scale-105 active:scale-95'
                }`}
              >
                {isFollowing ? 'Signals On' : 'Subscribe'}
              </button>
              
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] italic flex items-center gap-3 hover:bg-white/10 hover:border-[#F56476]/50 transition-all">
                <RiMailSendLine size={18} className="text-[#F56476]" /> Contact Paddock
              </button>

              <div className="flex items-center gap-6 ml-4">
                <RiInstagramLine size={22} className="text-stone-600 hover:text-[#F56476] transition-colors cursor-pointer" />
                <RiTwitterXFill size={22} className="text-stone-600 hover:text-[#F56476] transition-colors cursor-pointer" />
                <RiGlobalLine size={22} className="text-stone-600 hover:text-[#F56476] transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* --- 📊 CREATOR STATS: THE TELEMETRY --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] flex items-center justify-between group hover:border-[#F56476]/30 transition-all hover:bg-white/[0.04]">
              <div>
                <p className="text-stone-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                <p className="text-4xl font-black tracking-tighter italic">{stat.value}</p>
              </div>
              <div className="text-[#F56476] drop-shadow-[0_0_8px_rgba(245,100,118,0.4)] group-hover:scale-110 transition-transform">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* --- 📚 PUBLISHED SERIES --- */}
        <div className="space-y-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">Top Tier Series</h2>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#F56476] animate-pulse" />
                <p className="text-stone-500 text-[10px] font-black uppercase tracking-widest">4 Active Projects</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PORTFOLIO_PROJECTS.slice(0, 4).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-5 border border-white/5 shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:border-[#F56476]/40">
                  <img src={project.image.src} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                     <button className="w-full py-3 bg-[#F56476] text-black font-black text-[10px] uppercase tracking-widest rounded-xl italic">
                        Open Transmission
                     </button>
                  </div>
                </div>
                
                <h3 className="font-black text-lg uppercase italic tracking-tight group-hover:text-[#F56476] transition-colors">{project.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                   <RiCheckDoubleFill className="text-[#F56476]" size={16} />
                   <span className="text-[10px] text-stone-500 font-black uppercase tracking-[0.2em]">Unit Complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;