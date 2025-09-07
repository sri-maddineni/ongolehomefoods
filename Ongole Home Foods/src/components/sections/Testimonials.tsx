const testimonials = [
    { name: "Sravani", quote: "Pickles taste just like home! Fresh and authentic." },
    { name: "Ravi", quote: "Great for family functions. Everyone loved the snacks." },
    { name: "Kalyan", quote: "Timely delivery and consistent taste. Highly recommend." },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What our customers say</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                    <blockquote key={t.name} className="rounded-xl border p-5">
                        <p className="opacity-90">“{t.quote}”</p>
                        <footer className="mt-3 text-sm opacity-70">— {t.name}</footer>
                    </blockquote>
                ))}
            </div>
        </section>
    );
}


