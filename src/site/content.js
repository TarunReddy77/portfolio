// Content for the redesigned site.
// Most data still lives in ../portfolio.js; this file holds what the redesign
// adds on top (the Tsenta profile text) and merges the two sources.
import {
  socialMediaLinks,
  workExperiences,
  skillsSection,
  achievementSection,
  contactInfo
} from "../portfolio";

// Set to e.g. require("../assets/images/profile.jpg") to replace the monogram.
export const photo = null;

export const profile = {
  name: "Tarun Reddy Thandu",
  initials: "TT",
  tagline: "hello world — I'm",
  summary: [
    // From ~/career-ops/cv.md.
    "AI / Software Engineer (MS in AI, Northeastern, GPA 3.96) who builds production LLM systems end-to-end, from distributed back-end services and data pipelines through the interfaces people actually use. Current work centers on enterprise LLM security: a cross-browser DLP extension, real-time guardrails, multi-agent orchestration (LangGraph, MCP), and high-throughput LLM observability. Strong CS fundamentals (data structures, algorithms, distributed systems), with a track record shipping fault-tolerant services and ML systems end-to-end on AWS and GCP."
  ],
  links: {
    github: socialMediaLinks.github,
    linkedin: socialMediaLinks.linkedin,
    medium: socialMediaLinks.medium,
    email: contactInfo.email_address,
    phone: contactInfo.number
  }
};

