'use client';
import { useState } from "react";
import { 
  RiHeartFill, RiHistoryLine, RiDeleteBin6Line, 
  RiPlayMiniFill, RiMore2Fill 
} from "react-icons/ri";
import { PORTFOLIO_PROJECTS } from "../constants";

const LibraryScreen = () => {
  const [activeTab, setActiveTab] = useState("favorites");

  // Mock data splitting for demonstration
  const favorites = PORTFOLIO_PROJECTS.slice(0, 5);
  const history = PORTFOLIO_PROJECTS.slice(3, 8);

  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* --- 🗂️ LIBRARY HEADER & TABS --- */}
        <header className="mb-10">
          <h4 className="text-[#F56476] font-black tracking-[0.2em] uppercase text-[10px] mb-2">Personal Collection</h4>
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">Your Library</h1>
          
          <div className="flex bg-white p-1.5 rounded-2xl w-full max-w-md border border-stone-200 shadow-xl shadow-[#102321]/5">
            <button 
              onClick={() => setActiveTab("favorites")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === "favorites" ? "bg-[#102321] text-white shadow-lg scale-[1.02]" : "text-stone-400 hover:text-[#102321]"
              }`}
            >
              <RiHeartFill size={16} /> Favorites
            </button>
            <button 
              onClick={() => setActiveTab("history")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === "history" ? "bg-[#102321] text-white shadow-lg scale-[1.02]" : "text-stone-400 hover:text-[#102321]"
              }`}
            >
              <RiHistoryLine size={16} /> History
            </button>
          </div>
        </header>

        {/* --- 📚 CONTENT LIST --- */}
        <div className="grid gap-6 pb-20">
          {(activeTab === "favorites" ? favorites : history).map((item, index) => (
            <div 
              key={item.id} 
              className="group relative flex gap-4 md:gap-8 bg-white hover:bg-white border border-stone-200 p-4 rounded-[2rem] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-[#102321]/10 hover:-translate-y-1"
            >
              {/* Thumbnail with Progress Bar Overlay */}
              <div className="relative w-24 md:w-36 aspect-[3/4.2] rounded-2xl overflow-hidden shrink-0 shadow-lg border border-stone-100">
                <img src={item.image.src} alt={item.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                {activeTab === "history" && (
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-stone-100">
                    <div 
                      className="h-full bg-[#F56476]" 
                      style={{ width: `${60 + (index * 7)}%` }} // Mock progress
                    />
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="flex-1 flex flex-col justify-center py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black text-[#F56476] uppercase tracking-widest mb-1">
                      {item.category || "Series"}
                    </p>
                    <h3 className="font-black text-xl md:text-2xl italic uppercase tracking-tighter leading-none group-hover:text-[#F56476] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-stone-400 text-[11px] font-bold uppercase tracking-tight mt-3">
                      {activeTab === "favorites" ? "Last updated: 2 days ago" : `Last read: Ch. ${24 - index}`}
                    </p>
                  </div>
                  <button className="text-stone-300 hover:text-[#102321] p-2 transition-colors">
                    <RiMore2Fill size={24} />
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-[#102321] text-white hover:bg-[#F56476] rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
                    <RiPlayMiniFill size={18} /> Continue
                  </button>
                  {activeTab === "favorites" && (
                    <span className="text-[9px] text-[#F56476] font-black px-3 py-1 bg-[#F56476]/10 rounded-lg border border-[#F56476]/20 uppercase tracking-tighter animate-pulse">
                      New Chapter
                    </span>
                  )}
                </div>
              </div>

              {/* Action for History: Delete */}
              {activeTab === "history" && (
                <button className="hidden md:flex absolute right-6 bottom-6 items-center gap-2 text-stone-300 hover:text-[#F56476] text-[10px] font-black uppercase tracking-widest transition-colors">
                  <RiDeleteBin6Line size={16} /> Remove
                </button>
              )}
            </div>
          ))}

          {/* Empty State */}
          {(activeTab === "favorites" ? favorites : history).length === 0 && (
            <div className="text-center py-32 bg-white/50 rounded-[3rem] border border-dashed border-stone-300">
              <p className="text-stone-400 font-black uppercase tracking-[0.2em] italic">Your library is currently empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryScreen;