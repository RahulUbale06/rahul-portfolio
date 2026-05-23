 "use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./navbar";
import About from "./about";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";

export default function Home() {
  const featureCardsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (featureCardsRef.current) {
        const cards = featureCardsRef.current.children;
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: featureCardsRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 86%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(37,99,235,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/40 to-slate-950" />

      <section
        id="hero"
        className="relative z-10 mx-auto w-full max-w-5xl rounded-3xl border border-blue-500/20 bg-white/[0.03] p-6 shadow-[0_0_60px_rgba(37,99,235,0.18)] backdrop-blur-2xl transition-all duration-500 sm:p-10 lg:p-14"
      >
      {/* <div className="mx-auto mb-2 flex w-fit justify-center">
        <img
          src="/blue_bg_hero.png"
          alt="Rahul Ubale"
          className="h-40 w-40 rounded-full border-4 border-blue-400/40 object-cover shadow-[0_0_50px_rgba(59,130,246,0.6)]"
        />
      </div> */}
      <div className="mx-auto mb-2 flex w-fit justify-center">
  <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.5)]">

    <img
      src="/Rahul_ubale.png"
      alt="Rahul Ubale"
      className="h-full w-full object-cover object-[center_5%] scale-115"
    />

  </div>
</div>

        <h1 className="mt-6 text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
          Rahul{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Ubale
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
          AI and Data Science student building sleek, high-performance digital experiences with full stack engineering, design systems, and modern product thinking.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#projects"><button className="group relative w-full overflow-hidden rounded-xl border border-blue-300/40 bg-blue-500/90 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_10px_35px_rgba(59,130,246,0.45)] sm:w-auto">
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
          </a>
          <a href="#contact"><button  className="w-full rounded-xl border border-slate-500/50 bg-slate-900/40 px-7 py-3 font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-blue-500/10 hover:text-blue-100 sm:w-auto">
            Contact Me
          </button>
          </a>
        </div>
      </section>

      <About />
      <TechStack />
      <div
        id="skills1.1"
        ref={featureCardsRef}
        className="relative z-10 mx-auto mt-10 grid w-full max-w-5xl gap-3 text-center text-sm text-slate-300 sm:grid-cols-3"
      >
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] px-4 py-4 transition-colors duration-300 hover:border-blue-400/40 hover:bg-blue-500/[0.12]">
          <p className="text-xl font-semibold text-blue-200">AI & Data Science</p>
          <p className="mt-1 text-slate-400">Exploring machine learning, analytics, and intelligent systems</p>
        </div>
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] px-4 py-4 transition-colors duration-300 hover:border-blue-400/40 hover:bg-blue-500/[0.12]">
          <p className="text-xl font-semibold text-blue-200">Hackathons & Innovation</p>
          <p className="mt-1 text-slate-400">Participated and won multiple hackathons through creative problem solving</p>
        </div>
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.06] px-4 py-4 transition-colors duration-300 hover:border-blue-400/40 hover:bg-blue-500/[0.12]">
          <p className="text-xl font-semibold text-blue-200">AIML & GDG Community</p>
          <p className="mt-1 text-slate-400">AIML volunteer and active member of Google Developer Groups On Campus NKOCET</p>
        </div>
      </div>

      <div>
        <Projects />
        <Achievements />
        <Contact />

        {/* <section
          ref={contactRef}
          id="contact"
          className="relative z-10 mx-auto mt-8 w-full max-w-5xl rounded-3xl border border-blue-500/20 bg-slate-900/35 p-6 backdrop-blur-2xl sm:p-10"
        >
          <h2 className="text-2xl font-semibold text-blue-100 sm:text-3xl">Contact</h2>
          <p className="mt-3 text-slate-300">Let us build something futuristic together.</p>
        </section> */}
      </div>
    </main>
  );
 
}