// Curated bullets and tech chips, keyed by company name as it appears in
// portfolio.js. Roles without an entry here keep their portfolio.js bullets.
const curatedExperience = {
  "PointGuard AI": {
    // Written from ~/career-ops/cv.md (the canonical fact-bank).
    bullets: [
      'Building "Agent Mission Control", endpoint security for the agentic era: a scanner that sweeps enterprise endpoints (Windows included) to inventory AI agents, tools, skills, and MCP servers, then flags malicious patterns such as prompt injection, data exfiltration, and PII exposure. Deployed across managed Windows fleets through Microsoft Intune, streaming telemetry into ClickHouse for fleet-wide risk insights.',
      "Architected and shipped a cross-browser AI-native security extension (Chrome, Edge) in WXT/TypeScript with per-site adapters that intercept prompts and file uploads on ChatGPT, Claude, and Gemini, backed by an MV3 service worker for on-device guardrail checks and remote policy calls. Deployed to enterprise pilots through Chrome Managed Storage and Intune.",
      "Built a four-tier classification pipeline (fleet telemetry, known-list fast path, heuristic network interception, LLM classification of unknowns) that discovers shadow AI and publishes a continuously crawled knowledge base of 30,000+ AI websites scored by risk.",
      "Trained and evaluated the detection and guardrail models with real-time serving, reaching 99.7% detection at a 2% false-positive rate against OWASP LLM Top 10 categories, with PII redaction and semantic guardrails integrated into the agent pipeline.",
      "Engineered stateful multi-agent orchestration (LangGraph, MCP servers) for retrieval, policy decisioning, tool-calling, and automated rollback, deployed as a LiteLLM proxy plugin with zero-downtime cutover.",
      "Built a high-throughput LLM observability pipeline (OpenTelemetry, ClickHouse) capturing prompt traces, agent decisions, and guardrail outcomes, with dashboards and real-time anomaly alerting.",
      "Built a full-stack policy console (React over FastAPI and REST APIs) deployed multi-tenant on AWS and Azure, with Entra ID single sign-on through OIDC and a RAG layer over Azure AI Search."
    ],
    chips: [
      "Python",
      "TypeScript",
      "React",
      "FastAPI",
      "LangGraph",
      "MCP",
      "PyTorch",
      "OpenTelemetry",
      "ClickHouse",
      "Azure",
      "AWS",
      "Docker"
    ]
  },
  HerHeard: {
    bullets: [
      "Built an agentic medical Q&A chatbot: LangGraph orchestrating retrieval, synthesis, and validation agents behind a React front-end over FastAPI and Redis services, at sub-300ms p95 latency.",
      "Engineered hybrid retrieval combining Pinecone vector search over medical literature with a Neo4j knowledge graph of clinical entity relationships, reaching 65% accuracy on multi-hop queries.",
      "Fine-tuned Llama models with QLoRA and built an RLHF alignment pipeline on physician-validated preference data, improving response safety scores by 42%.",
      "Set up the evaluation and safety layer: RAGAS answer faithfulness at 78%, Constitutional AI guardrails, and fact-checking agents that catch hallucinations before responses reach users.",
      "Deployed the training and serving pipeline on AWS (SageMaker, Bedrock, Lambda, Fargate) and GCP Vertex AI, with continuous validation and A/B testing."
    ],
    chips: [
      "Python",
      "PyTorch",
      "LangGraph",
      "Pinecone",
      "Neo4j",
      "Hugging Face",
      "FastAPI",
      "Redis",
      "React",
      "AWS",
      "GCP"
    ]
  },
  Infosys: {
    desc: "Document-intelligence platform for a Fortune 500 financial-services client, plus a DevOps automation portal for Apple.",
    bullets: [
      "Built a document-intelligence platform processing 100K+ contracts daily, with ETL pipelines and a semantic-search API over 10M+ embeddings (FAISS IndexIVFPQ index) at 92% precision@5 and sub-200ms latency.",
      "Fine-tuned a Legal-BERT model for named entity recognition, reaching 91% F1 and cutting manual contract review time by 50%.",
      "Owned the ML lifecycle with MLflow and data-driven A/B testing, shipping models about 35% more accurate while drift detection prevented production incidents.",
      "Developed full-stack features for a DevOps automation portal for Apple: an Angular/TypeScript front-end, Spring Boot REST services, and a Django reporting service managing CI/CD pipelines across internal teams.",
      "Integrated AWS Secrets Manager and Azure Key Vault for build-time credentials, deployed services through AWS ECS, and shipped a build-failure report that surfaces failed Jenkins jobs to a central monitoring station."
    ],
    chips: [
      "Python",
      "Hugging Face",
      "FAISS",
      "MLflow",
      "Docker",
      "Kubernetes",
      "AWS",
      "Angular",
      "TypeScript",
      "Spring Boot",
      "Django",
      "Java",
      "PostgreSQL",
      "Jenkins"
    ]
  },
  "Northeastern University": {
    bullets: [
      "Led a team of TAs and course operations for 200+ graduate students across 4 semesters of CS 6120: NLP.",
      "Designed and graded assignments on transformers, embeddings, and sequence models (Python, PyTorch, Hugging Face) with automated grading workflows; ran recitations and office hours and worked with faculty on curriculum updates."
    ],
    chips: ["Python", "PyTorch", "Hugging Face"]
  },
  "Srisys Inc.": {
    bullets: [
      "Developed ERP extensions and cloud-based apps with Java, Spring Boot, Angular, and PostgreSQL, delivering custom features for clients in manufacturing and healthcare.",
      "Built CI/CD pipelines with Jenkins and Puppet and integrated AWS services for scalable backend solutions."
    ],
    chips: [
      "Java",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "Jenkins",
      "Puppet",
      "AWS"
    ]
  },
  "IIT Hyderabad (VIGIL Lab)": {
    role: "Computer Vision Research Intern",
    bullets: [
      "Benchmarked and optimized object-detection architectures (EfficientNet, YOLOv4) across PyTorch and TensorFlow, cutting inference time 30% with network pruning and quantization.",
      "Built a reproducible experimentation framework tracking 100+ experiments (Git, W&B) with automated hyperparameter tuning, improving mAP 12% on the VisDrone benchmark.",
      "Developed OpenCV and tf.data preprocessing with custom augmentation for diverse aerial imagery, improving generalization across weather and lighting conditions."
    ],
    chips: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Git",
      "Weights & Biases"
    ]
  },
  "IIT Indore|Research Associate": {
    bullets: [
      "Developed a DSP hardware IP piracy-prevention method that generates palmprint-biometric digital signatures and embeds them in RTL designs by altering register allocation.",
      "Published the work in IEEE Transactions on Consumer Electronics (peer-reviewed); collaborated with interdisciplinary teams to validate the approach and document a reproducible design methodology."
    ],
    chips: []
  },
  "IIT Indore|Research Intern": {
    bullets: [
      "Worked on transient fault tolerance in DSP cores using compiler-driven transformations and simulated annealing for floorplanning optimization.",
      "Applied AI search methods (hill climbing, particle swarm optimization) to improve delay, area, and power in VLSI systems, contributing to ongoing research on DSP core reliability and efficiency."
    ],
    chips: []
  }
};

const MONTHS = "jan feb mar apr may jun jul aug sep oct nov dec".split(" ");
// "Aug 2025 - Present" / "Sep 2024 – Dec 2024" -> sortable month number.
const startOf = date => {
  const m = /([A-Za-z]{3})[a-z]*\s+(\d{4})/.exec(date || "");
  return m ? Number(m[2]) * 12 + MONTHS.indexOf(m[1].toLowerCase()) : 0;
};

// Newest first, by start date.
export const experience = [...workExperiences.experience]
  .sort((a, b) => startOf(b.date) - startOf(a.date))
  .map(job => {
    const extra = curatedExperience[`${job.company}|${job.role}`] ||
      curatedExperience[job.company] || {bullets: [], chips: []};
    return {
      role: extra.role || job.role,
      company: job.company,
      date: job.date,
      logo: job.companylogo,
      desc: extra.desc !== undefined ? extra.desc : job.desc,
      // Where bullets were curated above they replace the original site text.
      bullets: extra.bullets.length ? extra.bullets : job.descBullets || [],
      chips: extra.chips
    };
  });

