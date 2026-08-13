"use client";

import { TagsSelector } from "./TagsSelector";
import { BentoField } from "./BentoField";
import { ClockCard } from "./ClockCard";
import { SubmitButton } from "./SubmitButton";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative w-full py-12 min-[660px]:py-20 md:py-32 px-5 sm:px-6 md:px-16 lg:px-24 text-[#161616] overflow-x-hidden z-10 border-t border-[#161616]/10"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-6 min-[660px]:mb-12 flex flex-col items-start">
          <h2 className="font-erica text-4xl min-[660px]:text-6xl md:text-[6.5rem] leading-[0.85] text-[#b72b2b] tracking-tighter">
            WANNA REACH OUT?
          </h2>

          <p className="font-sans text-base min-[660px]:text-lg md:text-xl:pl-0 text-[#161616]/60 max-w-lg mt-3 min-[660px]:mt-4 font-medium pl-0 md:pl-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* grid */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-3 min-[660px]:gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 min-[660px]:auto-rows-fr"
        >
          <TagsSelector />

          <BentoField
            id="bento-name"
            label="ID / Name"
            placeholder="Your Name"
            rotate="none"
          />

          <BentoField
            id="bento-email"
            label="Ping / Email"
            placeholder="hello@hefy.com"
            type="email"
            rotate="none"
          />

          <ClockCard />

          <BentoField
            id="bento-msg"
            label="type your message"
            placeholder="Tell me about the footage, timeline, and vibe..."
            textarea
            span="col-span-1 md:col-span-2"
            rotate="none"
          />

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}