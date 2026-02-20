'use client';
import { useState } from "react";
import { 
  RiCheckDoubleFill, RiUserFollowFill, RiLineChartLine, 
  RiFlashlightFill, RiTwitterXFill, RiInstagramLine,
  RiGlobalLine, RiVerifiedBadgeFill, RiMailSendLine
} from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "../../constants";

const CreatorProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  // Stats for the Creator "Dashboard" look
  const stats = [
    { label: "Total Reads", value: "2.4M", icon: <RiLineChartLine /> },
    { label: "Subscribers", value: "85K", icon: <RiUserFollowFill /> },
    { label: "Series", value: "4", icon: <RiFlashlightFill /> },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      
      {/* --- 🖼️ CREATOR BANNER --- */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img 
          src={PORTFOLIO_PROJECTS[4].image.src} 
          className="w-full h-full object-cover opacity-40 blur-[2px]" 
          alt="Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10 pb-20">
        
        {/* --- 👤 CREATOR HEADER --- */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end mb-12">
          {/* Large Profile Picture */}
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-3xl border-4 border-[#0a0a0a] overflow-hidden shadow-2xl bg-stone-900 shrink-0">
             <img src={PORTFOLIO_PROJECTS[0].image.src} className="w-full h-full object-cover" alt="Creator" />
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">StoneInk Studios</h1>
              <RiVerifiedBadgeFill className="text-[#00D564]" size={28} />
            </div>
            
            <p className="text-stone-400 max-w-2xl text-sm md:text-base leading-relaxed">
              Malawian Digital Artist & Storyteller. Pushing the boundaries of African 
              animation and comics. Creator of 'Midnight City' and 'Kwachas Quest'. 🇲🇼
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                  isFollowing ? 'bg-white text-black' : 'bg-[#00D564] text-black hover:scale-105'
                }`}
              >
                {isFollowing ? 'Subscribed' : 'Subscribe'}
              </button>
              <button className="px-6 py-3 bg-stone-900 border border-white/10 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-stone-800 transition-all">
                <RiMailSendLine size={16} /> Contact
              </button>
              <div className="flex items-center gap-4 ml-2">
                <RiInstagramLine size={20} className="text-stone-500 hover:text-white cursor-pointer" />
                <RiTwitterXFill size={20} className="text-stone-500 hover:text-white cursor-pointer" />
                <RiGlobalLine size={20} className="text-stone-500 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* --- 📊 CREATOR STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-stone-900/30 border border-white/5 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-stone-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                <p className="text-2xl font-black mt-1">{stat.value}</p>
              </div>
              <div className="text-[#00D564] opacity-50">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* --- 📚 PUBLISHED SERIES --- */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-xl font-black uppercase tracking-tighter">Published Series</h2>
            <p className="text-[#00D564] text-xs font-bold uppercase">4 Projects</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PORTFOLIO_PROJECTS.slice(0, 4).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/5 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                  <img src={project.image.src} alt={project.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                     <span className="text-[10px] font-black uppercase text-[#00D564] bg-black/50 px-2 py-1 rounded">Read Now</span>
                  </div>
                </div>
                <h3 className="font-bold text-sm md:text-base group-hover:text-[#00D564] transition-colors">{project.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                   <RiCheckDoubleFill className="text-[#00D564]" size={14} />
                   <span className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Completed</span>
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