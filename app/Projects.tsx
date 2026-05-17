"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./components/projects/ProjectCard";
import { projects } from "@/app/data/projects";


function buildConnectorPath(track: HTMLElement): string {
  const nodes = track.querySelectorAll<HTMLElement>("[data-project-card]");
  if (nodes.length < 2) return "";

  let d = "";
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    const x1 = a.offsetLeft + a.offsetWidth;
    const y1 = a.offsetTop + a.offsetHeight / 2;
    const x2 = b.offsetLeft;
    const y2 = b.offsetTop + b.offsetHeight / 2;
    const cx = (x1 + x2) / 2;
    if (i === 0) d += `M ${x1} ${y1}`;
    d += ` C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`;
  }
  return d;
}

function syncPathStroke(path: SVGPathElement, progress: number) {
  const len = path.getTotalLength();
  if (!Number.isFinite(len) || len <= 0) return;
  path.style.strokeDasharray = `${len}`;
  path.style.strokeDashoffset = `${len * (1 - progress)}`;
}

export default function Projects() {
  const filterId = useId().replace(/:/g, "");
  const lineGradId = `${filterId}-line`;
  const glowFilterId = `${filterId}-glow`;
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () => {
    window.removeEventListener("resize", checkMobile);
  };
}, []);



  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
 
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;

    if (!section || !pin || !track || !svg || !path) return;

    let mm: gsap.MatchMedia;

    const ctx = gsap.context(() => {
      const applyPathGeometry = () => {
        const w = track.scrollWidth;
        const h = track.offsetHeight;
        svg.setAttribute("width", String(w));
        svg.setAttribute("height", String(h));
        svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
        const d = buildConnectorPath(track);
        path.setAttribute("d", d);
        syncPathStroke(path, 0);
      };

      applyPathGeometry();

      mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getScrollAmount = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);
        
        const scrollTween = gsap.to(track, {
          x: () => -(getScrollAmount() +120),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top+=120 top",
            end: () => `+=${getScrollAmount() }`,
            pin,
            scrub: 1.15,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              syncPathStroke(path, self.progress);
            },
            onRefresh: (self) => {
              applyPathGeometry();
              syncPathStroke(path, self.progress);
            },
          },
        });
        

        if (!scrollTween.scrollTrigger) {
          return () => {
            scrollTween.scrollTrigger?.kill();
            scrollTween.kill();
          };
        }

        gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 56 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: "left 78%",
                end: "left 42%",
                scrub: 0.9,
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax-wrap]").forEach((wrap) => {
          const cardEl = wrap.closest<HTMLElement>("[data-project-card]");
          gsap.fromTo(
            wrap,
            { yPercent: 5 },
            {
              yPercent: -12,
              ease: "none",
              scrollTrigger: {
                trigger: cardEl ?? wrap,
                start: "left 110%",
                end: "right -10%",
                scrub: true,
                containerAnimation: scrollTween,
              },
            }
          );
        });

        return () => {
          scrollTween.scrollTrigger?.kill();
          scrollTween.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(track, { x: 0 });

        const onScroll = () => {
          const max = track.scrollWidth - track.clientWidth;
          const p = max > 0 ? track.scrollLeft / max : 1;
          syncPathStroke(path, p);
        };

        const onResize = () => {
          applyPathGeometry();
          onScroll();
        };

        track.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card, i) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              delay: i * 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },  
            }
          );
        });
        

        return () => {
          track.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onResize);
        };
      });

      const refreshHandler = () => {
        applyPathGeometry();
      };
      ScrollTrigger.addEventListener("refreshInit", refreshHandler);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", refreshHandler);
      };
    }, section);

    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 mx-auto mt-16 w-full max-w-[100vw] text-white md:mt-24"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_55%)]" />

      <div className="relative mx-auto mb-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200/80">
          Selected work
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Cinematic project{" "}
            <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              signal line
            </span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Scroll to traverse the build log. Each node is a shipped surface — glass, neon, and
            depth tuned for an AI-native product story.
          </p>
        </div>
      </div>

      <div
        ref={pinRef}
    className="relative w-full md:h-[95vh] md:overflow-hidden md:max-h-[980px]"
      >
        <div
          ref={trackRef}
          className="relative flex min-h-[420px] w-full snap-x snap-mandatory items-center gap-6 overflow-x-auto overflow-y-hidden px-4 pb-10 [scrollbar-width:none] md:h-full md:min-h-0 md:snap-none md:overflow-visible md:px-10 md:pb-0 lg:gap-10 lg:px-16 [&::-webkit-scrollbar]:hidden"
        >
          <svg
            ref={svgRef}
            className="pointer-events-none absolute left-0 top-0 z-0 h-full min-h-full w-full min-w-full opacity-50 md:opacity-100"
            fill="none"
            aria-hidden
          >
            <defs>
              <filter id={glowFilterId} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id={lineGradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(56,189,248,0.1)" />
                <stop offset="45%" stopColor="rgba(59,130,246,0.95)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.85)" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              stroke={`url(#${lineGradId})`}
              strokeWidth="2.25"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter={`url(#${glowFilterId})`}
              opacity={0.95}
            />
          </svg>

          <div className="hidden shrink-0 md:block md:w-6 lg:w-10" aria-hidden />

          {projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}

          <div className="hidden w-[min(18vw,220px)] shrink-0 md:block" aria-hidden />
        </div>
      </div>

      <p className="mb-6 flex items-center justify-center text-sm tracking-wide text-cyan-300 md:hidden">
      ← Explore the project journey
      </p>
    </section>
  );
}
