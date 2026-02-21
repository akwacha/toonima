'use client';
import { useState, useEffect } from "react";
import { 
  RiRocket2Line, RiMedalLine, RiFlashlightFill, 
  RiCheckDoubleLine, RiUserStarLine, RiTimerFlashLine,
  RiShieldStarLine, RiSearchLine, RiUserHeartLine,
  RiBook3Line, RiCloseLine, RiFireLine
} from "react-icons/ri";

const tiers = [
  {
    name: "Ink Assistant",
    price: "25",
    description: "Support the weekly grind and keep the high-quality ink flowing.",
    features: ["Early Access to 2 Chapters", "Sponsor Badge on Profile", "Digital Wallpaper Pack"],
    color: "border-stone-200 bg-white",
    button: "bg-[#102321] text-white",
    icon: <RiTimerFlashLine size={32} />
  },
  {
    name: "Lead Storyboarder",
    price: "75",
    description: "A major boost to production quality and studio resources.",
    features: ["Your Name in Comic Credits", "Behind-the-scenes Process Art", "Exclusive Discord Access", "All Assistant Rewards"],
    color: "border-[#F56476] bg-white shadow-sm",
    button: "bg-[#F56476] text-white",
    tag: "Most Popular",
    icon: <RiFlashlightFill size={32} />
  },
  {
    name: "Executive Producer",
    price: "250",
    description: "The ultimate backing. You are the force behind the vision.",
    features: ["Dedicated 'Special Thanks' Page", "Signed Physical Print (Vol 1)", "1-on-1 Q&A with the Artist", "All Previous Rewards"],
    color: "border-[#102321] bg-[#102321] text-white",
    button: "bg-white text-[#102321]",
    icon: <RiShieldStarLine size={32} />
  }
];

const featuredComics = [
  { title: "Shadow of Malawi", genre: "Action", fund: "82%" },
  { title: "Zion's Gate", genre: "Sci-Fi", fund: "45%" },
  { title: "Nyala's Run", genre: "Fantasy", fund: "12%" },
  { title: "The Last Ganyu", genre: "Mythology", fund: "67%" },
  { title: "Bunda Blues", genre: "Drama", fund: "90%" },
];

