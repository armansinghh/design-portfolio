"use client";

import { useState, useEffect } from "react";

export function ClockCard() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();

    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="col-span-1 relative bg-[#c4a837] text-[#f0f0f0] font-bytesized rounded-2xl min-[660px]:rounded-4xl p-5 min-[660px]:p-6 md:p-8 lg:flex hidden flex-col justify-between min-h-40 overflow-hidden group 
                    border-2 border-transparent min-[660px]:border-[#161616]
                    shadow-none min-[660px]:shadow-[6px_6px_0px_#161616] 
                    transition-all duration-200 ease-out min-[660px]:hover:-translate-y-1 min-[660px]:hover:-translate-x-0.5 min-[660px]:hover:shadow-[8px_8px_0px_#161616]"
    >
      <div className="relative z-10 flex items-center w-full">
        <div className="flex items-center gap-2 text-sm tracking-widest">
          TIME // IST
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <div className="text-4xl md:text-5xl  tracking-tighter leading-none mb-1 group-hover:scale-[1.02] origin-left transition-transform duration-300">
          {time || "--:--"}
        </div>

        <div className=" text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
          GWALIOR, IN
          <span>UTC+5:30</span>
        </div>
      </div>
    </div>
  );
}
