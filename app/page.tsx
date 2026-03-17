export const metadata = {
  title: "Home | Yuvraj Portfolio",
};

import Navbar from "@/components/pages/Navbar"
import Projects from "@/components/pages/Projects"
import Quote from "@/components/pages/Quote";
import Contact from "@/components/pages/Contact"
import Coding from "@/components/pages/Coding"
import Footer from "@/components/pages/Footer"
import Hero from "@/components/pages/Hero"
import Others from "@/components/pages/Others";
export default function page() {
  return (
    <div className= "h-full lg:px-90 bg-background">
      <Navbar/>
      <div className="p-4 pt-20">
         <Hero/>
         <Projects/>
         <Coding/>
         <Others/>
         <Contact/>
         <Quote/>
         <Footer/>
      </div>
    </div>
  )
}
