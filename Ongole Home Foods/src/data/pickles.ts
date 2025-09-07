export type Size = "250g" | "500g" | "1kg";

export const PICKLES: { key: string; name: string; basePrice: Record<Size, number> }[] = [
    { key: "mango", name: "Mango Pickle", basePrice: { "250g": 180, "500g": 320, "1kg": 600 } },
    { key: "tomato", name: "Tomato Pickle", basePrice: { "250g": 160, "500g": 300, "1kg": 560 } },
    { key: "garlic", name: "Garlic Pickle", basePrice: { "250g": 170, "500g": 310, "1kg": 580 } },
    { key: "ginger", name: "Ginger Pickle", basePrice: { "250g": 170, "500g": 310, "1kg": 580 } },
    { key: "kothimera", name: "Kothimera Pickle", basePrice: { "250g": 160, "500g": 300, "1kg": 560 } },
];


