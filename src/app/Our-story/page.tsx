"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import Particles from "@/components/ui/particles"
import { BorderBeam } from "@/components/ui/border-beam"
import { motion } from "framer-motion"
import PulsatingButton from "@/components/ui/pulsating-button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function OurStory() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")
  const [visibleText, setVisibleText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const loveStory = `Nidhin and Princy’s journey began like any other, just two strangers crossing paths. But as time went on, their connection grew into something rare and beautiful. Through shared laughter, quiet moments, and the many ups and downs of life, they discovered a love that felt like it was always meant to be.

Together, they’ve built a bond rooted in trust, respect, and shared dreams. As they step into this new chapter, they’re beyond grateful to celebrate this day with family and friends—the people who have been part of their story all along. Here’s to a lifetime of love, laughter, and all the little moments that make it extraordinary`

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  useEffect(() => {
    if (currentIndex < loveStory.length) {
      const timeout = setTimeout(() => {
        setVisibleText(prevText => prevText + loveStory[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, loveStory])

  const events = [
    { title: 'First Meet', date: 'September 2019', description: 'Where our story began, with a chance encounter that changed everything.', image: '/meet.png' },
    { title: 'Proposal', date: 'November 2023', description: 'The moment we decided to turn our love story into a lifetime commitment.', image: '/proposal.png' },
    { title: 'Our Chance Meeting ', date: 'December 2023', description: 'A magical evening that marked the beginning of our journey together.', image: '/card-2.jpg' },
   
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgimg-3.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <Particles
        className="absolute inset-0 z-10"
        quantity={50}
        ease={80}
        color={color}
        refresh
      />

      <div className="container relative z-20 mx-auto px-4 py-8 md:py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-cursive text-center text-pink-600 dark:text-pink-400 mb-12"
        >
          Our Story
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <Image
                src="/nidhin-princy.jpg"
                alt="Nidhin and Princy"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <BorderBeam size={400} duration={15} delay={5} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <div className="text-gray-700 dark:text-gray-200 font-serif leading-relaxed text-base md:text-lg mb-6">
              {visibleText.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Drawer>
            <DrawerTrigger asChild>
              <PulsatingButton>Our Journey</PulsatingButton>
            </DrawerTrigger>
            <DrawerContent className="h-[85vh] sm:h-auto">
              <div className="mx-auto w-full max-w-4xl px-4 overflow-y-auto max-h-[calc(85vh-4rem)] sm:max-h-none">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl font-cursive text-pink-600 dark:text-pink-400">Our Journey</DrawerTitle>
                  <DrawerDescription>Explore the key moments of our love story</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {events.map((event, index) => (
                        <div 
                          key={index} 
                          className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 ${activeImage === event.image ? 'ring-4 ring-pink-400 shadow-lg shadow-pink-400/50' : ''}`}
                          onClick={() => setActiveImage(event.image)}
                        >
                          <h3 className="text-xl font-cursive text-pink-600 dark:text-pink-400 mb-2">{event.title}</h3>
                          <p className="text-sm text-pink-800 dark:text-pink-200 mb-2 font-serif">{event.date}</p>
                          <p className="text-gray-600 dark:text-gray-300 font-serif text-sm">
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="relative aspect-square w-full">
                      {events.map((event, index) => (
                        <Image
                          key={index}
                          src={event.image}
                          alt={event.title}
                          fill
                          className={`object-cover rounded-xl transition-opacity duration-300 ${activeImage === event.image ? 'opacity-100' : 'opacity-0'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <PulsatingButton>Close</PulsatingButton>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </motion.div>
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
// "use client"

// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import { useTheme } from "next-themes"
// import Particles from "@/components/ui/particles"
// import { BorderBeam } from "@/components/ui/border-beam"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"

// export default function OurStory() {
//   const { theme } = useTheme()
//   const [color, setColor] = useState("#ffffff")
//   const [visibleText, setVisibleText] = useState("")
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [activeImage, setActiveImage] = useState<string | null>(null)

//   const loveStory = `From strangers to best friends, and now soulmates, our journey has been a beautiful blend of laughter, growth, and endless love. Our paths first crossed on an ordinary day, but something extraordinary sparked between us. Over countless conversations, shared dreams, and little adventures, we discovered a love that felt destined.

// Through ups and downs, we've stood by each other, learning, laughing, and growing stronger together. Now, as we step into this new chapter, we are excited to celebrate our union with the people we cherish most. Here's to a lifetime of love, laughter, and happily ever after.

// Every moment spent together has been a treasure, each challenge an opportunity to grow closer. From late-night talks that stretched into dawn, to spontaneous road trips that led us to new horizons, we've built a foundation of trust, respect, and unwavering support. Our love story is not just about the big moments, but also the countless small gestures and shared glances that speak volumes.

// As we prepare to say "I do," we're filled with gratitude for the journey that brought us here and excitement for the adventures that lie ahead. Our wedding day is not just a celebration of our love, but a testament to the power of true partnership and the beautiful things that can happen when two hearts beat as one.`

//   useEffect(() => {
//     setColor(theme === "dark" ? "#ffffff" : "#000000")
//   }, [theme])

//   useEffect(() => {
//     if (currentIndex < loveStory.length) {
//       const timeout = setTimeout(() => {
//         setVisibleText(prevText => prevText + loveStory[currentIndex])
//         setCurrentIndex(prevIndex => prevIndex + 1)
//       }, 30)
//       return () => clearTimeout(timeout)
//     }
//   }, [currentIndex, loveStory])

//   const events = [
//     { title: 'First Meet', date: 'January 2023', description: 'Where our story began, with a chance encounter that changed everything.', image: '/GKS09793.jpg' },
//     { title: 'First Date', date: 'March 2023', description: 'A magical evening that marked the beginning of our journey together.', image: '/GKS09957.jpg' },
//     { title: 'Proposal', date: 'September 2023', description: 'The moment we decided to turn our love story into a lifetime commitment.', image: '/GKS09987.jpg' }
//   ]

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-900">
//       <Particles
//         className="absolute inset-0"
//         quantity={50}
//         ease={80}
//         color={color}
//         refresh
//       />

//       <div className="container mx-auto px-4 py-8 md:py-16">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl lg:text-6xl font-cursive text-center text-yellow-600 dark:text-yellow-400 mb-12"
//         >
//           Our Story
//         </motion.h1>

//         <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative rounded-2xl overflow-hidden shadow-2xl group"
//           >
//             <div className="relative aspect-[3/4] w-full">
//               <Image
//                 src="/123.jpg"
//                 alt="Nidhin and Princy"
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
//             <BorderBeam size={400} duration={15} delay={5} />
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl"
//           >
//             <p className="text-gray-700 dark:text-gray-200 font-serif leading-relaxed text-base md:text-lg mb-6">
//               {visibleText}
//             </p>
//           </motion.div>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-16 flex justify-center"
//         >
//           <Drawer>
//             <DrawerTrigger asChild>
//               <Button variant="outline" className="text-lg font-serif">Our Journey</Button>
//             </DrawerTrigger>
//             <DrawerContent>
//               <div className="mx-auto w-full max-w-4xl">
//                 <DrawerHeader>
//                   <DrawerTitle className="text-2xl font-cursive text-yellow-600 dark:text-yellow-400">Our Journey</DrawerTitle>
//                   <DrawerDescription>Explore the key moments of our love story</DrawerDescription>
//                 </DrawerHeader>
//                 <div className="p-4 space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-4">
//                       {events.map((event, index) => (
//                         <div 
//                           key={index} 
//                           className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
//                           onClick={() => setActiveImage(event.image)}
//                         >
//                           <h3 className="text-xl font-cursive text-yellow-600 dark:text-yellow-400 mb-2">{event.title}</h3>
//                           <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2 font-serif">{event.date}</p>
//                           <p className="text-gray-600 dark:text-gray-300 font-serif text-sm">
//                             {event.description}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="relative aspect-square w-full">
//                       {events.map((event, index) => (
//                         <Image
//                           key={index}
//                           src={event.image}
//                           alt={event.title}
//                           fill
//                           className={`object-cover rounded-xl transition-opacity duration-300 ${activeImage === event.image ? 'opacity-100' : 'opacity-0'}`}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <DrawerFooter>
//                   <DrawerClose asChild>
//                     <Button variant="outline">Close</Button>
//                   </DrawerClose>
//                 </DrawerFooter>
//               </div>
//             </DrawerContent>
//           </Drawer>
//         </motion.div>
//       </div>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display&display=swap');

//         .font-cursive {
//           font-family: 'Dancing Script', cursive;
//         }

//         .font-serif {
//           font-family: 'Playfair Display', serif;
//         }
//       `}</style>
//     </div>
//   )
// }
////////////////////////////
// "use client"

// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import { useTheme } from "next-themes"
// import Particles from "@/components/ui/particles"
// import { BorderBeam } from "@/components/ui/border-beam"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"

// export default function OurStory() {
//   const { theme } = useTheme()
//   const [color, setColor] = useState("#ffffff")
//   const [visibleText, setVisibleText] = useState("")
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const loveStory = `From strangers to best friends, and now soulmates, our journey has been a beautiful blend of laughter, growth, and endless love. Our paths first crossed on an ordinary day, but something extraordinary sparked between us. Over countless conversations, shared dreams, and little adventures, we discovered a love that felt destined.

// Through ups and downs, we've stood by each other, learning, laughing, and growing stronger together. Now, as we step into this new chapter, we are excited to celebrate our union with the people we cherish most. Here's to a lifetime of love, laughter, and happily ever after`

//   useEffect(() => {
//     setColor(theme === "dark" ? "#ffffff" : "#000000")
//   }, [theme])

//   useEffect(() => {
//     if (currentIndex < loveStory.length) {
//       const timeout = setTimeout(() => {
//         setVisibleText(prevText => prevText + loveStory[currentIndex])
//         setCurrentIndex(prevIndex => prevIndex + 1)
//       }, 30)
//       return () => clearTimeout(timeout)
//     }
//   }, [currentIndex, loveStory])

//   const events = [
//     { title: 'First Meet', date: 'January 2023', description: 'Where our story began, with a chance encounter that changed everything.' },
//     { title: 'First Date', date: 'March 2023', description: 'A magical evening that marked the beginning of our journey together.' },
//     { title: 'Proposal', date: 'September 2023', description: 'The moment we decided to turn our love story into a lifetime commitment.' }
//   ]

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-900">
//       <Particles
//         className="absolute inset-0"
//         quantity={50}
//         ease={80}
//         color={color}
//         refresh
//       />

//       <div className="container mx-auto px-4 py-8 md:py-16">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl lg:text-6xl font-cursive text-center text-yellow-600 dark:text-yellow-400 mb-12"
//         >
//           Our Story
//         </motion.h1>

//         <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative rounded-2xl overflow-hidden shadow-2xl group"
//           >
//             <div className="relative aspect-[4/3] w-full">
//               <Image
//                 src="/123.jpg"
//                 alt="Nidhin and Princy"
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
//             <BorderBeam size={300} duration={15} delay={5} />
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl"
//           >
//             <p className="text-gray-700 dark:text-gray-200 font-serif leading-relaxed text-base md:text-lg">
//               {visibleText}
//             </p>
//           </motion.div>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-16 flex justify-center"
//         >
//           <Drawer>
//             <DrawerTrigger asChild>
//               <Button variant="outline" className="text-lg font-serif">Our Journey</Button>
//             </DrawerTrigger>
//             <DrawerContent>
//               <div className="mx-auto w-full max-w-sm">
//                 <DrawerHeader>
//                   <DrawerTitle className="text-2xl font-cursive text-yellow-600 dark:text-yellow-400">Our Journey</DrawerTitle>
//                   <DrawerDescription>Explore the key moments of our love story</DrawerDescription>
//                 </DrawerHeader>
//                 <div className="p-4 space-y-4">
//                   {events.map((event, index) => (
//                     <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
//                       <h3 className="text-xl font-cursive text-yellow-600 dark:text-yellow-400 mb-2">{event.title}</h3>
//                       <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2 font-serif">{event.date}</p>
//                       <p className="text-gray-600 dark:text-gray-300 font-serif text-sm">
//                         {event.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//                 <DrawerFooter>
//                   <DrawerClose asChild>
//                     <Button variant="outline">Close</Button>
//                   </DrawerClose>
//                 </DrawerFooter>
//               </div>
//             </DrawerContent>
//           </Drawer>
//         </motion.div>
//       </div>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Playfair+Display&display=swap');

//         .font-cursive {
//           font-family: 'Dancing Script', cursive;
//         }

//         .font-serif {
//           font-family: 'Playfair Display', serif;
//         }
//       `}</style>
//     </div>
//   )
// }