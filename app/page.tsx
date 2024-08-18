import About from "@/components/About";
import { Bento } from "@/components/Bento";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Special from "@/components/Special";
import { ModeToggle } from "@/components/Toggle";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MarqueeDemo } from "@/components/WeDo";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="pageContainer relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full flex flex-col">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <MarqueeDemo/>
        <About/>
        <Bento/>
        <Special/>
        <Footer/>
      <ModeToggle/>
      </div>
    </main>
    
  );
}
