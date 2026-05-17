
"use client";
import { Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


  const achievements = [
    {
      year: "2023",
      title: "Wiso-Tech 2K23",
      category: "Innovation Competition",
      description:
        "Secured recognition in a national-level project competition focused on innovation, technical presentation, and collaborative problem-solving.",
      image: "/certificates/wisotech.jpg",
    },
  
    {
      year: "2024",
      title: "Industrial Training — Rudra Infotech",
      category: "Industrial Training",
      description:
        "Completed industrial training in full stack development with exposure to backend systems, web workflows, and practical software engineering concepts.",
      image: "/certificates/rudra.jpg",
    },
  
    {
      year: "2024",
      title: "Hackathon 2K24 — Tech Titans",
      category: "Hackathon",
      description:
        "Participated in Hackathon-2K24 as part of Team Tech Titans, focusing on collaborative innovation, rapid prototyping, and technical execution.",
      image: "/certificates/hackathon.jpg",
    },
  
    {
      year: "2025",
      title: "Website Design Internship",
      category: "Internship",
      description:
        "Completed a website design and development internship focused on frontend architecture, responsive systems, and modern UI implementation.",
      image: "/certificates/internship.jpg",
    },
  
    {
      year: "2025",
      title: "GDG On Campus & AIML Community",
      category: "Community & Leadership",
      description:
        "Actively contributed to technical communities, collaborative events, AI/ML activities, and innovation-driven campus initiatives.",
        image: "/certificates/gdg.png",
    },
  
    {
      year: "2026",
      title: "NPTEL Data Analytics with Python",
      category: "NPTEL Elite Certification",
      description:
        "Achieved Elite + Silver certification in Data Analytics with Python with an 88% consolidated score and Top 5% performer distinction nationwide.",
      image: "/certificates/nptel.png",
    },
    {
      year: "2026",
      title: "NPTEL German-1",
      category: "NPTEL Elite Certification",
      description:
        "Achieved Elite + Silver certification in German-1 with an 76% consolidated score ",
      image: "/certificates/nptel1.png",
    },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".achievement-card");
  
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: index % 2 === 0 ? -40 : 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.22,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              // end: "top 55%",
              toggleActions: "play none none reverse",  
              // scrub: 0.5,
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
      id="achievements"
      className="relative overflow-hidden bg-[#020617] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            JOURNEY & RECOGNITION
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Hackathons, certifications, research, communities, and milestones
            shaping my engineering and development journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent md:block" />

          <div className="space-y-16">
            {achievements.map((item, index) => {
              
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex w-full items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  } justify-center`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-10 hidden h-5 w-5 -translate-x-1/2 rounded-full border border-cyan-300/40 bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)] md:block" />

                  {/* Card */}
                  <div
                    className="achievement-card group relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] md:w-[46%]"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="mb-5 flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
  {item.image ? (
    <img
      src={item.image}
      alt={item.title}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center text-cyan-300">
      <Award size={26} />
    </div>
  )}
</div>

                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                            {item.year}
                          </p>

                          <span className="mt-1 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {item.description}
                   
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
