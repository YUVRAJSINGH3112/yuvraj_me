import { MapPin } from "lucide-react"
import { Button } from "../ui/button";
import Link from "next/link"
import Image from "next/image"
import { Send, FileText } from "lucide-react"
import avatar from "../../public/images/avatar.png"
import { ArrowRight, Linkedin, Github, Instagram } from "lucide-react"
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section className='hero mt-14' id='hero'>
      <div className={cn(
        'flex items-center justify-center gap-2 mb-2',
        'lg:justify-start gap-4'
      )}>
        <div>
          <Image
            src={avatar}
            alt=""
            width={100}
            height={100}
            className={cn(
              'h-30 w-30 rounded-[50%]',
              'lg:h-40 lg:w-40'
            )}
            placeholder="blur"
          />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold lg:text-6xl">YUVRAJ SINGH</h1>
          <h2 className="text-xl font-bold text-blue-400 uppercase tracking-tight lg:text-3xl">SOFTWARE DEVELOPER</h2>
          <p className="flex items-center gap-1 text-md"><MapPin size={10} />Lucknow, Uttar Pradesh</p>
        </div>
      </div>

      <p className="text-md text-center my-4 text-muted-foreground lg:my-6">Aspiring software developer with a strong foundation in programming and a passion for creating innovative solutions. Currently pursuing a Bachelor's degree in Computer Science, I am eager to apply my knowledge and skills to real-world projects and contribute to the tech industry.</p>
      <div className="badge mt-2 flex gap-2 sm:px-10 lg:px-0 lg:w-sm lg:gap-4">
        <Button asChild variant="outline" className="mb-2 py-5 text-md border border-neutral-600 cursor-pointer grow">
          <a href="/new_resume_yuvraj.pdf" target="_blank" rel="noopener noreferrer">
            <FileText /> View CV
          </a>
        </Button>
        <Button asChild className="mb-2 py-5 text-md dark:bg-white grow">
          <Link href="/contact">
            <Send />
            Get in Touch
          </Link>
        </Button>
      </div>
      <div className="socials flex gap-4 my-4">
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="
           p-2
           border-black border rounded-full
          hover:text-blue-500 transition"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="https://www.instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="
           p-2
           border-black border rounded-full
          hover:text-pink-500 transition"
        >
          <Instagram size={20} />
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="
           p-2
          border-black border rounded-full
          hover:text-gray-400 transition"
        >
          <Github size={20} />
        </a>
      </div>
      <div id="skills">
        <div className="my-6">
          <h4 className="leading-none text-muted-foreground">Technical</h4>
          <h2 className="text-3xl font-extrabold leading-tight">SKILLS</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">

          <Button variant="outline" className="w-full flex items-center gap-2 rounded-sm">
            <FaReact /> React
          </Button>

          <Button variant="outline" className="w-full flex items-center gap-2 rounded-sm">
            <SiNextdotjs /> Next.js
          </Button>

          <Button variant="outline" className="w-full flex items-center gap-2 rounded-sm">
            <FaNodeJs /> Node.js
          </Button>

          <Button variant="outline" className="w-full flex items-center gap-2 rounded-sm">
            <SiMongodb /> MongoDB
          </Button>

          <Button variant="outline" className="w-full flex items-center gap-2 rounded-sm">
            <SiTailwindcss /> Tailwind CSS
          </Button>

          <Button variant="outline" className="w-full flex items-center gap-2 rounded-sm">
            <SiTypescript /> TypeScript
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Button asChild className="mt-4 py-5 px-8"><Link href="/skills">
            Show all Skills <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  )
}
