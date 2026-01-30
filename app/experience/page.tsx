import { experience } from "../../lib/experience";

export default function Experience() {
  return (
    <main className="min-h-screen px-10 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-14">
          <span className="text-white">Professional</span>{" "}
          <span className="text-cyan-400">Experience</span>
        </h1>

        <div className="space-y-12">
          {experience.map((job, i) => (
            <JobCard key={i} {...job} />
          ))}
        </div>
      </div>
    </main>
  );
}

function JobCard({ role, company, duration, location, desc }: any) {
  return (
    <div className="border border-white/10 p-8 rounded-xl bg-white/5 backdrop-blur hover:border-cyan-400/40 transition">
      <div className="flex justify-between flex-wrap gap-2 mb-3">
        <h2 className="text-2xl font-semibold text-white">{role}</h2>
        <span className="text-sm text-gray-400">{duration}</span>
      </div>

      <p className="text-cyan-400 mb-4">{company} • {location}</p>

      <ul className="space-y-2 text-gray-200 list-disc list-inside">
        {desc.map((point: string, idx: number) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
