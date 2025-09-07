import Image from "next/image";

const products = [
    { name: "Gongura Pickle", price: "₹220", img: "/file.svg", tag: "Spicy" },
    { name: "Nuvvula Laddu", price: "₹180", img: "/file.svg", tag: "Sweet" },
    { name: "Murukku", price: "₹150", img: "/file.svg", tag: "Snack" },
    { name: "Karampodi", price: "₹120", img: "/file.svg", tag: "Spice" },
];

export default function Products() {
    return (
        <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Popular Products</h2>
                <span className="text-sm opacity-70">Made fresh on order</span>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((p) => (
                    <article key={p.name} className="group rounded-xl border p-4 transition-colors hover:border-foreground/40">
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-white">
                            <Image src={p.img} alt={p.name} fill className="object-contain p-6 dark:invert" />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                            <h3 className="font-medium">{p.name}</h3>
                            <span className="rounded-full border px-2 py-0.5 text-xs opacity-80">{p.tag}</span>
                        </div>
                        <div className="mt-1 text-sm opacity-80">{p.price}</div>
                    </article>
                ))}
            </div>
        </section>
    );
}


