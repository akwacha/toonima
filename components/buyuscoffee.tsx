'use client';
import { useState, useEffect } from "react"; // Added useEffect
import { 
  RiCupLine, RiDropFill, RiFlashlightLine, 
  RiHeart2Fill, RiArrowRightSLine 
} from "react-icons/ri";

const BuyCoffee = () => {
  const [cups, setCups] = useState(3);
  const [mounted, setMounted] = useState(false); // New state for hydration safety
  const cupPrice = 5;

  // Wait until the component is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a shell or null if not mounted to avoid mismatch
  if (!mounted) return <div className="bg-[#edf7f6] min-h-screen" />;

  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* --- ☕ THE COFFEE CARD --- */}
        <div className="bg-white border border-stone-200 rounded-[3rem] shadow-2xl shadow-[#F56476]/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Visual Side */}
            <div className="bg-[#102321] p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#F56476] rounded-2xl flex items-center justify-center mb-8 shadow-lg rotate-[-5deg]">
                  <RiCupLine size={32} className="text-white" />
                </div>
                <h2 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-4">
                  High Octane <br /> <span className="text-[#F56476]">Recovery.</span>
                </h2>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Every cup is a direct injection of focus. Help us sustain the "Crunch Time" energy required to hit our weekly deadlines.
                </p>
              </div>

              {/* Decorative "Liquid" element */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#F56476]/10 rounded-full blur-3xl" />
              <RiDropFill className="absolute bottom-10 right-10 text-white/5" size={200} />
            </div>

            {/* Selection Side */}
            <div className="p-12">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F56476] mb-8">Fuel Selection</h4>
              
              <div className="space-y-8">
                {/* Cup Counter */}
                <div className="flex items-center justify-between bg-[#edf7f6] p-6 rounded-[2rem] border border-stone-100">
                  <div className="flex gap-4">
                    {[1, 3, 5].map((num) => (
                      <button 
                        key={num}
                        onClick={() => setCups(num)}
                        className={`w-12 h-12 rounded-xl font-black transition-all ${
                          cups === num ? 'bg-[#F56476] text-white shadow-lg' : 'bg-white text-stone-400 hover:text-[#102321]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-black uppercase text-stone-400">Total Support</p>
                    <p className="text-2xl font-black italic">${cups * cupPrice}</p>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2">Radio Message (Optional)</label>
                  <textarea 
                    placeholder="Leave a note for the paddock..."
                    className="w-full bg-[#edf7f6] border border-stone-100 rounded-[1.5rem] p-5 text-sm font-bold outline-none focus:border-[#F56476] transition-colors resize-none h-32"
                  />
                </div>

                <button className="w-full bg-[#102321] text-white py-6 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#F56476] transition-all group">
                  Send Fuel <RiFlashlightLine className="group-hover:animate-pulse" />
                </button>

                <p className="text-center text-[9px] font-black text-stone-300 uppercase tracking-tight">
                  Secure checkout via Toonima Pay • No subscription required
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- ❤️ RECENT SUPPORTERS --- */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { name: "Sector1_Fan", count: 5 },
            { name: "GhostRider", count: 1 },
            { name: "MangaLover99", count: 3 }
          ].map((supporter, i) => (
            <div key={i} className="bg-white/50 backdrop-blur-sm border border-stone-200/50 px-6 py-3 rounded-full flex items-center gap-3">
              <RiHeart2Fill className="text-[#F56476]" size={14} />
              <span className="text-[10px] font-black uppercase tracking-tight">
                {supporter.name} <span className="text-stone-400">bought {supporter.count} cups</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BuyCoffee;