'use client';
import { useState } from "react";
import { 
  RiUploadCloud2Line, RiImageAddLine, RiCheckLine, 
  RiArrowRightLine, RiFilePdf2Line, RiGalleryLine,
  RiAddLine, RiCloseCircleLine, RiCalendarEventLine, 
  RiPriceTag3Line, RiShieldLine, RiExternalLinkLine
} from "react-icons/ri";

const ComicUploadForm = () => {
  const [step, setStep] = useState(1);
  const [isPdfMode, setIsPdfMode] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [credits, setCredits] = useState([{ name: '', role: 'Artist' }]);

  const addCredit = () => setCredits([...credits, { name: '', role: 'Artist' }]);
  const removeCredit = (index) => setCredits(credits.filter((_, i) => i !== index));

  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* --- PROGRESS TRACKER --- */}
        <div className="flex items-center justify-between mb-12 relative max-w-sm mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-px bg-stone-300 -z-10" />
          {[1, 2, 3].map((num) => (
            <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${step >= num ? 'bg-[#F56476] text-white scale-110 shadow-[0_0_15px_rgba(245,100,118,0.3)]' : 'bg-white text-stone-400 border border-stone-200'}`}>
              {step > num ? <RiCheckLine size={20} /> : num}
            </div>
          ))}
        </div>

        <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xl">
          
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header>
                <h2 className="text-2xl font-black uppercase tracking-tighter italic">Series Details</h2>
                <p className="text-stone-500 text-sm">Define the foundation of your series.</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Series Title</label>
                  <input type="text" placeholder="e.g. The Malawian Legend" className="w-full bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#F56476]/20 focus:border-[#F56476] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Main Genre</label>
                  <select className="w-full bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-[#F56476]/20 focus:border-[#F56476] outline-none transition-all">
                    <option>Action / Fantasy</option>
                    <option>Slice of Life</option>
                    <option>Horror</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Production Team & Roles</label>
                {credits.map((credit, idx) => (
                  <div key={idx} className="flex gap-3">
                    <input type="text" placeholder="Name" className="flex-1 bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-3 text-sm outline-none focus:border-[#F56476] transition-all" />
                    <select className="bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-3 text-xs font-bold uppercase outline-none">
                      <option>Artist</option>
                      <option>Writer</option>
                      <option>Colorist</option>
                      <option>Letterer</option>
                    </select>
                    {credits.length > 1 && (
                      <button onClick={() => removeCredit(idx)} className="text-stone-400 hover:text-[#F56476] transition-colors">
                        <RiCloseCircleLine size={24} />
                      </button>
                    )}
                  </div>
                ))}
                <button onClick={addCredit} className="flex items-center gap-2 text-[10px] font-black text-[#F56476] uppercase tracking-widest">
                  <RiAddLine size={18}/> Add Team Member
                </button>
              </div>

              <button onClick={() => setStep(2)} className="w-full py-4 bg-[#102321] text-white font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-[#F56476] transition-all flex items-center justify-center gap-2 shadow-lg">
                Continue to Art <RiArrowRightLine />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header><h2 className="text-2xl font-black uppercase tracking-tighter italic">Visual Identity</h2></header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-[7/10] bg-[#edf7f6] border-2 border-dashed border-stone-200 rounded-3xl flex flex-col items-center justify-center text-stone-400 hover:text-[#F56476] hover:border-[#F56476] transition-all cursor-pointer group">
                  <RiImageAddLine size={40} />
                  <p className="text-[10px] mt-4 font-black tracking-widest uppercase">COVER ART</p>
                </div>
                <div className="aspect-square bg-[#edf7f6] border-2 border-dashed border-stone-200 rounded-3xl flex flex-col items-center justify-center text-stone-400 hover:text-[#F56476] hover:border-[#F56476] transition-all cursor-pointer group">
                  <RiImageAddLine size={40} />
                  <p className="text-[10px] mt-4 font-black tracking-widest uppercase">SERIES ICON</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="flex-1 py-4 border border-stone-200 text-stone-600 font-black uppercase text-[10px] rounded-xl hover:bg-stone-50 transition-colors">Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] py-4 bg-[#F56476] text-white font-black uppercase text-[10px] rounded-xl shadow-md">Publishing Info</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tighter italic">Chapter Setup</h2>
                  <p className="text-stone-500 text-sm">Finalize and confirm legal ownership.</p>
                </div>
                <button onClick={() => setIsPdfMode(!isPdfMode)} className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-[9px] font-black uppercase tracking-widest transition-all hover:border-[#F56476] hover:text-[#F56476]">
                  {isPdfMode ? 'Switch to Slices' : 'Switch to PDF'}
                </button>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Chapter No.</label>
                  <input type="number" placeholder="01" className="w-full bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-4 text-sm outline-none focus:border-[#F56476] transition-all" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Chapter Title</label>
                  <input type="text" placeholder="The Awakening" className="w-full bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-4 text-sm outline-none focus:border-[#F56476] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500 flex items-center gap-2">
                    <RiCalendarEventLine className="text-[#F56476]" /> Release Date
                  </label>
                  <input type="datetime-local" className="w-full bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-4 text-xs text-stone-600 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500 flex items-center gap-2">
                    <RiPriceTag3Line className="text-[#F56476]" /> Coins Price
                  </label>
                  <input type="number" placeholder="Free" className="w-full bg-[#edf7f6]/50 border border-stone-200 rounded-xl p-4 text-sm outline-none focus:border-[#F56476] transition-all" />
                </div>
              </div>

              {/* Upload Zone */}
              <div className="w-full min-h-[180px] rounded-3xl border-2 border-dashed border-stone-200 bg-[#edf7f6]/30 flex flex-col items-center justify-center p-8 hover:bg-[#F56476]/5 hover:border-[#F56476] transition-all cursor-pointer">
                {isPdfMode ? <RiFilePdf2Line size={48} className="text-red-400" /> : <RiUploadCloud2Line size={48} className="text-stone-400" />}
                <p className="text-[10px] text-stone-500 mt-4 font-black uppercase tracking-widest">Select {isPdfMode ? 'PDF' : 'Chapter Slices'}</p>
              </div>

              {/* LEGAL CHECKBOX */}
              <div className="p-6 bg-[#edf7f6] border border-stone-200 rounded-2xl space-y-4 shadow-inner">
                <div className="flex items-start gap-4">
                  <div 
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className={`mt-1 w-5 h-5 rounded border transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                      agreedToTerms ? 'bg-[#F56476] border-[#F56476]' : 'bg-white border-stone-300'
                    }`}
                  >
                    {agreedToTerms && <RiCheckLine size={16} className="text-white font-bold" />}
                  </div>
                  <div className="text-xs leading-relaxed text-stone-600 font-medium">
                    <p>I certify that I own the rights to this content or have explicit permission to publish it on <span className="text-[#102321] font-black">Toonima</span>. I have read and agree to the <span className="text-[#F56476] font-bold underline cursor-pointer inline-flex items-center gap-1">Content Guidelines <RiExternalLinkLine size={12}/></span> and Terms of Service.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="flex-1 py-4 border border-stone-200 text-stone-600 font-black uppercase text-[10px] rounded-xl tracking-widest hover:bg-white transition-all">Back</button>
                <button 
                  disabled={!agreedToTerms}
                  className={`flex-[2] py-4 font-black uppercase text-[10px] tracking-[0.2em] rounded-xl shadow-lg transition-all ${
                    agreedToTerms 
                    ? 'bg-[#102321] text-white hover:bg-[#F56476] shadow-[0_10px_30px_rgba(16,35,33,0.15)]' 
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Launch Chapter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComicUploadForm;