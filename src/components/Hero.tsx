"use client";

import { useEffect, useRef, useState } from "react"
import { HERO_CONTENT } from "../constants"

const featured = [
  { id: 1, title: "Midnight City", img: "https://placehold.co/300x400" },
  { id: 2, title: "Ashes of Tomorrow", img: "https://placehold.co/300x400" },
  { id: 3, title: "Golden Sands", img: "https://placehold.co/300x400" },
  { id: 4, title: "Silent Thunder", img: "https://placehold.co/300x400" },
  { id: 5, title: "Hidden Truth", img: "https://placehold.co/300x400" },
]

const Hero = () => {
  const scrollRef = useRef(null)
  const [paused, setPaused] = useState(false)

  // Double the data for the infinite loop trick
  const infiniteItems = [...featured, ...featured]

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationFrameId
    const scrollSpeed = 1 // Adjust speed here (higher = faster)

    const scroll = () => {
      if (!paused) {
        el.scrollLeft += scrollSpeed

        // Teleport back to start when reaching the midpoint
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [paused])

  return (
    <section className="max-w-7xl mx-auto border-b-2 overflow-hidden">
      <div className="flex flex-col items-center my-20 w-full">
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>

        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>

        <img
          src={HERO_CONTENT.image.src}
          className="w-full h-[65vh] object-cover rounded-2xl p-2"
          alt="Hero"
        />

        {/* ⭐ INFINITE FEATURED CAROUSEL */}
        <div className="w-full mt-14 px-2">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wide">
            Featured
          </h2>

          <div
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-4 overflow-x-auto no-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {infiniteItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="min-w-[240px] h-[320px] bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[75%] object-cover"
                />
                <div className="p-3 font-semibold">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero