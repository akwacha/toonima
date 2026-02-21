'use client';
import { useState } from "react";
import { RiUserFollowLine, RiMailSendLine, RiFilter2Line, RiSearch2Line } from "react-icons/ri";

const CREATORS = [
  { id: 1, name: "Jin-Woo", role: "Lead Illustrator", specialty: "Shonen / Action", rate: "$$$", availability: "Available", image: "https://placehold.co/100x100" },
  { id: 2, name: "Elena V.", role: "Colorist", specialty: "Cyberpunk / Neon", rate: "$$", availability: "Busy", image: "https://placehold.co/100x100" },
  { id: 3, name: "Marcus Thorne", role: "Storyboard Artist", specialty: "Cinematic / Noir", rate: "$$$", availability: "Available", image: "https://placehold.co/100x100" },
  { id: 4, name: "Sana K.", role: "Writer", specialty: "Romance / Slice of Life", rate: "$", availability: "Available", image: "https://placehold.co/100x100" },
  { id: 5, name: "Alex Rivers", role: "Background Artist", specialty: "Fantasy Landscapes", rate: "$$", availability: "Available", image: "https://placehold.co/100x100" },
  { id: 6, name: "Mika", role: "Letterer", specialty: "Dynamic Typography", rate: "$", availability: "Available", image: "https://placehold.co/100x100" },
];

const CreatorBrowser = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Illustrator', 'Colorist', 'Writer', 'Storyboard'];

  return (
    <section className="bg-[#edf7f6] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-[#102321]">
              Find your <span className="text-[#F56476]">Creative Partner</span>
            </h2>
            <p className="text-[#8691ac] font-medium mt-2">Connect with world-class talent to bring your story to life.</p>
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search by skill or name..." 
              className="bg-white border border-stone-200 py-3 px-6 pr-12 rounded-full text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F56476]/20 focus:border-[#F56476] transition-all w-full md:w-80 shadow-sm"
            />
            <RiSearch2Line className="absolute right-5 top-3.5 text-stone-400 group-focus-within:text-[#F56476]" size={20} />
          </div>
        </div>

        {/* --- Filter Chips --- */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                ? 'bg-[#F56476] text-white shadow-lg scale-105' 
                : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Creator Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREATORS.map((creator) => (
            <div 
              key={creator.id}
              className="bg-white p-6 rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="relative">
                  <img src={creator.image} className="w-16 h-16 rounded-2xl object-cover border-2 border-[#edf7f6]" alt={creator.name} />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${creator.availability === 'Available' ? 'bg-[#4fb0a6]' : 'bg-amber-400'}`} />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest block">{creator.rate}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${creator.availability === 'Available' ? 'text-[#4fb0a6] bg-[#4fb0a6]/10' : 'text-amber-600 bg-amber-50'}`}>
                    {creator.availability}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-black text-[#102321] mb-1 group-hover:text-[#F56476] transition-colors uppercase italic tracking-tighter">
                {creator.name}
              </h3>
              <p className="text-xs font-bold text-[#4fb0a6] mb-4">{creator.role}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#edf7f6] text-[#8691ac] text-[9px] font-black px-3 py-1 rounded-full uppercase">
                  {creator.specialty}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 py-3 bg-[#edf7f6] text-[#102321] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-stone-200 transition-colors">
                  <RiUserFollowLine size={16} /> Follow
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-[#F56476] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 shadow-md active:scale-95 transition-all">
                  <RiMailSendLine size={16} /> Contact
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