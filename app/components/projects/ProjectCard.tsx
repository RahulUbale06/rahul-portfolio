"use client";

import Image from "next/image";
import type { SVGProps } from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/app/data/projects";

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <article
      data-project-card
      className={[
        "group relative z-10 flex h-[620px] w-[min(88vw,420px)] shrink-0 flex-col overflow-hidden rounded-3xl border border-blue-400/20",
        "bg-gradient-to-b from-white/[0.07] to-slate-950/60 shadow-[0_0_0_1px_rgba(59,130,246,0.08)_inset,0_25px_80px_rgba(2,6,23,0.65)]",
        "backdrop-blur-2xl transition-[transform,box-shadow,border-color] duration-500 ease-out",
        "hover:-translate-y-2 hover:border-cyan-400/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.2)_inset,0_35px_100px_rgba(37,99,235,0.35)]",
        "md:w-[min(68vw,520px)] lg:w-[min(58vw,540px)]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/25 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-70" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative h-[300px] w-full overflow-hidden border-b border-white/10">
        <div
          data-parallax-wrap
          className="absolute inset-0 scale-110 will-change-transform"
        >
          <Image
            data-parallax-img
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 88vw, 520px"
            className="object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-105"
            priority={false}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-100/90 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          Signal
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-5 p-6 sm:p-7">
        <header className="space-y-3">
          <h3 className="text-balance font-semibold tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            {project.description}
          </p>
        </header>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-blue-100/90 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-50 sm:text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          {/* <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 min-w-[140px] items-center justify-center gap-2 rounded-xl border border-slate-500/40 bg-slate-950/50 px-4 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-50 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] sm:flex-none"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a> */}
          <div className="mt-auto pt-10">
  <p className="text-sm tracking-[0.25em] text-cyan-300/80">
    REPOSITORY COMING SOON
  </p>
</div>
          {/* <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 min-w-[140px] items-center justify-center gap-2 rounded-xl border border-blue-400/40 bg-gradient-to-r from-blue-600/90 to-cyan-500/80 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(34,211,238,0.45)] sm:flex-none"
          >
            <ExternalLink className="h-4 w-4" aria-hidden />
            Live Demo
          </a> */}
        </div>
      </div>
    </article>
  );
}