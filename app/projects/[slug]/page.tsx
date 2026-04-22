import { Button } from "@/components/ui/button"
import { CornerUpLeft, CornerUpRight } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { projectList } from "@/data/projects"
import { Github, Globe } from "lucide-react"
import Navbar from "@/components/pages/Navbar"
import { Badge } from "@/components/ui/badge"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params;
    const project = projectList.find(p => p.slug === slug)

    if (!project) {
        return <div>Project not found</div>
    }
    return (
        <div>
            <Navbar />
            <div className="p-4 pt-28">
                <Button asChild variant="outline">
                    <Link href="/projects"><CornerUpLeft /> Back to projects</Link>
                </Button>
                <div className="my-10 flex flex-col gap-4">
                    <div className="relative aspect-video">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover
                                            hover:scale-[1.05]
                                            transition-all duration-500
                                            rounded-md "
                        />
                    </div>
                    <div>
                        <h1 className="text-white text-4xl uppercase font-extrabold">{project.title}</h1>
                        <h1 className="text-muted-foreground">{project.longDescription}</h1>
                    </div>
                    <div className="buttons w-full flex gap-4">
                        <Button className="py-4 px-6" ><Globe />Live Demo</Button>
                        <Button asChild className="py-4 px-6" variant="secondary"><a href={project.github} target="_blank"><Github />Source Code</a></Button>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mb-10">
                    <div>
                        <h1 className="text-2xl font-bold mb-5">Tags:</h1>
                        <div className="tags flex flex-wrap gap-3">
                            {project.tags.map((tag, i) => {
                                return (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="border border-neutral-400 w-fit"
                                    >
                                        {tag}
                                    </Badge>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Features:</h1>
                        <ul className="list-disc pl-5 space-y-1">
                            {project.features.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold mb-2">Functionality:</h1>
                        <ul className="list-disc pl-5 space-y-1">
                            {project.functionality.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full flex">
                    <Button asChild variant="outline" className="ml-auto">
                        <Link href="/projects">Next project <CornerUpRight /></Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}