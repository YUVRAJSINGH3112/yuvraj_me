import { MapPin } from "lucide-react"
import {Button} from "../ui/button";
import Link from "next/link"
import Image from "next/image"
import {Linkedin, Github, Mail,Send,FileText} from "lucide-react"
import avatar from "../../public/images/avatar.png"

export default function Hero() {
  return (
    <section className='hero mt-6' id='hero'>
      <div className='flex items-center justify-center gap-2 mb-2'>
        <div>
           <Image 
           src={avatar}
           alt="" 
           width={100} 
           height={100} 
           className='h-30 w-30 rounded-[50%]'
           placeholder="blur"
           />
         </div>
      <div>
        <h1 className="text-3xl font-extrabold">YUVRAJ SINGH</h1>
        <h2 className="text-xl font-bold text-blue-400 uppercase tracking-tight">SOFTWARE DEVELOPER</h2>
        <p className="flex items-center gap-1 text-md"><MapPin size={10}/>Lucknow, Uttar Pradesh</p>
      </div>
      </div>
      
      <p className="text-md text-center my-4 text-muted-foreground">Aspiring software developer with a strong foundation in programming and a passion for creating innovative solutions. Currently pursuing a Bachelor's degree in Computer Science, I am eager to apply my knowledge and skills to real-world projects and contribute to the tech industry.</p>
      <div className="badge mt-2 grid gap-2 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
        <Button variant="outline" className="mb-2 py-5 text-md"><FileText />Download CV</Button>
        <Button asChild className="mb-2 py-5 text-md dark:bg-white">
          <Link href="/contact">
            <Send />
            Get in Touch
          </Link>
        </Button>

        <div className="flex items-center gap-2" id="socials">
          <Button variant="outline" className="mb-2 py-6 px-4 rounded-full hover:bg-blue-500 transition-all ease-in duration-300"><Linkedin size={30}/></Button>
          <Button variant="outline" className="mb-2 py-6 px-4 rounded-full hover:bg-blue-500 transition-all ease-in duration-300"><Github size={30}/></Button>
          <Button variant="outline" className="mb-2 py-6 px-4 rounded-full hover:bg-blue-500 transition-all ease-in duration-300"><Mail size={30}/></Button>
        </div>

      </div>
    </section>
  )
}
