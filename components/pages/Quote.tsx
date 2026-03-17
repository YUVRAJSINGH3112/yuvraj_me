'use client'
import { Card, CardHeader, CardDescription } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { FaQuoteLeft } from "react-icons/fa"

type QuoteType = {
  quote: string;
  author: string;
}

const fallBackQuote: QuoteType = {
  quote: "The best way to predict the future is to create it.",
  author: "Peter Drucker"
}

export default function Quote() {
  const [quote, setQuote] = useState<QuoteType>(fallBackQuote)

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random")
        const data = await response.json()
        setQuote(data)
      } catch (err) {
        setQuote(fallBackQuote)
      }
    }
    fetchQuote()
  }, [])

  return (
    <Card className="relative mx-auto w-full max-w-sm rounded-sm overflow-hidden">

      {/* 🔥 Background Quote Icon */}
      <FaQuoteLeft className="absolute left-3 top-3 text-muted-foreground opacity-10 text-6xl" />

      <CardHeader className="relative z-10">

        <CardDescription className="italic">
          {quote.quote}
        </CardDescription>

        <p className="text-[16px] mt-2 text-foreground text-right">
          — {quote.author}
        </p>

      </CardHeader>

    </Card>
  )
}