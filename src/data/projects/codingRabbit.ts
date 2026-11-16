import type { Project } from "./types";

export const codingRabbit: Project = {
  slug: "codingrabbit",
  title: "Coding Rabbit",
  shortTitle: "Coding Rabbit",
  eyebrow: "UC Berkeley MIDS capstone",
  summary: "A five-person capstone project that built an AI teaching assistant around guided programming practice.",
  description:
    "Coding Rabbit combines a VS Code learning workflow, course context, instructor controls and AWS-backed application services.",
  detailMode: "compact",
  role: "Infrastructure, AWS backend, application workflows and evaluation UI",
  teamContext: "Five-person UC Berkeley MIDS capstone team",
  status: "Completed capstone MVP",
  statusDetail: "Completed and deployed as a team capstone project in 2026.",
  dates: "2026",
  accent: "orange",
  technologies: ["FastAPI", "React", "TypeScript", "AWS", "Cognito", "Aurora PostgreSQL", "Qdrant", "VS Code"],
  collections: ["featured", "mids"],
  links: [
    { label: "Project site", href: "https://www.codingrabbit.dev/" },
    { label: "Berkeley capstone", href: "https://www.ischool.berkeley.edu/programs/mids/capstone/2026b-summer/coding-rabbit-ai-teaching-assistant-c-courses-and-beyond" },
    { label: "GitHub", href: "https://github.com/emowat/ai-teaching-assistant" },
    { label: "Demo", href: "https://youtu.be/bWv3M2eNa4c" },
  ],
  facts: [
    { value: "5", label: "Team members", detail: "Collaborative UC Berkeley MIDS capstone." },
    { value: "14 weeks", label: "Build window", detail: "End-to-end capstone build completed within one semester." },
  ],
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "What we built",
      title: "Guided programming practice",
      paragraphs: [
        "Coding Rabbit was designed as a teaching assistant rather than an answer generator. Students work inside VS Code while the application combines course context, guided assistance modes and instructor-facing controls.",
        "Built by a five-person team; retrieval, guardrails and modeling were led by teammates.",
      ],
    },
    {
      id: "contribution",
      kind: "contribution",
      eyebrow: "My contribution",
      title: "Infrastructure and application workflows",
      bullets: [
        "Built AWS backend slices across authentication, deployment and application-data workflows.",
        "Implemented Cognito-backed invitation and role-aware section workflows.",
        "Developed professor analytics, teaching-plan and student drill-down interfaces.",
        "Added offline evaluation APIs, worker deployment and the administrative evaluation dashboard.",
      ],
    },
  ],
};
