'use client';
import { 
  RiGroupLine, RiBookOpenLine, 
  RiArrowUpSLine, RiHistoryLine, RiWallet3Line,
  RiCopperCoinLine, RiExternalLinkLine, RiBarChartGroupedLine
} from "react-icons/ri";

const CreatorDashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { label: 'Total Reads', value: '142.8K', growth: '+12%', icon: <RiBookOpenLine /> },
    { label: 'Subscribers', value: '12,402', growth: '+5.4%', icon: <RiGroupLine /> },
    { label: 'Toonima Coins', value: '45,200', growth: '+18%', icon: <RiCopperCoinLine /> },
    { label: 'Est. Revenue', value: '$1,240.00', growth: '+22%', icon: <RiWallet3Line /> },
  ];

  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 🏎️ DASHBOARD HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-stone-200 pb-10">
          <div>
            <h4 className="text-[#F56476] font-black tracking-[0.2em] uppercase text-[10px] mb-2">Technical Telemetry</h4>
            <h1 className="text-4xl font-black uppercase tracking-tighter italic">
              Creator <span className="text-[#F56476]">Paddock</span>
            </h1>
            <p className="text-stone-400 text-sm mt-2 font-bold uppercase tracking-tight">Welcome back, Chief. Performance is looking optimal.</p>
          </div>
          <div className="flex gap-3">
            <a href="/uploadcomic">
              <button className="px-6 py-4 bg-[#102321] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#F56476] shadow-xl shadow-[#102321]/10 transition-all">
                New Chapter
              </button>
            </a>
          </div>
        </div>

        {/* --- 📊 QUICK STATS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-stone-100 p-6 rounded-[2rem] hover:shadow-2xl hover:shadow-[#F56476]/10 transition-all group shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#edf7f6] rounded-xl text-[#102321] group-hover:text-[#F56476] transition-colors">
                  {stat.icon}
                </div>
                <span className="text-emerald-600 text-[10px] font-black flex items-center bg-emerald-50 px-2 py-1 rounded-lg">
                  <RiArrowUpSLine /> {stat.growth}
                </span>
              </div>
              <p className="text-stone-400 text-[9px] font-black uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black mt-1 italic tracking-tighter uppercase">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- 📈 PERFORMANCE GRAPH --- */}
          <div className="lg:col-span-8 bg-white border border-stone-100 rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[11px] font-black uppercase tracking-widest flex items-center gap-2 italic">
                <RiBarChartGroupedLine className="text-[#F56476]" /> Readership Engine
              </h3>
              <select className="bg-[#edf7f6] border border-stone-200 rounded-xl px-4 py-2 text-[10px] font-black uppercase outline-none text-[#102321]">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            {/* Visual Placeholder for Graph */}
            <div className="h-64 w-full bg-[#edf7f6]/50 rounded-[2rem] flex items-center justify-center border border-stone-100 relative overflow-hidden group/graph">
                <div className="absolute inset-0 flex items-end px-6 gap-3 opacity-40">
                  {[40, 70, 45, 90, 65, 80, 95, 60, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#F56476] rounded-t-lg transition-all duration-700 group-hover/graph:bg-[#102321]" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <p className="text-[#102321] text-[10px] font-black uppercase tracking-[0.4em] z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-stone-200">Live Telemetry</p>
            </div>
          </div>

          {/* --- 💰 REVENUE PANEL --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-[#F56476] to-[#d44d5d] p-8 rounded-[2.5rem] text-white shadow-2xl shadow-[#F56476]/30 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <RiWallet3Line size={32} />
                  <span className="text-[10px] font-black uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg">Wallet</span>
                </div>
                <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Available for Payout</p>
                <h2 className="text-4xl font-black mt-1 italic tracking-tighter">$842.50</h2>
                <a href="/payout">
                  <button className="w-full mt-6 py-4 bg-[#102321] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white hover:text-[#102321] transition-all">
                    Request Payout
                  </button>
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-stone-100 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-6 flex items-center gap-2 italic">
                <RiHistoryLine className="text-[#F56476]" /> Transaction Log
              </h3>
              <div className="space-y-5">
                {[
                  { desc: 'Chapter 12 Early Access', amount: '+120 Coins' },
                  { desc: 'Monthly Sub Share', amount: '+4,200 Coins' },
                  { desc: 'Platform Payout', amount: '-$500.00' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs border-b border-stone-50 pb-2">
                    <span className="text-[#102321] font-black uppercase text-[10px] tracking-tight">{item.desc}</span>
                    <span className={`font-black italic ${item.amount.startsWith('+') ? 'text-emerald-600' : 'text-[#F56476]'}`}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 📚 MY SERIES --- */}
        <div className="mt-16">
           <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 italic flex items-center gap-3">
             <div className="h-[2px] w-8 bg-[#F56476]" /> Active Series
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-stone-100 p-5 rounded-[2.5rem] flex items-center gap-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                 <div className="w-24 h-32 bg-[#edf7f6] rounded-[1.5rem] overflow-hidden shrink-0 border border-stone-100 relative shadow-inner">
                    <div className="w-full h-full bg-gradient-to-t from-[#F56476]/30 to-transparent"></div>
                 </div>
                 <div className="flex-1">
                    <h4 className="font-black uppercase tracking-tighter text-xl italic leading-none text-[#102321]">Shadow of Malawi</h4>
                    <p className="text-stone-400 text-[10px] uppercase font-black tracking-widest mt-2">Action • 14 Chapters</p>
                    <div className="mt-5 flex gap-2">
                       <a href="/edit/shadow-of-malawi">
                        <button className="px-5 py-2.5 border border-stone-200 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#F56476] hover:text-white hover:border-[#F56476] transition-all flex items-center gap-1">
                          Edit <RiExternalLinkLine />
                        </button>
                       </a>
                       <a href="/analytics/shadow-of-malawi">
                        <button className="px-5 py-2.5 bg-[#edf7f6] rounded-xl text-[9px] font-black uppercase tracking-widest text-[#102321] hover:bg-[#102321] hover:text-white transition-all">
                          Analytics
                        </button>
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CreatorDashboard;