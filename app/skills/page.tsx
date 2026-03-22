import Navbar from '@/components/pages/Navbar'
import { Button } from '@/components/ui/button'
import {
    Braces,
    Network,
    Database,
    Boxes
} from 'lucide-react'

export default function Skills() {
    return (
        <section className='pt-25 px-3'>
            <Navbar />

            <div id='core' className='my-4'>
                <h4 className="leading-none text-muted-foreground">Core</h4>
                <h2 className="text-3xl font-extrabold leading-tight">CS Fundamentals</h2>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 my-8'>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Braces size={18} /> Data Structures & Algorithms
                    </Button>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Network size={18} /> Computer Networks
                    </Button>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Database size={18} /> Database Management System
                    </Button>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Boxes size={18} /> Object Oriented Programming
                    </Button>

                </div>
            </div>

            <div id='tech'>
                <h4 className="leading-none text-muted-foreground">Tech</h4>
                <h2 className="text-3xl font-extrabold leading-tight">Stack</h2>

                <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3 mt-8'>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Braces size={18} /> Data Structures & Algorithms
                    </Button>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Network size={18} /> Computer Networks
                    </Button>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Database size={18} /> Database Management System
                    </Button>

                    <Button variant='outline' className="flex items-center gap-2">
                        <Boxes size={18} /> Object Oriented Programming
                    </Button>
                </div>
            </div>
        </section>
    )
}