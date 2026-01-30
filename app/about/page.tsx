export default function About() {
  return (
    <main className="min-h-screen px-10 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* INTRO */}
        <section>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">About</span>{" "}
            <span className="text-cyan-400">Me</span>
          </h1>

          <p className="text-gray-200 leading-8 text-lg">
            I’m an AI Systems Engineer working at the intersection of Large Language Models,
            Physics-Informed Machine Learning, and intelligent system design. My work focuses
            on building learning systems that go beyond prediction — systems that understand
            structure, physical laws, and real-world constraints.
          </p>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Education</h2>
          <div className="text-gray-200 space-y-3 leading-7">
            <p>
              <strong>International Institute of Information Technology Hyderabad (IIIT-H)</strong><br />
              B.Tech — GPA: <span className="text-white">9.44</span>
            </p>
            <p>
              <strong>Academic Distinctions</strong><br />
              Dean’s List — 4 consecutive years
            </p>
          </div>
        </section>

        {/* ACADEMIC EXCELLENCE */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Academic Excellence</h2>
          <ul className="text-gray-200 space-y-2 leading-7">
            <li>Class 10 CBSE Mathematics — <span className="text-white">100%</span></li>
            <li>JEE Mains — <span className="text-white">99.8 Percentile</span></li>
            <li>JEE Advanced — <span className="text-white">AIR 6327</span></li>
          </ul>
        </section>

        {/* PROFESSIONAL FOCUS */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Professional Focus</h2>
          <p className="text-gray-200 leading-8">
            My engineering work involves LLM infrastructure, agentic workflows,
            model deployment pipelines, evaluation systems, and production AI tooling.
            On the research side, I explore Physics-Informed Neural Networks (PINNs),
            energy-based models, and many-body system modeling.
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-200">

            <SkillBlock title="AI & Machine Learning">
              LLMs, RAG, Agentic Systems, PINNs, GANs, Deep Learning,
              Neural Networks, Model Evaluation, Optimization
            </SkillBlock>

            <SkillBlock title="Frameworks & Libraries">
              PyTorch, Hugging Face Transformers, Scikit-learn,
              NumPy, Pandas
            </SkillBlock>

            <SkillBlock title="Systems & Deployment">
              LLM Ops, CI/CD Pipelines, Model Versioning,
              Docker, Linux, MCP Servers, API Development
            </SkillBlock>

            <SkillBlock title="Programming">
              Python, Django (REST), React, SQL, YAML,
              Data Structures & Algorithms
            </SkillBlock>

            <SkillBlock title="Mathematical Foundations">
              Probability, Optimization, Linear Algebra,
              Monte Carlo Methods, Statistical Modeling
            </SkillBlock>

          </div>
        </section>

        {/* PERSONAL DISCIPLINE */}
        <section>
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Beyond Engineering</h2>
          <p className="text-gray-200 leading-8">
            My approach to AI is influenced by disciplined practice beyond academics.
            I am an international Taekwondo bronze medalist and a competitive tennis
            player — experiences that shaped resilience, focus, and long-term consistency.
            I also practice harmonium and guitar, which strengthens pattern recognition
            and structured learning.
          </p>
        </section>

      </div>
    </main>
  );
}

function SkillBlock({ title, children }: any) {
  return (
    <div className="border border-white/10 p-5 rounded-xl bg-white/5">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-6">{children}</p>
    </div>
  );
}
