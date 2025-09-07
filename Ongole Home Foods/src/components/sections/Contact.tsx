import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact Us</h2>
                    <p className="mt-3 opacity-80">Have a custom request or bulk order? Reach out and we’ll assist you.</p>
                    <ul className="mt-6 space-y-3 text-sm">
                        <li className="flex items-center gap-2"><PhoneIcon className="h-5 w-5" /> +91- 63042 14514</li>
                        <li className="flex items-center gap-2"><EnvelopeIcon className="h-5 w-5" /> hello@ongolehomefoods.com</li>
                    </ul>
                </div>
                <form className="rounded-xl border p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="text-sm" htmlFor="name">Name</label>
                            <input id="name" name="name" className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/30" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="text-sm" htmlFor="phone">Phone</label>
                            <input id="phone" name="phone" className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/30" placeholder="Your number" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-sm" htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-foreground/30" placeholder="How can we help?" />
                        </div>
                        <div className="sm:col-span-2">
                            <button type="button" className="w-full rounded-full bg-foreground px-6 py-3 text-background">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}