const SponsorPage = () => {
  const [sponsorType, setSponsorType] = useState('comic');
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("Shadow of Malawi");

  // --- 🏎️ HYDRATION FIX ---
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-32 pb-20 overflow-hidden selection:bg-[#F56476] selection:text-white">
      
      {/* CSS Animation for Infinite Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* --- 🎨 HERO SECTION --- */}
        <div className="relative z-10 mb-12">
          <div className="flex items-center gap-3 text-[#F56476] mb-4">
            <RiRocket2Line className="animate-bounce" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Propel the Narrative</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] mb-8">
            Fund the <br /> <span className="text-[#F56476]">Vision.</span>
          </h1>

          {/* --- 🔍 SEARCH & SELECTOR ENGINE --- */}
          <div className="max-w-2xl bg-white border border-stone-200 rounded-[2.5rem] p-2 shadow-sm flex flex-col md:flex-row gap-2 relative z-20">
            <div className="flex p-1 bg-stone-100 rounded-full">
              <button 
                onClick={() => setSponsorType('comic')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${sponsorType === 'comic' ? 'bg-white text-[#F56476] shadow-sm' : 'text-stone-500'}`}
              >
                <RiBook3Line size={16} /> Comic
              </button>
              <button 
                onClick={() => setSponsorType('artist')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${sponsorType === 'artist' ? 'bg-white text-[#F56476] shadow-sm' : 'text-stone-500'}`}
              >
                <RiUserHeartLine size={16} /> Artist
              </button>
            </div>
            
            <div className="flex-1 relative flex items-center px-4">
              <RiSearchLine className="text-stone-400 absolute left-6" size={20} />
              <input 
                type="text"
                placeholder={sponsorType === 'comic' ? "Search for a series..." : "Enter artist name..."}
                className="w-full bg-transparent pl-10 pr-4 py-3 text-sm font-bold focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-stone-400 hover:text-[#F56476]">
                  <RiCloseLine size={20} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* --- 🎠 INFINITE COMIC CAROUSEL --- */}
        <div className="relative mb-20 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <RiFireLine className="text-[#F56476]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Traction Leaders</span>
          </div>
          
          <div className="animate-marquee hover:cursor-grab active:cursor-grabbing">
            {/* 🏎️ Wrapped in mounted check to prevent server/client mismatch */}
            {mounted && [...featuredComics, ...featuredComics].map((comic, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedTarget(comic.title)}
                className="w-[280px] shrink-0 px-3 group"
              >
                <div className={`p-6 rounded-[2rem] border transition-all duration-300 ${selectedTarget === comic.title ? 'bg-white border-[#F56476] shadow-md' : 'bg-white/50 border-stone-200 hover:bg-white hover:border-stone-300 shadow-sm'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-16 bg-stone-200 rounded-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform" />
                    <span className="text-[9px] font-black px-2 py-1 bg-stone-100 rounded text-stone-500">{comic.fund} Funded</span>
                  </div>
                  <h4 className="font-black uppercase italic tracking-tighter text-sm truncate">{comic.title}</h4>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{comic.genre}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#edf7f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#edf7f6] to-transparent z-10 pointer-events-none" />
        </div>

        {/* --- 💎 SPONSOR TIERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative z-10">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[3rem] border-2 transition-all duration-500 hover:-translate-y-2 shadow-sm ${tier.color} flex flex-col`}
            >
              {tier.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F56476] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-md">
                  {tier.tag}
                </span>
              )}
              <div className="mb-8">
                <div className={`mb-6 ${tier.name === "Executive Producer" ? "text-[#F56476]" : "text-[#102321]"}`}>
                  {tier.icon}
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-black">$</span>
                  <span className="text-5xl font-black italic tracking-tighter">{tier.price}</span>
                  <span className="text-[10px] font-bold uppercase text-stone-400">/ Monthly</span>
                </div>
              </div>
              <p className={`text-xs font-bold mb-8 leading-relaxed ${tier.name === "Executive Producer" ? "text-stone-400" : "text-stone-500"}`}>
                {tier.description}
              </p>
              <ul className="space-y-4 mb-12 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[11px] font-black uppercase tracking-tight">
                    <RiCheckDoubleLine className="text-[#F56476] shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 ${tier.button}`}>
                Sponsor {selectedTarget}
              </button>
            </div>
          ))}
        </div>

        {/* --- 📊 SPONSOR IMPACT --- */}
        <div className="bg-white border border-stone-200 rounded-[4rem] p-12 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6">
                Impact <span className="text-[#F56476]">Telemetry</span>
              </h3>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-10">
                Target: Full-Color Hardcover Print Run
              </p>
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>82% to Grid Position</span>
                  <span>$12,000 Milestone</span>
                </div>
                <div className="h-3 w-full bg-[#edf7f6] rounded-full overflow-hidden p-[2px] border border-stone-100">
                  <div className="h-full bg-gradient-to-r from-[#102321] to-[#F56476] rounded-full transition-all duration-1000" style={{ width: '82%' }} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
               <div className="bg-[#edf7f6] p-8 rounded-[2.5rem] text-center border border-stone-100">
                  <RiUserStarLine size={24} className="mx-auto mb-4 text-[#F56476]" />
                  <p className="text-2xl font-black italic tracking-tighter">142</p>
                  <p className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Active Patrons</p>
               </div>
               <div className="bg-[#102321] p-8 rounded-[2.5rem] text-center text-white border border-white/5">
                  <RiMedalLine size={24} className="mx-auto mb-4 text-[#F56476]" />
                  <p className="text-2xl font-black italic tracking-tighter">8</p>
                  <p className="text-[9px] font-black uppercase text-stone-500 tracking-widest">Exec Sponsors</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage;