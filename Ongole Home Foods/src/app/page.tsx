import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Stats from "../components/sections/Stats";
import DailyMenuHome from "../components/sections/DailyMenuHome";
import PicklesHome from "../components/sections/PicklesHome";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <Hero />
        <About />
        <Stats />
        <DailyMenuHome />
        <PicklesHome />
        {/* <Products /> */}
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
