"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react'
import { Instagram, Heart, Youtube } from 'lucide-react'
import { useTheme } from "next-themes"
import Particles from "@/components/ui/particles"

export default function AboutThem() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft() {
    const difference = +new Date('2024-11-25T11:00:00') - +new Date()
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const profiles = [
    {
      name: "Nidhin S",
      flipText: "The Creative Soul",
      image: "/profile-1.jpg",
      description: "Nidhin is full of passion, creativity, and a warm spirit. His adventurous side and genuine heart bring a spark to all he touches, sharing joy and authenticity with everyone around him.",
      instagram: "https://www.instagram.com/nidhin_panoor/",
      youtube: "https://www.youtube.com/@Nidhin-Princy",
      initialLikes: 188
    },
    
    {
      name: "Princy EK",
      flipText: "The Elegant Spirit",
      image: "/profile2.jpg",
      description: "Princy's story is one of elegance, charm, and strength. Her grace and warmth bring joy to everyone around her, while her caring nature and creative spirit have endeared her to family and friends alike.",
      instagram: "https://www.instagram.com/__princy_996/",
      youtube: "https://www.youtube.com/@Nidhin-Princy",
      initialLikes: 156
    }
  ]

  if (!mounted) return null

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-8 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgimg-2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <Particles
        className="absolute inset-0 z-10"
        quantity={50}
        ease={80}
        color={color}
        refresh
      />

      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center h-full">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-cursive text-center text-blue-600 dark:text-blue-400 mb-4"
        >
          About Them
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-cursive text-yellow-500">
            Where Mech Meets Civil
          </h2>
        </motion.div>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 font-serif italic">
          * double tap on profile to show some love ❤️
        </p>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          <ProfileCard {...profiles[0]} />
          
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg p-3 shadow-lg border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          <ProfileCard {...profiles[1]} />
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display&display=swap');

        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  )
}

function ProfileCard({ name, flipText, image, description, instagram, youtube, initialLikes }: {
  name: string
  flipText: string
  image: string
  description: string
  instagram: string
  youtube: string
  initialLikes: number
}) {
  const [likes, setLikes] = useState(initialLikes)
  const [likeEffects, setLikeEffects] = useState<{ id: number; scale: number; rotation: number }[]>([])

  const handleLike = () => {
    setLikes(prev => prev + 1)
    setLikeEffects(prev => [
      ...prev,
      {
        id: Date.now(),
        scale: Math.random() * 0.5 + 1,
        rotation: Math.random() * 30 - 15
      }
    ])

    setTimeout(() => {
      setLikeEffects(prev => prev.slice(1))
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleLike}
      className="relative group cursor-pointer transform-gpu h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/40 dark:hover:bg-gray-900/40 hover:shadow-2xl p-4 h-full flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 ring-4 ring-white/50">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-cursive text-blue-600 dark:text-blue-400 mb-2 text-center">
            {name}
          </h2>

          <h3 className="text-xl md:text-2xl font-cursive text-yellow-500 mb-2 text-center">
            {flipText}
          </h3>

          <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 font-serif text-center leading-relaxed mb-4">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors transform hover:scale-110"
          >
            <Youtube className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition-colors transform hover:scale-110"
          >
            <Instagram className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <div className="flex items-center gap-1 text-red-500">
            <Heart className="w-6 h-6 md:w-8 md:h-8 transition-transform hover:scale-110" />
            <span className="text-lg font-medium">{likes}</span>
          </div>
        </div>

        <AnimatePresence>
          {likeEffects.map((effect) => (
            <motion.div
              key={effect.id}
              initial={{ scale: 0, opacity: 1, rotate: 0 }}
              animate={{ scale: effect.scale, opacity: 0, rotate: effect.rotation }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <Heart className="w-20 h-20 md:w-32 md:h-32 text-red-500 fill-current" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}