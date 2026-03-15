import { MapPin } from "lucide-react"
import {Button} from "../ui/button";
import {Linkedin, Github, Mail,Send,FileText} from "lucide-react"

export default function Hero() {
  return (
    <section className='hero text-white mt-6' id='hero'>
      <div className='flex items-center justify-center gap-2 mb-2'>
        <div>
           <img src="/images/avatar.png" alt=""  className='h-30 w-30 rounded-[50%]'/>
         </div>
      <div>
        <h1 className="text-3xl font-extrabold">YUVRAJ SINGH</h1>
        <h2 className="text-xl font-bold text-blue-400 uppercase tracking-tight">SOFTWARE DEVELOPER</h2>
        <p className="flex items-center gap-1 text-md"><MapPin size={10}/>Lucknow, Uttar Pradesh</p>
      </div>
      </div>
      
      <p className='text-white/70 text-md text-center my-4'>Aspiring software developer with a strong foundation in programming and a passion for creating innovative solutions. Currently pursuing a Bachelor's degree in Computer Science, I am eager to apply my knowledge and skills to real-world projects and contribute to the tech industry.</p>
      <div className="badge mt-2 grid gap-2 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
      
        <Button className="mb-2 py-5 text-md"><FileText />Download CV</Button>
        <Button className="mb-2 py-5 bg-white text-black text-md"><Send />Get in Touch</Button>

        <div className="flex items-center gap-2" id="socials">
          <Button className="mb-2 py-6 px-4 rounded-full"><Linkedin size={30}/></Button>
          <Button className="mb-2 py-6 px-4 rounded-full"><Github size={30}/></Button>
          <Button className="mb-2 py-6 px-4 rounded-full"><Mail size={30}/></Button>
        </div>

      </div>
    </section>
  )
}
