import { CustomScrollbar } from "@/components/shared/Scrollbar";
import { FloatingNav } from "@/components/shared/FloatingNav";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
import { RevealFooter } from "@/components/footer/RevealFooter";
import { Marquee } from "@/components/shared/Marquee";
import { ZipperDivider } from "@/components/shared/ZipperDivider";
import { VibratingGrid } from "@/components/shared/VibratingGrid";

export default function Home() {
  return (
    <main className="w-full relative bg-(--color-background)">
      <CustomScrollbar />

      <FloatingNav />

      <div className="relative z-10 bg-(--color-background) shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="sticky top-0 w-full h-screen z-0">
          <div className="absolute inset-0 bg-dark-grid lg:hidden pointer-events-none" />
          <div className="hidden lg:block">
            <VibratingGrid />
          </div>
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
      </div>

      <RevealFooter />
    </main>
  );
}
