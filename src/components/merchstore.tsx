'use client';
import { useState } from "react";
import { 
  RiShoppingBag3Line, RiFilter3Line, RiArrowRightUpLine, 
  RiStarFill, RiFireLine 
} from "react-icons/ri";

const products = [
  { id: 1, name: "Paddock Hoodie v1", price: 65, category: "Apparel", tag: "Best Seller", img: "https://placehold.co/400x500/102321/ffffff?text=Paddock+Hoodie" },
  { id: 2, name: "Shadow of Malawi Tee", price: 32, category: "Artist Series", tag: "Limited", img: "https://placehold.co/400x500/F56476/ffffff?text=Artist+Tee" },
  { id: 3, name: "Toonima Dad Hat", price: 28, category: "Accessories", tag: "New", img: "https://placehold.co/400x500/102321/ffffff?text=Logo+Hat" },
  { id: 4, name: "Volume 01: Origins", price: 45, category: "Hardcover", tag: "Collector", img: "https://placehold.co/400x500/F56476/ffffff?text=Hardcover+Vol1" },
  { id: 5, name: "Circuit Desk Mat", price: 38, category: "Setup", tag: "Restock", img: "https://placehold.co/400x500/102321/ffffff?text=Desk+Mat" },
  { id: 6, name: "Creator Enamel Pin", price: 12, category: "Accessories", tag: "Popular", img: "https://placehold.co/400x500/F56476/ffffff?text=Enamel+Pin" },
];

const MerchStore = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="bg-[#edf7f6] min-h-screen text-[#102321] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- 🏷️ STORE HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-stone-200 pb-12">
          <div>
            <div className="flex items-center gap-2 text-[#F56476] mb-3">
              <RiFireLine className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Season 2026 Drop</span>
            </div>
            <h1 className="text-6xl font-black uppercase tracking-tighter italic leading-none">
              Toonima <span className="text-[#F56476]">Supply</span>
            </h1>
            <p className="text-stone-400 text-sm mt-4 font-bold uppercase tracking-tight max-w-md">
              High-performance gear for creators and readers. Limited quantities available per stint.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["All", "Apparel", "Artist Series", "Accessories"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === cat ? "bg-[#102321] text-white" : "bg-white text-stone-400 border border-stone-200 hover:border-[#F56476]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- 📦 PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.filter(p => filter === "All" || p.category === filter).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Box */}
              <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Product Tag */}
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full shadow-lg border border-stone-50">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#102321]">{product.tag}</span>
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-[#102321]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <button className="bg-[#F56476] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                    <RiShoppingBag3Line size={18} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-8 flex justify-between items-start px-2">
                <div>
                  <p className="text-[10px] font-black text-[#F56476] uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter group-hover:text-[#F56476] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-2 text-[#102321]/30">
                    <RiStarFill size={12} />
                    <RiStarFill size={12} />
                    <RiStarFill size={12} />
                    <RiStarFill size={12} />
                    <RiStarFill size={12} />
                  </div>
                </div>
                <span className="text-2xl font-black italic tracking-tighter text-[#102321]">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* --- 🏁 FOOTER CTA --- */}
        <div className="mt-32 bg-[#102321] rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
              Worldwide <span className="text-[#F56476]">Shipping</span>
            </h2>
            <p className="text-stone-400 font-bold uppercase tracking-widest text-[10px] mb-8">
              Fast logistics. Premium packaging. Collector grade quality.
            </p>
            <div className="flex justify-center gap-6">
               <div className="text-white flex flex-col items-center">
                  <span className="text-2xl font-black italic">3-5</span>
                  <span className="text-[8px] uppercase tracking-widest font-bold text-stone-500">Day Delivery</span>
               </div>
               <div className="w-[1px] h-10 bg-white/10" />
               <div className="text-white flex flex-col items-center">
                  <span className="text-2xl font-black italic">100%</span>
                  <span className="text-[8px] uppercase tracking-widest font-bold text-stone-500">Secure Checkout</span>
               </div>
            </div>
          </div>
          {/* Background Decorative Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/[0.02] uppercase italic pointer-events-none select-none">
            TOONIMA
          </div>
        </div>

      </div>
    </div>
  );
};

export default MerchStore;