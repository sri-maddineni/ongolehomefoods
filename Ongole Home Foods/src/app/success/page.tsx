import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-20 text-center">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Thanks! Your order was sent on WhatsApp.</h1>
            <p className="mt-2 opacity-80">We will confirm once payment is received. You will also get assistance on WhatsApp.</p>
            <Link href="/" className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-background">Back to Home</Link>
        </div>
    );
}


