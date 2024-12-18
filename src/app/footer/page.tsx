"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Mail, Youtube } from 'lucide-react'
import ShimmerButton from "@/components/ui/shimmer-button"

export default function Footer() {
  return (
    <footer 
      style={{ backgroundImage: 'url("/bgimg6.png")' }}
      className="relative bg-cover bg-center py-12 px-4"
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-cursive text-5xl text-purple-900 mb-4">
          Nidhin<span className="text-red-500 mx-1">♥</span>Princy
        </h2>
        <p className="italic text-lg mb-8 text-center text-gray-800">
          We can't wait to celebrate our special day with you!
        </p>
        
        <div className="flex space-x-8 mb-8">
          <Link 
            href="https://www.instagram.com/nidhin_panoor/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-purple-600 transition-colors"
          >
            <Instagram size={28} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link 
            href="https://www.youtube.com/@Nidhin-Princy/shorts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-purple-600 transition-colors"
          >
            <Youtube size={28} />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link 
            href="https://www.facebook.com/nidhin.sukumaran.1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-purple-600 transition-colors"
          >
            <Facebook size={28} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link 
            href="mailto:nidhin.princy.25@gmail.com" 
            className="text-gray-800 hover:text-purple-600 transition-colors"
          >
            <Mail size={28} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        
        <p className="text-gray-800 text-sm mb-6">Lovingly created by #NidhinPrincy</p>
        
        <div className="z-10 flex items-center justify-center">
          <ShimmerButton className="shadow-2xl">
            <Link 
              href="https://github.com/NS99hostup" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg"
            >
              Developed by Nived Sukumaran
            </Link>
          </ShimmerButton>
        </div>
      </div>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

        .font-cursive {
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
    </footer>
  )
}


// "use client"

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Instagram, Facebook, Mail, Youtube } from 'lucide-react'

// export default function Footer() {
//   const [bgImageLoaded, setBgImageLoaded] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const img = new window.Image()
//     img.src = '/bgimg6.png'
//     img.onload = () => setBgImageLoaded(true)
//     img.onerror = () => setError('Failed to load background image')
//   }, [])

//   if (error) {
//     console.error('Footer error:', error)
//     return <div>Error loading footer: {error}</div>
//   }

//   return (
//     <footer className={`relative py-8 px-4 ${bgImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
//       <div 
//         className="absolute inset-0 bg-cover bg-center z-0" 
//         style={{backgroundImage: `url('/bgimg6.png')`}}
//       />
      
//       <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-gray-800">
//         <h2 className="font-cursive text-4xl text-purple-900 mb-2">
//           Nidhin<span className="text-red-500 mx-1">♥</span>Princy
//         </h2>
//         <p className="italic text-lg mb-6 text-center">We can't wait to celebrate our special day with you!</p>
        
//         <div className="flex space-x-6 mb-6">
//           <Link href="https://www.instagram.com/nidhin_panoor/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">
//             <Instagram size={24} />
//             <span className="sr-only">Instagram</span>
//           </Link>
//           <Link href="https://www.youtube.com/@Nidhin-Princy/shorts" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">
//             <Youtube size={24} />
//             <span className="sr-only">YouTube</span>
//           </Link>
//           <Link href="https://www.facebook.com/nidhin.sukumaran.1" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">
//             <Facebook size={24} />
//             <span className="sr-only">Facebook</span>
//           </Link>
//           <Link href="mailto:nidhin.princy.25@gmail.com" className="hover:text-teal-600 transition-colors">
//             <Mail size={24} />
//             <span className="sr-only">Email</span>
//           </Link>
//         </div>
        
//         <p className="text-sm mb-2">Lovingly created by #NidhinPrincy</p>
//         <Link href="https://github.com/nivedskumar" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-teal-600 transition-colors">
//           Developed by Nived Sukumaran
//         </Link>
//       </div>
      
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

//         .font-cursive {
//           font-family: 'Dancing Script', cursive;
//         }
//       `}</style>
//     </footer>
//   )
// }