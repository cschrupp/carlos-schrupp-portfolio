import type { Project } from "./types";

export const codingRabbit: Project = {
  slug: "codingrabbit",
  title: "Coding Rabbit",
  shortTitle: "Coding Rabbit",
  eyebrow: "UC Berkeley MIDS capstone",
  summary: "A deployed AI teaching assistant designed to support programming practice without becoming an answer generator.",
  description:
    "Coding Rabbit combines a VS Code learning workflow, course context, cloud application infrastructure, safety controls and offline evaluation in a five-person Berkeley MIDS capstone.",
  detailMode: "compact",
  role: "Infrastructure, AWS backend, application workflows and evaluation UI",
  teamContext: "Five-person UC Berkeley MIDS capstone team",
  status: "Completed capstone MVP",
  statusDetail:
    "Deployed end-to-end academic MVP with ongoing public project materials and additional user testing beyond the original capstone build.",
  dates: "2026",
  accent: "orange",
  technologies: ["FastAPI", "React", "TypeScript", "AWS", "Cognito", "Aurora PostgreSQL", "Qdrant", "VS Code"],
  collections: ["featured", "mids"],
  links: [
    { label: "Project site", href: "https://www.codingrabbit.dev/" },
    {
      label: "Berkeley capstone",
      href: "https://www.ischool.berkeley.edu/programs/mids/capstone/2026b-summer/coding-rabbit-ai-teaching-assistant-c-courses-and-beyond",
    },
    { label: "GitHub", href: "https://github.com/emowat/ai-teaching-assistant" },
    { label: "Demo", href: "https://youtu.be/bWv3M2eNa4c" },
  ],
  facts: [
    {
      value: "5 people",
      label: "Capstone team",
      detail: "Collaborative UC Berkeley MIDS project; team results are presented as team results.",
    },
    {
      value: "14 weeks",
      label: "Build window",
      detail: "Public Berkeley-associated project commentary describes an end-to-end deployed build in one semester.",
    },
    {
      value: "AWS + VS Code",
      label: "Deployed workflow",
      detail: "Cloud-backed application integrated into the programming environment students already use.",
    },
  ],
  visual: {
    type: "image",
    src: "/assets/codingrabbit-architecture.webp",
    alt: "Coding Rabbit architecture diagram showing student, instructor, cloud and evaluation components.",
    caption: "Coding Rabbit project architecture.",
  },
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "Project snapshot",
      title: "A tutoring assistant has a different objective from a coding assistant.",
      paragraphs: [
        "Coding Rabbit was built around guided learning rather than direct solution generation. The product combines editor context, course context and instructor controls with a cloud application and evaluation layer.",
        "The portfolio keeps this page intentionally compact. The public Coding Rabbit site and Berkeley capstone page remain the richer canonical project presentations.",
      ],
    },
    {
      id: "technical-signal",
      kind: "architecture",
      eyebrow: "Technical signal",
      title: "Editor workflow, course grounding, cloud services and evaluation in one system.",
      bullets: [
        "VS Code / Codespaces student workflow with guided assistance modes.",
        "AWS-backed identity, application state, deployment and instructor/admin workflows.",
        "Course-scoped retrieval and guarded model routing as team-level system capabilities.",
        "Offline evaluation separated from live tutoring so judge workloads do not interrupt student interactions.",
      ],
    },
    {
      id: "contribution",
      kind: "contribution",
      eyebrow: "My contribution",
      title: "Infrastructure and application surfaces.",
      bullets: [
        "Built infrastructure and AWS backend slices across authentication, deployment and application data workflows.",
        "Implemented Cognito-backed invitation and role-aware section workflows.",
        "Developed professor analytics, teaching-plan and student drill-down interfaces.",
        "Added offline evaluation APIs, worker deployment and the administrative evaluation dashboard.",
        "Contributed to the final landing-page and architecture presentation.",
      ],
      caveat:
        "Coding Rabbit was team work. Retrieval, guardrails, modeling and evaluation components should not be attributed to Carlos individually unless the underlying project record says so.",
    },
    {
      id: "artifacts",
      kind: "artifacts",
      eyebrow: "Go deeper",
      title: "The public project already tells the longer story.",
      bullets: [
        "CodingRabbit.dev — product presentation and project narrative.",
        "UC Berkeley MIDS capstone page — academic/team context.",
        "GitHub and demo — implementation and end-to-end behavior.",
      ],
    },
  ],
  sourceNote:
    "Public project links are treated as the primary external presentation. Portfolio copy preserves team attribution and avoids causal claims about long-term learning outcomes.",
};
