"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Share2, MoreHorizontal, ChevronLeft, ChevronRight, Bookmark, X, Download } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import HeroVideoDialog from "@/components/ui/hero-video-dialog"

const images = [
  { src: "/insta-1.PNG", alt: "pic 1" },
  { src: "/insta-2.PNG", alt: "pic 2" },
  { src: "/insta-3.PNG", alt: "pic 3" }, //happening
  { src: "/insta-4.PNG", alt: "pic 4" },
  { src: "/instapost.jpg", alt: "pic 5" },
  { src: "/meet.png", alt: "pic 6" },
]

const galleryImages = [
 
  { src: "/gallery1.jpg", alt: "pic 1" },
  { src: "/gallery2.jpg", alt: "pic 2" },
  { src: "/gallery22.JPG", alt: "pic 3" },
  { src: "/gallery21.JPG", alt: "pic 4" },
  { src: "/gallery3.jpg", alt: "pic 5" },
  { src: "/gallery4.jpg", alt: "pic 6" },
  { src: "/gallery14.JPG", alt: "pic 7" },
  { src: "/gallery5.JPG", alt: "pic 8" },
  { src: "/gallery25.jpg", alt: "pic 9" },//
  { src: "/gallery6.JPG", alt: "pic 10" },
  { src: "/gallery7.JPG", alt: "pic 11" },
  { src: "/gallery8.JPG", alt: "pic 12" },
  { src: "/gallery9.JPG", alt: "pic 13" },
  { src: "/gallery10.JPG", alt: "pic 14" },
  { src: "/gallery11.JPG", alt: "pic 15" },
  { src: "/gallery12.JPG", alt: "pic 16" },
  { src: "/gallery13.JPG", alt: "pic 17" },
  { src: "/gallery15.JPG", alt: "pic 18" },
  { src: "/gallery16.JPG", alt: "pic 19" },
  { src: "/gallery17.JPG", alt: "pic 20" },
  { src: "/gallery18.JPG", alt: "pic 21" },
  { src: "/gallery19.JPG", alt: "pic 22" },
  { src: "/gallery20.jpg", alt: "pic 23" },
  { src: "/gallery23.JPG", alt: "pic 24" },
  { src: "/gallery24.JPG", alt: "pic 25" },
  { src: "/gallery26.JPG", alt: "pic 26" },


]

