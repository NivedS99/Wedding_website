"use client"

import Image from 'next/image'
import { motion } from "framer-motion"
import { MapPin, Calendar as CalendarIcon, Clock, Home, Heart, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import Particles from "@/components/ui/particles"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function EventDetails() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")
  const [mounted, setMounted] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date(2024, 10, 25))
  const [showInvitation, setShowInvitation] = useState(false)

  useEffect(() => {
    setMounted(true)
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  if (!mounted) return null

  const cardClasses = "bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1"

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center py-8 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgimg4.jpg"
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
      />

      <div className="relative z-20 container mx-auto flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-cursive text-center text-teal-600 dark:text-teal-400 mb-8"
        >
          Event Details
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Wedding Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cardClasses}
          >
            <div className="flex items-center gap-3 mb-6">
              <CalendarIcon className="w-6 h-6 text-coral-500" />
              <h2 className="text-2xl font-cursive text-coral-600">Wedding Ceremony</h2>
            </div>
            
            <div className="space-y-4 font-serif">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                components={{
                  DayContent: ({ date }) => {
                    const isWeddingDay = date.getDate() === 25 && date.getMonth() === 10 && date.getFullYear() === 2024
                    const isEveningParty = date.getDate() === 24 && date.getMonth() === 10 && date.getFullYear() === 2024
                    const isEngagementDay = date.getDate() === 19 && date.getMonth() === 9 && date.getFullYear() === 2024
                    
                    if (isWeddingDay) {
                      return <div title="Wedding Day"><Heart className="h-4 w-4 text-red-500 fill-current" /></div>
                    }
                    if (isEveningParty) {
                      return <div title="Evening Party"><Heart className="h-4 w-4 text-yellow-500 fill-current" /></div>
                    }
                    if (isEngagementDay) {
                      return <div title="Engagement Day"><Heart className="h-4 w-4 text-red-500 fill-current" /></div>
                    }
                    return date.getDate()
                  }
                }}
              />

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-teal-600" />
                <p className="text-gray-700 dark:text-gray-200">
                  Muhurtham between 11:30 AM to 12:00 PM
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 mt-1 text-teal-600" />
                <div>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">Bride's Residence</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Nabhass, Idikkuniyil, Mukkalikara, Kariyad South PO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={cardClasses}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-coral-500" />
              <h2 className="text-xl font-cursive text-coral-600">Location</h2>
            </div>
            
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3906.325028535807!2d75.5755!3d11.742137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQ0JzMxLjciTiA3NcKwMzQnMzEuOCJF!5e0!3m2!1sen!2sin!4v1731092682847!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-center font-cursive text-lg text-gray-700 dark:text-gray-200">
              Join us at this special place, where we're hoping to celebrate our love with your presence
            </p>
          </motion.div>

          {/* Evening Party Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`md:col-span-2 ${cardClasses}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <CalendarIcon className="w-6 h-6 text-coral-500" />
              <h2 className="text-2xl font-cursive text-coral-600">Evening Party</h2>
            </div>
            
            <div className="space-y-4 font-serif">
              <p className="text-gray-700 dark:text-gray-200 italic">
                "Come celebrate with us in an evening of joy and laughter as we gather to share in love, good food, and happy memories. Let's toast to new beginnings and create moments to remember!"
              </p>

              <div className="flex items-start gap-3">
                <CalendarIcon className="w-5 h-5 mt-1 text-teal-600" />
                <p className="text-gray-700 dark:text-gray-200">
                  Sunday, 24th November 2024
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 mt-1 text-teal-600" />
                <p className="text-gray-700 dark:text-gray-200">
                  At our residence, Pookom, Panoor
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-teal-600" />
                <div>
                  <p className="text-gray-700 dark:text-gray-200">Contact No: 7411088174</p>
                  <p className="text-gray-700 dark:text-gray-200">Alternate No: 8884519929</p>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <RainbowButton onClick={() => setShowInvitation(true)}>
                  View our invitation
                </RainbowButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={showInvitation} onOpenChange={setShowInvitation}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] overflow-auto p-0 sm:p-6">
          <DialogTitle className="sr-only">Wedding Invitation</DialogTitle>
          <Image
            src="/M1.png"
            alt="Wedding Invitation"
            width={800}
            height={1200}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display&display=swap');

        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        :root {
          --color-coral-500: #FF7F6B;
          --color-coral-600: #FF6B54;
          --color-teal-600: #0D9488;
        }
      `}</style>
    </div>
  )
}