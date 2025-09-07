import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Hero() {
    return (
        <section className="relative mx-auto mt-0 max-w-none overflow-hidden bg-[linear-gradient(120deg,#fff7e6,#fff),_radial-gradient(800px_400px_at_0%_0%,#ffebee_0%,transparent_60%),_radial-gradient(800px_400px_at_100%_100%,#e8f5e9_0%,transparent_60%)]">
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-10 [mask-image:radial-gradient(60%_50%_at_50%_40%,black,transparent)]" />
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold tracking-tight text-[var(--accent-red)] sm:text-2xl my-2 text-center md:text-3xl">
                                Taste the Tradition of
                            </h1>
                            <h1 className="text-4xl font-semibold tracking-tight text-gray-700 sm:text-5xl my-2 text-center md:text-6xl">
                                Ongole Home Foods
                            </h1>
                            <h1 className="text-xl font-semibold tracking-tight text-amber-700 sm:text-5xl my-2 text-center md:text-2xl">
                             Healthy | Homely | Affordable  <br />  
                             {/* Home made Quality foods. */}
                            </h1>
                        </div>

                        <p className="mt-4 max-w-prose text-base opacity-80 sm:text-lg">
                            Home-style snacks, pickles, and sweets made fresh with premium ingredients.
                            Order for family, functions, or gifting.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Link href="/pickles" className="inline-flex items-center justify-center rounded-full bg-[var(--accent-green)] border border-[var(--accent-green)] px-6 py-3 text-white hover:brightness-95 transition-colors duration-200" ><SparklesIcon className="mr-2 h-5 w-5" /> Pickles
                            </Link>
                            <Link href="/meals" className="inline-flex items-center justify-center rounded-full bg-[var(--accent-red)] px-6 py-3 text-white shadow hover:brightness-95 ">
                                Plate Meals  <ArrowRightIcon className="ml-2 h-5 w-5" />
                            </Link>

                        </div>
                    </div>
                    <div className="relative aspect-[4/3] w-full md:block hidden overflow-hidden rounded-xl border border-[#ffc107]/90 bg-white/60">
                        <Image src="/Images/Logo/logo.png" alt="Delicious home foods" fill className="object-contain p-6 dark:invert" />
                    </div>
                </div>
            </div>
        </section>
    );
}


