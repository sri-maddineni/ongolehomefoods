import Link from "next/link";
import { getTodayMenu, FIXED_INCLUSIONS, PLATE_BASE_PRICE } from "@/data/menu";

export default function DailyMenuHome() {
    const items = getTodayMenu();
    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Today’s Menu</h2>
                <Link href="/meals" className="text-sm underline">View all</Link>
            </div>
            <div className="mt-4 rounded-xl border border-[var(--accent-green)] p-4">
                <div className="font-medium text-[var(--accent-green)]">Complete Plate - ₹{PLATE_BASE_PRICE}</div>
                <div className="mt-1 text-sm opacity-80">Fixed items + 2 daily curries</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {FIXED_INCLUSIONS.map((it) => (
                        <span key={it} className="rounded-full border px-2 py-0.5">{it}</span>
                    ))}
                </div>
            </div>
            <div className="mt-4 rounded-xl border p-4">
                <div className="font-medium">Today&#39;s Curries (Individual)</div>
                <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((m) => (
                        <div key={m.key} className="rounded-lg border p-3">
                            <div className="font-medium text-sm">{m.name}</div>
                            <div className="text-xs opacity-70">₹{m.price}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6 text-center">
                <Link
                    href="/meals"
                    className="inline-block rounded-full bg-[#2e7d32] px-6 py-3 text-white 
                 font-medium shadow hover:bg-[#256628] transition-colors duration-200"
                >
                    Select Items & Order Meals
                </Link>
            </div>

        </section>
    );
}


