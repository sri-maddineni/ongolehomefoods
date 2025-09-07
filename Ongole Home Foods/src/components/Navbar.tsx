"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { items } = useCart();
    const count = items.reduce((n, i) => n + i.quantity, 0);

    return (
        <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="relative inline-block h-9 w-9 overflow-hidden rounded">
                                <Image src="/Images/Logo/logo.png" alt="Ongole Home Foods" fill className="object-contain" />
                            </span>
                            <span className="font-semibold tracking-tight">Ongole Home Foods</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/pickles" className="hover:opacity-80">Pickles</Link>
                        <Link href="/meals" className="hover:opacity-80">Meals</Link>
                        <Link href="/checkout" className="hover:opacity-80">Checkout</Link>
                        <Link href="/cart" className="relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors">
                            <ShoppingCartIcon className="h-4 w-4" />
                            Cart
                            {count > 0 && (
                                <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b71c1c] px-1 text-xs text-white">{count}</span>
                            )}
                        </Link>
                    </div>

                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5"
                        aria-label="Toggle menu"
                        onClick={() => setIsOpen((v) => !v)}
                    >
                        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden border-t border-black/10 bg-background">
                    <div className="space-y-1 px-4 py-3">
                        <Link href="/pickles" className="block rounded px-3 py-2 hover:bg-black/5">Pickles</Link>
                        <Link href="/meals" className="block rounded px-3 py-2 hover:bg-black/5">Meals</Link>
                        <Link href="/cart" className="block rounded px-3 py-2 border hover:bg-foreground hover:text-background">Cart {count > 0 ? `(${count})` : ""}</Link>
                    </div>
                </div>
            )}
        </header>
    );
}


