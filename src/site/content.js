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
    "MS in Artificial Intelligence (3.96 GPA) with hands-on experience building scalable distributed systems and ML-powered services on AWS for Fortune 500 clients. Skilled in cloud-native microservices (EKS, Lambda, Bedrock), CI/CD, and GenAI integration. Strong focus on operational excellence, code quality, and customer-obsessed product delivery.",
    // Second paragraph keeps only what the first doesn't already say.
    "Currently at PointGuard AI, building production LLM security systems: agent orchestration (LangGraph, MCP), retrieval-augmented generation, and the guardrails that keep agentic AI safe."
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
const tsentaExperience = {
  "PointGuard AI": {
    // Condensed from the Tsenta bullets and the original site bullets, which
    // overlapped (guardrails, multi-agent orchestration, observability).
    bullets: [
      'Built "Agent Mission Control": a scanner that sweeps enterprise endpoints to inventory AI agents, tools, and MCP servers, then flags malicious patterns, prompt injection, and data exfiltration.',
      "Built a four-tier classification pipeline that discovers shadow AI and maintains a continuously crawled knowledge base of 30,000+ AI tools scored by risk.",
      "Engineered a Guardian Agent framework that monitors every service call and tool invocation to detect and block OWASP Top 10 patterns at thousands of events per minute; trained and evaluated the detection and guardrail models (99.7% detection at a 2% false-positive rate against the OWASP LLM Top 10).",
      "Designed stateful multi-agent microservices (LangGraph, MCP servers, REST APIs), deployed as a LiteLLM proxy plugin with zero-downtime cutover, automating threat workflows for Fortune 500 clients and cutting incident response time by 60%.",
      "Architected observability with OpenTelemetry and ClickHouse (end-to-end tracing for audit compliance, real-time anomaly alerting) and built a React/TypeScript operations dashboard to monitor traces, system health, and security alerts."
    ],
    chips: [
      "Python",
      "TypeScript",
      "AWS",
      "LangGraph",
      "FastAPI",
      "Docker",
      "OpenTelemetry",
      "ClickHouse",
      "React"
    ]
  },
  HerHeard: {
    bullets: [
      "To support healthcare providers needing real-time clinical guidance in a HIPAA-compliant setting, developed an AI-powered medical assistant on AWS Bedrock with a React/TypeScript frontend, achieving sub-200ms latency on cached and optimized query paths.",
      "Facing unreliable single-model responses for complex medical queries, architected a stateful distributed agent system on AWS with fault-tolerant retry and fallback patterns, handling concurrent user sessions via ElastiCache-backed state management.",
      "With clinical queries requiring reasoning across multiple data sources, implemented hybrid retrieval combining OpenSearch vector search and Neptune knowledge graphs with Amazon MSK-driven indexing, achieving 65% accuracy on multi-hop reasoning tasks.",
      "To meet strict healthcare regulatory requirements, established AI guardrails and validation agents that blocked 97% of harmful content and achieved 78% answer faithfulness on RAGAS evaluation benchmarks while maintaining low-latency responses."
    ],
    chips: [
      "AWS Bedrock",
      "SageMaker",
      "LangGraph",
      "RAG",
      "React",
      "OpenSearch",
      "Neptune",
      "FastAPI",
      "MSK",
      "ElastiCache"
    ]
  },
  Infosys: {
    desc: "",
    bullets: [
      "Supporting a system handling $2B+ in daily financial transactions, developed a document intelligence platform on AWS with ETL pipelines using AWS Glue to process 100K+ unstructured legal contracts daily for Fortune 500 clients.",
      "With manual contract review creating bottlenecks across enterprise workflows, implemented a BERT-based NER model using Hugging Face Transformers deployed on AWS EKS with auto-scaling, achieving 91% F1-score and reducing review time by 50%.",
      "To enable fast document discovery across 10M+ records, engineered a semantic search engine with FAISS using optimized IndexIVFPQ partitioning, achieving 92% precision@5 with sub-200ms latency as the core retrieval layer of the platform.",
      "Facing frequent model regressions in production, managed CI/CD pipelines and MLOps lifecycle with MLflow and Kubeflow, implementing automated A/B testing and drift detection that prevented 15 incidents and cut rollback time by 40%."
    ],
    chips: [
      "Python",
      "Java",
      "AWS (EKS, S3, Glue, RDS, Aurora)",
      "Hugging Face",
      "FAISS",
      "MLflow",
      "Docker",
      "Kubernetes"
    ]
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
    const extra = tsentaExperience[job.company] || {bullets: [], chips: []};
    return {
      role: job.role,
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
    title: "Domain-Specific LLM Alignment via RLHF",
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
