'use client';
import { 
  RiFlashlightLine, RiSwordLine, RiGhostLine, 
  RiHeartsLine, RiMickeyLine, RiCompass3Line, 
  RiArrowRightLine, RiTrophyLine 
} from "react-icons/ri";

const categories = [
  { name: 'Action', icon: <RiSwordLine size={24} />, count: '1.2k Series', color: 'bg-orange-500' },
  { name: 'Horror', icon: <RiGhostLine size={24} />, count: '840 Series', color: 'bg-purple-600' },
  { name: 'Romance', icon: <RiHeartsLine size={24} />, count: '2.5k Series', color: 'bg-[#F56476]' },
  { name: 'Comedy', icon: <RiMickeyLine size={24} />, count: '1.1k Series', color: 'bg-yellow-400' },
  { name: 'Fantasy', icon: <RiCompass3Line size={24} />, count: '3.2k Series', color: 'bg-blue-500' },
  { name: 'Sci-Fi', icon: <RiFlashlightLine size={24} />, count: '920 Series', color: 'bg-emerald-500' },
];

const classics = [
  { id: 1, title: "The First Circuit", author: "H.J. Miller", year: "2018", views: "45.2M" },
  { id: 2, title: "Azure Winds", author: "Sato Kenji", year: "2019", views: "38.1M" },
  { id: 3, title: "Neon Paddock", author: "Vera Storm", year: "2020", views: "52.4M" },
];

const CategoriesPage = () => {
  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 🏎️ HEADER --- */}
        <div className="mb-20 text-center md:text-left">
          <h4 className="text-[#F56476] font-black tracking-[0.3em] uppercase text-[10px] mb-4 italic">The Library Map</h4>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Choose Your <br /> <span className="text-[#F56476]">Lane.</span>
          </h1>
        </div>

        {/* --- 🗺️ EXPLORE SECTION --- */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] italic">Explore Genres</h2>
            <div className="h-[2px] flex-1 bg-stone-200/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <a 
                key={i} 
                href={`/categories/${cat.name.toLowerCase()}`}
                className="group relative bg-white border border-stone-200 p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#F56476]/10 hover:-translate-y-2"
              >
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px]">
                  <div className={`w-14 h-14 ${cat.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter mt-6">{cat.name}</h3>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mt-1">{cat.count}</p>
                  </div>
                </div>
                {/* Decorative background number */}
                <span className="absolute -bottom-4 -right-2 text-9xl font-black text-[#edf7f6] italic pointer-events-none group-hover:text-[#F56476]/5 transition-colors">
                  0{i + 1}
                </span>
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <RiArrowRightLine className="text-[#F56476]" size={24} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* --- 🏆 CLASSICS SECTION (Hall of Fame) --- */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] italic flex items-center gap-3">
               <RiTrophyLine className="text-[#F56476]" /> Paddock Classics
            </h2>
            <div className="h-[2px] flex-1 bg-stone-200/60" />
          </div>

          <div className="space-y-4">
            {classics.map((classic) => (
              <a 
                key={classic.id}
                href={`/series/${classic.id}`}
                className="flex flex-col md:flex-row items-center gap-8 bg-white/50 border border-stone-100 p-6 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all group"
              >
                {/* Book Spine Look */}
                <div className="w-full md:w-32 h-40 bg-[#102321] rounded-xl shrink-0 shadow-lg flex items-center justify-center text-white/10 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                   <span className="font-black italic text-4xl group-hover:scale-125 transition-transform duration-700">T</span>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <p className="text-[#F56476] text-[9px] font-black uppercase tracking-widest mb-1">Hall of Fame • {classic.year}</p>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">{classic.title}</h3>
                  <p className="text-stone-400 text-xs font-bold uppercase mt-1">Authored by <span className="text-[#102321]">{classic.author}</span></p>
                </div>

                <div className="flex gap-10 pr-6">
                  <div className="text-center">
                    <p className="text-[9px] font-black text-stone-300 uppercase tracking-widest">Views</p>
                    <p className="text-xl font-black italic">{classic.views}</p>
                  </div>
                  <div className="w-[1px] h-10 bg-stone-200 hidden md:block" />
                  <button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#F56476] group-hover:border-[#F56476] group-hover:text-white transition-all">
                    <RiArrowRightLine />
                  </button>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CategoriesPage;