export const metadata = {
  title: "Home | Yuvraj Portfolio",
};

import Navbar from "@/components/pages/Navbar"
import Projects from "@/components/pages/Projects"
import Qoute from "@/components/pages/Qoute"
import Contact from "@/components/pages/Contact"
import Footer from "@/components/pages/Footer"
import Hero from "@/components/pages/Hero"
export default function page() {
  return (
    <div className="bg-black h-full lg:px-90">
      <Navbar/>
      <div className="p-4">
         <Hero/>
         <Projects/>
         <Contact/>
         <Footer/>
      </div>
    </div>
  )
}
