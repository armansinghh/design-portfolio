import { CustomScrollbar } from "@/components/shared/Scrollbar";
// import { FloatingNav } from "@/components/shared/FloatingNav";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Marquee } from "@/components/shared/Marquee";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <CustomScrollbar />
      {/* <FloatingNav /> */}
      <div className="bg-dark-grid bg-(--color-background)">
        <Hero />
      </div>
      <div className="bg-light-grid bg-(--color-primary)">
        <About />
      </div>
      <Marquee />
      <div className="bg-dark-grid bg-(--color-background)">
        <Projects />
      </div>
      <div className="bg-light-grid bg-(--color-primary)">
        <Contact />
      </div>
      <div className="bg-dark-grid bg-(--color-background)">
        <Footer />
      </div>
    </main>
  );
}
