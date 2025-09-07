"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
    id: string;
    name: string;
    category: "pickle" | "meal";
    size?: "250g" | "500g" | "1kg";
    extras?: { extraCurry?: boolean; curd?: boolean };
    unitPrice: number;
    quantity: number;
};

type CartContextValue = {
    items: CartItem[];
    addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
    updateItemQuantity: (id: string, quantity: number) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "ohf_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load cart from localStorage
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) setItems(JSON.parse(raw));
        } catch { }
    }, []);

    // Persist cart
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch { }
    }, [items]);

    const addItem: CartContextValue["addItem"] = (item, quantity = 1) => {
        setItems((prev) => {
            const key = item.id;
            const idx = prev.findIndex((i) => i.id === key);
            if (idx >= 0) {
                const next = [...prev];
                next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
                return next;
            }
            return [...prev, { ...item, quantity }];
        });
    };

    const updateItemQuantity: CartContextValue["updateItemQuantity"] = (id, quantity) => {
        setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
    };

    const removeItem: CartContextValue["removeItem"] = (id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const clearCart = () => setItems([]);

    const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0), [items]);

    const value = useMemo(
        () => ({ items, addItem, updateItemQuantity, removeItem, clearCart, subtotal }),
        [items, subtotal]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}


