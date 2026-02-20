'use client';
import { 
  RiInstagramFill, RiTwitterXFill, RiDiscordFill, 
  RiYoutubeFill, RiHeart2Fill, RiShoppingBag3Line, 
  RiShieldLine, RiUserLine, RiCupLine 
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#edf7f6] border-t border-stone-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* BRAND BLOCK */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#102321] rounded-xl flex items-center justify-center text-white font-black italic text-xl shadow-lg shadow-[#102321]/20">
                T
              </div>
              <span className="text-3xl font-black uppercase tracking-tighter italic text-[#102321]">
                Toonima
              </span>
            </div>
            <p className="text-stone-500 text-sm font-medium leading-relaxed max-w-xs mb-8">
              The premium destination for next-gen digital comics and creators. Built for the community, powered by the paddock.
            </p>
            {/* SOCIALS */}
            <div className="flex gap-4">
              {[RiInstagramFill, RiTwitterXFill, RiDiscordFill, RiYoutubeFill].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-xl flex items-center justify-center text-[#102321] hover:bg-[#F56476] hover:text-white hover:border-[#F56476] transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F56476] font-black uppercase tracking-widest text-[10px] mb-6 italic">Platform</h4>
            <ul className="space-y-4 text-[12px] font-black uppercase tracking-tight text-[#102321]">
              <li><a href="/library" className="hover:text-[#F56476] transition-colors">Your Library</a></li>
              <li><a href="/creators" className="hover:text-[#F56476] transition-colors">Creators</a></li>
              <li><a href="/login" className="hover:text-[#F56476] transition-colors flex items-center gap-2"><RiUserLine /> Login</a></li>
              <li><a href="/terms" className="hover:text-[#F56476] transition-colors flex items-center gap-2"><RiShieldLine /> Rulebook</a></li>
            </ul>
          </div>

          {/* COMMERCE LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F56476] font-black uppercase tracking-widest text-[10px] mb-6 italic">Shop</h4>
            <ul className="space-y-4 text-[12px] font-black uppercase tracking-tight text-[#102321]">
              <li><a href="/merchstore" className="hover:text-[#F56476] transition-colors flex items-center gap-2"><RiShoppingBag3Line /> Merch Store</a></li>
              <li><a href="/sponsor" className="hover:text-[#F56476] transition-colors">Sponsor a Comic</a></li>
              <li><a href="/donate" className="hover:text-[#F56476] transition-colors flex items-center gap-2"><RiHeart2Fill /> Donate</a></li>
            </ul>
          </div>

          {/* CALL TO ACTION CARD */}
          <div className="lg:col-span-4">
            <div className="bg-[#102321] p-8 rounded-[2.5rem] text-white shadow-2xl shadow-[#102321]/20 relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-black uppercase italic tracking-tighter mb-2">Support the Project</h4>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-tight mb-6">Help us fuel the next generation of indie artists.</p>
                <button className="w-full py-4 bg-[#F56476] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-[#102321] transition-all flex items-center justify-center gap-2">
                  <RiCupLine size={16} /> Buy us a coffee
                </button>
              </div>
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-[#F56476]/10 transition-colors" />
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-stone-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em]">
            Toonima Entertainment © 2026 • scrolling stories. All rights reserved.
          </p>
          <div className="flex gap-8 text-[9px] font-black text-stone-400 uppercase tracking-widest">
            <a href="#" className="hover:text-[#102321]">Privacy Policy</a>
            <a href="#" className="hover:text-[#102321]">Cookie Settings</a>
            <a href="#" className="hover:text-[#102321]">API Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;