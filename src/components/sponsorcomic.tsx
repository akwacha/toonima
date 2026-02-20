'use client';
import { 
  RiRocket2Line, RiMedalLine, RiFlashlightFill, 
  RiCheckDoubleLine, RiUserStarLine, RiTimerFlashLine,
  RiArrowRightSLine, RiShieldStarLine
} from "react-icons/ri";

const tiers = [
  {
    name: "Ink Assistant",
    price: "25",
    description: "Support the weekly grind and keep the high-quality ink flowing.",
    features: ["Early Access to 2 Chapters", "Sponsor Badge on Profile", "Digital Wallpaper Pack"],
    color: "border-stone-200",
    button: "bg-[#102321]",
    icon: <RiTimerFlashLine size={32} />
  },
  {
    name: "Lead Storyboarder",
    price: "75",
    description: "A major boost to production quality and studio resources.",
    features: ["Your Name in Comic Credits", "Behind-the-scenes Process Art", "Exclusive Discord Access", "All Assistant Rewards"],
    color: "border-[#F56476] shadow-2xl shadow-[#F56476]/10",
    button: "bg-[#F56476]",
    tag: "Most Popular",
    icon: <RiFlashlightFill size={32} />
  },
  {
    name: "Executive Producer",
    price: "250",
    description: "The ultimate backing. You are the force behind the vision.",
    features: ["Dedicated 'Special Thanks' Page", "Signed Physical Print (Vol 1)", "1-on-1 Q&A with the Artist", "All Previous Rewards"],
    color: "border-[#102321] bg-[#102321] text-white",
    button: "bg-white text-[#102321]",
    icon: <RiShieldStarLine size={32} />
  }
];

const SponsorPage = () => {
  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* --- 🎨 HERO SECTION --- */}
        <div className="relative z-10 mb-24">
          <div className="flex items-center gap-3 text-[#F56476] mb-4">
            <RiRocket2Line className="animate-bounce" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Creative Partnership</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-[0.85]">
            Power the <br /> <span className="text-[#F56476]">Next Drop.</span>
          </h1>
          <p className="mt-8 text-stone-500 font-bold uppercase tracking-tight max-w-xl leading-relaxed">
            Independent creators need more than just likes—they need a studio partner. 
            Choose a tier to sponsor <span className="text-[#102321] underline decoration-[#F56476] underline-offset-4">Shadow of Malawi</span> and accelerate its production.
          </p>
        </div>

        {/* --- 💎 SPONSOR TIERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative z-10">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-[3rem] border-2 transition-all duration-500 hover:-translate-y-4 ${tier.color} flex flex-col`}
            >
              {tier.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F56476] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  {tier.tag}
                </span>
              )}
              
              <div className="mb-8">
                <div className={`mb-6 ${tier.name === "Executive Producer" ? "text-[#F56476]" : "text-[#102321]"}`}>
                  {tier.icon}
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-black">$</span>
                  <span className="text-5xl font-black italic tracking-tighter">{tier.price}</span>
                  <span className="text-[10px] font-bold uppercase text-stone-400">/ Monthly</span>
                </div>
              </div>

              <p className={`text-xs font-bold mb-8 leading-relaxed ${tier.name === "Executive Producer" ? "text-stone-400" : "text-stone-500"}`}>
                {tier.description}
              </p>

              <ul className="space-y-4 mb-12 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[11px] font-black uppercase tracking-tight">
                    <RiCheckDoubleLine className="text-[#F56476] shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#102321]/5 ${tier.button}`}>
                Start Sponsorship
              </button>
            </div>
          ))}
        </div>

        {/* --- 📊 SPONSOR IMPACT (Live Telemetry) --- */}
        <div className="bg-white border border-stone-200 rounded-[4rem] p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-6">
                Studio <span className="text-[#F56476]">Funding Goal</span>
              </h3>
              <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-10">
                Next Milestone: Full-Color Hardcover Print Run
              </p>
              
              {/* Progress Bar */}
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>82% Funded</span>
                  <span>$12,000 Goal</span>
                </div>
                <div className="h-4 w-full bg-[#edf7f6] rounded-full overflow-hidden p-1 border border-stone-100">
                  <div className="h-full bg-gradient-to-r from-[#102321] to-[#F56476] rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div className="bg-[#edf7f6] p-8 rounded-[2.5rem] text-center">
                  <RiUserStarLine size={24} className="mx-auto mb-4 text-[#F56476]" />
                  <p className="text-2xl font-black italic tracking-tighter">142</p>
                  <p className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Active Patrons</p>
               </div>
               <div className="bg-[#102321] p-8 rounded-[2.5rem] text-center text-white">
                  <RiMedalLine size={24} className="mx-auto mb-4 text-[#F56476]" />
                  <p className="text-2xl font-black italic tracking-tighter">8</p>
                  <p className="text-[9px] font-black uppercase text-stone-500 tracking-widest">Exec Sponsors</p>
               </div>
            </div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <RiRocket2Line size={300} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SponsorPage;