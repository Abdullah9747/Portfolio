export const site = {
  name: "Abdullah Faisal",
  companyName: "Abdullah Faisal",
  tagline: "AI Development That Delivers",
  email: "abdullahfaisal9747@gmail.com",
  phone: "+92 3016060443",
  linkedin: "https://www.linkedin.com/in/abdullahfai/",
  github: "https://github.com/Abdullah9747",
  medium: "https://medium.com/@abdullahfaisal9747",
} as const;

export const hero = {
  badge: "AI & Machine Learning",
  headline: "I build AI systems that solve real problems.",
  subheadline:
    "From computer vision and NLP to RAG, LLMs, and full-stack applications—I design, develop, and deploy intelligent solutions for your business.",
  valueProps: [
    "ML, NLP & Computer Vision",
    "RAG & LLM Integration",
    "Production-Ready Systems",
  ],
  cta: "Start a project",
  ctaSecondary: "View my work",
} as const;

export const about = {
  title: "About",
  paragraphs: [
    "I build AI systems that turn data into decisions—computer vision pipelines, RAG and chatbots, fine-tuned LLMs, and full-stack applications that scale.",
    "My focus is on taking ideas from prototype to production: robust ML and NLP solutions, clear architecture, and delivery that fits your timeline and goals.",
    "Whether you need a proof of concept, an integration with existing systems, or a full build, I help you ship AI that works.",
  ],
} as const;

/** Featured project: Observia (built at Code District). Add your images/videos to public/observia/ */
export const featuredProject = {
  id: "observia",
  title: "Observia",
  subtitle: "Industrial Safety Monitoring System",
  tech: "Computer Vision, YOLO, Pose Estimation",
  description:
    "Multi-stage computer vision pipeline for industrial safety monitoring on live camera streams—detection, classification, and pose estimation. From dataset collection and preprocessing to model experimentation and production deployment.",
  projectUrl: "https://observia.ai",
  company: "Code District",
  companyUrl: "https://codedistrict.com",
  /** Video first (shown above), then images. Paths: public/observia/ */
  media: [
    { type: "video" as const, src: "/observia/demo.mp4", poster: "/observia/poster.png", alt: "Observia demo" },
    { type: "image" as const, src: "/observia/1.png", alt: "Observia safety monitoring" },
    { type: "image" as const, src: "/observia/2.png", alt: "Observia dashboard" },
  ],
} as const;

export const projects = [
  {
    title: "Medical Query RAG Chatbot",
    tech: "Streamlit, LangChain, T5, FAISS",
    description:
      "RAG system using LangChain, T5, and FAISS for efficient retrieval and generation. Built retrieval pipeline for enhanced performance.",
    href: null,
  },
  {
    title: "Image Captioning with BLIP-2",
    tech: "Python, PyTorch, Hugging Face, VLMs",
    description:
      "Image captioning using BLIP-2 fine-tuned on Flickr8k. Preprocessing for multiple caption strategies; Hugging Face Transformers and PEFT for fine-tuning and evaluation.",
    href: "https://medium.com/@abdullahfaisal9747",
  },
  {
    title: "PictoQuery — Voice-Driven Visual QA",
    tech: "Python, Gradio, Whisper, BLIP-2",
    description:
      "Voice-activated visual Q&A: upload an image and ask questions by speech. Integrated Whisper, BLIP-2, FLAN-T5, and gTTS in a Gradio app.",
    href: "https://medium.com/@abdullahfaisal9747",
  },
  {
    title: "HiveMind — Community Discussion Platform",
    tech: "JavaScript, Node.js, Express, MongoDB, JWT",
    description:
      "Full-stack community platform: posts, threaded discussions, upvotes, comments. JWT auth, RBAC, RESTful APIs, scalable MongoDB model.",
    href: null,
  },
  {
    title: "DeepSeek-math Fine-tuning",
    tech: "PyTorch, SFT, LoRA, Quantization, Hugging Face",
    description:
      "Fine-tuned DeepSeek Math (Transformer) with SFT and LoRA for math meme repair.",
    href: "https://medium.com/@abdullahfaisal9747",
  },
] as const;

export const skills = {
  languages: ["Python", "C/C++", "SQL", "JavaScript", "TypeScript", "Dart", "HTML/CSS"],
  frameworks: ["React.js", "Node.js", "FastAPI", "LangChain", "Flutter"],
  tools: ["Git", "GitHub", "VS Code", "PyCharm", "Hugging Face", "Kaggle", "Google Colab"],
} as const;

export const services = [
  {
    title: "AI & ML Solutions",
    description: "Custom models, computer vision, NLP, and LLM integration for your product.",
  },
  {
    title: "RAG & Chatbots",
    description: "Retrieval-augmented systems and conversational AI built with LangChain and modern stacks.",
  },
  {
    title: "Full-Stack Development",
    description: "Web and mobile apps with React, Node, and Flutter—scalable and maintainable.",
  },
] as const;

export const blogPosts = [
  { title: "PictoQuery", date: "May 1, 2025", href: "https://medium.com/@abdullahfaisal9747" },
  { title: "Image Captioning with BLIP-2: Fine-Tuning on Flickr8k", date: "May 1, 2025", href: "https://medium.com/@abdullahfaisal9747" },
  { title: "Fine-Tuning DeepSeek for Emoji-Based Math Understanding", date: "Mar 27, 2025", href: "https://medium.com/@abdullahfaisal9747" },
  { title: "Building a Transformer from Scratch: C++ to Pseudocode", date: "Feb 27, 2025", href: "https://medium.com/@abdullahfaisal9747" },
  { title: "AI-Powered Urdu Poetry Generator with GRU and Streamlit", date: "Feb 17, 2025", href: "https://medium.com/@abdullahfaisal9747" },
  { title: "QuickPod — Revolutionizing Podcast Consumption", date: "Feb 11, 2025", href: "https://medium.com/@abdullahfaisal9747" },
] as const;
