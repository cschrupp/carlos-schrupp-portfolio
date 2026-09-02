export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFact = {
  value: string;
  label: string;
  detail: string;
};

export type Project = {
  slug: "wellplot" | "codingrabbit";
  order: number;
  eyebrow: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  role: string;
  collaboration: string;
  status: string;
  year: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
  accent: "teal" | "orange";
  links: ProjectLink[];
  technologies: string[];
  facts: ProjectFact[];
  contextTitle: string;
  context: string[];
  builtTitle: string;
  built: string[];
  architecture: string[];
  contributionTitle: string;
  contributions: string[];
  decisions: string[];
  caveat: string;
  sourceNote: string;
};

export const projects: Project[] = [
  {
    slug: "wellplot",
    order: 1,
    eyebrow: "Open-source scientific Python",
    title: "WellPlot",
    shortTitle: "WellPlot",
    summary: "A Python toolkit for printable and interactive well-log layouts.",
    description:
      "WellPlot turns LAS, DLIS and computed scientific channels into reproducible well-log documents using a shared data, composition and rendering model.",
    role: "Creator and maintainer",
    collaboration: "Independent open-source project",
    status: "Published alpha",
    year: "2026",
    image: "/assets/wellplot-main-pass.webp",
    imageAlt:
      "A WellPlot cement bond log showing gamma ray, depth, cable measurements, CBL amplitude and a VDL waveform display.",
    imageClass: "wellplot-image",
    accent: "teal",
    links: [
      { label: "GitHub", href: "https://github.com/cschrupp/wellplot" },
      { label: "PyPI", href: "https://pypi.org/project/wellplot/" },
      { label: "Documentation", href: "https://wellplot.readthedocs.io/en/latest/" },
    ],
    technologies: [
      "Python",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "LAS",
      "DLIS",
      "YAML",
      "MCP",
    ],
    facts: [
      {
        value: "LAS · DLIS",
        label: "Native inputs",
        detail: "Plus NumPy and pandas results created in scientific workflows.",
      },
      {
        value: "YAML · Python · MCP",
        label: "Authoring surfaces",
        detail: "Declarative jobs, programmatic composition and experimental agent workflows.",
      },
      {
        value: "PDF · PNG · SVG",
        label: "Document outputs",
        detail: "Alongside interactive Plotly figures and bounded preview renders.",
      },
    ],
    contextTitle: "Why another well-log tool?",
    context: [
      "Well logs are often reviewed in proprietary interpretation systems or assembled through one-off plotting scripts. Both approaches make it difficult to reproduce a complete document, move between data sources or keep presentation rules consistent.",
      "The project treats the log as an engineering document: physical page dimensions, track geometry, headers, scales, annotations and data bindings are explicit rather than hidden inside plotting code.",
    ],
    builtTitle: "One model, several working surfaces",
    built: [
      "Normalize scalar, array and raster channels into typed WellDataset objects with explicit axes and units.",
      "Compose printable logs through YAML templates or an in-memory LogBuilder API.",
      "Render the same document through Matplotlib and Plotly backends, including full reports, individual tracks and bounded depth windows.",
      "Support CBL/VDL arrays, curve fills, reference overlays, event markers and annotation tracks used in real logging layouts.",
      "Expose experimental MCP tools for validation, inspection, preview rendering and canonical YAML save workflows.",
    ],
    architecture: [
      "LAS, DLIS or computed channels",
      "WellDataset normalization",
      "LogBuilder / LogDocument composition",
      "Static and interactive renderers",
      "Reports, previews and saved YAML",
    ],
    contributionTitle: "Engineering ownership",
    contributions: [
      "Designed the package architecture and typed data/document model.",
      "Implemented ingestion adapters, page-layout behavior and renderer surfaces.",
      "Developed production-oriented CBL, VDL and porosity reconstruction examples.",
      "Published the package, documentation, release workflow and optional MCP integration.",
    ],
    decisions: [
      "Keep dataset contents separate from serialized document structure so large scientific arrays do not leak into layout files.",
      "Make YAML a first-class format while treating the in-memory model as the canonical programmatic authoring surface.",
      "Use one renderer-neutral document model instead of maintaining separate static and interactive specifications.",
      "Constrain MCP file access to the server working root and label the interface experimental while its authoring contract stabilizes.",
    ],
    caveat:
      "WellPlot is an alpha-stage open-source package. The site presents implemented capabilities and published examples, not unverified adoption or commercial usage claims.",
    sourceNote:
      "Project details are drawn from the public package metadata, documentation, changelog and examples in the WellPlot repository.",
  },
  {
    slug: "codingrabbit",
    order: 2,
    eyebrow: "UC Berkeley MIDS capstone",
    title: "CodingRabbit",
    shortTitle: "CodingRabbit",
    summary: "A Socratic AI teaching assistant for C++ courses and beyond.",
    description:
      "A deployed learning platform designed to help students reason through programming problems without turning an LLM into an answer generator.",
    role: "Infrastructure, AWS backend and UI",
    collaboration: "Five-person UC Berkeley MIDS team",
    status: "Completed capstone MVP",
    year: "2026",
    image: "/assets/codingrabbit-architecture.webp",
    imageAlt:
      "CodingRabbit architecture showing authenticated student learning, course governance, guarded model routing and offline evaluation.",
    imageClass: "architecture-image",
    accent: "orange",
    links: [
      {
        label: "Berkeley project page",
        href: "https://www.ischool.berkeley.edu/programs/mids/capstone/2026b-summer/coding-rabbit-ai-teaching-assistant-c-courses-and-beyond",
      },
      { label: "GitHub", href: "https://github.com/emowat/ai-teaching-assistant" },
      { label: "MVP demonstration", href: "https://youtu.be/bWv3M2eNa4c" },
    ],
    technologies: [
      "FastAPI",
      "React",
      "TypeScript",
      "AWS Cognito",
      "ECS / Fargate",
      "Aurora PostgreSQL",
      "S3 / CloudFront",
      "Qdrant",
      "SageMaker",
    ],
    facts: [
      {
        value: "+29.3%",
        label: "Debugging confidence",
        detail: "Average self-reported pilot confidence moved from 3.0 to 3.9 out of five.",
      },
      {
        value: "53% → 65%",
        label: "Retrieval recall",
        detail: "Conditional C++ reference retrieval; precision moved from 27% to 32%.",
      },
      {
        value: "0.88–0.97",
        label: "TA effectiveness",
        detail: "Five judge routes scored 72 turns across 14 evaluated sessions.",
      },
    ],
    contextTitle: "The assistance dilemma",
    context: [
      "Powerful coding assistants can improve immediate task performance while making it easy for students to bypass the reasoning that creates durable skill.",
      "CodingRabbit asked a narrower product question: how can an AI assistant use the student's course, week, editor and terminal context to provide calibrated help while instructors retain control over what is taught and when?",
    ],
    builtTitle: "A learning platform, not only a chatbot",
    built: [
      "A VS Code and GitHub Codespaces student surface with Homework Assist and Study Assist modes.",
      "Cognito authentication and section-scoped roles for students, professors and administrators.",
      "FastAPI orchestration connecting input policy, course-grounded retrieval, configurable model routes and output guardrails.",
      "Professor workflows for rosters, weekly teaching references, availability controls and learning analytics.",
      "An isolated offline evaluation lane with reproducible artifacts and an administrative review surface.",
    ],
    architecture: [
      "VS Code and web clients",
      "Cognito identity and section authorization",
      "FastAPI orchestration",
      "Input policy and course-scoped retrieval",
      "Model routing and output guardrails",
      "Aurora telemetry and offline evaluation",
    ],
    contributionTitle: "Carlos's contribution",
    contributions: [
      "Built infrastructure and AWS backend slices across authentication, deployment and application data workflows.",
      "Implemented Cognito-backed invitation and role-aware section workflows.",
      "Developed professor analytics, teaching-plan and student drill-down interfaces.",
      "Added offline evaluation APIs, worker deployment and the administrative evaluation dashboard.",
      "Created and refined the final project landing-page experience and architecture presentation.",
    ],
    decisions: [
      "Separate online tutoring from offline model evaluation so judge workloads cannot interrupt student interactions.",
      "Treat Aurora as the application system of record and Qdrant as retrieval infrastructure rather than mixing analytics into the vector database.",
      "Use course and section context before inference so access and teaching-plan boundaries are part of orchestration, not only prompt wording.",
      "Report evaluation limitations alongside metrics instead of presenting automated scores as direct proof of learning retention.",
    ],
    caveat:
      "Confidence changes came from a small pre/post pilot and are self-reported. Retrieval and TA-effectiveness results use automated evaluation. They are evidence about the MVP, not a causal claim about long-term learning.",
    sourceNote:
      "CodingRabbit was a collaborative UC Berkeley MIDS capstone by Carlos Schrupp, Alex Alvarez, Ligong Zhang, Lyn Wang and Eric Mowat. Role and result descriptions are grounded in the public repository and final project materials.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
