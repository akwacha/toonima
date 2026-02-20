'use client';
import { 
  RiMoneyDollarCircleLine, RiGroupLine, RiBookOpenLine, 
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
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 🏎️ DASHBOARD HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter italic">
              Creator <span className="text-[#00D564]">Paddock</span>
            </h1>
            <p className="text-stone-500 text-sm mt-2 font-medium">Welcome back, Chief. Here is your series telemetry.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-[#00D564] transition-all">
              New Chapter
            </button>
          </div>
        </div>

        {/* --- 📊 QUICK STATS --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-stone-900/30 border border-white/5 p-6 rounded-3xl hover:border-[#00D564]/30 transition-colors group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-stone-950 rounded-lg text-stone-400 group-hover:text-[#00D564] transition-colors">
                  {stat.icon}
                </div>
                <span className="text-[#00D564] text-[10px] font-bold flex items-center">
                  <RiArrowUpSLine /> {stat.growth}
                </span>
              </div>
              <p className="text-stone-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- 📈 PERFORMANCE GRAPH (Placeholder) --- */}
          <div className="lg:col-span-8 bg-stone-900/20 border border-white/5 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                <RiBarChartGroupedLine className="text-[#00D564]" /> Readership Growth
              </h3>
              <select className="bg-stone-950 border border-white/10 rounded-lg px-3 py-1 text-[10px] font-bold uppercase outline-none">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            {/* Visual Placeholder for Graph */}
            <div className="h-64 w-full bg-stone-950/50 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 flex items-end px-4 gap-2 opacity-20">
                  {[40, 70, 45, 90, 65, 80, 95, 60, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-[#00D564]" style={{ height: `${h}%` }}></div>
                  ))}
               </div>
               <p className="text-stone-600 text-[10px] font-black uppercase tracking-[0.3em] z-10">Live Telemetry Data</p>
            </div>
          </div>

          {/* --- 💰 REVENUE PANEL --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-[#00D564] to-[#008a41] p-8 rounded-3xl text-black shadow-[0_20px_40px_rgba(0,213,100,0.15)]">
              <div className="flex justify-between items-start mb-6">
                <RiWallet3Line size={32} />
                <span className="text-[10px] font-black uppercase bg-black/10 px-2 py-1 rounded">Wallet</span>
              </div>
              <p className="text-black/60 text-[10px] font-black uppercase tracking-widest">Available for Payout</p>
              <h2 className="text-4xl font-black mt-1">$842.50</h2>
              <button className="w-full mt-6 py-3 bg-black text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:opacity-80 transition-all">
                Request Payout
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-stone-900/20 border border-white/5 rounded-3xl p-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-stone-500 mb-4 flex items-center gap-2">
                <RiHistoryLine /> Recent Transactions
              </h3>
              <div className="space-y-4">
                {[
                  { desc: 'Chapter 12 Early Access', amount: '+120 Coins' },
                  { desc: 'Monthly Subscription Share', amount: '+4,200 Coins' },
                  { desc: 'Platform Payout', amount: '-$500.00' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="text-stone-400 font-medium">{item.desc}</span>
                    <span className={`font-bold ${item.amount.startsWith('+') ? 'text-[#00D564]' : 'text-white'}`}>
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 📚 MY SERIES --- */}
        <div className="mt-12">
           <h3 className="text-sm font-black uppercase tracking-widest mb-6 italic">Active Series</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-stone-900/30 border border-white/5 p-4 rounded-3xl flex items-center gap-6">
                 <div className="w-20 h-28 bg-stone-800 rounded-xl overflow-hidden shrink-0">
                    <div className="w-full h-full bg-gradient-to-t from-[#00D564]/20 to-transparent"></div>
                 </div>
                 <div className="flex-1">
                    <h4 className="font-black uppercase tracking-tighter">Shadow of Malawi</h4>
                    <p className="text-stone-500 text-[10px] uppercase font-bold tracking-widest">Action • 14 Chapters</p>
                    <div className="mt-4 flex gap-2">
                       <button className="px-4 py-2 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-1">
                          Edit <RiExternalLinkLine />
                       </button>
                       <button className="px-4 py-2 bg-stone-950 rounded-lg text-[9px] font-black uppercase tracking-widest text-[#00D564]">Analytics</button>
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