export const metadata = {
  title: "Projects",
};


import Navbar from "@/components/pages/Navbar"
import ProjectTab from "@/components/pages/ProjectTab"
import { projectList } from "@/data/projects"
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
import {ArrowRight} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function () {
  return (
    <section className="h-full lg:px-90">
      <Navbar />
      <div className="px-4 mt-6 pt-18">
        <h4 className="text-muted-foreground font-bold leading-none">Featured</h4>
        <h2 className="text-3xl font-extrabold leading-tight">PROJECTS</h2>
        <ProjectTab />
        <div className=" my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {
            projectList.map((project, idx) => {
              return (
                <Card className="mx-auto w-full max-w-sm pt-0 mt-4 flex flex-col h-full" key={idx}>
                
                              <div className="relative aspect-video">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover
                                  hover:scale-[1.05]
                                  transition-all duration-500 "
                                />
                
                              </div>
                
                              <CardHeader>
                                <CardAction>
                                  <Badge variant="secondary" className='bg-blue-400 border border-neutral-400'>{project.type}</Badge>
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
            })
          }
        </div>
      </div>
    </section>
  )
}
