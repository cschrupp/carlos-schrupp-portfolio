import type { Project } from "./types";

export const tension: Project = {
  slug: "tension-modeling",
  title: "Tension Modeling",
  shortTitle: "Tension Modeling",
  eyebrow: "Computational mechanics · In progress",
  summary: "Physics-based wireline tension and friction modeling, moving from soft-string mechanics toward contact-aware FEM.",
  description:
    "An active scientific-computing program for modeling deployment tension, friction and contact behavior while keeping numerical convergence separate from physical acceptance.",
  detailMode: "preview",
  role: "Project creator / scientific lead",
  teamContext: "Independent R&D · agent-assisted implementation and review",
  status: "Active scientific R&D",
  statusDetail: "Core mechanics and reproducible runtime work exist; contact-mechanics qualification remains open.",
  dates: "2026 — Present",
  accent: "orange",
  technologies: ["Python", "Numerical methods", "FEM", "Contact mechanics", "Inverse methods", "Docker"],
  collections: ["in_progress"],
  links: [],
  facts: [
    { value: "Physics first", label: "Acceptance rule", detail: "Numerical convergence is not accepted as physical correctness by itself." },
    { value: "Soft string → FEM", label: "Model progression", detail: "Work spans operational tension mechanics and contact-aware numerical formulations." },
    { value: "Reproducible", label: "Scientific runtime", detail: "Runtime identities and evidence are treated as part of the scientific result." },
  ],
  visual: {
    type: "diagram",
    alt: "Tension Modeling progression from measured deployment data through mechanics, contact constraints and scientific validation.",
    caption: "Current research direction — explanatory diagram.",
    labels: ["Deployment data", "Soft-string mechanics", "Friction / inverse", "FEM contact", "Physical acceptance"],
  },
  sections: [
    {
      id: "overview", kind: "overview", eyebrow: "Why it matters",
      title: "Wireline tension is observable; friction and contact are not directly measured.",
      paragraphs: ["The project studies how to connect measured deployment behavior with physics-based models of cable tension, friction and contact. The operational problem is inverse by nature: some of the quantities that matter most are inferred from the response rather than measured directly."],
    },
    {
      id: "what-exists", kind: "architecture", eyebrow: "What exists now",
      title: "A governed scientific-computing program, not a single solver script.",
      bullets: ["Soft-string and deployment-mechanics foundations.","Inverse/parameter-estimation direction for unobserved friction effects.","FEM/contact formulations under explicit acceptance gates.","Pinned runtime/evidence practices so numerical behavior can be reproduced and reviewed."],
    },
    {
      id: "frontier", kind: "current_status", eyebrow: "Current frontier", title: "Convergence is not enough.",
      paragraphs: ["Recent work has deliberately rejected formulations that converge numerically but do not satisfy the required contact physics. The current frontier is a physically admissible contact certificate, not another cosmetic improvement to the solver output."],
      caveat: "This page is an in-progress preview. It does not claim solved contact mechanics, production validation or a completed physics-aware ML model.",
    },
  ],
  sourceNote: "First-pass preview based on the accepted portfolio design and current governed project state. A later research cycle may promote this into a deeper case study.",
};
