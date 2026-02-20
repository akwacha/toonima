'use client';
import { useState, useEffect, useRef } from "react";
import { 
  RiArrowLeftLine, RiArrowRightLine, RiListCheck, 
  RiSettings4Line, RiHeartFill, RiChat3Line, 
  RiBookmarkLine, RiBookmarkFill, RiCloseLine,
  RiSendPlane2Fill, RiFullscreenLine, RiFullscreenExitLine,
  RiShieldFill, RiFlashlightFill 
} from "react-icons/ri";

import { PORTFOLIO_PROJECTS } from "../constants";

const ComicReader = () => {
  const [showControls, setShowControls] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const readerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalHeight) * 100);
      if (currentScroll > 120) setShowControls(false);
      else setShowControls(true);
    };

    const disableContextMenu = (e) => e.preventDefault();
    const disableDevTools = (e) => {
      if (e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'i')) e.preventDefault();
    };
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableDevTools);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableDevTools);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      readerRef.current.requestFullscreen().catch(err => {
        console.error(`Error: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (!mounted) return <div className="bg-[#0a0a0a] min-h-screen" />;

  return (
    <div ref={readerRef} className="bg-[#0a0a0a] min-h-screen relative overflow-x-hidden select-none no-select">
      
      <style jsx global>{`
        @media print { body { display: none !important; } }
        .no-select { -webkit-touch-callout: none; -webkit-user-select: none; user-select: none; }
        .comic-shadow { filter: drop-shadow(0 0 20px rgba(245, 100, 118, 0.1)); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #F56476; border-radius: 10px; }
      `}</style>

      {/* --- 🏷️ HEADER --- */}
      <nav className={`fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/5 transition-all duration-700 ease-in-out ${showControls ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="text-white hover:text-[#F56476] transition-all active:scale-90"><RiArrowLeftLine size={26} /></button>
            <div className="border-l border-white/10 pl-6">
              <div className="flex items-center gap-2">
                 <RiShieldFill className="text-[#F56476] animate-pulse" />
                              <p className="text-stone-400 text-[14px] font-black italic uppercase leading-tight tracking-tighter">
                <span className="text-[#F56476]">CH. 42:</span> Malawian Legends
              </p>
              </div>

            </div>
          </div>
          
          <div className="flex items-center gap-6 text-white/80">
            <div className="hidden md:flex items-center gap-2 mr-4 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                <RiFlashlightFill className="text-[#F56476]" size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Redline Mode</span>
            </div>
            <button onClick={toggleFullscreen} className="hover:text-[#F56476] transition-transform active:scale-90">
              {isFullscreen ? <RiFullscreenExitLine size={24} /> : <RiFullscreenLine size={24} />}
            </button>
            <button onClick={() => setIsBookmarked(!isBookmarked)} className="transition-all hover:scale-110">
              {isBookmarked ? <RiBookmarkFill className="text-[#F56476]" size={24} /> : <RiBookmarkLine size={24} />}
            </button>
            <button onClick={() => setShowChapterList(true)} className="hover:text-[#F56476] transition-all">
                <RiListCheck size={26} />
            </button>
          </div>
        </div>
        
        <div className="h-[2px] bg-white/5 w-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#F56476] to-[#ff8e9b] shadow-[0_0_15px_#F56476] transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </nav>

      {/* --- 📖 CHAPTER SIDEBAR --- */}
      <div className={`fixed inset-0 z-[70] transition-all duration-500 ${showChapterList ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${showChapterList ? 'opacity-100' : 'opacity-0'}`} onClick={() => setShowChapterList(false)} />
        <div className={`absolute right-0 top-0 h-full w-[340px] bg-[#0a0a0a] border-l border-white/10 p-8 transition-transform duration-700 ${showChapterList ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            <div>
                <h2 className="text-white font-black text-2xl uppercase italic tracking-tighter">Paddock</h2>
                <p className="text-[#F56476] text-[10px] font-black uppercase tracking-[0.2em]">Select Episode</p>
            </div>
            <button onClick={() => setShowChapterList(false)} className="text-white/40 hover:text-[#F56476] transition-colors"><RiCloseLine size={32} /></button>
          </div>
          
          <div className="space-y-3 overflow-y-auto h-[calc(100vh-160px)] pr-2">
            {PORTFOLIO_PROJECTS.map((project, idx) => (
              <div 
                key={project.id} 
                className={`group p-5 rounded-2xl flex justify-between items-center cursor-pointer transition-all border ${idx === 0 ? 'bg-[#F56476] border-[#F56476] shadow-[0_10px_20px_rgba(245,100,118,0.3)]' : 'bg-white/5 border-white/5 hover:border-[#F56476]/50'}`}
              >
                <div className="flex gap-4 items-center">
                    <span className={`text-xs font-black italic ${idx === 0 ? 'text-black/40' : 'text-stone-600'}`}>{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                        <p className={`text-[11px] font-black uppercase tracking-tight ${idx === 0 ? 'text-black/60' : 'text-stone-500'}`}>Unit {idx + 400}</p>
                        <p className={`font-black text-sm uppercase italic tracking-tight truncate w-40 ${idx === 0 ? 'text-black' : 'text-white group-hover:text-[#F56476]'}`}>{project.name}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 🖼️ CONTENT --- */}
      <main className="max-w-3xl mx-auto cursor-crosshair no-select relative comic-shadow pt-20" onClick={() => setShowControls(!showControls)}>
        {PORTFOLIO_PROJECTS.map((project) => (
          <div key={project.id} className="relative overflow-hidden bg-[#0a0a0a]">
            <img src={project.image.src} className="w-full h-auto block pointer-events-none transition-transform duration-700 hover:scale-[1.01]" alt={project.name} loading="lazy" />
          </div>
        ))}
        
        <div className="py-32 flex flex-col items-center bg-gradient-to-b from-transparent via-black to-black">
           <div className="flex gap-12 mb-16 relative z-20">
              <button className="group flex flex-col items-center gap-4 active:scale-90 transition-all">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-[#F56476]/20 group-hover:border-[#F56476]/50 group-hover:shadow-[0_0_30px_rgba(245,100,118,0.2)] transition-all">
                  <RiHeartFill className="text-stone-600 group-hover:text-[#F56476]" size={32} />
                </div>
                <span className="text-sm font-black text-stone-500 tracking-tighter uppercase group-hover:text-[#F56476]">12.4K Hearts</span>
              </button>
              
              <button onClick={(e) => { e.stopPropagation(); setShowComments(true); }} className="group flex flex-col items-center gap-4 active:scale-90 transition-all">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-[#F56476]/20 group-hover:border-[#F56476]/50 group-hover:shadow-[0_0_30px_rgba(245,100,118,0.2)] transition-all">
                  <RiChat3Line className="text-stone-600 group-hover:text-[#F56476]" size={32} />
                </div>
                <span className="text-sm font-black text-stone-500 tracking-tighter uppercase group-hover:text-[#F56476]">842 Comms</span>
              </button>
           </div>
        </div>
      </main>

      {/* --- 💬 COMMENTS --- */}
      <div className={`fixed inset-0 z-[80] transition-all duration-500 ${showComments ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-lg transition-opacity duration-500 ${showComments ? 'opacity-100' : 'opacity-0'}`} onClick={() => setShowComments(false)} />
        <div className={`absolute bottom-0 w-full max-w-3xl left-1/2 -translate-x-1/2 bg-[#111] rounded-t-[3rem] border-t border-white/10 transition-transform duration-700 h-[85vh] flex flex-col ${showComments ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="p-10 border-b border-white/5 flex justify-between items-center">
            <div>
                <h3 className="font-black text-3xl italic uppercase tracking-tighter text-white">Radio Chatter</h3>
                <p className="text-[#F56476] text-[10px] font-black uppercase tracking-[0.2em]">842 Active Signals</p>
            </div>
            <button onClick={() => setShowComments(false)} className="p-4 bg-white/5 hover:bg-[#F56476]/20 hover:text-[#F56476] rounded-2xl transition-all"><RiCloseLine size={24} className="text-white" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-10 space-y-8">
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F56476] to-pink-400 p-[2px] shrink-0">
                  <div className="w-full h-full bg-[#111] rounded-2xl flex items-center justify-center font-black text-white italic">MV</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                    <p className="font-black text-sm text-white uppercase tracking-tight">SuperFan_Max</p>
                    <span className="px-2 py-[2px] bg-white/5 text-[8px] font-black text-[#F56476] rounded uppercase tracking-widest">Verified Paddock</span>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed font-medium">This Redline theme is perfect. Feels like Max is in the cockpit! 🏎️💨</p>
              </div>
            </div>
          </div>
          <div className="p-8 border-t border-white/5 bg-[#0a0a0a] flex items-center gap-4">
              <input type="text" placeholder="Send radio message..." className="flex-1 bg-white/5 border border-white/10 py-5 px-8 rounded-2xl outline-none text-white focus:border-[#F56476] transition-all font-bold" />
              <button className="bg-[#F56476] text-black p-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(245,100,118,0.2)]"><RiSendPlane2Fill size={24} /></button>
          </div>
        </div>
      </div>

      {/* --- 🛠️ BOTTOM NAV --- */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 p-2 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 ${showControls ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'}`}>
        <button className="w-14 h-14 flex items-center justify-center text-white hover:text-[#F56476] hover:bg-white/5 rounded-2xl transition-all"><RiArrowLeftLine size={24} /></button>
        <button className="px-10 py-4 bg-[#F56476] text-black font-black text-[12px] rounded-2xl tracking-[0.2em] uppercase italic hover:bg-white hover:scale-[1.05] active:scale-95 transition-all shadow-[0_10px_20px_rgba(245,100,118,0.3)]">Next Unit</button>
        <button className="w-14 h-14 flex items-center justify-center text-white hover:text-[#F56476] hover:bg-white/5 rounded-2xl transition-all"><RiArrowRightLine size={24} /></button>
      </div>
    </div>
  );
};

export default ComicReader;