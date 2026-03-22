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

export default function Others() {
    return (
        <section className="my-20">
            <div className="my-6">
                <h4 className="leading-none text-muted-foreground">My</h4>
                <h2 className="text-3xl font-extrabold leading-tight">Journey</h2>
            </div>
            <Card size="sm" className="group">
                <CardHeader>
                    <CardTitle>Certificates and Achievements</CardTitle>

                    <CardAction className="m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <ArrowRight size={15} />
                    </CardAction>

                    <CardDescription>
                        A curated list of certificates and achievements
                    </CardDescription>
                </CardHeader>
            </Card>
        </section >
    )
}