export default function GalleryPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({})
  const [lastClickTime, setLastClickTime] = useState(0)
  const [showHeartAnimation, setShowHeartAnimation] = useState(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)

  const handleImageClick = (src: string) => {
    const currentTime = new Date().getTime()
    if (currentTime - lastClickTime < 500) { // Double click detected
      toggleLike(src)
      setShowHeartAnimation(true)
      setTimeout(() => setShowHeartAnimation(false), 1000)
    }
    setLastClickTime(currentTime)
  }

  const toggleLike = (src: string) => {
    setLikes(prev => ({ ...prev, [src]: !prev[src] }))
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleDownload = (src: string) => {
    const link = document.createElement('a')
    link.href = src
    link.download = src.split('/').pop() || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen relative bg-cover bg-center" style={{ backgroundImage: 'url("/bgimg-5.png")' }}>
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-cursive text-center text-teal-800 mb-12">
          Our Moments Together
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Instagram Post Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-xl mx-auto w-full">
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/np.png" alt="nidhin_princy" />
                  <AvatarFallback>NP</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">nidhin_princy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  href="https://www.instagram.com/nidhin_panoor/"
                  target="_blank"
                  className="text-sm font-semibold text-blue-500 hover:text-blue-600"
                >
                  Follow
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleDownload(images[currentImageIndex].src)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Report
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Image with carousel */}
            <div className="relative aspect-square">
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                onClick={() => handleImageClick(images[currentImageIndex].src)}
              />
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <AnimatePresence>
                {showHeartAnimation && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Heart className="text-white w-24 h-24 drop-shadow-lg" fill="white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleLike(images[currentImageIndex].src)}
                    className="focus:outline-none transform active:scale-125 transition-transform"
                  >
                    <Heart
                      className={`w-7 h-7 ${likes[images[currentImageIndex].src] ? 'text-red-500 fill-current' : 'text-gray-700'}`}
                    />
                  </button>
                  <button className="focus:outline-none transform active:scale-125 transition-transform">
                    <MessageCircle className="w-7 h-7 text-gray-700" />
                  </button>
                  <button className="focus:outline-none transform active:scale-125 transition-transform">
                    <Share2 className="w-7 h-7 text-gray-700" />
                  </button>
                </div>
                <button className="focus:outline-none transform active:scale-125 transition-transform">
                  <Bookmark className="w-7 h-7 text-gray-700" />
                </button>
              </div>

              {/* Likes and caption */}
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  {likes[images[currentImageIndex].src] ? 'You and others liked this' : '0 likes'}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">nidhin_princy</span>
                  {' '}Creating memories together 💕
                </p>
                <p className="text-xs text-gray-400 uppercase">2 days ago</p>
              </div>
            </div>
          </div>

          {/* Right side - Video Dialog */}
          <div className="relative max-w-xl mx-auto w-full">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/u_Ow-Dat23c"
              thumbnailSrc="np3.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>

        {/* New Card with Glass Morphism Effect */}
        <Card className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur-md border-none shadow-lg">
          <CardContent className="p-6">
            <p className="text-lg text-center text-blue-800 font-cursive">
              "One moment, two hearts, three knots, seven steps & a lifetime togetherness... with the grace of God"
            </p>
          </CardContent>
        </Card>

        {/* Gallery Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-cursive text-center text-teal-600 mb-4">
            Their Gallery
          </h2>
          <p className="text-xl font-cursive text-center text-teal-500 mb-12">
            A collection of precious moments and beautiful memories
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedGalleryImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
          <DialogTitle className="sr-only">Gallery Image View</DialogTitle>
          {selectedGalleryImage && (
            <div className="relative w-full h-full">
              <Image
                src={selectedGalleryImage}
                alt="Gallery view"
                fill
                sizes="95vw"
                className="object-contain"
              />
              <button
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////////
// "use client"

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Heart, MessageCircle, Share2, MoreHorizontal, ChevronLeft, ChevronRight, Bookmark, X, Download } from 'lucide-react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import HeroVideoDialog from "@/components/ui/hero-video-dialog"

// const images = [
//   { src: "/insta-3.jpg", alt: "pic 2" },
//   { src: "/insta-2.JPG", alt: "pic 3" },
//   { src: "/insta-4.jpg", alt: "pic 5" },
//   { src: "/insta-5.jpg", alt: "pic 6" },
//   { src: "/insta-7.jpg", alt: "pic 7" },
//   { src: "/insta-8.jpg", alt: "pic 8" },
//   { src: "/insta-9.jpg", alt: "pic 9" },
//   { src: "/insta-10.jpg", alt: "pic 10" },
//   { src: "/insta-11.jpg", alt: "pic 11" },
//   { src: "/insta-12.jpg", alt: "pic 12" },
//   { src: "/insta-13.jpg", alt: "pic 13" },
//   { src: "/insta-14.jpg", alt: "pic 14" },
//   { src: "/insta-16.jpg", alt: "pic 15" },
//   { src: "/insta-17.jpg", alt: "pic 16" },
//   { src: "/insta-18.jpg", alt: "pic 17" },
//   { src: "/insta-19.jpg", alt: "pic 17" },
//   { src: "/insta-20.jpg", alt: "pic 18" },
//   { src: "/insta-21.jpg", alt: "pic 19" },
//   { src: "/insta-22.jpg", alt: "pic 20" },
//   { src: "/insta-23.jpg", alt: "pic 21" },
//   { src: "/insta-24.jpg", alt: "pic 22" },
//   { src: "/insta-25.jpg", alt: "pic 23" },
//   { src: "/insta.jpg", alt: "pic 24" },
// ]

// const galleryImages = [...images, ...images, ...images.slice(0, 3)]

// export default function GalleryPage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [likes, setLikes] = useState<{ [key: string]: boolean }>({})
//   const [lastClickTime, setLastClickTime] = useState(0)
//   const [showHeartAnimation, setShowHeartAnimation] = useState(false)
//   const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)

//   const handleImageClick = (src: string) => {
//     const currentTime = new Date().getTime()
//     if (currentTime - lastClickTime < 500) { // Double click detected
//       toggleLike(src)
//       setShowHeartAnimation(true)
//       setTimeout(() => setShowHeartAnimation(false), 1000)
//     }
//     setLastClickTime(currentTime)
//   }

//   const toggleLike = (src: string) => {
//     setLikes(prev => ({ ...prev, [src]: !prev[src] }))
//   }

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length)
//   }

//   const previousImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
//   }

//   const handleDownload = (src: string) => {
//     const link = document.createElement('a')
//     link.href = src
//     link.download = src.split('/').pop() || 'image'
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   return (
//     <div className="min-h-screen relative">
//       {/* Background Image */}
//       <div>
//         <Image
//           src="/bgimg-5.png"
//           alt="Background"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl md:text-5xl font-cursive text-center text-teal-800 mb-12">
//           Our Moments Together
//         </h1>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left side - Instagram Post Card */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-xl mx-auto w-full">
//             {/* Header */}
//             <div className="p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/np.png" alt="nidhin_princy" />
//                   <AvatarFallback>NP</AvatarFallback>
//                 </Avatar>
//                 <span className="font-medium text-sm">nidhin_princy</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Link
//                   href="https://www.instagram.com/nidhin_panoor/"
//                   target="_blank"
//                   className="text-sm font-semibold text-blue-500 hover:text-blue-600"
//                 >
//                   Follow
//                 </Link>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon" className="h-8 w-8">
//                       <MoreHorizontal className="h-5 w-5" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem onClick={() => handleDownload(images[currentImageIndex].src)}>
//                       <Download className="mr-2 h-4 w-4" />
//                       Download
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                       Report
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             </div>

//             {/* Image with carousel */}
//             <div className="relative aspect-square">
//               <button
//                 onClick={previousImage}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10 hover:bg-white transition-colors"
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </button>
//               <Image
//                 src={images[currentImageIndex].src}
//                 alt={images[currentImageIndex].alt}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 className="object-cover"
//                 onClick={() => handleImageClick(images[currentImageIndex].src)}
//               />
//               <button
//                 onClick={nextImage}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10 hover:bg-white transition-colors"
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </button>
//               <AnimatePresence>
//                 {showHeartAnimation && (
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0, opacity: 0 }}
//                     className="absolute inset-0 flex items-center justify-center"
//                   >
//                     <Heart className="text-white w-24 h-24 drop-shadow-lg" fill="white" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Actions */}
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center space-x-4">
//                   <button
//                     onClick={() => toggleLike(images[currentImageIndex].src)}
//                     className="focus:outline-none transform active:scale-125 transition-transform"
//                   >
//                     <Heart
//                       className={`w-7 h-7 ${likes[images[currentImageIndex].src] ? 'text-red-500 fill-current' : 'text-gray-700'}`}
//                     />
//                   </button>
//                   <button className="focus:outline-none transform active:scale-125 transition-transform">
//                     <MessageCircle className="w-7 h-7 text-gray-700" />
//                   </button>
//                   <button className="focus:outline-none transform active:scale-125 transition-transform">
//                     <Share2 className="w-7 h-7 text-gray-700" />
//                   </button>
//                 </div>
//                 <button className="focus:outline-none transform active:scale-125 transition-transform">
//                   <Bookmark className="w-7 h-7 text-gray-700" />
//                 </button>
//               </div>

