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
import { Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section className="my-10">
        <div className="mt-10 mb-6">
            <h4 className="text-white/50 leading-none">Get in</h4>
            <h2 className="text-white text-3xl font-extrabold leading-tight">CONTACT</h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
            <Card className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle>CONTACT ME</CardTitle>
                    <CardDescription>
                     Feel free to reach out for collaborations, hackathons, or just to connect! I'm always excited to work on innovative projects.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2"><Mail size={15}/> yuvrajsingh3112s@gmail.com</div>
                        <div className="flex items-center gap-2"><Mail size={15}/> +91 9555103969</div>
                        <div className="flex items-center gap-2"><MapPin size={15}/> Lucknow, Uttar Pradesh</div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                        Send Message
                    </Button>
                </CardFooter>
            </Card>
            <Card className="mx-auto w-full max-w-sm">
                <CardHeader>
                    <CardTitle>LET'S CONNECT</CardTitle>
                    <CardDescription>
                    I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and development!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <div>
                    Available for:
                    <ul>
                        <li>Freelance projects</li>
                        <li>Full-time opportunities</li>
                        <li>Technical collaborations</li>
                        <li>Hackathon partnerships</li>
                    </ul>
                    Response time:
                    Usually within 24 hours
                    Preferred contact:
                    Email or LinkedIn messages
                   </div>
                </CardContent>
            </Card>
        </div>
    </section>
  )
}