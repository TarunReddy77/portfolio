// Maps a skill/tech label to an icon in src/assets/skill-icons.
// Brand logos come from Simple Icons (CC0) and Devicon (MIT) and remain the
// property of their owners. Files prefixed g- are generic Lucide icons (ISC)
// used where no official logo exists.
const files = require.context("../assets/skill-icons", false, /\.svg$/);

const byLabel = {
  Python: "python",
  Java: "java",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "HTML/CSS": "html5",
  Bash: "gnubash",
  AWS: "aws",
  GCP: "googlecloud",
  Docker: "docker",
  Kubernetes: "kubernetes",
  PyTorch: "pytorch",
  TensorFlow: "tensorflow",
  "Hugging Face": "huggingface",
  LangChain: "langchain",
  LangGraph: "langgraph",
  CrewAI: "crewai",
  MCP: "modelcontextprotocol",
  MLflow: "mlflow",
  Kubeflow: "kubeflow",
  FastAPI: "fastapi",
  "Spring Boot": "springboot",
  GraphQL: "graphql",
  "Node.js": "nodedotjs",
  React: "react",
  ClickHouse: "clickhouse",
  OpenSearch: "opensearch",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  DynamoDB: "dynamodb",
  OpenTelemetry: "opentelemetry",
  Git: "git",
  Angular: "angular",
  Jenkins: "jenkins",
  Puppet: "puppet",
  OpenCV: "opencv",
  Keras: "keras",
  "Scikit-learn": "scikitlearn",
  spaCy: "spacy",
  Haystack: "haystack",
  "Weights & Biases": "weightsandbiases",
  DVC: "dvc",
  Milvus: "milvus",
  Qdrant: "qdrant",
  Elasticsearch: "elasticsearch",
  "Hugging Face Transformers": "huggingface",
  Weaviate: "g-database-zap",
  // AWS-owned products without a logo of their own
  "AWS Bedrock": "aws",
  "Amazon Bedrock": "aws",
  SageMaker: "aws",
  "Bedrock AgentCore": "aws",
  // Managed versions of well-known open-source tech
  ElastiCache: "redis",
  MSK: "apachekafka",
  "Amazon MSK": "apachekafka",
  FAISS: "meta",
  // No official logo: closest generic icon
  SQL: "g-database",
  "SQL/NoSQL": "g-database",
  Aurora: "g-database",
  Neptune: "g-waypoints",
  OpenAI: "g-sparkles",
  Pinecone: "g-database-zap",
  "Strands Agents": "g-bot",
  "Strands Agents SDK": "g-bot",
  "A2A Protocol": "g-messages-square",
  RAG: "g-library",
  "Fine-tuning": "g-sliders-horizontal",
  RLHF: "g-thumbs-up",
  REST: "g-webhook",
  Microservices: "g-boxes",
  "Event-Driven Architecture": "g-zap",
  ETL: "g-workflow",
  "Agile/Scrum": "g-kanban",
  "On-call Operations": "g-bell-ring",
  "CI/CD": "g-infinity"
};

// Brand colour is black, so these get inverted in dark mode.
const darkBrand = new Set([
  "modelcontextprotocol",
  "opentelemetry",
  "apachekafka",
  "angular"
]);

export function iconFor(label) {
  // "AWS (EKS, S3, ...)" style labels use the AWS logo.
  const key = /^AWS \(/.test(label) ? "AWS" : label;
  const name = byLabel[key];
  if (!name) return null;
  try {
    return {src: files(`./${name}.svg`), invert: darkBrand.has(name)};
  } catch (e) {
    return null;
  }
}
