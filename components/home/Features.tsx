'use client';
import React, { useState } from "react";
import { RiAddLine, RiSubtractLine, RiQuillPenFill, RiLayoutMasonryFill, RiTeamFill } from "react-icons/ri";

const SERVICE_STEPS = [
  {
    phase: "Step 01",
    title: "Toonima Originals",
    description: "Our premium collection of vertical comics. We focus on cinematic storytelling and high-quality art, designed specifically for a smooth reading experience on your phone.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
    features: ["Cinematic Pacing", "Mobile Optimized", "Exclusive Series"],
    icon: <RiQuillPenFill />
  },
  {
    phase: "Step 02",
    title: "Canvas Creator Hub",
    description: "A space for independent artists to share their stories. We provide the platform and the tools you need to publish your work, build a following, and join the digital comic community.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
    features: ["Easy Publishing", "Creator Support", "Audience Stats"],
    icon: <RiLayoutMasonryFill />
  },
  {
    phase: "Step 03",
    title: "Global Community",
    description: "Connect with readers and artists from around the world. Share your thoughts in real-time, support the creators you love, and discover new stories every day.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    features: ["Reader Chat", "Artist Tipping", "Global Discovery"],
    icon: <RiTeamFill />
  }
];

const Featureandsteps = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#edf7f6] text-[#102321] py-24 border-b border-stone-200" id="services">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 relative z-20">
          <div>
            <h4 className="text-[#F56476] font-black tracking-[0.3em] uppercase text-[10px] mb-3 flex items-center gap-2">
              <span className="w-12 h-[2px] bg-[#F56476]" />
              How it works
            </h4>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic leading-none">
              Steps & <span className="text-[#F56476]">Features</span>
            </h2>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-4 bg-[#102321] text-white px-10 py-4 rounded-2xl hover:bg-[#F56476] transition-all duration-500 active:scale-95 shadow-xl"
          >
            <span className="text-[11px] font-black uppercase tracking-widest">
              {isOpen ? "See Less" : "See More"}
            </span>
            <div className="relative w-5 h-5">
              <RiAddLine className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <RiSubtractLine className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* --- Collapsible Content --- */}
        <div 
          className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden 
            ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        >
          {/* Using a wrapper to avoid grid gap issues when closed */}
          <div className={isOpen ? "block" : "hidden"}>
            {SERVICE_STEPS.map((service, index) => (
              <div key={index} className="relative">
                
                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} ${index !== 0 ? 'pt-32' : 'pt-10'}`}>
                  
                  {/* Image */}
                  <div className="lg:w-1/2 group relative">
                    <div className="absolute -top-6 -left-6 text-[80px] lg:text-[100px] font-black text-[#102321]/5 italic leading-none select-none">
                      0{index + 1}
                    </div>
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border border-stone-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:w-1/2 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-stone-100 text-[#102321] flex items-center justify-center text-lg border border-stone-200">
                        {service.icon}
                      </div>
                      <span className="text-[#F56476] font-black uppercase tracking-[0.3em] text-[10px]">
                        {service.phase}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter italic">
                      {service.title}
                    </h3>

                    <p className="text-lg text-stone-500 leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat, fIdx) => (
                        <span key={fIdx} className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-[9px] font-black uppercase tracking-widest text-stone-400">
                          {feat}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-4 group">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-[#F56476] pb-1">
                        View Project
                      </span>
                      <RiAddLine className="text-[#F56476] group-hover:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Decorative Line - spacing handled here */}
                {index !== SERVICE_STEPS.length - 1 && (
                  <div className="absolute left-1/2 bottom-[-128px] h-32 w-[1px] bg-stone-200 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- Visual Spacer when closed --- */}
        {!isOpen && (
          <div className="w-full h-px bg-stone-200 mt-10" />
        )}
      </div>
    </section>
  );
};

export default Featureandsteps;