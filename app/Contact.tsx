
"use client";

import {
    Globe,
    Mail,
    FileText,
    ArrowUpRight,
    Download,
  } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const contactLinks = [
  {
    title: "Email",
    value: "rahulubale.dev@gmail.com",
    href: "mailto:rahulubale.dev@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "github.com/rahulubale",
    href: "https://github.com/RahulUbale06",
    icon: Globe,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/rahulubale",
    href: "https://www.linkedin.com/in/rahul-ubale-397a33271/",
    icon: Globe,
  },
  {
    title: "Resume",
    value: "Download Resume",
    href: "/resume.pdf",
    icon: FileText,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".contact-card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#020617] px-6 pt-32 pb-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="contact-heading mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            LET’S CONNECT
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Let’s Build Something
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Futuristic.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Whether it’s collaboration, innovation, creative development, or
            immersive digital experiences — I’m always open to meaningful
            opportunities and conversations.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid mt-24 grid gap-6 md:grid-cols-2">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
                </div>

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                      <Icon size={24} />
                    </div>

                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                      {item.title}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-2xl">
                      {item.value}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-200">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-28 text-center">
          <p className="text-sm tracking-[0.25em] text-slate-500">
            BUILT WITH CURIOSITY, CREATIVITY & CODE.
          </p>

          <p className="mt-4 text-slate-600">
            Designed & developed by Rahul Ubale.
          </p>
        </div>
      </div>
    </section>
  );
}
