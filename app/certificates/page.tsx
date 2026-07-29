import Navbar from '@/components/pages/Navbar'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    ArrowRight,
    Award,
    BadgeCheck,
    CalendarDays,
    ExternalLink,
    Hash,
    ShieldCheck,
} from 'lucide-react'
import certificates from "@/data/certificate"

export default function page() {
    return (
        <div className="bg-background">
            <Navbar />
            <div className='flex min-h-screen flex-col gap-8 px-4 pb-4 pt-24 lg:px-90 lg:pt-30'>
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Verified learning
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className='text-4xl font-extrabold tracking-tight'>LICENSES & CERTIFICATIONS</h2>
                            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                                A curated record of certifications that back up hands-on skills with verified proof.
                            </p>
                        </div>
                        <div className="flex w-fit items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium">
                            <ShieldCheck size={16} />
                            {certificates.length} verified entries
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {certificates.map((certificate) => {
                        return (
                            <Card
                                key={certificate.id}
                                className="group rounded-md border border-border bg-background py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-32px_rgba(0,0,0,0.18)]"
                            >
                                <CardHeader className="gap-5 px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-secondary text-foreground">
                                                <Award size={20} />
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl font-bold tracking-tight sm:text-2xl">
                                                    {certificate.title}
                                                </CardTitle>
                                                <CardDescription className="mt-2 flex items-center gap-2 text-sm font-medium text-foreground">
                                                    <BadgeCheck size={15} />
                                                    {certificate.issuer}
                                                </CardDescription>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                            Explore
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                                    <div className="grid gap-3 rounded-[1rem] border border-border bg-secondary/40 p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <CalendarDays size={16} className="text-foreground" />
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                                    Issued
                                                </p>
                                                <p className="mt-1 text-sm font-medium text-foreground">
                                                    {certificate.date}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <Hash size={16} className="text-foreground" />
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                                    Credential ID
                                                </p>
                                                <p className="mt-1 break-all text-sm font-medium text-foreground">
                                                    {certificate.credId}
                                                </p>
                                            </div>
                                        </div>

                                        <Button asChild variant="outline" className="h-11 rounded-l px-4 text-sm font-medium">
                                            <Link href={certificate.credentialLink}>
                                                Show Credential
                                                <ExternalLink size={16} />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
