'use client'
import React,{useEffect, useState} from 'react'
import avatar from "@/public/images/avatar.png"
import { projectList } from '@/data/projects'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
export default function Projects() {

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  type: string;
  tags?: string[];
  isFeatured?: boolean;
}

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectList.filter(project => project.isFeatured));
  }, []);

  return (
    <section className="bg-black h-full lg:px-90">
        <div className="mt-6">
            <h4 className="text-white/50 leading-none">Featured</h4>
            <h2 className="text-white text-3xl font-extrabold leading-tight">PROJECTS</h2>
        </div>
        <div className="">
          {projects.map((project,idx) =>{
            return (
                     <Card className="bg-[#171717] mx-auto w-full max-w-sm pt-0 mt-4">

                     <div className="relative aspect-video">
    <Image
      src={avatar}
      alt="Event cover"
      fill
      placeholder="blur"
      className="object-cover"
    />

                     </div>

                     <CardHeader>
                     <CardAction>
      <Badge variant="secondary" className='bg-blue-400'>Featured</Badge>
                     </CardAction>

      <CardTitle className="text-xl font-extrabold text-white">
      {project.title}
      </CardTitle>

    <CardDescription className="text-white/70">
      {project.description}
    </CardDescription>
  </CardHeader>

  <CardFooter className="bg-[#171717]">
    <Button className="w-full bg-white text-black text-md py-4">
      View on Github
    </Button>
  </CardFooter>

                    </Card>
                   )
          })}
        </div>
       <div className="flex items-center justify-center">
        <Button className="mt-4 w-3/5 py-4">View All Projects</Button>
       </div>
    </section>
  )
}
