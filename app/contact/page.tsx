"use client";

import Navbar from '@/components/pages/Navbar'
import Quote from '@/components/pages/Quote'
import Footer from '@/components/pages/Footer'
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function page() {

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        const res = await fetch("https://formspree.io/f/mnjgopjz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            alert("Message sent ✅")
            e.target.reset()
        } else {
            alert("Error ❌")
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-between min-h-screen pb-4 pt-20 lg:px-90">
                <div className='pb-14'>
                    <div className='px-4 mt-8 flex flex-col gap-2'>
                        <h2 className='font-extrabold text-4xl'>CONTACT ME</h2>
                        <p className='text-muted-foreground'>Have something in mind, or just want to say hello?</p>
                    </div>
                    <div className="w-full max-w-md p-4">

                        <form onSubmit={handleSubmit}>
                            <FieldGroup>
                                <FieldSet>
                                    <FieldLegend>Drop me a message</FieldLegend>
                                    <FieldDescription>
                                        Fill out the form below and I will get back to you as soon as possible.
                                    </FieldDescription>

                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                                Name
                                            </FieldLabel>
                                            <Input
                                                name="name"   // ✅ added
                                                id="checkout-7j9-card-name-43j"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </Field>

                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                                Email
                                            </FieldLabel>
                                            <Input
                                                name="email"  // ✅ added
                                                id="checkout-7j9-card-number-uw1"
                                                type="email"
                                                placeholder="example@gmail.com"
                                                required
                                            />
                                            <FieldDescription>
                                                Enter your email
                                            </FieldDescription>
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>

                                <FieldSet>
                                    <FieldGroup>
                                        <Field>
                                            <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                                Comments
                                            </FieldLabel>
                                            <Textarea
                                                name="message"  // ✅ added
                                                id="checkout-7j9-optional-comments"
                                                placeholder="Add any additional comments"
                                                className="resize-none"
                                                required
                                            />
                                        </Field>
                                    </FieldGroup>
                                </FieldSet>

                                <Field orientation="horizontal">
                                    <Button type="submit">Submit</Button>
                                    <Button variant="outline" type="button">
                                        Cancel
                                    </Button>
                                </Field>
                            </FieldGroup>
                        </form>

                    </div>
                </div>
                <Quote/>
                <Footer className='relative bottom-0' />
            </div>
        </div>
    )
}