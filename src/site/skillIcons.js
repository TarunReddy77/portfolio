// Prototype: maps a skill/tech label to a logo in src/assets/skill-icons.
// Logos come from Simple Icons (CC0) and Devicon (MIT); they remain the
// property of their respective owners.
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
  Git: "git"
};

// Brand colour is black, so these get inverted in dark mode.
const darkBrand = new Set(["modelcontextprotocol", "opentelemetry"]);

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
