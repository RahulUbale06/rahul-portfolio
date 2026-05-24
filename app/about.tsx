// export default function About() {
//   return (
//     <section
//       id="about"
//       aria-labelledby="about-heading"
//       className="relative z-10 mx-auto mt-10 w-full max-w-5xl scroll-mt-28 sm:scroll-mt-32"
//     >
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/10 opacity-80 blur-xl"
//       />
//       <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900/35 p-8 shadow-[0_0_50px_rgba(37,99,235,0.12)] backdrop-blur-2xl sm:p-10 lg:p-12">
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-[100px]"
//         />
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[90px]"
//         />

//         <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400/90">
//           About
//         </p>
//         <h2
//           id="about-heading"
//           className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]"
//         >
//           Exploring AI, full stack development, and modern technologies{" "}
//           <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
//             one build at a time
//           </span>
//         </h2>
//         <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
//         I’m Rahul Ubale, an AI & Data Science student passionate about machine learning, data analytics, full stack development, open source, and emerging technologies. I enjoy building modern digital experiences, participating in hackathons, and continuously learning through real-world projects and developer communities.        </p>

//         <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
//           <div className="group rounded-2xl border border-blue-400/15 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/[0.08] hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] lg:px-6 lg:py-6">
//             <p className="text-sm font-medium text-blue-200/95">Tech Interests</p>
//             <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
//             AI, machine learning, data analytics, full stack development, and modern web technologies.
//             </p>
//           </div>
//           <div className="group rounded-2xl border border-blue-400/15 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/[0.08] hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] lg:px-6 lg:py-6">
//             <p className="text-sm font-medium text-blue-200/95">How I work</p>
//             <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
//               Iterate in tight loops — prototype quickly, instrument what
//               matters, and refine motion, spacing, and copy until everything
//               clicks.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      const elements = gsap.utils.toArray(".about-animate");

      elements.forEach((element, index) => {
        gsap.fromTo(
          element as gsap.TweenTarget,
          {
            opacity: 0,
            y: 60,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element as Element,
              start: "top 90%",
end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 mx-auto mt-10 w-full max-w-5xl scroll-mt-28 sm:scroll-mt-32"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/10 opacity-80 blur-xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900/35 p-8 shadow-[0_0_50px_rgba(37,99,235,0.12)] backdrop-blur-2xl sm:p-10 lg:p-12">

        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[90px]"
        />

        {/* Top Label */}
        <p className="about-animate text-xs font-semibold uppercase tracking-[0.28em] text-blue-400/90">
          About Me
        </p>

        {/* Heading */}
        <h2
          id="about-heading"
          className="about-animate mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.8rem]"
        >
          Building modern digital experiences through{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            AI, full stack development, and creative engineering
          </span>
        </h2>

        {/* Paragraph 1 */}
        <p className="about-animate mt-8 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-[1.1rem]">
          I’m Rahul Ubale, an AI & Data Science student passionate about building
          responsive, immersive, and performance-focused digital experiences.
          I enjoy transforming ideas into real-world applications through modern
          frontend development, intelligent systems, and continuous experimentation.
        </p>

        {/* Paragraph 2 */}
        <p className="about-animate mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Beyond development, I actively explore machine learning, analytics,
          software engineering, and emerging technologies while continuously
          improving through projects, hackathons, and hands-on learning.
        </p>

        {/* Stats */}
        <div className="about-animate mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">

          <div className="rounded-2xl border border-blue-500/15 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08]">
            <h3 className="text-2xl font-semibold text-white">13+</h3>
            <p className="mt-2 text-sm text-slate-400">Projects Built</p>
          </div>

          <div className="rounded-2xl border border-blue-500/15 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08]">
            <h3 className="text-2xl font-semibold text-white">AI & DS</h3>
            <p className="mt-2 text-sm text-slate-400">Student</p>
          </div>

          <div className="rounded-2xl border border-blue-500/15 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08]">
            <h3 className="text-2xl font-semibold text-white">GDG</h3>
            <p className="mt-2 text-sm text-slate-400">Community Member</p>
          </div>

          <div className="rounded-2xl border border-blue-500/15 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/[0.08]">
            <h3 className="text-2xl font-semibold text-white">∞</h3>
            <p className="mt-2 text-sm text-slate-400">Learning Mindset</p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="about-animate mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">

          <div className="group rounded-2xl border border-blue-400/15 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-blue-500/[0.08] hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] lg:px-6 lg:py-6">
            <p className="text-sm font-medium text-blue-200/95">
              Tech Interests
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
              Full stack development, AI & machine learning, data analytics,
              modern UI systems, responsive frontend engineering, and scalable
              software experiences.
            </p>
          </div>

          <div className="group rounded-2xl border border-blue-400/15 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-blue-500/[0.08] hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] lg:px-6 lg:py-6">
            <p className="text-sm font-medium text-blue-200/95">
              Development Philosophy
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
              I believe in learning by building — shipping projects publicly,
              experimenting with new technologies, improving consistently, and
              refining both design and engineering through real-world practice.
            </p>
          </div>

        </div>

        {/* Quote */}
        <div className="about-animate mt-10 border-t border-white/5 pt-6">
          <p className="text-center text-sm italic tracking-wide text-slate-500">
            “Building, learning, and improving one project at a time.”
          </p>
        </div>

      </div>
    </section>
  );
}