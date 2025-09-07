"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function CartSidebar() {
    const { items, updateItemQuantity, removeItem, subtotal } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const CartContent = () => (
        <>
            <h3 className="text-base font-medium md:text-lg">Your Cart</h3>
            {items.length === 0 ? (
                <div className="mt-1 text-xs opacity-70 md:mt-2 md:text-sm">No items yet.</div>
            ) : (
                <div className="mt-1 space-y-2 md:mt-2 md:space-y-3">
                    {items.map((i) => (
                        <div key={i.id} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <div className="min-w-0 flex-1">
                                <div className="truncate text-xs font-medium md:text-sm">{i.name}</div>
                                <div className="text-xs opacity-70">₹{i.unitPrice}</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <input
                                    type="number"
                                    min={1}
                                    value={i.quantity}
                                    onChange={(e) => updateItemQuantity(i.id, Math.max(1, Number(e.target.value)))}
                                    className="w-10 rounded border bg-background px-1 py-0.5 text-xs md:w-12 md:rounded-md md:py-1 md:text-sm"
                                />
                                <div className="w-12 text-right text-xs md:w-14 md:text-sm">₹{i.unitPrice * i.quantity}</div>
                                <button onClick={() => removeItem(i.id)} className="text-xs underline">×</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-2 flex items-center justify-between md:mt-4">
                <span className="text-xs opacity-80 md:text-sm">Subtotal</span>
                <span className="text-sm font-medium md:text-base">₹{subtotal}</span>
            </div>
            <div className="mt-2 flex flex-col gap-1 md:mt-4 md:flex-row md:gap-2">
                <Link href="/cart" className="flex-1 rounded-full border px-3 py-1.5 text-center text-xs md:px-4 md:py-2 md:text-sm">View Cart</Link>
                <Link href="/checkout" className="flex-1 rounded-full bg-[var(--accent-red)] px-3 py-1.5 text-center text-xs text-white md:px-4 md:py-2 md:text-sm">Checkout</Link>
            </div>
        </>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:block sticky top-20 rounded-xl border p-4 max-h-[80vh] overflow-y-auto">
                <CartContent />
            </aside>

            {/* Mobile Floating Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-red)] text-white shadow-lg md:hidden"
            >
                <ShoppingCartIcon className="h-6 w-6" />
                {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[var(--accent-red)]">
                        {items.reduce((n, i) => n + i.quantity, 0)}
                    </span>
                )}
            </button>

            {/* Mobile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />
                    <div className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-xl border bg-white p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Your Cart</h2>
                            <button onClick={() => setIsModalOpen(false)} className="p-1">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                        <CartContent />
                    </div>
                </div>
            )}
        </>
    );
}


