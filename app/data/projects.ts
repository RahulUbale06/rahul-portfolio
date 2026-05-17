export type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};
export const projects = [
  {
    id: "interior-designer",
    title: "Interior Designer Website",
    description:
      "A modern and elegant interior design website focused on premium UI, smooth layouts, and immersive user experience.",
    imageSrc:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Luxury modern living room interior",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },

  {
    id: "grocery-store",
    title: "Grocery Store Website",
    description:
      "A responsive grocery store web application with clean product layouts, modern shopping interface, and optimized user experience.",
    imageSrc:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Fresh vegetables and grocery products",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },

  {
    id: "mobile-productivity-analysis",
    title: "Impact of Mobile on Productivity and Sleep: A Behavioral Analysis",
    description:
      "A behavioral analytics study exploring how mobile usage patterns affect productivity, focus, and sleep quality through data visualization, Power BI dashboards, and statistical insights.",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Analytics dashboard and behavioral data visualization",
    tech: ["Python", "Power BI", "Data Analytics", "SQL"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },

  {
    id: "tkinter-quiz",
    title: "Python Tkinter Quiz Game",
    description:
      "An interactive desktop quiz system featuring realtime scoring, timed rounds, and modular gameplay logic built with Python and Tkinter.",
    imageSrc:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Laptop displaying code on a dark desk",
    tech: ["Python", "Tkinter", "SQLite", "OOP"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    id: "bubble-game",
    title: "Arcade Bubble Challenge",
    description:
      "An early JavaScript arcade project built during my frontend learning phase, focused on DOM manipulation, realtime scoring, timers, and interactive gameplay mechanics.",
    imageSrc:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Gaming interface with neon arcade visuals",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
];

