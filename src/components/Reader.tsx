'use client';
import { useState, useEffect } from "react";
import { 
  RiArrowLeftLine, RiArrowRightLine, RiListCheck, 
  RiSettings4Line, RiHeartFill, RiChat3Line, 
  RiBookmarkLine, RiBookmarkFill, RiCloseLine,
  RiSendPlane2Fill
} from "react-icons/ri";

const ComicReader = () => {
  const [showControls, setShowControls] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalHeight) * 100);
      if (currentScroll > 80) setShowControls(false);
      else setShowControls(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen relative overflow-x-hidden">
      
      {/* --- 🏷️ DYNAMIC HEADER (Title & Chapter) --- */}
      <nav className={`fixed top-0 w-full z-50 bg-black/95 border-b border-white/10 transition-transform duration-500 ${showControls ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-[#00D564] transition-colors"><RiArrowLeftLine size={24} /></button>
            <div className="border-l border-white/20 pl-4">
              <h1 className="text-white font-black text-sm uppercase tracking-tighter">Midnight City</h1>
              <p className="text-[#00D564] text-[11px] font-bold uppercase">Chapter 42: The Awakening</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 text-white">
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="transition-colors hover:text-[#00D564]"
            >
              {isBookmarked ? <RiBookmarkFill className="text-[#00D564]" size={22} /> : <RiBookmarkLine size={22} />}
            </button>
            <RiSettings4Line size={22} className="cursor-pointer hover:text-[#00D564]" />
            <RiListCheck size={22} className="cursor-pointer hover:text-[#00D564]" />
          </div>
        </div>
        <div className="h-[3px] bg-stone-900 w-full">
          <div className="h-full bg-[#00D564] shadow-[0_0_8px_#00D564] transition-all duration-200" style={{ width: `${progress}%` }}></div>
        </div>
      </nav>

      {/* --- 🖼️ CONTENT --- */}
      <main className="max-w-3xl mx-auto cursor-pointer" onClick={() => setShowControls(!showControls)}>
        <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000" className="w-full" alt="p1" />
        <img src="https://images.unsplash.com/photo-1578632289114-281cbd646256?q=80&w=1000" className="w-full" alt="p2" />
        
        {/* Interaction Footer */}
        <div className="py-20 flex flex-col items-center bg-gradient-to-b from-transparent to-black">
           <div className="flex gap-8 mb-10">
              <button className="group flex flex-col items-center gap-2">
                <div className="p-4 rounded-full bg-stone-900 group-hover:bg-pink-500/20 transition-all">
                  <RiHeartFill className="text-stone-500 group-hover:text-pink-500" size={28} />
                </div>
                <span className="text-xs font-bold text-stone-500">12.4K</span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowComments(true); }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="p-4 rounded-full bg-stone-900 group-hover:bg-[#00D564]/20 transition-all">
                  <RiChat3Line className="text-stone-500 group-hover:text-[#00D564]" size={28} />
                </div>
                <span className="text-xs font-bold text-stone-500">842</span>
              </button>
           </div>
        </div>
      </main>

      {/* --- 💬 COMMENT SECTION (Slide-up Panel) --- */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${showComments ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowComments(false)} />
        <div className={`absolute bottom-0 w-full max-w-2xl left-1/2 -translate-x-1/2 bg-white rounded-t-3xl transition-transform duration-500 h-[80vh] flex flex-col ${showComments ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="font-bold text-xl">Comments <span className="text-stone-400 font-medium ml-2">842</span></h3>
            <button onClick={() => setShowComments(false)} className="p-2 bg-stone-100 rounded-full"><RiCloseLine size={20} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Mock Comment */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">SuperFan_Max</span>
                  <span className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-500 font-bold uppercase">Top Reader</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">The art in this chapter is absolutely insane! That cliffhanger though... I can't wait for next week! 🟢🟢</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t bg-stone-50 rounded-t-xl">
            <div className="relative flex items-center">
              <input type="text" placeholder="Add a comment..." className="w-full py-3 pl-4 pr-12 rounded-xl border-none bg-white shadow-sm focus:ring-2 focus:ring-[#00D564] outline-none text-sm" />
              <button className="absolute right-3 text-[#00D564]"><RiSendPlane2Fill size={20} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* --- 🛠️ BOTTOM NAV --- */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-500 ${showControls ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button className="p-3 text-white hover:text-[#00D564] transition-colors"><RiArrowLeftLine size={20} /></button>
        <button className="px-8 py-2.5 bg-[#00D564] text-black font-black text-[11px] rounded-full tracking-widest uppercase hover:scale-105 transition-transform">Next Episode</button>
        <button className="p-3 text-white hover:text-[#00D564] transition-colors"><RiArrowRightLine size={20} /></button>
      </div>

    </div>
  );
};

export default ComicReader;