//               {/* Likes and caption */}
//               <div className="space-y-1">
//                 <p className="text-sm font-medium">
//                   {likes[images[currentImageIndex].src] ? 'You and others liked this' : '0 likes'}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <span className="font-medium">nidhin_princy</span>
//                   {' '}Creating memories together 💕
//                 </p>
//                 <p className="text-xs text-gray-400 uppercase">2 days ago</p>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Video Dialog */}
//           <div className="relative max-w-xl mx-auto w-full">
//             <HeroVideoDialog
//               className="dark:hidden block"
//               animationStyle="from-center"
//               videoSrc="https://www.youtube.com/embed/9H_sZO0yJKs?si=HVuCj2LIv-PWY3TA"
//               thumbnailSrc="np3.png"
//               thumbnailAlt="Hero Video"
//             />
//             {/* <HeroVideoDialog
//               className="hidden dark:block"
//               animationStyle="from-center"
//               videoSrc="https://www.youtube.com/watch?v=cNGjD0VG4R8"
//               thumbnailSrc="https://as1.ftcdn.net/v2/jpg/03/13/56/08/1000_F_313560871_b75XP5UEoNv7UwiBKo5mjehL3jrILjUn.jpg"
//               thumbnailAlt="Hero Video"
//             /> */}
//           </div>
//         </div>

//         {/* New Card with Glass Morphism Effect */}
//         <Card className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur-md border-none shadow-lg">
//           <CardContent className="p-6">
//             <p className="text-lg text-center text-blue font-cursive">
//               "One moment, two hearts, three knots, seven steps & a lifetime togetherness... with the grace of God"
//             </p>
//           </CardContent>
//         </Card>

