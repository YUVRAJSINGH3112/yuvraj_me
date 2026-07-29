import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Award, BadgeCheck, Code2 } from "lucide-react"
import Link from 'next/link'

const journeyLinks = [
    {
        href: "/certificates",
        title: "Certifications",
        description: "Verified credentials, learning streaks, and domain specializations.",
        meta: "Courses and licenses",
        icon: BadgeCheck,
    },
    {
        href: "/achievement",
        title: "Achievements",
        description: "Leadership, hackathon highlights, workshops, and standout milestones.",
        meta: "Impact and milestones",
        icon: Award,
    },
    {
        href: "/photo-gallery",
        title: "Coding Profiles",
        description: "Competitive programming, problem-solving consistency, and public profiles.",
        meta: "Practice and rankings",
        icon: Code2,
    },
]

export default function Others() {
    return (
        <section className="my-20">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.5fr] lg:items-start">
                <div className="rounded-md border border-border bg-background px-5 py-6 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">
                        Beyond projects
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        My Journey
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
                        Not just shipped work, but the proof around it too: certifications, recognitions, and coding consistency.
                    </p>
                </div>

                <div className="grid gap-4">
                    {journeyLinks.map((item) => {
                        const Icon = item.icon

                        return (
                            <Link key={item.href} href={item.href}>
                                <Card
                                    size="sm"
                                    className="group cursor-pointer rounded-md py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-30px_rgba(0,0,0,0.18)]"
                                >
                                    <CardHeader className="grid gap-4 px-5 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-6">
                                        <div className="grid size-12 place-items-center rounded-2xl border border-border bg-secondary text-foreground">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                                {item.meta}
                                            </p>
                                            <CardTitle className="mt-1 text-xl font-bold tracking-tight">
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="mt-2 max-w-xl text-sm leading-6">
                                                {item.description}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
