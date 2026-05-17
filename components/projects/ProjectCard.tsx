"use client";

import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="project-card relative flex h-[760px] w-[620px] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-[#020817]/95 shadow-[0_0_60px_rgba(0,255,255,0.05)] backdrop-blur-xl">
      {/* Image */}
      <div className="relative h-[48%] overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="absolute left-6 top-6 rounded-full border border-cyan-400/20 bg-black/40 px-5 py-2 text-sm tracking-[0.3em] text-cyan-100 backdrop-blur-md">
          ● SIGNAL
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-10 py-9">
        <h3 className="text-5xl font-semibold leading-tight text-white">
          {project.title}
        </h3>

        <p className="mt-6 text-lg leading-[1.9] text-slate-300">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-5 py-2 text-sm uppercase tracking-wide text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex items-center gap-4 pt-10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/10"
          >
           <span className="text-xl">⚡</span>
            GitHub
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-[1.03]"
            >
              <ArrowUpRight size={22} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}