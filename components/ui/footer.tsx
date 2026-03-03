'use client';
import Link from "next/link";
import { 
  RiInstagramFill, RiTwitterXFill, RiDiscordFill, 
  RiYoutubeFill, RiHeart2Fill, RiShoppingBag3Line, 
  RiShieldLine, RiUserLine, RiCupLine, RiArrowUpLine
} from "react-icons/ri";

const Footer = () => {
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#edf7f6] border-t border-stone-200 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Art Element: Background Texture/Watermark */}
      <div className="absolute top-0 right-0 text-[18vw] font-black text-[#102321]/5 italic leading-none select-none pointer-events-none -translate-y-1/4 translate-x-1/4">
        TOONIMA
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND BLOCK */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 bg-[#102321] rounded-2xl flex items-center justify-center text-white font-black italic text-2xl shadow-xl shadow-[#102321]/10 group-hover:bg-[#F56476] group-hover:-rotate-6 transition-all duration-500">
                T
              </div>
              <span className="text-3xl font-black uppercase tracking-tighter italic text-[#102321]">
                Toonima
              </span>
            </Link>
            
            <p className="text-stone-500 text-[15px] font-medium leading-relaxed max-w-sm">
              The premium destination for next-gen vertical comics. We bridge the gap between visionary artists and a global audience through seamless mobile storytelling.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {[
                { Icon: RiInstagramFill, href: "https://instagram.com" },
                { Icon: RiTwitterXFill, href: "https://twitter.com" },
                { Icon: RiDiscordFill, href: "https://discord.com" },
                { Icon: RiYoutubeFill, href: "https://youtube.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-[#102321] hover:bg-[#102321] hover:text-white hover:border-[#102321] transition-all duration-300 shadow-sm active:scale-90"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F56476] font-black uppercase tracking-[0.2em] text-[10px] mb-8 italic">Universe</h4>
            <ul className="space-y-5 text-[11px] font-black uppercase tracking-widest text-[#102321]">
              <li><Link href="/library" className="hover:text-[#F56476] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-4 h-[1px] bg-[#F56476] transition-all" /> Library</Link></li>
              <li><Link href="/creators" className="hover:text-[#F56476] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-4 h-[1px] bg-[#F56476] transition-all" /> Creators</Link></li>
              <li><Link href="/login" className="hover:text-[#F56476] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-4 h-[1px] bg-[#F56476] transition-all" /><RiUserLine className="text-sm" /> Account</Link></li>
              <li><Link href="/terms" className="hover:text-[#F56476] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-4 h-[1px] bg-[#F56476] transition-all" /><RiShieldLine className="text-sm" /> Guidelines</Link></li>
            </ul>
          </div>

          {/* COMMERCE LINKS */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F56476] font-black uppercase tracking-[0.2em] text-[10px] mb-8 italic">Support</h4>
            <ul className="space-y-5 text-[11px] font-black uppercase tracking-widest text-[#102321]">
              <li><Link href="/merchstore" className="hover:text-[#F56476] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-4 h-[1px] bg-[#F56476] transition-all" /><RiShoppingBag3Line className="text-sm" /> Store</Link></li>
              <li><Link href="/sponsorcomic" className="hover:text-[#F56476] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-4 h-[1px] bg-[#F56476] transition-all" /> Patronage</Link></li>
              <li><Link href="/donate" className="hover:text-[#F56476] transition-colors flex items-center gap-3 group"><span className="w-0 group-hover:w-4 h-[1px] bg-[#F56476] transition-all" /><RiHeart2Fill className="text-sm" /> Donations</Link></li>
            </ul>
          </div>

          {/* CALL TO ACTION CARD */}
          <div className="lg:col-span-4">
            <div className="bg-[#102321] p-10 rounded-[3rem] text-white shadow-3xl shadow-[#102321]/20 relative overflow-hidden group border border-white/5">
              <div className="relative z-10">
                <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-3 leading-none">Support Art</h4>
                <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest mb-8 opacity-80">Help us empower the next wave of independent storytellers.</p>
                <Link href="/buyuscoffee">
                  <button className="w-full py-5 bg-[#F56476] text-white font-black text-[11px] uppercase tracking-[0.25em] rounded-2xl hover:bg-white hover:text-[#102321] transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 shadow-lg">
                    <RiCupLine size={18} className="animate-bounce" /> Buy us a coffee
                  </button>
                </Link>
              </div>
              {/* Artistic Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#F56476]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#F56476]/40 transition-all duration-700" />
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-stone-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em]">
              Toonima Entertainment © 2026 • scrolling stories.
            </p>
            <p className="text-[9px] font-medium text-stone-400/60 uppercase tracking-[0.2em]">
              Handcrafted for the digital canvas.
            </p>
          </div>

          <div className="flex gap-10 text-[10px] font-black text-stone-400 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-[#102321] transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-[#102321] transition-colors">Cookies</Link>
            <Link href="/api" className="hover:text-[#102321] transition-colors">API</Link>
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#102321] hover:text-white hover:border-[#102321] transition-all group"
            >
              <RiArrowUpLine className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;