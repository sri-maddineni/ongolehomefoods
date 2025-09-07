import Link from "next/link";
import { PICKLES } from "@/data/pickles";

export default function PicklesHome() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Available Pickles</h2>
                <Link href="/pickles" className="text-sm underline">View all</Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {PICKLES.map((p) => (
                    <div key={p.key} className="rounded-xl border p-5">
                        <h3 className="text-lg font-medium">{p.name}</h3>
                        <div className="mt-2 text-sm opacity-80">From ₹{Math.min(...Object.values(p.basePrice))}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}


