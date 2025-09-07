"use client";

import { useCart } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import { useMemo, useState } from "react";
import { FIXED_INCLUSIONS, WEEK_MENU, Meal } from "@/data/menu";

export default function MealsPage() {
    const { addItem } = useCart();
    const today = new Date();
    const dayIndex = today.getDay();
    const menu = useMemo(() => WEEK_MENU[dayIndex] ?? [], [dayIndex]);

    const [extras, setExtras] = useState({ extraCurry: false, curd: false });

    const toggle = (k: "extraCurry" | "curd") => setExtras((e) => ({ ...e, [k]: !e[k] }));

    const addMeal = (m: Meal) => {
        const extraCost = (extras.extraCurry ? 20 : 0) + (extras.curd ? 10 : 0);
        const unitPrice = m.price + extraCost;
        const id = `meal_${m.key}_${extras.extraCurry ? "xc" : ""}${extras.curd ? "c" : ""}` || `meal_${m.key}`;
        addItem({ id, name: `${m.name}${extras.extraCurry ? " + Extra Curry" : ""}${extras.curd ? " + Curd" : ""}`, category: "meal", extras, unitPrice }, 1);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="mb-4 rounded-lg border border-[#ffc107]/40 bg-[#fff8e1] p-3 text-sm">
                        Tomorrow’s menu updates at <span className="font-medium">6:00 PM</span>. Orders close at <span className="font-medium">12:00 PM</span> for next day.
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Meals</h1>
                    <p  className="mt-2 opacity-80">Today&#39;s Orders close at 12:00 PM for next day.</p>
                    <p className="mt-2 opacity-80">Tomorrow's menu updates daily at 6:00 PM.</p>

                    <div className="mt-6 rounded-xl border p-4">
                        <h2 className="font-medium">Extras</h2>
                        <div className="mt-3 flex flex-wrap gap-3 text-sm">
                            <button onClick={() => toggle("extraCurry")} className={`rounded-full border px-3 py-2 ${extras.extraCurry ? "bg-foreground text-background" : ""}`}>Extra Curry (+₹20)</button>
                            <button onClick={() => toggle("curd")} className={`rounded-full border px-3 py-2 ${extras.curd ? "bg-foreground text-background" : ""}`}>Curd (+₹10)</button>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border p-4">
                        <h2 className="font-medium">Fixed items in every plate</h2>
                        <ul className="mt-2 list-inside list-disc text-sm opacity-80">
                            {FIXED_INCLUSIONS.map((it) => (
                                <li key={it}>{it}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {menu.map((m) => (
                            <div key={m.key} className="rounded-xl border p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">{m.name}</h3>
                                    <MealCountBadge idPrefix={`meal_${m.key}`} />
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-sm opacity-80">From ₹{m.price}</span>
                                    <button onClick={() => addMeal(m)} className="rounded-full border px-3 py-2 hover:bg-foreground hover:text-background">Add</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <CartSidebar />
                </div>
            </div>
        </div>
    );
}

function MealCountBadge({ idPrefix }: { idPrefix: string }) {
    const { items } = useCart();
    const count = items
        .filter((i) => i.id.startsWith(idPrefix))
        .reduce((n, i) => n + i.quantity, 0);
    if (!count) return null;
    return <span className="rounded-full bg-[#2e7d32] px-2 py-0.5 text-xs text-white">{count}</span>;
}


