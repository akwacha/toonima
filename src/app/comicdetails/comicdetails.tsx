'use client';
import { useState } from "react";
import { 
  RiPlayFill, RiAddLine, RiShareForwardLine, 
  RiStarFill, RiTimeLine, RiBookOpenLine 
} from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "../../../data/constants";

const ComicDetail = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  // We'll use the first project as our "Main" comic detail for now
  const comic = PORTFOLIO_PROJECTS[0];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      
      {/* --- 🎭 HERO SECTION --- */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        {/* Blurred Background Wrap */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-30"
          style={{ backgroundImage: `url(${comic.image.src})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-end">
            
            {/* Main Poster */}
            <div className="w-48 md:w-64 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
              <img src={comic.image.src} alt={comic.name} className="w-full h-full object-cover" />
            </div>

            {/* Metadata */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#00D564] text-black text-[10px] font-black uppercase rounded-full tracking-tighter">
                  Action / Fantasy
                </span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <RiStarFill size={14} />
                  <span className="text-sm font-bold">4.9</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                {comic.name}
              </h1>

              <p className="text-stone-400 text-sm md:text-base max-w-2xl line-clamp-3 leading-relaxed">
                In the heart of Lilongwe, a new power awakens. Follow the journey of an 
                unlikely hero in this Malawian epic. Every choice matters, and every 
                shadow hides a secret.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-2 px-8 py-4 bg-[#00D564] text-black font-black uppercase text-sm rounded-full hover:scale-105 transition-transform">
                  <RiPlayFill size={20} /> Read First Chapter
                </button>
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`flex items-center gap-2 px-8 py-4 border rounded-full font-black uppercase text-sm transition-all ${
                    isFollowing ? 'bg-white text-black border-white' : 'border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <RiAddLine size={20} /> {isFollowing ? 'Following' : 'Add to Library'}
                </button>
                <button className="p-4 bg-stone-900 rounded-full hover:bg-stone-800 transition-colors">
                  <RiShareForwardLine size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 📑 EPISODES LIST --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
          <div className="flex gap-8">
            <button className="text-white font-bold border-b-2 border-[#00D564] pb-6">Episodes (42)</button>
            <button className="text-stone-500 font-bold pb-6 hover:text-white transition-colors">Details & Info</button>
          </div>
          <div className="flex items-center gap-2 text-stone-500 text-sm">
            <RiTimeLine /> Updated Every Thursday
          </div>
        </div>

        {/* Episode Grid/List */}
        <div className="grid gap-4">
          {PORTFOLIO_PROJECTS.map((ep, index) => (
            <div 
              key={ep.id} 
              className="group flex items-center gap-4 p-3 rounded-xl hover:bg-stone-900/50 transition-colors border border-transparent hover:border-white/5 cursor-pointer"
            >
              {/* Ep Number */}
              <span className="w-8 text-stone-600 font-black text-xl italic group-hover:text-[#00D564] transition-colors">
                {index + 1}
              </span>
              
              {/* Ep Thumbnail */}
              <div className="w-32 md:w-40 aspect-video rounded-lg overflow-hidden shrink-0 border border-white/5">
                <img src={ep.image.src} alt={ep.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Ep Info */}
              <div className="flex-1">
                <h3 className="font-bold text-sm md:text-base group-hover:text-[#00D564] transition-colors">
                  Episode {index + 1}: {ep.name}
                </h3>
                <p className="text-xs text-stone-500 mt-1">Feb 20, 2026</p>
              </div>

              {/* Read Status Icon */}
              <div className="pr-4">
                <RiBookOpenLine className="text-stone-700 group-hover:text-white" size={20} />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ComicDetail;