//         {/* Gallery Section */}
//         <div className="mt-20 max-w-6xl mx-auto">
//           <h2 className="text-3xl font-cursive text-center text-teal-600 mb-4">
//             Their Gallery
//           </h2>
//           <p className="text-xl font-cursive text-center text-teal-500 mb-12">
//             A collection of precious moments and beautiful memories
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {galleryImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 className="relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-white/10 backdrop-blur-sm"
//                 whileHover={{ scale: 1.05 }}
//                 onClick={() => setSelectedGalleryImage(image.src)}
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
//                   className="object-cover transition-transform duration-300 hover:scale-110"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Modal */}
//       <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
//         <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
//           <DialogTitle className="sr-only">Gallery Image View</DialogTitle>
//           {selectedGalleryImage && (
//             <div className="relative w-full h-full">
//               <Image
//                 src={selectedGalleryImage}
//                 alt="Gallery view"
//                 fill
//                 sizes="95vw"
//                 className="object-contain"
//               />
//               <button
//                 onClick={() => setSelectedGalleryImage(null)}
//                 className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

//         .font-cursive {
//           font-family: 'Dancing Script', cursive;
//         }
//       `}</style>
//     </div>
//   )
// }


/////////////////////dscsdc///////////////////
// "use client"

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Heart, MessageCircle, Share2, MoreHorizontal, ChevronLeft, ChevronRight, Bookmark, X } from 'lucide-react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import HeroVideoDialog from "@/components/ui/hero-video-dialog"

// const images = [
//   // { src: "/insta-1.JPG", alt: "pic 1" },
//   { src: "/insta-3.jpg", alt: "pic 2" },
//   { src: "/insta-2.JPG", alt: "pic 3" },
//   { src: "/insta-4.jpg", alt: "pic 5" },
//   { src: "/insta-5.jpg", alt: "pic 6" },
//   { src: "/insta-7.jpg", alt: "pic 7" },
//   { src: "/insta-8.jpg", alt: "pic 8" },
//   { src: "/insta-9.jpg", alt: "pic 9" },
//   { src: "/insta-10.jpg", alt: "pic 10" },
//   { src: "/insta-11.jpg", alt: "pic 11" },
//   { src: "/insta-12.jpg", alt: "pic 12" },
//   { src: "/insta-13.jpg", alt: "pic 13" },
//   { src: "/insta-14.jpg", alt: "pic 14" },
//   { src: "/insta-16.jpg", alt: "pic 15" },
//   { src: "/insta-17.jpg", alt: "pic 16" },
//   { src: "/insta-18.jpg", alt: "pic 17" },
//   { src: "/insta-19.jpg", alt: "pic 17" },
//   { src: "/insta-20.jpg", alt: "pic 18" },
//   { src: "/insta-21.jpg", alt: "pic 19" },
//   { src: "/insta-22.jpg", alt: "pic 20" },
//   { src: "/insta-23.jpg", alt: "pic 21" },
//   { src: "/insta-24.jpg", alt: "pic 22" },
//   { src: "/insta-25.jpg", alt: "pic 23" },
//   { src: "/insta.jpg", alt: "pic 24" },
  
// ]

// const galleryImages = [...images, ...images, ...images.slice(0, 3)]

// export default function GalleryPage() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)
//   const [likes, setLikes] = useState<{ [key: string]: boolean }>({})
//   const [lastClickTime, setLastClickTime] = useState(0)
//   const [showHeartAnimation, setShowHeartAnimation] = useState(false)
//   const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)

//   const handleImageClick = (src: string) => {
//     const currentTime = new Date().getTime()
//     if (currentTime - lastClickTime < 500) { // Double click detected
//       toggleLike(src)
//       setShowHeartAnimation(true)
//       setTimeout(() => setShowHeartAnimation(false), 1000)
//     }
//     setLastClickTime(currentTime)
//   }

//   const toggleLike = (src: string) => {
//     setLikes(prev => ({ ...prev, [src]: !prev[src] }))
//   }

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length)
//   }

//   const previousImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
//   }

//   return (
//     <div className="min-h-screen relative">
//       {/* Background Image */}
//       <div>
//         <Image
//           src="/bgimg-5.png"
//           alt="Background"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl md:text-5xl font-cursive text-center text-teal-800 mb-12">
//           Our Moments Together
//         </h1>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left side - Instagram Post Card */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-xl mx-auto w-full">
//             {/* Header */}
//             <div className="p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/np.png" alt="nidhin_princy" />
//                   <AvatarFallback>NP</AvatarFallback>
//                 </Avatar>
//                 <span className="font-medium text-sm">nidhin_princy</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Link
//                   href="https://www.instagram.com/nidhin_panoor/"
//                   target="_blank"
//                   className="text-sm font-semibold text-blue-500 hover:text-blue-600"
//                 >
//                   Follow
//                 </Link>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon" className="h-8 w-8">
//                       <MoreHorizontal className="h-5 w-5" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem>
//                       Report
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             </div>

