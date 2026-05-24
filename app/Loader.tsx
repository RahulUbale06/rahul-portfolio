"use client";

import { TypeAnimation } from "react-type-animation";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#030712]">

      {/* Background Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Logo */}
      <h1 className="animate-pulse bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-5xl font-bold tracking-[0.35em] text-transparent sm:text-7xl">
        RAHUL.DEV
      </h1>

      {/* Typing Loader */}
      <div className="mt-8 flex items-center text-sm uppercase tracking-[0.3em] text-slate-400 sm:text-base">

        <TypeAnimation
          sequence={[
            "INITIALIZING SYSTEM...",
            1500,
            "LOADING EXPERIENCE...",
            1500,
            "PREPARING INTERFACE...",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          wrapper="span"
        />

        <span className="ml-1 animate-pulse text-cyan-300">
          |
        </span>

      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 h-[2px] w-full overflow-hidden bg-white/5">
        <div className="h-full w-1/3 animate-[loader_2s_linear_infinite] bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      </div>

    </div>
  );
}