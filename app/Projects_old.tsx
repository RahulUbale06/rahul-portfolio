"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  githubHref: string;
  demoHref: string;
};

const projects: Project[] = [
  {
    title: "Interior Designer Website",
    description:
      "A modern and elegant interior design website focused on premium UI, smooth layouts, and immersive user experience.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Minimal luxury interior living space",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    githubHref: "https://github.com",
    demoHref: "https://vercel.com",
  },
  {
    title: "Grocery Store Website",
    description:
      "A responsive grocery store web application with clean product layouts, modern shopping interface, and optimized user experience.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Fresh produce and grocery store aisle",
    stack: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    githubHref: "https://github.com",
    demoHref: "https://vercel.com",
  },
  {
    title: "Python Tkinter Quiz Game",
    description:
      "An interactive desktop quiz application built using Python and Tkinter with score tracking and user-friendly UI.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Developer workspace with laptop and code",
    stack: ["Python", "Tkinter"],
    githubHref: "https://github.com",
    demoHref: "https://vercel.com",
  },
  {
    title:
      "Impact of Mobile on Productivity and Sleep: A Behavioral Analysis",
    description:
      "A data analytics and behavioral research project analyzing how mobile usage patterns affect productivity, focus, and sleep quality using visualization and statistical insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Analytics dashboards and data visualization on screen",
    stack: ["Python", "Power BI", "Data Analytics", "SQL"],
    githubHref: "https://github.com",
    demoHref: "https://vercel.com",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const imageFirst = index % 2 === 0;

  return (
    <article
      data-project-card
      className="group relative transform-gpu"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[1px] rounded-[1.35rem] bg-gradient-to-br from-blue-500/35 via-cyan-500/10 to-blue-600/20 opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-90"
      />
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-slate-900/50 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_0_80px_-20px_rgba(37,99,235,0.35)] backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-blue-400/55 hover:shadow-[0_0_60px_rgba(59,130,246,0.35),0_30px_60px_-15px_rgba(0,0,0,0.55)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:items-stretch">
          <div
            className={`relative aspect-[16/10] min-h-[220px] overflow-hidden bg-slate-950/90 sm:min-h-[260px] lg:aspect-auto lg:min-h-[320px] ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
          >
            <div
              data-parallax-layer
              className="pointer-events-none absolute inset-x-0 top-[-10%] h-[120%] w-full will-change-transform"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/95 via-[#030712]/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#030712]/35 lg:to-[#030712]/90" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute left-4 top-4 rounded-full border border-blue-400/40 bg-blue-500/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.35)] backdrop-blur-md">
              Case study
            </div>
          </div>

          <div
            className={`relative flex flex-col justify-between p-6 sm:p-9 lg:p-11 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
          >
            <div>
              <h3 className="text-xl font-semibold leading-[1.2] tracking-tight text-white sm:text-2xl lg:text-[1.65rem] lg:leading-snug xl:text-[1.75rem]">
                {project.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base lg:leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={`${project.title}-${tech}`}>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/[0.12] px-3.5 py-1.5 text-xs font-medium tracking-wide text-blue-100/95 transition-all duration-300 group-hover:border-cyan-400/35 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_18px_rgba(59,130,246,0.2)]">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={project.githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-w-[8.5rem] items-center justify-center rounded-xl border border-slate-500/45 bg-slate-950/60 px-6 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/65 hover:bg-blue-500/10 hover:text-blue-50 hover:shadow-[0_0_28px_rgba(59,130,246,0.3)]"
              >
                GitHub
              </a>
              <a
                href={project.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-w-[8.5rem] items-center justify-center rounded-xl border border-cyan-400/35 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-sm font-semibold text-white shadow-[0_0_32px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_44px_rgba(34,211,238,0.35)]"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      if (!root) return;

      const intro = root.querySelectorAll("[data-projects-intro]");
      if (intro.length) {
        gsap.fromTo(
            intro,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: root.querySelector("[data-projects-intro-wrap]"),
                start: "top 84%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
      }

      const cards = root.querySelectorAll<HTMLElement>("[data-project-card]");
      cards.forEach((card) => {
        gsap.fromTo(
            card,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.25,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 45%",
                scrub: 0.8,
              },
            }
          );

        const layer = card.querySelector<HTMLElement>("[data-parallax-layer]");
        if (layer) {
          gsap.fromTo(
            layer,
            { yPercent: 4.5 },
            {
              yPercent: -4.5,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.45,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 mx-auto mt-12 w-full max-w-6xl scroll-mt-28 sm:scroll-mt-32 lg:mt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-500/10 opacity-70 blur-2xl"
      />

      <div className="relative rounded-3xl border border-blue-500/20 bg-slate-900/30 p-6 shadow-[0_0_60px_rgba(37,99,235,0.1)] backdrop-blur-2xl sm:p-8 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[100px]"
        />

        <div data-projects-intro-wrap>
          <p
            data-projects-intro
            className="text-xs font-semibold uppercase tracking-[0.26em] text-blue-400/90"
          >
            Work
          </p>
          <h2
            data-projects-intro
            id="projects-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            Selected{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              projects
            </span>
          </h2>
          <p
            data-projects-intro
            className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Product-grade interfaces, full-stack builds, and data-led research—
            glass surfaces, neon-accented depth, and motion that feels
            intentional.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10 sm:gap-12 lg:gap-14">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
