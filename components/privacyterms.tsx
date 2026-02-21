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
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-32 pb-20 font-sans">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* --- 📜 HEADER --- */}
        <div className="mb-16 border-b border-[#102321]/10 pb-10">
          <div className="bg-[#F56476]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#F56476] mb-6 shadow-xl shadow-[#F56476]/5">
            <RiFileTextLine size={32} />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">
            Toonima <span className="text-[#F56476]">Rulebook</span>
          </h1>
          <p className="text-stone-500 font-bold text-sm max-w-xl">
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
                  className="flex items-center gap-3 p-4 rounded-xl text-stone-400 hover:text-[#102321] hover:bg-white transition-all group border border-transparent hover:border-stone-200 shadow-sm hover:shadow-md"
                >
                  <span className="group-hover:text-[#F56476] transition-colors">{section.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">{section.title.split('. ')[1]}</span>
                </a>
              ))}
            </nav>
            <div className="mt-10 p-6 bg-white border border-stone-200 rounded-3xl italic shadow-xl shadow-[#102321]/5">
              <p className="text-[10px] text-stone-500 leading-relaxed uppercase tracking-tighter font-black">
                "Respect the craft, respect the community, and keep the art moving forward."
              </p>
            </div>
          </aside>

          {/* --- 📄 LEGAL TEXT --- */}
          <main className="lg:col-span-8 space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 group">
                <div className="flex items-center gap-3 mb-4 text-[#F56476] transition-transform duration-300 group-hover:translate-x-2">
                  {section.icon}
                  <h2 className="text-xl font-black uppercase tracking-tighter italic text-[#102321]">{section.title}</h2>
                </div>
                <div className="bg-white border border-stone-200 p-8 rounded-[2rem] shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:border-[#F56476]/30">
                  <p className="text-stone-600 leading-relaxed text-sm font-medium">
                    {section.text}
                  </p>
                </div>
              </section>
            ))}

            {/* --- ⚖️ FINAL DISCLAIMER --- */}
            <div className="mt-20 pt-10 border-t border-stone-200 text-center">
              <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.3em]">
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