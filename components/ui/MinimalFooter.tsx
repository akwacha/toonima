'use client';
import Link from "next/link";
import { 
  RiInstagramFill, RiTwitterXFill, RiDiscordFill, RiYoutubeFill 
} from "react-icons/ri";

const CompactFooter = () => {
  return (
    <footer className="bg-[#edf7f6] border-t border-stone-200 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT: MINI BRAND & COPYRIGHT */}
        <div className="flex items-center gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="bg-[#102321] p-1 rounded-sm rotate-[-3deg] group-hover:bg-[#F56476] group-hover:rotate-0 transition-all duration-300">
              <h2 className="text-xs font-black text-white italic leading-none">T</h2>
            </div>
            <span className="text-sm font-black uppercase tracking-tighter italic text-[#102321]">
              Toonima
            </span>
          </Link>
          <span className="hidden md:block w-[1px] h-4 bg-stone-300"></span>
          <p className="text-[9px] font-black text-stone-400 uppercase tracking-widest">
            © 2026 • Powered by the paddock
          </p>
        </div>

        {/* CENTER: ESSENTIAL LEGAL */}
        <div className="flex gap-6 text-[9px] font-black text-stone-500 uppercase tracking-widest">
          <Link href="/terms" className="hover:text-[#F56476] transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-[#F56476] transition-colors">Privacy</Link>
          <Link href="/api" className="hover:text-[#F56476] transition-colors">API</Link>
        </div>

        {/* RIGHT: COMPACT SOCIALS */}
        <div className="flex gap-4">
          {[
            { Icon: RiInstagramFill, href: "#" },
            { Icon: RiTwitterXFill, href: "#" },
            { Icon: RiDiscordFill, href: "#" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="text-[#102321] hover:text-[#F56476] transition-colors"
            >
              <social.Icon size={18} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default CompactFooter;