import { useState, useEffect } from 'react'
import { urlFor } from '../lib/sanity'

interface HeroSliderProps {
  images: any[] // Can be string URLs or Sanity image objects
  overlayImage?: any // Can be string URL or Sanity image object
  height?: number
}

function getImageUrl(img: any, width = 1800): string {
  if (typeof img === 'string') return img
  if (img?.asset) return urlFor(img).width(width).url()
  return ''
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

  const overlayUrl = overlayImage ? getImageUrl(overlayImage, 600) : undefined

  return (
    <div className="hero-slider" style={{ height }}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${getImageUrl(img)})` }}
        >
          {overlayUrl && (
            <div className="slide-overlay">
              <img src={overlayUrl} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
