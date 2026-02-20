import { SERVICES_CONTENT } from "../constants"

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
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20 px-4">
        
        {/* --- Artists Spotlight Grid (8 Cards) --- */}
        <div className="text-center mb-16">
          <h4 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">
            The Creative Collective
          </h4>
          <h2 className="text-3xl lg:text-4xl font-light italic tracking-tight">Artists & Visionaries</h2>
        </div>

        {/* Mobile: grid-cols-2 (4 rows)
            Web: grid-cols-4 (2 rows) 
        */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-32">
          {ARTISTS.map((artist, index) => (
            <div key={index} className="p-4 lg:p-6 bg-stone-50 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center text-center group transition-all duration-300 hover:bg-white hover:shadow-md">
              <div className="relative mb-6">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-28 h-28 lg:w-36 lg:h-36 object-cover rounded-full border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute -top-1 -right-1 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-tighter shadow-sm text-white ${artist.badge === 'Upcomer' ? 'bg-blue-600' : 'bg-amber-500'}`}>
                  {artist.badge}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1 text-stone-900">{artist.name}</h3>
              <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mb-3">
                {artist.specialty}
              </p>
              <p className="text-sm text-stone-500 leading-relaxed line-clamp-3">
                {artist.description}
              </p>
            </div>
          ))}
        </div>

        <hr className="mb-20 border-stone-100" />

        {/* --- Renovation Services --- */}
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20 font-light">
          Our Home Renovation Services
        </h2>

        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className="mb-20 flex flex-col lg:flex-row items-center">
            <div className={`lg:w-1/2 mb-8 lg:mb-0 ${index % 2 === 0 ? "" : "lg:order-2"}`}>
              <img
                src={service.image.src}
                alt={service.title}
                className="w-full h-72 lg:h-[450px] object-cover rounded-lg shadow-md"
              />
            </div>

            <div className={`lg:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"}`}>
              <h3 className="text-2xl lg:text-3xl font-medium mb-4">{service.title}</h3>
              <p className="text-lg lg:text-xl text-stone-700 leading-relaxed lg:leading-9">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services