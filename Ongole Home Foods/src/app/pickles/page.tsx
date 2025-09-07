"use client";

import { useCart } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import { PICKLES, Size } from "@/data/pickles";


export default function PicklesPage() {
    const { addItem } = useCart();

    const addToCart = (p: (typeof PICKLES)[number], size: Size) => {
        const unitPrice = p.basePrice[size];
        const id = `pickle_${p.key}_${size}`;
        addItem({ id, name: `${p.name} (${size})`, category: "pickle", size, unitPrice }, 1);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pickles</h1>
                    <p className="mt-2 opacity-80">Choose your favorite pickle and size.</p>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {PICKLES.map((p) => (
                            <div key={p.key} className="rounded-xl border p-5">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">{p.name}</h3>
                                    <ItemCountBadge idPrefix={`pickle_${p.key}_`} />
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                                    {(Object.keys(p.basePrice) as Size[]).map((s) => (
                                        <SizeButton key={s} size={s} price={p.basePrice[s]} id={`pickle_${p.key}_${s}`} onClick={() => addToCart(p, s)} />
                                    ))}
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

function ItemCountBadge({ idPrefix }: { idPrefix: string }) {
    const { items } = useCart();
    const count = items
        .filter((i) => i.id.startsWith(idPrefix))
        .reduce((n, i) => n + i.quantity, 0);
    if (!count) return null;
    return <span className="rounded-full bg-[#880808] px-2 py-0.5 text-xs text-white">{count}</span>;
}

function SizeButton({ size, price, id, onClick }: { size: Size; price: number; id: string; onClick: () => void }) {
    const { items } = useCart();
    const count = items.find((i) => i.id === id)?.quantity ?? 0;
    return (
        <button onClick={onClick} className="relative rounded-full border px-3 py-2 hover:bg-foreground hover:text-background">
            {size} – ₹{price}
            {count > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#2e7d32] px-1 text-xs text-white">{count}</span>
            )}
        </button>
    );
}


