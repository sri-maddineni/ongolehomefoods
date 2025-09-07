export default function Stats() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[#ffc107]/40 bg-[#fff8e1] p-5 text-center">
                    <div className="text-2xl font-semibold text-[#b71c1c]">1,250+</div>
                    <div className="text-sm opacity-80">Orders served</div>
                </div>
                <div className="rounded-xl border p-5 text-center">
                    <div className="text-2xl font-semibold">4.9/5</div>
                    <div className="text-sm opacity-80">Avg. customer rating</div>
                </div>
                <div className="rounded-xl border p-5 text-center">
                    <div className="text-2xl font-semibold">2019</div>
                    <div className="text-sm opacity-80">Serving since</div>
                </div>
            </div>
        </section>
    );
}


