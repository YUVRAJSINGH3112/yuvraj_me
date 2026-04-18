'use client'
import { useEffect, useState } from 'react'
import travel from '@/public/images/travel.webp'
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
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Projects() {

  interface Project {
    title: string;
    slug:string;
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
    <section className="h-full">
      <div className="mt-6">
        <h4 className="leading-none text-muted-foreground">Featured</h4>
        <h2 className="text-3xl font-extrabold leading-tight">PROJECTS</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          return (
            <Card className="mx-auto w-full h-full max-w-sm pt-0 flex flex-col" key={idx}>

              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

              </div>

              <CardHeader>
                <CardAction>
                  <Badge variant="secondary" className='bg-blue-400 border border-neutral-400'>Featured</Badge>
                </CardAction>

                <CardTitle className="text-xl font-extrabold">
                  {project.title}
                </CardTitle>

                <CardDescription className="">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="mt-auto">
                <Button asChild className="w-full text-md py-4">
                  <Link href={`/projects/${project.slug}`}> View Details<ArrowRight /></Link>
                </Button>
              </CardFooter>

            </Card>
          )
        })}
      </div>
      <div className="flex items-center justify-center mt-6">
        <Button asChild className="py-5 px-4"><Link href="/projects">
          View All Projects <ArrowRight /></Link></Button>
      </div>
    </section>
  )
}
