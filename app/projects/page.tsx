import { projects } from "../../lib/projects";

export default function Projects() {
  return (
    <main className="min-h-screen px-10 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-14">
          <span className="text-white">Selected</span>{" "}
          <span className="text-cyan-400">Work</span>
        </h1>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ title, desc, tech }: any) {
  return (
    <div className="border border-white/10 p-8 rounded-xl bg-white/5 backdrop-blur hover:border-cyan-400/50 transition duration-300">
      <h2 className="text-2xl font-semibold text-white mb-3">{title}</h2>
      <p className="text-gray-200 leading-7 mb-4">{desc}</p>
      <div className="text-cyan-400 text-sm tracking-wide">{tech}</div>
    </div>
  );
}
