import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardFooter,
    CardTitle,
    CardAction,
} from "@/components/ui/card"

export default function Others() {
    return (
        <section>
            <div className="my-6">
                <h4 className="leading-none text-muted-foreground">My</h4>
                <h2 className="text-3xl font-extrabold leading-tight">Journey</h2>
            </div>
           <Card size="sm">
            <CardHeader>
                <CardTitle>Certificates and Achievements</CardTitle>
                <CardDescription>A curated list of certificates and achievements </CardDescription>
            </CardHeader>
           </Card>
        </section>
    )
}
