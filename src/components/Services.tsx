import { SERVICES_CONTENT } from "../constants";

const ARTISTS = [
  { name: "Elena Rossi", specialty: "Muralist", description: "Elena blends contemporary textures with classic renovation aesthetics.", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Julian Chen", specialty: "Industrial Sculptor", description: "Julian specializes in raw metal fixtures and minimalist steel structures.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Sasha Meyer", specialty: "Textile Designer", description: "Sasha creates custom upholstery and acoustic wall hangings.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Marcus Thorne", specialty: "Carpentry", description: "Expert in reclaimed wood and hidden storage solutions.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Aria Vance", specialty: "Glass Blower", description: "Crafts bespoke lighting fixtures and glass partitions.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "David Kross", specialty: "Lighting Architect", description: "Focuses on the interplay between natural light and smart LEDs.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Lila Bourne", specialty: "Ceramicist", description: "Creates organic, hand-thrown tiles for premium kitchens.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800", badge: "Spotlight" },
  { name: "Kaito Sato", specialty: "Digital Joiner", description: "Our latest addition using 3D printing to create modular wooden joints.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800", badge: "Upcomer" },
];

const Services = () => {
  return (
    <section className="bg-[#edf7f6] text-[#102321]" id="services">
      <div className="max-w-7xl mx-auto py-24 px-4">
        
        {/* --- 🎨 ARTISTS SPOTLIGHT --- */}
        <div className="text-center mb-16">
          <h4 className="text-[#F56476] font-black tracking-[0.2em] uppercase text-[10px] mb-3">
            The Creative Collective
          </h4>
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter italic italic">
            Artists & Visionaries
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {ARTISTS.map((artist, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-stone-200 p-6 rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#102321]/5 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#F56476] rounded-full scale-0 group-hover:scale-105 transition-transform duration-500 -z-10 opacity-20" />
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-[#edf7f6] shadow-xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className={`absolute -top-1 -right-2 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-md text-white ${artist.badge === 'Upcomer' ? 'bg-[#102321]' : 'bg-[#F56476]'}`}>
                  {artist.badge}
                </div>
              </div>
              
              <h3 className="text-lg font-black uppercase tracking-tight mb-1">{artist.name}</h3>
              <p className="text-[10px] text-[#F56476] font-black uppercase tracking-[0.15em] mb-3">
                {artist.specialty}
              </p>
              <p className="text-xs text-stone-500 leading-relaxed font-medium">
                {artist.description}
              </p>
            </div>
          ))}
        </div>

        <hr className="mb-24 border-stone-200" />

        {/* --- 🏗️ RENOVATION SERVICES --- */}
        <div className="text-center mb-20">
          <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter italic">
            Renovation Services
          </h2>
          <div className="w-20 h-1.5 bg-[#F56476] mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-32">
          {SERVICES_CONTENT.map((service, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className={`lg:w-1/2 group relative ${index % 2 === 0 ? "" : "lg:order-2"}`}>
                <div className="absolute -inset-4 bg-[#F56476]/5 rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <img
                  src={service.image.src}
                  alt={service.title}
                  className="relative w-full h-80 lg:h-[500px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className={`lg:w-1/2 space-y-6 ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
                <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
                  {service.title}
                </h3>
                <p className="text-lg lg:text-xl text-stone-600 leading-relaxed font-medium">
                  {service.description}
                </p>
                <button className="px-8 py-4 bg-[#102321] text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#F56476] transition-all shadow-lg active:scale-95">
                  Explore Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;