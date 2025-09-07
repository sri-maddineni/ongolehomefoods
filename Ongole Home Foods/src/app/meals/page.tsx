"use client";

import { useCart } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import { useMemo } from "react";
import { FIXED_INCLUSIONS, Meal, PLATE_BASE_PRICE, getTodayMenu } from "@/data/menu";

export default function MealsPage() {
    const { addItem } = useCart();
    const today = new Date();
    const dayIndex = today.getDay();
    const menu = useMemo(() => getTodayMenu(today), [today]);

    const addPlate = () => {
        const id = `plate_${dayIndex}`;
        addItem({ id, name: "Today's Plate (Fixed + 2 Daily Curries)", category: "meal", unitPrice: PLATE_BASE_PRICE }, 1);
    };

    const addMeal = (m: Meal) => {
        const id = `meal_${m.key}`;
        addItem({ id, name: m.name, category: "meal", unitPrice: m.price }, 1);
    };

    const addExtra = (k: "extraCurry" | "curd") => {
        const extraCost = k === "extraCurry" ? 20 : 10;
        const id = `extra_${k}`;
        addItem({ id, name: k === "extraCurry" ? "Extra Curry" : "Curd", category: "meal", unitPrice: extraCost }, 1);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="mb-4 rounded-lg border border-[var(--accent-yellow)]/40 bg-[#fff8e1] p-3 text-sm">
                        Tomorrow’s menu updates at <span className="font-medium">6:00 PM</span>. Orders close at <span className="font-medium">12:00 PM</span> for next day.
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Meals</h1>
                    <p className="mt-2 opacity-80">Today&#39;s Orders close at 12:00 PM for next day.</p>
                    <p className="mt-2 opacity-80">Tomorrow&#39;s menu updates daily at 6:00 PM.</p>

                    <div className="mt-4 block md:hidden">
                        <CartSidebar />
                    </div>

                    <div className="mt-6 rounded-xl border p-4">
                        <h2 className="font-medium">Extras</h2>
                        <div className="mt-3 flex flex-wrap gap-3 text-sm">
                            <div className="flex items-center gap-2">
                                <ExtraCountBadge type="extraCurry" />
                                <button onClick={() => addExtra("extraCurry")} className="rounded-full border px-3 py-2 hover:bg-[var(--accent-green)] hover:text-white">Extra Curry (+₹20)</button>
                            </div>
                            <div className="flex items-center gap-2">
                                <ExtraCountBadge type="curd" />
                                <button onClick={() => addExtra("curd")} className="rounded-full border px-3 py-2 hover:bg-[var(--accent-green)] hover:text-white">Curd (+₹10)</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-[var(--accent-green)] p-4">
                        <h2 className="font-medium text-[var(--accent-green)]">Today&#39;s Complete Plate</h2>
                        <p className="mt-1 text-sm opacity-80">Fixed items + 2 daily curries</p>
                        <ul className="mt-2 list-inside list-disc text-sm opacity-80">
                            {FIXED_INCLUSIONS.map((it) => (
                                <li key={it}>{it}</li>
                            ))}
                        </ul>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="text-lg font-semibold text-[var(--accent-green)]">₹{PLATE_BASE_PRICE}</span>
                            <div className="flex items-center gap-2">
                                <PlateCountBadge />
                                <button onClick={addPlate} className="rounded-full bg-[var(--accent-green)] px-4 py-2 text-white hover:brightness-95">Add Plate</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border p-4">
                        <h2 className="font-medium">Today&#39;s Curries (Individual)</h2>
                        <p className="mt-1 text-sm opacity-80">Order additional curries</p>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {menu.map((m) => (
                                <div key={m.key} className="rounded-lg border p-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">{m.name}</h3>
                                        <MealCountBadge idPrefix={`meal_${m.key}`} />
                                    </div>
                                    <div className="mt-2 flex items-center justify-between">
                                        <span className="text-sm opacity-80">₹{m.price}</span>
                                        <button onClick={() => addMeal(m)} className="rounded-full border px-3 py-1 text-sm hover:bg-[var(--accent-green)] hover:text-white">Add</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
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
    return <span className="rounded-full bg-[var(--accent-green)] px-2 py-0.5 text-xs text-white">{count}</span>;
}

function PlateCountBadge() {
    const { items } = useCart();
    const today = new Date();
    const dayIndex = today.getDay();
    const count = items
        .filter((i) => i.id === `plate_${dayIndex}`)
        .reduce((n, i) => n + i.quantity, 0);
    if (!count) return null;
    return <span className="rounded-full bg-[var(--accent-red)] px-2 py-0.5 text-xs text-white">{count}</span>;
}

function ExtraCountBadge({ type }: { type: "extraCurry" | "curd" }) {
    const { items } = useCart();
    const count = items
        .filter((i) => i.id === `extra_${type}`)
        .reduce((n, i) => n + i.quantity, 0);
    if (!count) return null;
    return <span className="rounded-full bg-[var(--accent-red)] px-2 py-0.5 text-xs text-white">{count}</span>;
}


