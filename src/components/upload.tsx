'use client';
import { useState } from "react";
import { 
  RiUploadCloud2Line, RiImageAddLine, RiInformationLine, 
  RiCheckLine, RiArrowRightLine, RiDeleteBin7Line 
} from "react-icons/ri";

const ComicUploadForm = () => {
  const [step, setStep] = useState(1);
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* --- 🏎️ PROGRESS TRACKER --- */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-stone-800 -z-10" />
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${
                step >= num ? 'bg-[#00D564] text-black scale-110' : 'bg-stone-900 text-stone-500'
              }`}
            >
              {step > num ? <RiCheckLine size={20} /> : num}
            </div>
          ))}
        </div>

        <div className="bg-stone-900/20 border border-white/5 rounded-3xl p-8 backdrop-blur-md">
          
          {/* --- STEP 1: SERIES DETAILS --- */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <header>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Series Foundation</h2>
                <p className="text-stone-500 text-sm">Tell us the story behind your art.</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Series Title</label>
                  <input type="text" placeholder="e.g. Shadow of Malawi" className="w-full bg-stone-950 border border-white/10 rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#00D564] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Genre</label>
                  <select className="w-full bg-stone-950 border border-white/10 rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#00D564] outline-none">
                    <option>Action</option>
                    <option>Fantasy</option>
                    <option>Romance</option>
                    <option>Sci-Fi</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Synopsis</label>
                <textarea rows={4} placeholder="What happens in your world?" className="w-full bg-stone-950 border border-white/10 rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#00D564] outline-none transition-all resize-none" />
              </div>

              <button onClick={() => setStep(2)} className="w-full py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-[#00D564] transition-all flex items-center justify-center gap-2">
                Continue to Media <RiArrowRightLine />
              </button>
            </div>
          )}

          {/* --- STEP 2: ARTWORK & THUMBNAILS --- */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <header>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Visual Identity</h2>
                <p className="text-stone-500 text-sm">Upload your cover art and thumbnails.</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vertical Cover */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 text-center">Vertical Cover (700x1000)</p>
                  <div className="aspect-[7/10] bg-stone-950 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center group hover:border-[#00D564]/50 transition-colors cursor-pointer">
                    <RiImageAddLine size={40} className="text-stone-700 group-hover:text-[#00D564] transition-colors" />
                    <p className="text-[10px] text-stone-500 mt-4 font-bold">DRAG & DROP COVER</p>
                  </div>
                </div>

                {/* Square Thumbnail */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 text-center">Square Thumbnail (500x500)</p>
                  <div className="aspect-square bg-stone-950 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center group hover:border-[#00D564]/50 transition-colors cursor-pointer">
                    <RiImageAddLine size={40} className="text-stone-700 group-hover:text-[#00D564] transition-colors" />
                    <p className="text-[10px] text-stone-500 mt-4 font-bold">DRAG & DROP ICON</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 py-4 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-white/5 transition-all">Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] py-4 bg-[#00D564] text-black font-black uppercase text-xs tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,213,100,0.3)] transition-all">Upload Chapters</button>
              </div>
            </div>
          )}

          {/* --- STEP 3: CONTENT UPLOAD --- */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <header>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Episode 01</h2>
                <p className="text-stone-500 text-sm">Upload your vertical scroll image slices.</p>
              </header>

              <div 
                className={`w-full min-h-[300px] rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-12 ${
                  dragActive ? 'border-[#00D564] bg-[#00D564]/5' : 'border-white/10 bg-stone-950'
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
              >
                <RiUploadCloud2Line size={60} className={dragActive ? 'text-[#00D564] animate-bounce' : 'text-stone-700'} />
                <h3 className="mt-6 font-black text-lg">Drop your JPG/PNG slices here</h3>
                <p className="text-stone-500 text-xs mt-2 text-center max-w-xs">Recommended width: 800px. Max file size: 2MB per slice.</p>
                <button className="mt-8 px-8 py-3 bg-white text-black font-black text-[10px] uppercase rounded-full hover:scale-105 transition-transform">Browse Files</button>
              </div>

              <div className="flex gap-4 pt-6">
                <button onClick={() => setStep(2)} className="flex-1 py-4 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-xl">Back</button>
                <button className="flex-[2] py-4 bg-gradient-to-r from-[#00D564] to-[#00b052] text-black font-black uppercase text-xs tracking-widest rounded-xl shadow-lg">Publish Series</button>
              </div>
            </div>
          )}

        </div>

        {/* --- 💡 CREATOR TIPS --- */}
        <div className="mt-8 flex items-start gap-4 p-6 bg-[#00D564]/5 rounded-2xl border border-[#00D564]/20">
          <RiInformationLine className="text-[#00D564] shrink-0" size={24} />
          <div>
            <h4 className="text-sm font-black text-[#00D564] uppercase">Pro Tip</h4>
            <p className="text-xs text-stone-400 mt-1 leading-relaxed">
              Vertical scroll comics work best when slices are cut at natural transitions in the art. This prevents "seams" from appearing during slow network loading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicUploadForm;