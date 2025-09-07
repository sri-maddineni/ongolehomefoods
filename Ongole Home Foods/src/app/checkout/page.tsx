"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useMemo, useState } from "react";

const WHATSAPP = "+91 6304214514";

export default function CheckoutPage() {
    const { items, subtotal, clearCart } = useCart();
    const [form, setForm] = useState({ name: "", phone: "", address: "", mapsUrl: "" });

    const handle = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

    const message = useMemo(() => {
        const lines = [
            `New order from ${form.name} (${form.phone})`,
            "Items:",
            ...items.map((i) => `• ${i.name} x${i.quantity} = ₹${i.unitPrice * i.quantity}`),
            `Subtotal: ₹${subtotal}`,
            `Address: ${form.address}`,
            form.mapsUrl ? `Maps: ${form.mapsUrl}` : "",
        ].filter(Boolean);
        return encodeURIComponent(lines.join("\n"));
    }, [form, items, subtotal]);

    const canSubmit = form.name && form.phone && form.address && items.length > 0;

    const onConfirm = () => {
        // In a real app, we'd create an order on the server first.
        clearCart();
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Checkout</h1>
            {items.length === 0 ? (
                <div className="mt-6 rounded-xl border p-6 text-sm">Your cart is empty. <Link className="underline" href="/pickles">Shop pickles</Link> or <Link className="underline" href="/meals">order meals</Link>.</div>
            ) : (
                <div className="mt-6 grid gap-8 lg:grid-cols-3">
                    <form className="space-y-4 lg:col-span-2">
                        <div>
                            <label className="text-sm" htmlFor="name">Name</label>
                            <input id="name" className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.name} onChange={(e) => handle("name", e.target.value)} />
                        </div>
                        <div>
                            <label className="text-sm" htmlFor="phone">Phone</label>
                            <input id="phone" className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.phone} onChange={(e) => handle("phone", e.target.value)} />
                        </div>
                        <div>
                            <label className="text-sm" htmlFor="address">Address</label>
                            <textarea id="address" rows={3} className="mt-1 w-full rounded-md border bg-background px-3 py-2" value={form.address} onChange={(e) => handle("address", e.target.value)} />
                        </div>
                        <div>
                            <label className="text-sm" htmlFor="maps">Google Maps Location URL (optional)</label>
                            <input id="maps" className="mt-1 w-full rounded-md border bg-background px-3 py-2" placeholder="https://maps.app.goo.gl/..." value={form.mapsUrl} onChange={(e) => handle("mapsUrl", e.target.value)} />
                        </div>
                    </form>
                    <aside className="rounded-xl border p-5">
                        <div className="space-y-2 text-sm">
                            {items.map((i) => (
                                <div key={i.id} className="flex items-center justify-between">
                                    <span>{i.name} ×{i.quantity}</span>
                                    <span>₹{i.unitPrice * i.quantity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="opacity-80">Subtotal</span>
                            <span className="font-medium">₹{subtotal}</span>
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="rounded-lg border p-3 text-sm">
                                <div className="font-medium">Payment</div>
                                <p className="mt-1 opacity-80">Pay via UPI to phone <span className="font-medium"> 6304214514</span>. QR will be added later.</p>
                            </div>
                            <a
                                className={`block rounded-full px-4 py-3 text-center ${canSubmit ? "bg-foreground text-background" : "border opacity-60"}`}
                                href={`https://wa.me/${WHATSAPP}?text=${message}`}
                                target="_blank"
                                onClick={onConfirm}
                                rel="noopener noreferrer"
                            >
                                Confirm via WhatsApp
                            </a>
                        </div>
                    </aside>
                </div>
            )}
        </div>
    );
}


