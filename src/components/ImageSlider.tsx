"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const sliderImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 1",
    title: "Executive Leadership"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 2",
    title: "Community Advocate"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 3",
    title: "Business Excellence"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 4",
    title: "Humanitarian Leader"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 5",
    title: "Strategic Visionary"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 6",
    title: "Inspiring Mentor"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 7",
    title: "Thought Leader"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 8",
    title: "Innovation Driver"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    alt: "Aisha Abdullahi Adamu - Professional Portrait 9",
    title: "Change Maker"
  }
]

export default function ImageSlider() {
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId: number
    let position = 0
    const speed = 1 // pixels per frame
    const totalWidth = slider.scrollWidth
    const visibleWidth = slider.clientWidth

    const animate = () => {
      if (!isPaused) {
        position -= speed
        if (position <= -(totalWidth - visibleWidth)) {
          position = 0
        }
        slider.scrollLeft = -position
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">

        <div className="relative">
          {/* Main Slider Container */}
          <div 
            ref={sliderRef}
            className="flex space-x-6 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate images for seamless loop */}
            {[...sliderImages, ...sliderImages].map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-80 h-64 relative group cursor-pointer"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
