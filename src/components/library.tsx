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
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* --- 🗂️ LIBRARY HEADER & TABS --- */}
        <header className="mb-10">
          <h1 className="text-3xl font-black uppercase tracking-tighter mb-6">Your Library</h1>
          
          <div className="flex bg-stone-900/50 p-1 rounded-xl w-full max-w-md border border-white/5">
            <button 
              onClick={() => setActiveTab("favorites")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === "favorites" ? "bg-[#00D564] text-black shadow-lg" : "text-stone-400 hover:text-white"
              }`}
            >
              <RiHeartFill size={18} /> Favorites
            </button>
            <button 
              onClick={() => setActiveTab("history")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${
                activeTab === "history" ? "bg-[#00D564] text-black shadow-lg" : "text-stone-400 hover:text-white"
              }`}
            >
              <RiHistoryLine size={18} /> History
            </button>
          </div>
        </header>

        {/* --- 📚 CONTENT GRID --- */}
        <div className="grid gap-6 pb-20">
          {(activeTab === "favorites" ? favorites : history).map((item, index) => (
            <div 
              key={item.id} 
              className="group relative flex gap-4 md:gap-6 bg-stone-900/20 hover:bg-stone-900/40 border border-white/5 p-3 rounded-2xl transition-all cursor-pointer"
            >
              {/* Thumbnail with Progress Bar Overlay */}
              <div className="relative w-24 md:w-32 aspect-[3/4] rounded-xl overflow-hidden shrink-0">
                <img src={item.image.src} alt={item.name} className="w-full h-full object-cover" />
                {activeTab === "history" && (
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-stone-800">
                    <div 
                      className="h-full bg-[#00D564]" 
                      style={{ width: `${Math.random() * 100}%` }} // Mock progress
                    />
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div className="flex-1 flex flex-col justify-center py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg md:text-xl line-clamp-1 group-hover:text-[#00D564] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-stone-500 text-xs md:text-sm font-medium mt-1">
                      {activeTab === "favorites" ? "Last updated: 2 days ago" : `Last read: Ch. ${24 - index}`}
                    </p>
                  </div>
                  <button className="text-stone-600 hover:text-white p-2">
                    <RiMore2Fill size={20} />
                  </button>
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <button className="flex items-center gap-1 px-4 py-2 bg-white/10 hover:bg-[#00D564] hover:text-black rounded-full text-xs font-black uppercase transition-all">
                    <RiPlayMiniFill size={16} /> Continue
                  </button>
                  {activeTab === "favorites" && (
                    <span className="text-[10px] text-[#00D564] font-bold px-2 py-1 bg-[#00D564]/10 rounded border border-[#00D564]/20 uppercase">
                      New Chapter
                    </span>
                  )}
                </div>
              </div>

              {/* Action for History: Delete */}
              {activeTab === "history" && (
                <button className="hidden md:flex absolute right-4 bottom-4 items-center gap-2 text-stone-700 hover:text-red-500 text-xs font-bold transition-colors">
                  <RiDeleteBin6Line /> Remove
                </button>
              )}
            </div>
          ))}

          {/* Empty State */}
          {(activeTab === "favorites" ? favorites : history).length === 0 && (
            <div className="text-center py-20">
              <p className="text-stone-500 italic">Nothing here yet. Start exploring!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryScreen;