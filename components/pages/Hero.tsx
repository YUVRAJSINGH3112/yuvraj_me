import { MapPin } from "lucide-react"
import { SiReact, SiNextdotjs, SiExpress, SiPython } from "react-icons/si";
import Badge from "../ui/badge"

export default function Hero() {
  return (
    <section className='hero text-white mt-4' id='hero'>
      <div className='flex items-center gap-2 mb-2'>
        <div>
           <img src="/images/avatar.png" alt=""  className='h-20 w-20 rounded-[50%]'/>
         </div>
      <div>
        <h1 className="text-xl font-bold ">YUVRAJ SINGH</h1>
        <h2 className="text-md font-semibold text-blue-400 uppercase tracking-[0.1em]">SOFTWARE DEVELOPER</h2>
        <p className="flex items-center gap-1 text-xs"><MapPin size={10}/>Lucknow, Uttar Pradesh</p>
      </div>
      </div>
      
      <p className='text-white/70 text-sm text-center '>Aspiring software developer with a strong foundation in programming and a passion for creating innovative solutions. Currently pursuing a Bachelor's degree in Computer Science, I am eager to apply my knowledge and skills to real-world projects and contribute to the tech industry.</p>
      <div className="badge mt-2 grid gap-2 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
        <Badge icon={<SiReact size={12} />}>React</Badge>
        <Badge icon={<SiNextdotjs size={12} />}>Next.js</Badge>
        <Badge icon={<SiExpress size={12} />}>Express</Badge>
        <Badge icon={<SiPython size={12} />}>Python</Badge>
      </div>
    </section>
  )
}