//             {/* Image with carousel */}
//             <div className="relative aspect-square">
//               <button
//                 onClick={previousImage}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10 hover:bg-white transition-colors"
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </button>
//               <Image
//                 src={images[currentImageIndex].src}
//                 alt={images[currentImageIndex].alt}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 className="object-cover"
//                 onClick={() => handleImageClick(images[currentImageIndex].src)}
//               />
//               <button
//                 onClick={nextImage}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10 hover:bg-white transition-colors"
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </button>
//               <AnimatePresence>
//                 {showHeartAnimation && (
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0, opacity: 0 }}
//                     className="absolute inset-0 flex items-center justify-center"
//                   >
//                     <Heart className="text-white w-24 h-24 drop-shadow-lg" fill="white" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Actions */}
//             <div className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center space-x-4">
//                   <button
//                     onClick={() => toggleLike(images[currentImageIndex].src)}
//                     className="focus:outline-none transform active:scale-125 transition-transform"
//                   >
//                     <Heart
//                       className={`w-7 h-7 ${likes[images[currentImageIndex].src] ? 'text-red-500 fill-current' : 'text-gray-700'}`}
//                     />
//                   </button>
//                   <button className="focus:outline-none transform active:scale-125 transition-transform">
//                     <MessageCircle className="w-7 h-7 text-gray-700" />
//                   </button>
//                   <button className="focus:outline-none transform active:scale-125 transition-transform">
//                     <Share2 className="w-7 h-7 text-gray-700" />
//                   </button>
//                 </div>
//                 <button className="focus:outline-none transform active:scale-125 transition-transform">
//                   <Bookmark className="w-7 h-7 text-gray-700" />
//                 </button>
//               </div>

//               {/* Likes and caption */}
//               <div className="space-y-1">
//                 <p className="text-sm font-medium">
//                   {likes[images[currentImageIndex].src] ? 'You and others liked this' : '0 likes'}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <span className="font-medium">nidhin_princy</span>
//                   {' '}Creating memories together 💕
//                 </p>
//                 <p className="text-xs text-gray-400 uppercase">2 days ago</p>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Video Dialog */}
//           <div className="relative max-w-xl mx-auto w-full">
//             <HeroVideoDialog
//               className="dark:hidden block"
//               animationStyle="from-center"
//               videoSrc="https://www.youtube.com/watch?v=cNGjD0VG4R8"
//               thumbnailSrc="https://as1.ftcdn.net/v2/jpg/03/13/56/08/1000_F_313560871_b75XP5UEoNv7UwiBKo5mjehL3jrILjUn.jpg"
//               thumbnailAlt="Hero Video"
//             />
//             <HeroVideoDialog
//               className="hidden dark:block"
//               animationStyle="from-center"
//               videoSrc="https://www.youtube.com/watch?v=cNGjD0VG4R8"
//               thumbnailSrc="https://as1.ftcdn.net/v2/jpg/03/13/56/08/1000_F_313560871_b75XP5UEoNv7UwiBKo5mjehL3jrILjUn.jpg"
//               thumbnailAlt="Hero Video"
//             />
//           </div>
//         </div>

//         {/* New Card with Glass Morphism Effect */}
//         <Card className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur-md border-none shadow-lg">
//           <CardContent className="p-6">
//             <p className="text-lg text-center text-blue font-cursive">
//               "One moment, two hearts, three knots, seven steps & a lifetime togetherness... with the grace of God"
//             </p>
//           </CardContent>
//         </Card>

//         {/* Gallery Section */}
//         <div className="mt-20 max-w-6xl mx-auto">
//           <h2 className="text-3xl font-cursive text-center text-teal-600 mb-4">
//             Their Gallery
//           </h2>
//           <p className="text-xl font-cursive text-center text-teal-500 mb-12">
//             A collection of precious moments and beautiful memories
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {galleryImages.map((image, index) => (
//               <motion.div
//                 key={index}
//                 className="relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-white/10 backdrop-blur-sm"
//                 whileHover={{ scale: 1.05 }}
//                 onClick={() => setSelectedGalleryImage(image.src)}
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
//                   className="object-cover transition-transform duration-300 hover:scale-110"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Modal */}
//       <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
//         <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
//           <DialogTitle className="sr-only">Gallery Image View</DialogTitle>
//           {selectedGalleryImage && (
//             <div className="relative w-full h-full">
//               <Image
//                 src={selectedGalleryImage}
//                 alt="Gallery view"
//                 fill
//                 sizes="95vw"
//                 className="object-contain"
//               />
//               <button
//                 onClick={() => setSelectedGalleryImage(null)}
//                 className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

//         .font-cursive {
//           font-family: 'Dancing Script', cursive;
//         }
//       `}</style>
//     </div>
//   )
// }
