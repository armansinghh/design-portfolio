interface SubmitButtonProps {
  status?: "idle" | "sending" | "success" | "error";
}

export function SubmitButton({ status = "idle" }: SubmitButtonProps) {
  const isSending = status === "sending";

  const label =
    status === "sending"
      ? "SENDING..."
      : status === "success"
        ? "SENT!"
        : status === "error"
          ? "TRY AGAIN"
          : "SEND IT";

  return (
    <button
      type="submit"
      disabled={isSending}
      className="col-span-1 md:col-span-2 lg:col-span-1 relative bg-[#b72b2b] text-[#f0f0f0] 
                 rounded-2xl min-[660px]:rounded-4xl p-4 min-[660px]:p-6 md:p-8 
                 flex flex-row min-[660px]:flex-col items-center justify-center gap-3 min-[660px]:gap-0 
                 group 
                 border-2 border-transparent min-[660px]:border-[#161616]
                 shadow-none min-[660px]:shadow-[6px_6px_0_#161616]
                 min-[660px]:hover:-translate-y-1 min-[660px]:hover:-translate-x-0.5 min-[660px]:hover:shadow-[8px_8px_0px_#161616]
                 active:scale-95 min-[660px]:active:scale-100 min-[660px]:active:shadow-[0_0_0_#161616] min-[660px]:active:translate-x-1.5 min-[660px]:active:translate-y-1.5 
                 transition-all duration-150 ease-out min-[660px]:min-h-40 overflow-hidden
                 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0_#161616]"
    >
      <div className="relative z-10 flex flex-row min-[660px]:flex-col items-center gap-2 min-[660px]:gap-4">
        <span
          className={`font-bytesized text-3xl md:text-5xl transition-transform duration-200 ${
            isSending ? "animate-pulse" : "group-hover:translate-x-2"
          }`}
        >
          {">>>"}
        </span>

        <div className="flex flex-col items-center">
          <span className="font-bytesized text-lg md:text-xl tracking-widest text-[#f0f0f0]">
            {label}
          </span>
        </div>
      </div>
    </button>
  );
}
