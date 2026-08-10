import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Marquee } from "@/components/shared/Marquee";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
    <main className="w-full">
      <div className="bg-dark-grid bg-(--color-background)">
        <Hero />
      </div>
      <div className="bg-light-grid bg-(--color-primary)">
        <About />
      </div>
      < Marquee />
      <Projects />
    </main>
  );
}
