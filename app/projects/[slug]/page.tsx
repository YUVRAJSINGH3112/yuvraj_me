import { Button } from "@/components/ui/button"
import { CornerUpLeft,CornerUpRight} from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import {projectList} from "@/data/projects"
import {Github,Globe} from "lucide-react"

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
                        <h1 className="text-muted-foreground">{project.description}</h1>
                        </div>
                        <div className="buttons w-full flex gap-4">
                            <Button className="py-4 px-6" ><Globe />Live Demo</Button>
                            <Button className="py-4 px-6" variant="secondary"><Github/>Source Code</Button>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <Button asChild variant="outline" className="ml-auto">
                        <Link href="/projects">Next project <CornerUpRight /></Link>
                    </Button>
                    </div>
                </div>
            )
        }