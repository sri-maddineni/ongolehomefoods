import Link from "next/link";
import { getTodayMenu, FIXED_INCLUSIONS } from "@/data/menu";

export default function DailyMenuHome() {
    const items = getTodayMenu();
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Today’s Menu</h2>
                <Link href="/meals" className="text-sm underline">View all</Link>
            </div>
            <div className="mt-4 rounded-xl border p-4 text-sm">
                <div className="font-medium">Fixed in every plate</div>
                <div className="mt-1 flex flex-wrap gap-2 opacity-80">
                    {FIXED_INCLUSIONS.map((it) => (
                        <span key={it} className="rounded-full border px-2 py-0.5">{it}</span>
                    ))}
                </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((m) => (
                    <div key={m.key} className="rounded-xl border p-4">
                        <div className="font-medium">{m.name}</div>
                        <div className="text-sm opacity-70">From ₹{m.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}