// Featured project from the Tsenta profile. Pinned GitHub repos are appended
// at runtime from profile.json.
export const featuredProjects = [
  {
    title: "Multi-Agent Code Review System",
    url: "https://github.com/TarunReddy77/multi-agent-code-review",
    eyebrow: "Featured",
    description:
      "To address limitations of traditional static analysis missing edge cases in code reviews, architected a distributed multi-agent system using Strands Agents SDK with A2A protocol and CrewAI, identifying 40% more defects than conventional tools. Implemented an A2A server-client architecture deployed on Bedrock AgentCore with Docker containers and GitHub MCP integration for automated pull request reviews with quality gates.",
    chips: [
      "Strands Agents SDK",
      "A2A Protocol",
      "Bedrock AgentCore",
      "CrewAI",
      "Amazon Bedrock",
      "MCP",
      "Docker"
    ]
  },
  {
    title: "Skill Scanner",
    eyebrow: "In progress",
    url: "https://github.com/TarunReddy77/skill-scanner",
    description:
      "An AI agent that reads an agent skill (SKILL.md) and decides whether it is malicious or benign, returning a typed verdict with a confidence score and quoted evidence. Skills are instructions that coding agents follow automatically, so a poisoned one can quietly steal credentials. The skill is treated as untrusted input, file access is restricted to SKILL.md, and every run is traced to Langfuse. Includes a FastAPI web UI.",
    chips: [
      "Python",
      "Strands Agents SDK",
      "Amazon Bedrock",
      "Langfuse",
      "FastAPI",
      "Pydantic"
    ]
  },
  {
    title: "Domain-Specific LLM Alignment via RLHF",
    url: "https://github.com/TarunReddy77/rlhf-biomedical-alignment",
    eyebrow: "Feb – Apr 2024",
    description:
      "Fine-tuned and aligned a language model for biomedical knowledge extraction using Reinforcement Learning from Human Feedback (RLHF), leveraging expert-annotated datasets to calibrate responses for target discovery and literature triage. Built a prompt-engineering and feedback loop for iterative refinement, integrating conformal prediction and uncertainty quantification to improve factual accuracy, reduce hallucinations, and sharpen scientific retrieval precision.",
    chips: [
      "Python",
      "Hugging Face Transformers",
      "PyTorch",
      "RLHF",
      "Weights & Biases"
    ]
  },
  {
    title: "AI Tool Recommender",
    url: "https://github.com/TarunReddy77/ai-tool-recommender",
    eyebrow: "In progress",
    description:
      "A recommender that suggests AI tools from interaction and content signals: a two-tower embedding retrieval model for candidate generation over a Pinecone ANN index, benchmarked against a collaborative-filtering (matrix-factorization) baseline. Two-stage retrieval and ranking with a learned ranking layer over content and behavioral features, served via FastAPI with Redis embedding caching and evaluated on Recall@K and NDCG@K.",
    chips: ["PyTorch", "FAISS", "Pinecone", "Redis", "FastAPI"]
  }
];

const tsentaSkills = [
  {
    group: "Languages",
    items: [
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML/CSS",
      "Bash"
    ]
  },
  {
    group: "Cloud & Infra",
    items: [
      "AWS (EKS, Fargate, S3, Glue, Lambda, SageMaker, Bedrock, CloudWatch)",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD"
    ]
  },
  {
    group: "ML & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangGraph",
      "Strands Agents",
      "RAG",
      "Fine-tuning",
      "RLHF",
      "Keras",
      "Scikit-learn",
      "spaCy",
      "Haystack"
    ]
  },
  {
    group: "Backend & APIs",
    items: [
      "FastAPI",
      "Node.js",
      "Spring Boot",
      "REST",
      "GraphQL",
      "Microservices",
      "Event-Driven Architecture"
    ]
  },
  {
    group: "Data & Databases",
    items: [
      "Aurora",
      "ElastiCache",
      "ClickHouse",
      "Neptune",
      "Amazon MSK",
      "FAISS",
      "OpenSearch",
      "DynamoDB",
      "Milvus",
      "Qdrant",
      "Weaviate",
      "Pinecone",
      "Elasticsearch",
      "ETL"
    ]
  },
  {
    group: "DevOps & MLOps",
    items: [
      "MLflow",
      "Kubeflow",
      "OpenTelemetry",
      "DVC",
      "Weights & Biases",
      "Bedrock AgentCore",
      "Git",
      "Agile/Scrum",
      "On-call Operations"
    ]
  }
];

// Skills from the original site that the Tsenta list doesn't already cover.
const known = tsentaSkills
  .reduce((all, g) => all.concat(g.items), [])
  .map(s => s.toLowerCase());
const alsoUsed = skillsSection.softwareSkills
  .map(s => s.skillName)
  .filter(
    name =>
      !known.some(
        k => k === name.toLowerCase() || k.startsWith(`${name.toLowerCase()} `)
      )
  );

export const skills = alsoUsed.length
  ? [...tsentaSkills, {group: "Also used", items: alsoUsed}]
  : tsentaSkills;

export const certifications = achievementSection.achievementsCards.map(c => ({
  title: c.title,
  subtitle: c.subtitle,
  image: c.image,
  url: c.footerLink && c.footerLink[0] ? c.footerLink[0].url : null
}));
