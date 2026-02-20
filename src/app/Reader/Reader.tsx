'use client';
import { useState, useEffect, useRef } from "react";
import { 
  RiArrowLeftLine, RiArrowRightLine, RiListCheck, 
  RiSettings4Line, RiHeartFill, RiChat3Line, 
  RiBookmarkLine, RiBookmarkFill, RiCloseLine,
  RiSendPlane2Fill, RiFullscreenLine, RiFullscreenExitLine
} from "react-icons/ri";

// Importing your central data source
import { PORTFOLIO_PROJECTS } from "../../constants";

const ComicReader = () => {
  const [showControls, setShowControls] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const readerRef = useRef(null);

  // --- 🔒 RESTORED: ANTI-SCREENSHOT & SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalHeight) * 100);
      if (currentScroll > 80) setShowControls(false);
      else setShowControls(true);
    };

    // Disable Right Click (Anti-Save)
    const disableContextMenu = (e) => e.preventDefault();
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("contextmenu", disableContextMenu);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  // --- 🖥️ RESTORED: FULLSCREEN LOGIC ---
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      readerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div ref={readerRef} className="bg-[#0a0a0a] min-h-screen relative overflow-x-hidden select-none">
      
      {/* 🛡️ PRINT/SCREENSHOT SHIELD */}
      <style jsx global>{`
        @media print { body { display: none; } }
        .no-select { -webkit-touch-callout: none; -webkit-user-select: none; user-select: none; }
      `}</style>

      {/* --- 🏷️ HEADER --- */}
      <nav className={`fixed top-0 w-full z-50 bg-black/95 border-b border-white/10 transition-transform duration-500 ${showControls ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-[#00D564] transition-colors"><RiArrowLeftLine size={24} /></button>
            <div className="border-l border-white/20 pl-4">
              <h1 className="text-white font-black text-sm uppercase tracking-tighter">Toonima Reader</h1>
              <p className="text-[#00D564] text-[11px] font-bold uppercase">Chapter 42: Malawian Legends</p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 text-white">
            <button onClick={toggleFullscreen} className="hover:text-[#00D564] transition-colors">
              {isFullscreen ? <RiFullscreenExitLine size={22} /> : <RiFullscreenLine size={22} />}
            </button>
            <button onClick={() => setIsBookmarked(!isBookmarked)} className="transition-colors hover:text-[#00D564]">
              {isBookmarked ? <RiBookmarkFill className="text-[#00D564]" size={22} /> : <RiBookmarkLine size={22} />}
            </button>
            <RiListCheck size={22} className="cursor-pointer hover:text-[#00D564]" onClick={() => setShowChapterList(true)} />
          </div>
        </div>
        <div className="h-[3px] bg-stone-900 w-full">
          <div className="h-full bg-[#00D564] shadow-[0_0_8px_#00D564] transition-all duration-200" style={{ width: `${progress}%` }}></div>
        </div>
      </nav>

      {/* --- 📖 RESTORED: CHAPTER SIDEBAR --- */}
      <div className={`fixed inset-0 z-[70] transition-opacity duration-300 ${showChapterList ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowChapterList(false)} />
        <div className={`absolute right-0 top-0 h-full w-80 bg-stone-950 border-l border-white/10 p-6 transition-transform duration-500 ${showChapterList ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white font-bold text-xl uppercase tracking-widest">Chapters</h2>
            <button onClick={() => setShowChapterList(false)} className="text-white"><RiCloseLine size={28} /></button>
          </div>
          <div className="space-y-2 overflow-y-auto h-[calc(100vh-120px)]">
            {PORTFOLIO_PROJECTS.map((project, idx) => (
              <div key={project.id} className={`p-4 rounded-lg flex justify-between items-center cursor-pointer transition-all ${idx === 0 ? 'bg-[#00D564] text-black' : 'text-stone-400 hover:bg-white/5'}`}>
                <div>
                  <p className="text-[10px] font-black uppercase opacity-60">Episode {idx + 1}</p>
                  <p className="font-bold text-sm truncate w-40">{project.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 🖼️ CONTENT (Mapped with Anti-Screenshot Overlay) --- */}
      <main className="max-w-3xl mx-auto cursor-pointer no-select relative" onClick={() => setShowControls(!showControls)}>
        {/* Invisible Overlay to block "Save Image As" */}
        <div className="absolute inset-0 z-10 bg-transparent" />
        
        {PORTFOLIO_PROJECTS.map((project) => (
          <img 
            key={project.id}
            src={project.image.src} 
            className="w-full h-auto block pointer-events-none" 
            alt={project.name} 
          />
        ))}
        
        {/* Interaction Footer */}
        <div className="py-20 flex flex-col items-center bg-gradient-to-b from-transparent to-black">
           <div className="flex gap-8 mb-10 relative z-20">
              <button className="group flex flex-col items-center gap-2">
                <div className="p-4 rounded-full bg-stone-900 group-hover:bg-pink-500/20 transition-all">
                  <RiHeartFill className="text-stone-500 group-hover:text-pink-500" size={28} />
                </div>
                <span className="text-xs font-bold text-stone-500">12.4K</span>
              </button>
              <button onClick={(e) => { e.stopPropagation(); setShowComments(true); }} className="group flex flex-col items-center gap-2">
                <div className="p-4 rounded-full bg-stone-900 group-hover:bg-[#00D564]/20 transition-all">
                  <RiChat3Line className="text-stone-500 group-hover:text-[#00D564]" size={28} />
                </div>
                <span className="text-xs font-bold text-stone-500">842</span>
              </button>
           </div>
        </div>
      </main>

      {/* --- 💬 COMMENTS SECTION --- */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${showComments ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowComments(false)} />
        <div className={`absolute bottom-0 w-full max-w-2xl left-1/2 -translate-x-1/2 bg-white rounded-t-3xl transition-transform duration-500 h-[80vh] flex flex-col ${showComments ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="font-bold text-xl">Comments <span className="text-stone-400 font-medium ml-2">842</span></h3>
            <button onClick={() => setShowComments(false)} className="p-2 bg-stone-100 rounded-full"><RiCloseLine size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200" />
              <div>
                <p className="font-bold text-sm text-black">SuperFan_Max</p>
                <p className="text-sm text-stone-600">The 2026 Red Bull livery should look this good! Great art! 🏎️</p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t bg-stone-50 flex items-center gap-2">
              <input type="text" placeholder="Add a comment..." className="w-full py-3 px-4 rounded-xl border-none outline-none text-sm text-black" />
              <button className="text-[#00D564] p-2"><RiSendPlane2Fill size={20} /></button>
          </div>
        </div>
      </div>

      {/* --- 🛠️ BOTTOM NAV --- */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-500 ${showControls ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button className="p-3 text-white hover:text-[#00D564] transition-colors"><RiArrowLeftLine size={20} /></button>
        <button className="px-8 py-2.5 bg-[#00D564] text-black font-black text-[11px] rounded-full tracking-widest uppercase hover:scale-105 transition-all">Next Episode</button>
        <button className="p-3 text-white hover:text-[#00D564] transition-colors"><RiArrowRightLine size={20} /></button>
      </div>
    </div>
  );
};

export default ComicReader;