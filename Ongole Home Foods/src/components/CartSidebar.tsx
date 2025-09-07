"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
    const { items, updateItemQuantity, removeItem, subtotal } = useCart();

    return (
        <aside className="sticky top-20 rounded-xl border p-5">
            <h3 className="text-lg font-medium">Your Cart</h3>
            {items.length === 0 ? (
                <div className="mt-3 text-sm opacity-70">No items yet.</div>
            ) : (
                <div className="mt-3 space-y-4">
                    {items.map((i) => (
                        <div key={i.id} className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                                <div className="truncate text-sm font-medium">{i.name}</div>
                                <div className="text-xs opacity-70">₹{i.unitPrice} each</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min={1}
                                    value={i.quantity}
                                    onChange={(e) => updateItemQuantity(i.id, Math.max(1, Number(e.target.value)))}
                                    className="w-14 rounded-md border bg-background px-2 py-1 text-sm"
                                />
                                <div className="w-16 text-right text-sm">₹{i.unitPrice * i.quantity}</div>
                                <button onClick={() => removeItem(i.id)} className="text-xs underline">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm opacity-80">Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
            </div>
            <div className="mt-4 flex gap-2">
                <Link href="/cart" className="flex-1 rounded-full border px-4 py-2 text-center text-sm">View Cart</Link>
                <Link href="/checkout" className="flex-1 rounded-full bg-[#b71c1c] px-4 py-2 text-center text-sm text-white">Checkout</Link>
            </div>
        </aside>
    );
}


