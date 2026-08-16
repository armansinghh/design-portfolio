"use client";

import { useState, useRef } from "react";
import { TagsSelector } from "./TagsSelector";
import { BentoField } from "./BentoField";
import { ClockCard } from "./ClockCard";
import { SubmitButton } from "./SubmitButton";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [hasErrors, setHasErrors] = useState(false);
  const [activeTag, setActiveTag] = useState("...1");
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setHasErrors(true);
      return;
    }

    setHasErrors(false);

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      scope: activeTag,
    };

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
      setActiveTag("...1");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full text-[#161616] overflow-x-hidden z-10 border-t border-[#161616]/10 py-20 px-6 md:px-16"
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
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="grid grid-cols-1 gap-3 min-[660px]:gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6 min-[660px]:auto-rows-fr"
        >
          <TagsSelector activeTag={activeTag} onChange={setActiveTag} />

          <BentoField
            id="bento-name"
            name="name"
            label="ID / Name"
            placeholder="Your Name"
            rotate="none"
            required
            hasError={hasErrors}
          />

          <BentoField
            id="bento-email"
            name="email"
            label="Ping / Email"
            placeholder="hello@hefy.com"
            type="email"
            rotate="none"
            required
            hasError={hasErrors}
          />

          <ClockCard />

          <BentoField
            id="bento-msg"
            name="message"
            label="type your message"
            placeholder="Tell me about the footage, timeline, and vibe..."
            textarea
            span="col-span-1 md:col-span-2"
            rotate="none"
            required
            hasError={hasErrors}
          />

          <SubmitButton status={status} />
        </form>

        {status === "success" && (
          <p className="mt-4 w-full text-center font-bytesized text-lg tracking-wide text-[#7ba05b]">
            Message sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 w-full text-center font-bytesized text-lg tracking-wide text-[#b72b2b]">
            Something went wrong. Try again or reach out directly.
          </p>
        )}
      </div>
    </section>
  );
}
