"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Flower SVG components with different designs
const FlowerSVG1 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C12 8 12 2 16 2C20 2 20 8 20 8C20 8 20 12 16 12C12 12 12 8 12 8Z" fill="#FFB7D5" />
    <path d="M12 8C12 8 12 2 8 2C4 2 4 8 4 8C4 8 4 12 8 12C12 12 12 8 12 8Z" fill="#FF8FB8" />
    <path d="M12 8C12 8 12 14 8 14C4 14 4 8 4 8C4 8 4 4 8 4C12 4 12 8 12 8Z" fill="#FF6B9C" />
    <path d="M12 8C12 8 12 14 16 14C20 14 20 8 20 8C20 8 20 4 16 4C12 4 12 8 12 8Z" fill="#FF4785" />
    <circle cx="12" cy="8" r="2" fill="#FFDF65" />
  </svg>
)

const FlowerSVG2 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12L8 4L12 8L16 4L12 12Z" fill="#FF8FB8" />
    <path d="M12 12L20 8L16 12L20 16L12 12Z" fill="#FF6B9C" />
    <path d="M12 12L16 20L12 16L8 20L12 12Z" fill="#FF4785" />
    <path d="M12 12L4 16L8 12L4 8L12 12Z" fill="#FFB7D5" />
    <circle cx="12" cy="12" r="2" fill="#FFDF65" />
  </svg>
)

const FlowerSVG3 = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="3" fill="#FFB7D5" />
    <circle cx="7" cy="12" r="3" fill="#FF8FB8" />
    <circle cx="12" cy="17" r="3" fill="#FF6B9C" />
    <circle cx="17" cy="12" r="3" fill="#FF4785" />
    <circle cx="12" cy="12" r="2" fill="#FFDF65" />
  </svg>
)

// Flower component with animation
interface FlowerProps {
  x: number
  delay: number
  duration: number
  size: number
  rotation: number
  type: number
}

const Flower = ({ x, delay, duration, size, rotation, type }: FlowerProps) => {
  const FlowerComponent = type === 1 ? FlowerSVG1 : type === 2 ? FlowerSVG2 : FlowerSVG3

  return (
    <motion.div
      className="absolute"
      initial={{
        x: `${x}%`,
        y: -50,
        rotate: 0,
        opacity: 0.8,
      }}
      animate={{
        y: "110%",
        rotate: rotation,
        opacity: [0.8, 0.9, 0.7, 0.8, 0.6],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{ width: size }}
    >
      <FlowerComponent className="w-full h-full drop-shadow-md" />
    </motion.div>
  )
}

export function FallingFlowers() {
  const [flowers, setFlowers] = useState<FlowerProps[]>([])

  useEffect(() => {
    // Generate random flowers
    const newFlowers = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position
      delay: Math.random() * 5, // Random delay
      duration: 7 + Math.random() * 10, // Random duration between 7-17s
      size: 20 + Math.random() * 30, // Random size between 20-50px
      rotation: Math.random() * 360, // Random rotation
      type: Math.floor(Math.random() * 3) + 1, // Random flower type (1-3)
    }))

    setFlowers(newFlowers)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flowers.map((flower, index) => (
        <Flower
          key={index}
          x={flower.x}
          delay={flower.delay}
          duration={flower.duration}
          size={flower.size}
          rotation={flower.rotation}
          type={flower.type}
        />
      ))}
    </div>
  )
}

