 "use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypeAnimation } from "react-type-animation"; 
import Loader from "./Loader";
import Navbar from "./navbar";
import About from "./about";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";

export default function Home() {
  const featureCardsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (heroRef.current) {

        gsap.fromTo(
          ".hero-reveal",
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.18,
            ease: "power3.out",
          }
        );
      
        gsap.fromTo(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.7,
            rotate: 8,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      
      }
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
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(37,99,235,0.14),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/40 to-slate-950" />

      <section
  ref={heroRef}
  id="hero"
  className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 overflow-hidden rounded-3xl border border-blue-500/20 bg-white/[0.03] p-6 shadow-[0_0_60px_rgba(37,99,235,0.18)] backdrop-blur-2xl transition-all duration-500 sm:p-8 lg:flex-row lg:justify-between lg:gap-16 lg:p-14
   overflow-hidden rounded-3xl border border-blue-500/20 bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(37,99,235,0.18)] backdrop-blur-2xl transition-all duration-500 lg:flex-row lg:justify-between lg:p-14"
>

  {/* Animated Background Glow */}
  <div className="absolute -left-20 top-10 h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-blue-500/20 blur-[120px]" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

  {/* LEFT CONTENT */}
  <div className="relative z-10 flex-1">

    {/* Small Label */}
    <p className="hero-reveal mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
      AI & FULL STACK DEVELOPER
    </p>

    {/* Heading */}
    <h1 className="hero-reveal text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
      Building{" "}
      <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
        Intelligent
      </span>
      <br />
      Digital Experiences
      <br />
      For The Modern Web
    </h1>

    {/* Typing Animation */}
    <div className="hero-reveal mt-8 flex items-center gap-1 text-2xl font-semibold sm:text-3xl">

      <TypeAnimation
        sequence={[
          "AI Engineer",
          2000,
          "",
          500,

          "Cyber Security",
          2000,
          "",
          500,

          "System Design",
          2000,
          "",
          500,

          "Software Developer",
          2000,
          "",
          500,

          "Machine Learning Engineer",
          2000,
          "",
          500,

          "Data Analyst",
          2000,
          "",
          500,

          "Backend Developer",
          2000,
          "",
          500,

          "Full Stack Developer",
          2000,
          "",
          500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
      />

      <span className="animate-pulse text-cyan-300">|</span>
    </div>

    {/* Description */}
    <p className="hero-reveal mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
      AI & Data Science student focused on full stack development,
      intelligent systems, scalable software engineering, and modern UI experiences.
    </p>

    {/* Buttons */}
    <div className="hero-reveal mt-8 flex flex-col gap-4 sm:flex-row">

      <a href="#projects">
        <button className="group relative overflow-hidden rounded-xl border border-blue-300/40 bg-blue-500/90 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_10px_35px_rgba(59,130,246,0.45)]">

          <span className="relative z-10">
            View Projects
          </span>

          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </button>
      </a>

      <a href="#contact">
        <button className="rounded-xl border border-slate-500/50 bg-slate-900/40 px-8 py-4 font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-blue-500/10 hover:text-blue-100">
          Contact Me
        </button>
      </a>

    </div>

  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="hero-image relative z-10 flex justify-center">

    {/* Glow Ring */}
    <div className="absolute h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-blue-500/20 blur-[80px]" />

    {/* Rotating Border */}
    <div className="absolute aspect-square w-60 rounded-full border border-cyan-400/20 border-t-cyan-300 opacity-60 animate-[spin_18s_linear_infinite] sm:w-72" />
    <div className="absolute h-52 w-52 rounded-full border border-blue-500/20 blur-[1px] sm:h-64 sm:w-64" />
    {/* Image */}
    <div className="relative aspect-square w-52 animate-[float_5s_ease-in-out_infinite] overflow-hidden rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.45)] sm:w-64 lg:w-72">
      <img
        src="/Rahul_ubale.png"
        alt="Rahul Ubale"
        className="h-full w-full object-cover object-[center_5%] scale-110"
      />

    </div>

  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center lg:flex">

    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
      Scroll
    </p>

    <div className="mt-2 h-10 w-[1px] bg-gradient-to-b from-cyan-300 to-transparent animate-pulse" />

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