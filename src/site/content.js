// Content for the redesigned site.
// Most data still lives in ../portfolio.js; this file holds what the redesign
// adds on top (the Tsenta profile text) and merges the two sources.
import {
  greeting,
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
  location: "Fremont, California, United States",
  summary: [
    "MS in Artificial Intelligence (3.96 GPA) with hands-on experience building scalable distributed systems and ML-powered services on AWS for Fortune 500 clients. Skilled in cloud-native microservices (EKS, Lambda, Bedrock), CI/CD, and GenAI integration. Strong focus on operational excellence, code quality, and customer-obsessed product delivery.",
    greeting.subTitle
  ],
  links: {
    github: socialMediaLinks.github,
    linkedin: socialMediaLinks.linkedin,
    medium: socialMediaLinks.medium,
    email: contactInfo.email_address
  }
};

// Bullets and tech chips from the Tsenta profile, keyed by company name as it
// appears in portfolio.js. They are listed first, then the existing bullets.
const tsentaExperience = {
  "PointGuard AI": {
    bullets: [
      "With Fortune 500 clients facing slow manual security operations across multiple enterprise systems, designed and deployed multi-agent microservices using LangGraph and REST APIs to automate threat workflows, reducing incident response time by 60%.",
      "To address limited visibility into distributed agent behavior across client deployments, built a React/TypeScript real-time operations dashboard enabling cross-functional teams to monitor traces, visualize system health, and drill down into security alerts.",
      "With growing attack surface across production LLM services, engineered a Guardian Agent framework monitoring all service calls and tool invocations to automatically detect and block OWASP Top 10 patterns, processing thousands of events per minute.",
      "Lacking end-to-end tracing for audit compliance across microservices, architected observability infrastructure using OpenTelemetry and ClickHouse, enabling operational troubleshooting and continuous performance optimization of production pipelines."
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

export const experience = workExperiences.experience.map(job => {
  const extra = tsentaExperience[job.company] || {bullets: [], chips: []};
  return {
    role: job.role,
    company: job.company,
    date: job.date,
    logo: job.companylogo,
    desc: job.desc,
    bullets: [...extra.bullets, ...(job.descBullets || [])],
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
      "AWS (EKS, S3, Glue, Lambda, SageMaker, Bedrock, CloudWatch)",
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
      "RLHF"
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
      "ETL"
    ]
  },
  {
    group: "DevOps & MLOps",
    items: [
      "MLflow",
      "Kubeflow",
      "OpenTelemetry",
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
  imageAlt: c.imageAlt,
  url: c.footerLink && c.footerLink[0] ? c.footerLink[0].url : null
}));
