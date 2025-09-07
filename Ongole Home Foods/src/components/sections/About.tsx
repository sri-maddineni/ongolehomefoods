export default function About() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Ongole Home Foods</h2>
                    <p className="mt-4 opacity-80">
                        We are a small-scale kitchen from Ongole bringing authentic Andhra flavors to your table.
                        From spicy pickles to crunchy snacks and festive sweets, everything is made in small batches,
                        without preservatives.
                    </p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2">
                    <li className="rounded-lg border p-4"><span className="font-medium">Freshly Prepared</span><br />Made-to-order in hygienic conditions</li>
                    <li className="rounded-lg border p-4"><span className="font-medium">Premium Ingredients</span><br />Sourced locally from trusted vendors</li>
                    <li className="rounded-lg border p-4"><span className="font-medium">Home Taste</span><br />Authentic recipes from our family</li>
                    <li className="rounded-lg border p-4"><span className="font-medium">Custom Orders</span><br />Bulk orders for functions and gifts</li>
                </ul>
            </div>
        </section>
    );
}


