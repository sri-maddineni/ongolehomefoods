import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ongole Home Foods | Healthy & Homely Food in Hyderabad",
  description:
    "Ongole Home Foods delivers healthy, affordable, homely meals in Hyderabad. Perfect for offices, tech parks, and industries near Kukatpally. Bulk orders available with a focus on quality and taste.",
  keywords: [
    "Ongole Home Foods",
    "homely food Hyderabad",
    "bulk food orders Kukatpally",
    "office food delivery Hyderabad",
    "healthy affordable meals Hyderabad",
    "corporate food services Hyderabad",
    "tiffin services Hyderabad",
    "canteen food supply Hyderabad",
  ],
  openGraph: {
    title: "Ongole Home Foods | Bulk Office & Industry Food in Hyderabad",
    description:
      "Healthy, homely, and affordable food for offices, tech parks, and industries in Hyderabad (near Kukatpally). Bulk orders made simple with Ongole Home Foods.",
    url: "https://your-domain.com", // replace with your domain
    siteName: "Ongole Home Foods",
    images: [
      {
        url: "https://ongolehomefoods.netlify.app/_next/image?url=%2FImages%2FLogo%2Flogo.png", // replace with an actual OG image
        width: 1200,
        height: 630,
        alt: "Ongole Home Foods - Healthy & Homely Food in Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ongole Home Foods | Bulk Office & Industry Food in Hyderabad",
    description:
      "Serving healthy, homely, and affordable meals for offices, tech parks, and industries in Hyderabad near Kukatpally. Bulk orders available.",
    images: ["https://ongolehomefoods.netlify.app/_next/image?url=%2FImages%2FLogo%2Flogo.png"], // replace with actual image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
