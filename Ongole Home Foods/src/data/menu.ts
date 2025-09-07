export type Meal = { key: string; name: string; price: number };

export const WEEK_MENU: Record<number, Meal[]> = {
    0: [
        { key: "sambar", name: "Sambar ", price: 20 },
        { key: "Vankaya - Brinjal", name: "Vankaya - Brinjal ", price: 30 },
    ],
    1: [
        { key: "dal", name: "Dal + Fry Plate", price: 20 },
        { key: "Bendakaya - Lady's finger", name: "Bendakaya - Lady's finger ", price: 20 },
    ],
    2: [
        { key: "pappu", name: "Pappu + Avakaya Plate", price: 20 },
        { key: "Dosakaya - Cucumber", name: "Dosakaya - Cucumber ", price: 20 },
    ],
    3: [
        { key: "pulusu", name: "Pulusu Plate", price: 20 },
        { key: "Gongura", name: "Gongura", price: 140 },
    ],
    4: [
        { key: "khichdi", name: "Khichdi Plate", price: 20 },
        { key: "pongal", name: "Pongal Plate", price: 20 },
    ],
    5: [
        { key: "biryani", name: "Veg Biryani Plate", price: 160 },
        { key: "curd", name: "Curd ", price: 30 },
    ],
    6: [
        { key: "pulihora", name: "Pulihora Plate", price: 20 },
        { key: "veg", name: "Veg ", price: 140 },
    ],
};

export const FIXED_INCLUSIONS = [
    "Rice 20g",
    "Chapathi/Pulka (1)",
    "Dal (pappu)",
    "Papad/Chips",
    "Curd (50g)",
    "Sweet",
];

export const PLATE_BASE_PRICE = 150;

export function getTodayMenu(date: Date = new Date()) {
    return WEEK_MENU[date.getDay()] ?? [];
}


