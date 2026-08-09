import { AboutText } from "./AboutText";
import { ProfileCards } from "./ProfileCards";

export function About() {
  return (
    <section className="relative min-h-screen w-full text-[#161616] overflow-hidden flex items-center justify-center py-20 px-6 md:px-16">
      
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center z-10">
        
        {/* left side */}
        <div className="relative w-full flex flex-col justify-center">
          <AboutText />
        </div>

        {/* right side */}
        <div className="relative w-full min-h-125 flex items-center justify-center">
          <img 
            src="/assets/about/mat.jpg" 
            alt="Background Mat" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 object-cover shadow-xl -rotate-2 z-0"
          />
          
          <div className="relative z-10 w-full flex justify-center md:justify-end">
            <ProfileCards />
          </div>

        </div>

      </div>
    </section>
  );
}