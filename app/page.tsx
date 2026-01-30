export default function Home() {
  return (
    <main className="min-h-screen flex px-10 py-20 gap-16">

      {/* LEFT SIDE — HERO */}
      <div className="flex-1 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            <span className="text-white">AI Systems</span>{" "}
            <span className="text-cyan-400">Engineer</span>
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10">
            Designing intelligent systems that model structure, physical laws,
            and reasoning — from Physics-Informed Neural Networks to LLM agents.
          </p>

          <div className="flex gap-6">
            <a
              href="/projects"
              className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/20 transition"
            >
              View Work
            </a>
            <a
              href="/blog"
              className="px-6 py-3 border border-white/20 rounded-lg hover:border-white/40 transition"
            >
              ML Journal
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — PROFILE PANEL */}
      <div className="w-80 space-y-10 text-sm sticky top-24 h-fit">


        {/* LinkedIn */}
        <div className="border border-white/10 p-4 rounded-xl bg-white/5 backdrop-blur">
          <h3 className="text-cyan-400 font-semibold mb-2 tracking-wide">Connect</h3>
          <a
            href="https://www.linkedin.com/in/nipun-goyal-770117216/"
            target="_blank"
            className="text-gray-200 hover:text-white underline break-words"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Academic Excellence */}
        <div className="border border-white/10 p-4 rounded-xl bg-white/5 backdrop-blur">
          <h3 className="text-cyan-400 font-semibold mb-3 tracking-wide">Academic Excellence</h3>
          <ul className="text-gray-200 space-y-2">
            <li>Dean’s List — 4 Years</li>
            <li>Class 10 Maths — 100%</li>
            <li>JEE Mains — 99.8 Percentile</li>
            <li>JEE Advanced — AIR 6327</li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="border border-white/10 p-4 rounded-xl bg-white/5 backdrop-blur">
          <h3 className="text-cyan-400 font-semibold mb-3 tracking-wide">Achievements</h3>
          <ul className="text-gray-200 space-y-2">
            <li>🥉 International Taekwondo Bronze Medalist</li>
            <li>🎾 Competitive Tennis Player</li>
            <li>🎵 Harmonium & Guitar</li>
          </ul>
        </div>

      </div>

    </main>
  );
}
