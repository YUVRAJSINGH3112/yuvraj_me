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
import { Mail, MapPin,Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="my-10">
        <div className="mt-10 mb-6">
            <h4 className="leading-none text-muted-foreground">Get in</h4>
            <h2 className="text-3xl font-extrabold leading-tight">CONTACT</h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
            <Card className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl font-extrabold">CONTACT ME</CardTitle>
                    <CardDescription className="">
                     Feel free to reach out for collaborations, hackathons, or just to connect! I'm always excited to work on innovative projects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2"><Mail size={15}/> <p>yuvrajsingh3112s@gmail.com</p></div>
                        <div className="flex items-center gap-2"><Mail size={15}/> +91 9555103969</div>
                        <div className="flex items-center gap-2"><MapPin size={15}/> Lucknow, Uttar Pradesh</div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/contact"><Send size={15}/> Send Message</Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl font-extrabold">LET'S CONNECT</CardTitle>
                    <CardDescription className="">
                    I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and development!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <div className="">
                    Available for:
                    <ul className="list-disc pl-5 mb-4">
                        <li>Freelance projects</li>
                        <li>Full-time opportunities</li>
                        <li>Technical collaborations</li>
                        <li>Hackathon partnerships</li>
                    </ul>
                    <p>Response time: Usually within 24 hours</p>
                    <p>Preferred contact: Email or LinkedIn messages</p>
                   </div>
                </CardContent>
            </Card>
        </div>
    </section>
  )
}