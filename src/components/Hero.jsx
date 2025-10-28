import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-28 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
            New: Interactive 3D scenes
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Motion for the modern web
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
            Build delightful, physics-driven interactions with a simple API.
            Animate anything – elements, SVGs, and 3D scenes – with performance in mind.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              Get Started
            </a>
            <a
              href="#docs"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              View Docs
            </a>
          </div>
          <div className="mt-6 text-xs text-white/50">
            Open-source. MIT License. Built for creators.
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.35),rgba(255,255,255,0)_60%)]" />
    </section>
  );
}
