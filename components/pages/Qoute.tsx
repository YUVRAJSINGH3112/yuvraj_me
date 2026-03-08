import { Card, CardHeader, CardDescription } from "@/components/ui/card"

export default function Quote() {
  return (
    <Card className="mx-auto w-full max-w-sm rounded-sm 
      bg-white/10 backdrop-blur-md border border-white/10">

      <CardHeader>

        <CardDescription className="italic text-white/70">
          “The best way to predict the future is to create it.”
        </CardDescription>

        <p className="text-sm text-white/60 text-right">
          — Peter Drucker
        </p>

      </CardHeader>

    </Card>
  )
}