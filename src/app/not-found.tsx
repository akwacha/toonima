'use client';
import Link from 'next/link';
import { RiBrushLine, RiArrowLeftLine, RiDraftLine, RiQuillPenLine } from 'react-icons/ri';

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#edf7f6] px-4 text-[#102321] selection:bg-[#F56476] selection:text-white overflow-hidden">
      
      {/* --- Artistic Watermark --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none">
        <RiQuillPenLine size={600} className="rotate-12" />
      </div>

      <div className="relative z-10 text-center max-w-xl">
        
        {/* --- The Badge --- */}
        <div className="inline-block bg-[#F56476] text-white p-5 rounded-[2rem] rotate-[3deg] mb-10 shadow-2xl shadow-[#F56476]/30">
          <RiBrushLine size={40} />
        </div>

        {/* --- Comic Heading --- */}
        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
          Hey <span className="text-[#F56476]">Wanderer,</span> <br /> 
          Lost in the <br /> Margins?
        </h2>

        {/* --- Storytelling Description --- */}
        <p className="text-stone-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-12 leading-relaxed px-6">
          It looks like you've wandered off the storyboard. This panel hasn't been inked yet, or the artist decided to scrap this draft. 
        </p>

        {/* --- Navigation Buttons --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <Link 
            href="/"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#102321] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F56476] transition-all shadow-xl shadow-[#102321]/10 active:scale-95"
          >
            <RiArrowLeftLine size={18} /> Back to the Story
          </Link>
          
          <Link
            href="/explore" 
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-white border border-stone-200 text-[#102321] px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-[#F56476] hover:text-[#F56476] transition-all active:scale-95"
          >
            <RiDraftLine size={18} /> Find New Chapters
          </Link>
        </div>

      </div>

      {/* --- Bottom Detail --- */}
      <div className="absolute bottom-10">
        <p className="text-[9px] font-black text-stone-300 uppercase tracking-[0.4em]">
          Toonima • Panel 404: Draft Missing
        </p>
      </div>

    </main>
  );
}