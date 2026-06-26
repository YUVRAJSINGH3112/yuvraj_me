import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardFooter,
    CardTitle,
    CardAction,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

export default function Others() {
    return (
        <section className="my-20">
            <div className="my-6">
                <h4 className="leading-none text-muted-foreground">My</h4>
                <h2 className="text-3xl font-extrabold leading-tight">Journey</h2>
            </div>
            <Link href="/certificates">
                <Card size="sm" className="group cursor-pointer mb-4">
                    <CardHeader>
                        <CardTitle>Certifications</CardTitle>

                        <CardAction className="m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <ArrowRight size={15} />
                        </CardAction>

                        <CardDescription>
                            A curated list of certifications
                        </CardDescription>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/achievement">
                <Card size="sm" className="group cursor-pointer mb-4">
                    <CardHeader>
                        <CardTitle>Achievements</CardTitle>

                        <CardAction className="m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <ArrowRight size={15} />
                        </CardAction>

                        <CardDescription>
                            A curated list of certifications
                        </CardDescription>
                    </CardHeader>
                </Card>
            </Link>
            <Link href="/photo-gallery">
                <Card size="sm" className="group cursor-pointer mb-4">
                    <CardHeader>
                        <CardTitle>Coding Profiles</CardTitle>

                        <CardAction className="m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <ArrowRight size={15} />
                        </CardAction>

                        <CardDescription>
                            A curated list of certifications
                        </CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </section >
    )
}
