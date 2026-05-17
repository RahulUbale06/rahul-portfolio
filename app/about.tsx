export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-10 mx-auto mt-10 w-full max-w-5xl scroll-mt-28 sm:scroll-mt-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[1.65rem] bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/10 opacity-80 blur-xl"
      />
      <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900/35 p-8 shadow-[0_0_50px_rgba(37,99,235,0.12)] backdrop-blur-2xl sm:p-10 lg:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-cyan-500/15 blur-[90px]"
        />

        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-400/90">
          About
        </p>
        <h2
          id="about-heading"
          className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem]"
        >
          Exploring AI, full stack development, and modern technologies{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            one build at a time
          </span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl">
        I’m Rahul Ubale, an AI & Data Science student passionate about machine learning, data analytics, full stack development, open source, and emerging technologies. I enjoy building modern digital experiences, participating in hackathons, and continuously learning through real-world projects and developer communities.        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
          <div className="group rounded-2xl border border-blue-400/15 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/[0.08] hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] lg:px-6 lg:py-6">
            <p className="text-sm font-medium text-blue-200/95">Tech Interests</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
            AI, machine learning, data analytics, full stack development, and modern web technologies.
            </p>
          </div>
          <div className="group rounded-2xl border border-blue-400/15 bg-white/[0.03] px-5 py-5 transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/[0.08] hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] lg:px-6 lg:py-6">
            <p className="text-sm font-medium text-blue-200/95">How I work</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
              Iterate in tight loops — prototype quickly, instrument what
              matters, and refine motion, spacing, and copy until everything
              clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
