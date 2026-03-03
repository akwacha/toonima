'use client';
import { useState } from "react";
import { RiUserFollowLine, RiMailSendLine, RiSearch2Line, RiStarFill } from "react-icons/ri";

const CREATORS = [
  { id: 1, name: "Jin-Woo", role: "Lead Illustrator", specialty: "Shonen / Action", rate: "$$$", availability: "Available", image: "https://placehold.co/200x200" },
  { id: 2, name: "Elena V.", role: "Colorist", specialty: "Cyberpunk / Neon", rate: "$$", availability: "Busy", image: "https://placehold.co/200x200" },
  { id: 3, name: "Marcus Thorne", role: "Storyboard Artist", specialty: "Cinematic / Noir", rate: "$$$", availability: "Available", image: "https://placehold.co/200x200" },
  { id: 4, name: "Sana K.", role: "Writer", specialty: "Romance / Slice of Life", rate: "$", availability: "Available", image: "https://placehold.co/200x200" },
  { id: 5, name: "Alex Rivers", role: "Background Artist", specialty: "Fantasy Landscapes", rate: "$$", availability: "Available", image: "https://placehold.co/200x200" },
  { id: 6, name: "Mika", role: "Letterer", specialty: "Dynamic Typography", rate: "$", availability: "Available", image: "https://placehold.co/200x200" },
];

const CreatorBrowser = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Illustrator', 'Colorist', 'Writer', 'Storyboard'];

  return (
    <section className="bg-[#edf7f6] min-h-screen pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section (Scaled Down) --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 relative">
          <div className="relative z-10">
            <h4 className="text-[#F56476] font-black tracking-[0.3em] uppercase text-[10px] mb-3 flex items-center gap-3">
              <span className="w-12 h-[2px] bg-[#F56476]" />
              The Talent Network
            </h4>
            <h2 className="text-4xl lg:text-5xl font-black uppercase italic tracking-tighter text-[#102321] leading-none">
              Find your <span className="text-[#F56476]">Creative Partner</span>
            </h2>
            <p className="text-stone-400 font-bold mt-4 max-w-md uppercase text-[9px] tracking-[0.2em] leading-relaxed">
              Curated world-class talent ready for cinematic reality.
            </p>
          </div>

          {/* Search Bar (Refined) */}
          <div className="relative group w-full lg:w-80">
            <input 
              type="text" 
              placeholder="SEARCH CREATORS..." 
              className="bg-white border-2 border-[#102321] py-4 px-6 pr-12 rounded-xl text-[10px] font-black tracking-widest focus:outline-none focus:bg-[#102321] focus:text-white transition-all duration-500 w-full shadow-[4px_4px_0px_0px_rgba(16,35,33,0.05)] focus:shadow-none"
            />
            <RiSearch2Line className="absolute right-5 top-1/2 -translate-y-1/2 text-[#102321] group-focus-within:text-[#F56476] transition-colors" size={18} />
          </div>
        </div>

        {/* --- Filter Chips --- */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 border ${
                filter === cat 
                ? 'bg-[#102321] border-[#102321] text-white' 
                : 'bg-white border-stone-200 text-stone-400 hover:border-[#102321] hover:text-[#102321]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Creator Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CREATORS.map((creator) => (
            <div 
              key={creator.id}
              className="group relative bg-white rounded-[2.5rem] border border-stone-200 p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(16,35,33,0.08)] hover:-translate-y-2"
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#edf7f6] rounded-bl-[2.5rem] -mr-10 -mt-10 group-hover:bg-[#F56476]/10 transition-colors" />

              <div className="flex items-start justify-between mb-6 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F56476] rounded-[1.2rem] rotate-6 scale-90 opacity-0 group-hover:opacity-20 transition-all duration-500" />
                  <img src={creator.image} className="w-16 h-16 rounded-[1.2rem] object-cover relative z-10 border-2 border-white shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500" alt={creator.name} />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[3px] border-white z-20 ${creator.availability === 'Available' ? 'bg-[#4fb0a6]' : 'bg-amber-400'}`} />
                </div>
                
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-[#F56476] mb-1">
                    <RiStarFill size={8} />
                    <span className="text-[8px] font-black tracking-tighter">PREMIUM</span>
                  </div>
                  <span className="text-[11px] font-black text-[#102321] uppercase tracking-widest">{creator.rate}</span>
                </div>
              </div>

              <div className="space-y-1 mb-6">
                <h3 className="text-2xl font-black text-[#102321] uppercase italic tracking-tighter leading-none group-hover:text-[#F56476] transition-colors">
                  {creator.name}
                </h3>
                <p className="text-[9px] font-black text-[#4fb0a6] uppercase tracking-[0.1em]">{creator.role}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-stone-50 border border-stone-100 text-stone-400 text-[8px] font-black px-3 py-1.5 rounded-md uppercase tracking-widest">
                  {creator.specialty}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 relative z-10">
                <button className="flex items-center justify-center gap-2 py-3.5 bg-[#edf7f6] text-[#102321] rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#102321] hover:text-white transition-all duration-300">
                  <RiUserFollowLine size={14} /> Follow
                </button>
                <button className="flex items-center justify-center gap-2 py-3.5 bg-[#102321] text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#F56476] shadow-md active:scale-95 transition-all duration-300">
                  <RiMailSendLine size={14} /> Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorBrowser;