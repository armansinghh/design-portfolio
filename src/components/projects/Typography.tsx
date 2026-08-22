import { SectionHeading } from "./SectionHeading";

export function Typography() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading 
        id="category-font"
        title="typography"
        subtitle="custom typeface design"
        description="a display font built from scratch"
        shapeFill="text-[#b72b2b]" 
        shapeType="sparkle"
      />
      
      {/* interactive showcase */}
      <div className="w-full bg-white/5 rounded-xl border border-white/10 p-6 md:p-12 flex flex-col gap-10 overflow-hidden group">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center text-white/50 text-sm font-medium uppercase tracking-wider">
            <span>type it out here</span>
            <span>Boxy-Regular.otf</span>
          </div>
          
          <input
            type="text"
            defaultValue="The quick brown fox jumps over the lazy dog."
            className="w-full bg-transparent border-none outline-none text-4xl md:text-6xl text-[#f0f0f0] placeholder-white/20 transition-opacity focus:opacity-100"
            style={{ fontFamily: "'MyCustomFont', sans-serif" }}
            spellCheck="false"
          />
        </div>

        <div className="w-full h-px bg-white/10" />

        <div className="flex flex-col gap-4">
          <span className="text-white/50 text-sm font-medium uppercase tracking-wider">
            Character Set
          </span>
          <p 
            className="text-2xl md:text-4xl text-[#f0f0f0]/80 wrap-break-word leading-relaxed" 
            style={{ fontFamily: "'MyCustomFont', sans-serif" }}
          >
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z <br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z <br />
            0 1 2 3 4 5 6 7 8 9 ! @ # $ % & * ( ) _ + - =
          </p>
        </div>
      </div>
    </div>
  );
}