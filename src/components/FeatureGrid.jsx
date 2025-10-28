import { Zap, Cpu, Layers, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra-fast",
    desc: "Hardware-accelerated animations that feel instant and smooth.",
  },
  {
    icon: Cpu,
    title: "Physics-based",
    desc: "Springs, inertia, and keyframes that mirror real-world motion.",
  },
  {
    icon: Layers,
    title: "Any layer",
    desc: "Animate DOM, SVG, Canvas, and 3D scenes with a unified API.",
  },
  {
    icon: Code2,
    title: "Tiny API",
    desc: "Ergonomic primitives designed for composability and control.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-black text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Built for performance and expression</h2>
          <p className="mt-3 text-white/70">
            A modern animation engine optimized for fluid interactions and creative explorations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/80 to-indigo-600/80">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
