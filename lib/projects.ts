export const projects = [
    {
      title: "Physics-Informed Neural Networks for Quantum & Ising Systems",
      desc: "Designed a Physics-Informed Neural Network (PINN) to learn Boltzmann probability distributions of 1D and 2D Ising models, addressing normalization challenges in high-dimensional configuration spaces. Introduced physics-informed loss terms enforcing energy expectation matching and detailed balance, enabling physically consistent learning. Generated equilibrium configurations using Metropolis-Hastings MCMC and benchmarked performance against Restricted Boltzmann Machines (RBMs), achieving high-fidelity distribution modeling.",
      tech: "PINNs • PyTorch • Monte Carlo • Statistical Mechanics • RBMs",
    },
    {
      title: "LLM Infrastructure & Agentic AI Systems",
      desc: "Designed and deployed LLM-enabled AI infrastructure supporting scalable model serving and orchestration for engineering workflows. Built end-to-end LLM Ops pipelines including model versioning, CI/CD deployment, automated regression testing, and inference validation. Developed modular MCP-based task execution servers enabling autonomous agent workflows and reducing manual operational overhead in production systems.",
      tech: "LLMs • LLM Ops • CI/CD • MCP Servers • Model Evaluation • Deployment",
    },
    {
      title: "Retrieval-Augmented Generation (RAG) Academic System",
      desc: "Developed and fine-tuned a Retrieval-Augmented Generation pipeline trained on academic coursework materials. Integrated dense retrieval mechanisms with generative transformers to handle long-context and domain-specific queries effectively. Improved response relevance and factual grounding by combining document search with generative reasoning, enabling accurate academic knowledge synthesis.",
      tech: "Transformers • RAG • HuggingFace • PyTorch • Information Retrieval",
    },
    {
      title: "ML-Based Self-Adaptive Circuits",
      desc: "Designed a research prototype for self-adaptive electronic circuits using deep learning to model dynamic behavior under varying physical conditions. Analyzed system data to predict performance degradation and recommend structural adjustments for optimization. Demonstrated circuits capable of autonomous adaptation, improving robustness and efficiency in changing environments.",
      tech: "Deep Learning • Optimization • Circuit Modeling • System Adaptation",
    },
    {
      title: "Online Judge Platform with Secure Execution",
      desc: "Built a full-stack coding evaluation platform supporting problem management, authentication, custom testcases, and real-time submissions. Implemented secure code execution using Docker sandboxing to isolate and safely run untrusted user programs. Designed the system to balance security, performance, and scalability for competitive programming and learning environments.",
      tech: "Django REST • React • Docker • Compiler Systems • Security",
    },
    {
      title: "GAN-Based Baby Face Generator",
      desc: "Designed a Generative Adversarial Network (GAN) to generate realistic child face images conditioned on parent images. Optimized generator kernels and activation functions to produce high-quality outputs with limited training data. The model learns latent feature inheritance patterns, demonstrating controlled generative modeling of facial attributes.",
      tech: "GANs • Deep Learning • Image Generation • Computer Vision",
    },
    {
      title: "AR Indoor Navigation System",
      desc: "Developed an augmented reality indoor navigation system using visual markers and depth estimation to enable GPS-free localization. Built a path generation engine computing all n² navigation paths automatically, eliminating manual configuration efforts. The system improves indoor routing accuracy and scalability in structured environments.",
      tech: "AR • Computer Vision • Depth Estimation • Path Planning",
    },
  ];
  