'use client';
import { RiShieldCheckLine, RiAuctionLine, RiFileTextLine, RiMoneyDollarCircleLine, RiUserSmileLine } from "react-icons/ri";

const TermsOfService = () => {
  const sections = [
    { id: 'ownership', icon: <RiUserSmileLine />, title: '1. Content Ownership', text: 'You retain full ownership of the IP (Intellectual Property) you upload. Toonima acts only as a distributor. By uploading, you grant us a non-exclusive license to host, display, and promote your work within the platform ecosystem.' },
    { id: 'monetization', icon: <RiMoneyDollarCircleLine />, title: '2. Monetization & Revenue', text: 'Creators earn via Toonima Coins. Payouts are processed monthly once a minimum threshold of $50 USD is reached. Toonima takes a standard 30% platform fee to cover hosting, maintenance, and processing.' },
    { id: 'guidelines', icon: <RiShieldCheckLine />, title: '3. Content Guidelines', text: 'No illegal content, hate speech, or extreme gore. Mature content (18+) is allowed but MUST be tagged correctly. Failure to tag mature content will result in immediate series suspension.' },
    { id: 'conduct', icon: <RiAuctionLine />, title: '4. User Conduct', text: 'Harassment of other creators or users is zero-tolerance. "Review bombing" or botting views will result in a permanent ban of your account and forfeiture of pending balances.' },
    { id: 'termination', icon: <RiFileTextLine />, title: '5. Account Termination', text: 'You can delete your account at any time. Toonima reserves the right to remove content that violates our security protocols or local laws in the regions where we operate.' }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* --- 📜 HEADER --- */}
        <div className="mb-16 border-b border-white/5 pb-10">
          <div className="bg-[#00D564]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#00D564] mb-6 shadow-[0_0_30px_rgba(0,213,100,0.1)]">
            <RiFileTextLine size={32} />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">
            Toonima <span className="text-[#00D564]">Rulebook</span>
          </h1>
          <p className="text-stone-500 font-medium max-w-xl">
            Last Updated: February 20, 2026. These terms govern your use of the Toonima platform as a creator and reader.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- 📍 TABLE OF CONTENTS (Desktop Only) --- */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-32 h-fit">
            <nav className="space-y-1">
              {sections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl text-stone-500 hover:text-white hover:bg-white/5 transition-all group"
                >
                  <span className="group-hover:text-[#00D564] transition-colors">{section.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">{section.title.split('. ')[1]}</span>
                </a>
              ))}
            </nav>
            <div className="mt-10 p-6 bg-stone-950 border border-white/5 rounded-2xl italic">
              <p className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-tighter">
                "Respect the craft, respect the community, and keep the art moving forward."
              </p>
            </div>
          </aside>

          {/* --- 📄 LEGAL TEXT --- */}
          <main className="lg:col-span-8 space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4 text-[#00D564]">
                  {section.icon}
                  <h2 className="text-xl font-black uppercase tracking-tighter italic">{section.title}</h2>
                </div>
                <div className="bg-stone-900/20 border border-white/5 p-8 rounded-3xl">
                  <p className="text-stone-400 leading-relaxed text-sm font-medium">
                    {section.text}
                  </p>
                </div>
              </section>
            ))}

            {/* --- ⚖️ FINAL DISCLAIMER --- */}
            <div className="mt-20 pt-10 border-t border-white/5 text-center">
              <p className="text-[10px] text-stone-600 font-bold uppercase tracking-[0.3em]">
                Toonima Entertainment © 2026 All Rights Reserved
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;