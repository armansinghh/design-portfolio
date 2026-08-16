import { CustomScrollbar } from "@/components/shared/Scrollbar";
import { FloatingNav } from "@/components/shared/FloatingNav";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Marquee } from "@/components/shared/Marquee";
import { ZipperDivider } from "@/components/shared/ZipperDivider";

export default function Home() {
  return (
    <main className="w-full relative">
      <CustomScrollbar />
      <FloatingNav />

      <div className="sticky top-0 w-full h-screen bg-dark-grid bg-(--color-background) z-0">
        <Hero />
      </div>

      <div className="relative z-20 bg-(--color-background-faded) shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Marquee variant="brand" />
      </div>

      <div className="relative bg-light-grid bg-(--color-primary) z-20">
        <About />
      </div>

      <Marquee variant="tech" />

      <div className="relative bg-dark-grid bg-(--color-background) z-20">
        <Projects />
      </div>

      <ZipperDivider />

      <div className="relative bg-light-grid bg-(--color-primary) z-20">
        <Contact />
      </div>

      <div className="relative bg-dark-grid bg-(--color-background) z-20">
        <Footer />
      </div>
    </main>
  );
}
