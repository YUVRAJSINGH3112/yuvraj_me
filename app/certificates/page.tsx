import Navbar from '@/components/pages/Navbar'
import {
    Card,
    CardHeader,
    CardAction,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import certificates from "@/data/certificate"



export default function page() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col gap-8 min-h-screen pb-4 pt-24 lg:pt-30 px-4 lg:px-90'>
                <h2 className='font-extrabold text-4xl'>LICENSES & CERTIFICATIONS</h2>
                <div className="grid grid-cols-1 gap-4">
                    {
                        certificates.map((certificate, idx) => {
                            return (
                                <Card className="group cursor-pointer">
                                    <CardHeader>
                                        <CardTitle>{certificate.title}</CardTitle>

                                        <CardAction className="m-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <ArrowRight size={15} />
                                        </CardAction>

                                        <CardDescription className="space-y-1">
                                            <p className="font-medium text-sm text-primary">
                                                {certificate.issuer}
                                            </p>

                                            <p className="text-muted-foreground text-xs">
                                                <div>Issued: {certificate.date}</div>
                                                <div>Credential ID: {certificate.credId}</div>
                                            </p>
                                        </CardDescription>
                                        <Button asChild className="mt-2 w-1/2 text-md py-4 rounded-sm">
                                  <Link href={`/projects/${certificate.credentialLink}`}> Show Credentials<ExternalLink size={20} /></Link>
                                </Button>
                                    </CardHeader>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
