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
    tag: "Audio Deepfake Prevention",
    status: "Research",
    timeline: "2026",
    role: "AI Researcher & Developer",
    summary:
      "Designed and developed an audio protection framework that reduces the effectiveness of neural voice cloning while preserving perceptual speech quality.",

    problem:
      "Modern neural voice cloning models can replicate a speaker's identity using only a few seconds of speech, creating serious privacy and security concerns.",

    solution:
      "Built an end-to-end deep learning pipeline that learns universal adversarial perturbations to protect speech against cloning attacks while maintaining natural audio quality. The system leverages SpeechBrain speaker embeddings, HiFi-GAN reconstruction, and objective speech quality metrics for evaluation.",

    stack: [
      "Python",
      "PyTorch",
      "SpeechBrain",
      "HiFi-GAN",
      "LibriSpeech"
    ],

    highlights: [
      "Designed an end-to-end audio deepfake prevention framework",
      "Implemented universal adversarial perturbation learning",
      "Built automated preprocessing pipelines for LibriSpeech",
      "Integrated SpeechBrain speaker embeddings",
      "Used HiFi-GAN for high-quality speech reconstruction",
      "Evaluated using PESQ, STOI, and embedding similarity metrics"
    ],

    architecture:
      "Audio is preprocessed from the LibriSpeech dataset, converted into features for model training, optimized using speaker embedding objectives, reconstructed with HiFi-GAN, and evaluated using objective speech quality and speaker similarity metrics.",

    lessons:
      "Gained practical experience in adversarial machine learning, speech processing, dataset engineering, and balancing speaker privacy with perceptual audio quality.",

    githubUrl: "https://github.com/MuhammadTahirSundhu/FYP-FakeLess"
  },

  {
    slug: "scar",
    title: "SCAR - Multimodal AI Assistant",
    tag: "Generative AI Assistant",
    status: "Completed",
    timeline: "2026",
    role: "AI Developer",

    summary:
      "Developed a Jarvis-inspired multimodal AI assistant capable of conversational interaction, retrieval-augmented reasoning, image generation, and local automation.",

    problem:
      "Most personal AI assistants rely on cloud APIs and provide limited extensibility for integrating local models, custom knowledge bases, and automation workflows.",

    solution:
      "Built a modular AI assistant powered by local LLMs using Ollama, Retrieval-Augmented Generation, Stable Diffusion image generation, and external APIs for real-time information.",

    stack: [
      "Python",
      "FastAPI",
      "Ollama",
      "LangChain",
      "n8n",
      "RAG",
      "Stable Diffusion 1.5",
      "LoRA"
    ],

    highlights: [
      "Jarvis-inspired multimodal assistant",
      "Retrieval-Augmented Generation pipeline",
      "Google Drive document integration",
      "Stable Diffusion LoRA fine-tuning",
      "Weather, News, and Sports API integration",
      "Modular architecture for future expansion"
    ],

    architecture:
      "FastAPI backend orchestrates locally hosted Ollama models, n8n automation workflows, RAG pipelines, Stable Diffusion image generation, and external APIs within a modular architecture.",

    lessons:
      "Learned how to design scalable AI systems by combining LLMs, retrieval pipelines, automation workflows, multimodal generation, and external services.",

    githubUrl: "https://github.com/MuhammadTahirSundhu/SCAR-AIOS_Generative_AI_Project"
  },

  {
    slug: "gymbuddy",
    title: "GymBuddy",
    tag: "AI Fitness Assistant",
    status: "Completed",
    timeline: "2026",
    role: "Backend AI Developer",

    summary:
      "Developed backend REST APIs for an AI-powered fitness assistant capable of providing personalized fitness recommendations.",

    problem:
      "Traditional fitness applications lack intelligent context-aware guidance tailored to user goals and external knowledge.",

    solution:
      "Built FastAPI backend services integrated with locally hosted Ollama models and a Retrieval-Augmented Generation workflow to provide accurate, context-aware fitness assistance.",

    stack: [
      "Python",
      "FastAPI",
      "Ollama",
      "RAG"
    ],

    highlights: [
      "RESTful backend APIs",
      "Local LLM integration",
      "Retrieval-Augmented Generation",
      "Context-aware recommendations",
      "Team collaboration"
    ],

    architecture:
      "FastAPI exposes backend endpoints that communicate with locally hosted Ollama language models while retrieving relevant information through a RAG pipeline.",

    lessons:
      "Improved backend API development skills while integrating LLMs into production-style AI applications.",

    githubUrl: "https://github.com/BilalTariq03/GymBuddy"
  },

  {
    slug: "production-mlops",
    title: "Production MLOps Pipeline",
    tag: "Production AI Infrastructure",
    status: "Completed",
    timeline: "2026",
    role: "ML Engineer",

    summary:
      "Developed a production-oriented machine learning inference service featuring monitoring, containerization, and CI automation.",

    problem:
      "Many machine learning projects work well during development but lack deployment, monitoring, testing, and reproducibility required for production.",

    solution:
      "Built a FastAPI inference service packaged with Docker, monitored using Prometheus and Grafana, and automated testing through GitHub Actions.",

    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "Prometheus",
      "Grafana",
      "GitHub Actions"
    ],

    highlights: [
      "Production-ready inference service",
      "Docker containerization",
      "Prometheus monitoring",
      "Grafana dashboards",
      "GitHub Actions CI workflows",
      "Modular software architecture"
    ],

    architecture:
      "FastAPI serves machine learning inference while Docker ensures reproducible deployments. Prometheus collects runtime metrics visualized through Grafana dashboards, with GitHub Actions automating testing and deployment.",

    lessons:
      "Developed a deeper understanding of deployment, observability, containerization, CI/CD, and production machine learning workflows.",

    githubUrl: "https://github.com/m-nabeed-haider/course-project-m-nabeed-haider"
  }
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
