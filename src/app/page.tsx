"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Great_Vibes, Tangerine } from 'next/font/google'

import { BorderBeam } from "@/components/ui/border-beam"
import Particles from "@/components/ui/particles"
import About from "./about-us/page"
import OurStory from "./Our-story/page"
import Event from "./event-details/page"
import Gallery from "./gallery/page"
import Footer from "./footer/page"

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const tangerine = Tangerine({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setMounted(true)
    setColor(theme === "dark" ? "#ffffff" : "#000000")
  }, [theme])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0">
        <Image
          src="/bgimg-1.png"
          alt="Decorative watercolor floral pattern"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Floating Floral Elements */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`absolute animate-float-${index + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          <Image
            src="/floral-element.png"
            alt=""
            width={60 + Math.random() * 40}
            height={60 + Math.random() * 40}
            className="opacity-80"
          />
        </div>
      ))}

      {/* Particles */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      {/* Simple Menu */}
      <div className="relative z-50">
        <div className="absolute right-4 top-8 md:top-12">
          <div className="hidden md:flex space-x-6 mr-20">

          <Link
                key="ourstory"
                href="#ourstory"
                className={`${greatVibes.className} text-2xl transition-all duration-300 ease-in-out transform hover:scale-110 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent`}
              >
               ourstory
              </Link>

              <Link
                key="event"
                href="#event"
                className={`${greatVibes.className} text-2xl transition-all duration-300 ease-in-out transform hover:scale-110 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent`}
              >
               Event
              </Link>

              <Link
                key="gallery"
                href="#gallery"
                className={`${greatVibes.className} text-2xl transition-all duration-300 ease-in-out transform hover:scale-110 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent`}
              >
               Gallery
              </Link>


            {/* {['#ourstory', '#event', 'Gallery'].map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className={`${greatVibes.className} text-2xl transition-all duration-300 ease-in-out transform hover:scale-110 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent`}
              >
                {item}
              </Link>
            ))} */}
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <Menu size={28} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-md rounded-md shadow-lg py-1">
               
               <Link
                    key="ourstory"
                    href="#ourstory"
                    className={`${greatVibes.className} block px-4 py-2 text-xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:bg-blue-100 transition-all duration-300 transform hover:scale-105`}
                  >
                    Our Story
                  </Link>

                <Link
                    key="event"
                    href="#event"
                    className={`${greatVibes.className} block px-4 py-2 text-xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:bg-blue-100 transition-all duration-300 transform hover:scale-105`}
                  >
                    Event
                  </Link>
                
                  <Link
                    key="gallery"
                    href="#gallery"
                    className={`${greatVibes.className} block px-4 py-2 text-xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:bg-blue-100 transition-all duration-300 transform hover:scale-105`}
                  >
                    gallery
                  </Link>

                {/* {['Our Story', 'Event Details', 'Gallery'].map((item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className={`${greatVibes.className} block px-4 py-2 text-xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:bg-blue-100 transition-all duration-300 transform hover:scale-105`}
                  >
                    {item}
                  </Link>
                ))} */}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-grow items-center justify-center p-4">
        <div className="relative max-w-2xl overflow-hidden rounded-xl border bg-white/20 p-8 backdrop-blur-md md:p-12 mt-64">
          <BorderBeam size={250} duration={12} delay={9} />
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className={`${tangerine.className} text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent md:text-7xl`}>
              Nidhin & Princy
            </h1>
            <div className="space-y-2">
              <p className={`${tangerine.className} text-2xl font-medium text-teal-600 md:text-3xl`}>
                Save the Date
              </p>
              <p className={`${tangerine.className} text-3xl font-bold text-teal-500 md:text-4xl`}>
                November 25, 2024
              </p>
            </div>
          </div>
        </div>
      </main>





      {/* Footer
      <footer className="relative z-20 w-full bg-white/10 backdrop-blur-sm py-4">
        <div className="container mx-auto text-center">
          <p className={`${tangerine.className} text-xl text-teal-600`}>
            Join us in celebrating our special day
          </p>
          <p className={`${tangerine.className} text-lg text-teal-500 mt-2`}>
            #NidhinAndPrincy2024
          </p>
        </div>
      </footer> */}



      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float-1 { animation: float 8s ease-in-out infinite; }
        .animate-float-2 { animation: float 9s ease-in-out 1s infinite; }
        .animate-float-3 { animation: float 10s ease-in-out 2s infinite; }
        .animate-float-4 { animation: float 11s ease-in-out 3s infinite; }
        .animate-float-5 { animation: float 12s ease-in-out 4s infinite; }
      `}</style>
      <div className="mt-32"><About /></div>
      <div id="ourstory"><OurStory /></div>
      <div ><div id="event"><Event /></div></div>
      <div id="gallery"><Gallery /></div>
      <div><Footer /></div>
  
      
      
      </div>


  )
}


///////////////////system code//////////////

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }




// import About from "./about-us/page"
// import OurStory from "./Our-story/page"
// import Event from "./event-details/page"
// // import Gallery from "./gallery/page"