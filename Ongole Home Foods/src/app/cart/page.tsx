"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
    const { items, updateItemQuantity, removeItem, subtotal } = useCart();

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Your Cart</h1>
            {items.length === 0 ? (
                <div className="mt-6 rounded-xl border p-6 text-sm">Your cart is empty. <Link className="underline" href="/pickles">Shop pickles</Link> or <Link className="underline" href="/meals">order meals</Link>.</div>
            ) : (
                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((i) => (
                            <div key={i.id} className="flex items-center justify-between rounded-xl border p-4">
                                <div>
                                    <div className="font-medium">{i.name}</div>
                                    <div className="text-xs opacity-70 capitalize">{i.category}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="number"
                                        min={1}
                                        value={i.quantity}
                                        onChange={(e) => updateItemQuantity(i.id, Math.max(1, Number(e.target.value)))}
                                        className="w-16 rounded-md border bg-background px-2 py-1 text-sm"
                                    />
                                    <div className="w-20 text-right text-sm">₹{i.unitPrice * i.quantity}</div>
                                    <button className="text-sm underline" onClick={() => removeItem(i.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <aside className="rounded-xl border p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm opacity-80">Subtotal</span>
                            <span className="font-medium">₹{subtotal}</span>
                        </div>
                        <Link href="/checkout" className="mt-4 block rounded-full bg-foreground px-4 py-3 text-center text-background">Checkout</Link>
                    </aside>
                </div>
            )}
        </div>
    );
}


