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

export default function () {
  return (
    <section className="h-full lg:px-90">
      <Navbar />
      <div className="px-4 mt-6 pt-18">
        <h4 className="text-muted-foreground font-bold leading-none">Featured</h4>
        <h2 className="text-3xl font-extrabold leading-tight">PROJECTS</h2>
        <ProjectTab />
        {
          projectList.map((project, idx) => {
            return (
              <Card className="relative mx-auto w-full max-w-sm pt-0 mt-4" key={idx}>
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                  src="https://avatar.vercel.sh/shadcn1"
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">Featured</Badge>
                  </CardAction>
                  <CardTitle>Design systems meetup</CardTitle>
                  <CardDescription>
                    A practical talk on component APIs, accessibility, and shipping
                    faster.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">View Event</Button>
                </CardFooter>
              </Card>
            )
          })
        }
      </div>
    </section>
  )
}
