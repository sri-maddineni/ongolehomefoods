import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-black/10 bg-background">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-lg font-semibold">Ongole Home Foods</h3>
                        <p className="mt-2 text-sm opacity-80">Authentic home-made delicacies from Ongole. Fresh, tasty, and hygienic.</p>
                    </div>
                    <div>
                        <h4 className="font-medium">Quick Links</h4>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li><Link href="#about" className="hover:underline">About</Link></li>
                            <li><Link href="#products" className="hover:underline">Products</Link></li>
                            <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
                            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium">Contact</h4>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li className="flex items-center gap-2"><PhoneIcon className="h-4 w-4" /> +91 6304214514</li>
                            <li className="flex items-center gap-2"><EnvelopeIcon className="h-4 w-4" /> ongolehomefoods@gmail.com</li>
                            <li className="flex items-center gap-2"><MapPinIcon className="h-4 w-4" /> Ashoka One Mall, Kukatpally, Hyderabad</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium">Follow</h4>
                        <div className="mt-2 text-sm opacity-80">Coming soon</div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs sm:flex-row">
                    <p>© {new Date().getFullYear()} Ongole Home Foods. All rights reserved.</p>
                    <p className="opacity-70">Crafted with love and spices.</p>
                </div>
            </div>
        </footer>
    );
}


