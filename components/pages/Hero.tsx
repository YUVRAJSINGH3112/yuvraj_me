import { MapPin } from "lucide-react"
import {Button} from "../ui/button";
import {Linkedin, Github, Mail} from "lucide-react"

export default function Hero() {
  return (
    <section className='hero text-white mt-6' id='hero'>
      <div className='flex items-center justify-center gap-2 mb-2'>
        <div>
           <img src="/images/avatar.png" alt=""  className='h-30 w-30 rounded-[50%]'/>
         </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">YUVRAJ SINGH</h1>
        <h2 className="text-lg font-semibold text-blue-400 uppercase tracking-tight">SOFTWARE DEVELOPER</h2>
        <p className="flex items-center gap-1 text-md"><MapPin size={10}/>Lucknow, Uttar Pradesh</p>
      </div>
      </div>
      
      <p className='text-white/70 text-md text-center '>Aspiring software developer with a strong foundation in programming and a passion for creating innovative solutions. Currently pursuing a Bachelor's degree in Computer Science, I am eager to apply my knowledge and skills to real-world projects and contribute to the tech industry.</p>
      <div className="badge mt-2 grid gap-2 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
      
        <Button className="mb-2 py-4">Download CV</Button>
        <Button className="mb-2 py-4 bg-white text-black">Get in Touch</Button>

        <div className="flex items-center gap-2" id="socials">
          <Button className="mb-2 py-4"><Linkedin /></Button>
          <Button className="mb-2 py-4"><Github /></Button>
          <Button className="mb-2 py-4"><Mail /></Button>
        </div>

      </div>
    </section>
  )
}
