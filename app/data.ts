// ─────────────────────────────────────────────────────────────
// ALL editable content lives in this one file.
// Fill in the TODO placeholders (GitHub links, resume, email...)
// and the whole site updates — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Muhammad Nabeed Haider",
  roles: ["AI Engineer", "Machine Learning Engineer", "Generative AI Developer"],
  location: "Islamabad, Pakistan",
  education: "BS Computer Science, FAST National University",
  status: "Final Year Computer Science Student",
  summary:
    "I build AI systems that hold up outside a notebook — retrieval pipelines, multi-agent workflows, and adversarial ML, shipped with the monitoring and deployment discipline of production software, not the polish of a demo.",
  email: "nabeedtouseeq@gmail.com", // TODO: your email
  githubProfile: "https://github.com/m-nabeed-haider",
  linkedin: "https://www.linkedin.com/in/muhammad-nabeed-haider-92a371240/", // TODO: your LinkedIn URL
  resumeUrl: "/resume.pdf"
}

export const aboutPoints = [
  {
    label: "Applied ML",
    detail:
      "PyTorch and TensorFlow for adversarial and generative models — not just fine-tuning off-the-shelf checkpoints.",
  },
  {
    label: "LLM systems",
    detail:
      "RAG pipelines, multi-agent orchestration, and prompt engineering built for retrieval accuracy, not just fluent output.",
  },
  {
    label: "MLOps",
    detail:
      "Containerized services, CI/CD, and observability so a model's behavior in production is measured, not assumed.",
  },
  {
    label: "Cloud & deployment",
    detail: "AWS and Linux environments for training, serving, and monitoring AI workloads end to end.",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Python", "C++", "SQL", "JavaScript", "TypeScript"] },
  { category: "Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "SpeechBrain", "Transformers"] },
  { category: "Generative AI", items: ["LangChain", "LangGraph", "RAG", "LLMs", "Prompt Engineering", "Vector Databases"] },
  { category: "MLOps", items: ["Docker", "Kubernetes", "FastAPI", "GitHub Actions", "Prometheus", "Grafana"] },
  { category: "Cloud & Systems", items: ["AWS", "Linux"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "FAISS", "ChromaDB"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
];

export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: "Research" | "In Progress" | "Production" | "Completed";
  timeline: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  architecture: string;
  lessons: string;
  githubUrl: string; // TODO: replace with the real repo URL
  liveUrl?: string; // TODO: optional — remove if there's no live demo
};

export const projects: Project[] = [
  {
    slug: "fakeless",
    title: "FakeLess",
    tag: "Final Year Project — Audio Deepfake Prevention",
    status: "Research",
    timeline: "TODO — e.g. Sep 2025 – Present",
    role: "Sole researcher & engineer",
    summary:
      "An AI system that protects human voices from unauthorized cloning using adversarial perturbations, while preserving natural speech quality.",
    problem:
      "Voice cloning models can reproduce a speaker's identity from a few seconds of audio, and there is no accessible way for someone to make their own voice resistant to being cloned without degrading how it sounds.",
    solution:
      "A universal adversarial perturbation is learned and layered onto a speaker's audio before release. The perturbation is imperceptible to human listeners but disrupts the embeddings that cloning models like XTTS-v2 rely on, measured against HiFi-GAN vocoded output and the LibriSpeech benchmark.",
    stack: ["Python", "PyTorch", "SpeechBrain", "HiFi-GAN", "XTTS-v2", "LibriSpeech", "Signal Processing"],
    highlights: [
      "Universal perturbation learning across speakers",
      "Voice anti-cloning without audible artifacts",
      "Spectrogram-level signal processing",
      "Adversarial ML evaluated against a real cloning pipeline",
    ],
    architecture:
      "Speech is converted to mel-spectrograms, an adversarial perturbation network is trained against a frozen XTTS-v2 cloning target, and output is vocoded back through HiFi-GAN for perceptual evaluation against LibriSpeech samples.",
    lessons:
      "TODO — e.g. what you learned about the tradeoff between perturbation strength and perceptual quality.",
    githubUrl: "https://github.com/m-nabeed-haider/TODO-fakeless", // TODO
  },
  {
    slug: "production-rag",
    title: "Production-Grade RAG System",
    tag: "Retrieval-Augmented Generation",
    status: "Production",
    timeline: "TODO",
    role: "TODO — e.g. Solo build",
    summary:
      "An end-to-end RAG system with document ingestion, vector search, evaluation, observability, and containerized deployment.",
    problem:
      "Most RAG demos stop at 'query goes in, answer comes out.' They have no way to measure retrieval quality, no visibility once deployed, and no repeatable path to production.",
    solution:
      "A full pipeline covering ingestion, chunking, and embedding into FAISS, served behind a FastAPI layer, with retrieval and answer quality evaluated on a held-out set and Prometheus/Grafana dashboards tracking latency and failure modes in real time.",
    stack: ["LangChain", "FAISS", "FastAPI", "Docker", "Prometheus", "Grafana", "LLMs"],
    highlights: [
      "Production-oriented architecture, not a notebook demo",
      "Retrieval and answer-quality evaluation harness",
      "Prometheus + Grafana observability",
      "Fully containerized deployment",
    ],
    architecture:
      "Documents are chunked and embedded into a FAISS index, a FastAPI service handles retrieval and generation, and Prometheus scrapes service metrics visualized in Grafana — all packaged as Docker services.",
    lessons: "TODO — e.g. what evaluating retrieval quality taught you that a demo wouldn't have surfaced.",
    githubUrl: "https://github.com/m-nabeed-haider/TODO-rag-system", // TODO
  },
  {
    slug: "ai-consulting-agents",
    title: "AI Consulting Multi-Agent System",
    tag: "Multi-Agent Orchestration",
    status: "In Progress",
    timeline: "TODO",
    role: "TODO",
    summary:
      "A multi-agent workflow built on LangGraph, with modular agents collaborating on business consulting tasks.",
    problem:
      "A single LLM call struggles with multi-step business analysis that requires planning, research, and tool use in sequence rather than one shot.",
    solution:
      "Planning and research agents are composed as a LangGraph state machine, each with scoped tools and responsibilities, coordinating to break down a business task, gather information, and produce a structured recommendation.",
    stack: ["LangGraph", "Ollama", "Python", "FastAPI", "Docker"],
    highlights: [
      "Multi-agent orchestration with explicit state",
      "Dedicated planning and research agents",
      "Local model serving via Ollama",
      "Tool-using agents with scoped responsibilities",
    ],
    architecture:
      "A LangGraph state graph coordinates a planning agent and one or more research agents, each with tool access, routed through FastAPI and served locally via Ollama.",
    lessons: "TODO — e.g. what you learned about agent coordination failure modes.",
    githubUrl: "https://github.com/m-nabeed-haider/TODO-consulting-agents", // TODO
  },
  {
    slug: "sd-lora",
    title: "Stable Diffusion LoRA Fine-Tuning",
    tag: "Generative Vision",
    status: "Completed",
    timeline: "TODO",
    role: "TODO",
    summary:
      "Fine-tuned Stable Diffusion models using LoRA for efficient, low-cost personalization and image generation.",
    problem:
      "Full fine-tuning of a diffusion model for a new subject or style is expensive and easy to overfit with a small dataset.",
    solution:
      "Low-Rank Adaptation was applied to targeted attention layers of Stable Diffusion, training only a small set of additional parameters to personalize outputs while keeping the base model frozen.",
    stack: ["Python", "PyTorch", "Diffusers", "LoRA"],
    highlights: [
      "Parameter-efficient fine-tuning via LoRA",
      "Personalized image generation from a small dataset",
      "Frozen base model, lightweight adapter training",
    ],
    architecture:
      "LoRA adapters are injected into the attention layers of a pretrained Stable Diffusion checkpoint and trained on a small target dataset, with the base weights left untouched.",
    lessons: "TODO — e.g. dataset size vs. output quality tradeoffs you observed.",
    githubUrl: "https://github.com/m-nabeed-haider/TODO-sd-lora", // TODO
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  placeholder?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    period: "Fall 2025",
    title: "Data Lab Demonstrator",
    org: "FAST National University of Computer and Emerging Sciences",
    description:
      "Conducted Data Structures laboratory sessions, guided students through programming assignments and debugging, evaluated lab work, and assisted the course instructor in delivering practical sessions.",
  },
  {
    period: "Spring 2026",
    title: "AI Lab Demonstrator",
    org: "FAST National University of Computer and Emerging Sciences",
    description:
      "Conducted weekly Artificial Intelligence laboratory sessions for approximately 50 undergraduate students. Guided students in Python programming, search algorithms, machine learning fundamentals, and debugging techniques. Assisted with grading programming assignments, evaluating lab performance, and collaborated with the course instructor to deliver engaging practical sessions.",
  },
  {
    period: "2022 – 2026",
    title: "BS Computer Science",
    org: "FAST National University of Computer and Emerging Sciences",
    description:
      "Bachelor of Science in Computer Science (CGPA: 3.56/4.00). Relevant coursework includes Generative AI, Machine Learning, MLOps, Natural Language Processing, Statistical Modelling, Cloud Computing, and Information Security. Completed multiple AI projects including FakeLess, SCAR, GymBuddy, and a Production MLOps Pipeline.",
  }
];
