export type Meal = { key: string; name: string; price: number };

export const WEEK_MENU: Record<number, Meal[]> = {
    0: [
        { key: "sambar", name: "Sambar Rice Plate", price: 120 },
        { key: "curd", name: "Curd Rice Plate", price: 90 },
    ],
    1: [
        { key: "dal", name: "Dal + Fry Plate", price: 120 },
        { key: "rasam", name: "Rasam Rice Plate", price: 100 },
    ],
    2: [
        { key: "pappu", name: "Pappu + Avakaya Plate", price: 130 },
        { key: "lemon", name: "Lemon Rice Plate", price: 100 },
    ],
    3: [
        { key: "pulusu", name: "Pulusu Plate", price: 130 },
        { key: "veg", name: "Veg Curry Plate", price: 140 },
    ],
    4: [
        { key: "khichdi", name: "Khichdi Plate", price: 120 },
        { key: "pongal", name: "Pongal Plate", price: 120 },
    ],
    5: [
        { key: "biryani", name: "Veg Biryani Plate", price: 160 },
        { key: "curd", name: "Curd Rice Plate", price: 90 },
    ],
    6: [
        { key: "pulihora", name: "Pulihora Plate", price: 100 },
        { key: "veg", name: "Veg Curry Plate", price: 140 },
    ],
};

export const FIXED_INCLUSIONS = [
    "Rice 100g",
    "Dal",
    "Chapathi/Pulka",
    "Papad/Chips",
    "Curd (50g)",
    "Sweet",
];

export function getTodayMenu(date: Date = new Date()) {
    return WEEK_MENU[date.getDay()] ?? [];
}


