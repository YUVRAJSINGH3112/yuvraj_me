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
        <div className="bg-background">
            <Navbar />
            <div className="min-h-screen px-4 pb-10 pt-24 lg:px-90 lg:pt-28">
                <Button asChild variant="outline">
                    <Link href="/projects"><CornerUpLeft /> Back to projects</Link>
                </Button>
                <div className="my-10 flex flex-col gap-6">
                    <div className="relative mx-auto h-[220px] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-secondary/40 sm:h-[300px] md:h-[360px]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                    </div>

                    <div className="mx-auto w-full max-w-4xl">
                        <h1 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
                            {project.title}
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                            {project.longDescription}
                        </p>
                    </div>

                    <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:flex-row">
                        <Button className="h-11 w-full px-6 sm:w-auto" >
                            <Globe />
                            Live Demo
                        </Button>
                        <Button asChild className="h-11 w-full px-6 sm:w-auto" variant="secondary">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github />
                                Source Code
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="mx-auto mb-10 flex w-full max-w-4xl flex-col gap-6">
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
                            {project.features?.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold mb-2">Functionality:</h1>
                        <ul className="list-disc pl-5 space-y-1">
                            {project.functionality?.map((item, i) => (
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
