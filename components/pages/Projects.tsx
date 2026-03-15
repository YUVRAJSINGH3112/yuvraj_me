'use client'
import React,{useEffect, useState} from 'react'
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
            <h2 className="text-white text-3xl leading-tight">PROJECTS</h2>
        </div>
        <div className="">
          {projects.map((project,idx) =>{
            return (
    <Card className="bg-[#171717] relative mx-auto w-full max-w-sm pt-0 mt-4" key={idx}>
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
                       <CardFooter>
                          <Button className="w-full">View Event</Button>
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
