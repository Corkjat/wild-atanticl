import { useState, useEffect } from 'react'

interface HeroSliderProps {
  images: string[]
  overlayImage?: string
  height?: number
}

export default function HeroSlider({ images, overlayImage, height = 600 }: HeroSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="hero-slider" style={{ height }}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {overlayImage && (
            <div className="slide-overlay">
              <img src={overlayImage} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
