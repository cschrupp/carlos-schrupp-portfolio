import type { Project } from "./types";

export const relay: Project = {
  slug: "relay",
  title: "Relay",
  shortTitle: "Relay",
  eyebrow: "Agentic engineering governance · In progress",
  summary: "A control plane for agent-assisted software development: authority, evidence, durable state and independent review.",
  description:
    "Relay treats agentic coding as a governed engineering process rather than a sequence of chat instructions, separating authorization, execution evidence, review and promotion.",
  detailMode: "preview",
  role: "Project creator / architecture lead",
  teamContext: "Independent R&D · dogfooded with specialized coding/review agents",
  status: "Active platform R&D",
  statusDetail: "Durable governance and dogfood workflows exist; the broader autonomous real-project execution loop remains under development.",
  dates: "2026 — Present",
  accent: "teal",
  technologies: ["Python", "SQLite", "GitHub", "CI", "Agent workflows", "Evidence governance"],
  collections: ["in_progress"],
  links: [],
  facts: [
    { value: "Authority", label: "Core object", detail: "An agent should know not only what to do, but what it is authorized to change." },
    { value: "Durable state", label: "Continuity", detail: "Project truth should survive the chat and be recoverable by a fresh operator." },
    { value: "Review ≠ execution", label: "Promotion boundary", detail: "A successful worker result is not promoted until independent review and Human acceptance close the gate." },
  ],
  visual: {
    type: "diagram",
    alt: "Relay governed workflow from authority through agent execution, evidence, independent review and human acceptance.",
    caption: "Relay control-loop concept — explanatory diagram.",
    labels: ["Authority", "Worker agent", "Evidence", "Independent review", "Human acceptance"],
  },
  sections: [
    {
      id: "overview", kind: "overview", eyebrow: "Governance problem",
      title: "Agents can make reasonable changes and still move the project in the wrong direction.",
      paragraphs: ["Relay is built around the idea that coding quality is only one part of agentic engineering. Scope, authority, accepted baselines, evidence and promotion decisions also need durable representation."],
    },
    {
      id: "what-exists", kind: "architecture", eyebrow: "What exists now",
      title: "Authority and evidence are first-class project state.",
      bullets: ["Explicit project/baseline/slice state rather than relying on conversation memory.","Immutable evidence and review records alongside mutable planning documents.","Dogfood workflows that separate worker execution from independent review and Human acceptance.","Cold-start/recovery work designed so a fresh operator can reconstruct what is currently authorized."],
    },
    {
      id: "frontier", kind: "current_status", eyebrow: "Current frontier",
      title: "The control plane is real; the full autonomous loop is not yet a finished product claim.",
      paragraphs: ["Relay is already being used to govern its own development and other project workflows. The remaining question is how much of the real-project execution loop can be delegated while preserving the same authority, evidence and review guarantees."],
      caveat: "This first portfolio page is intentionally a preview. It does not claim production adoption or a completed autonomous engineering platform.",
    },
  ],
  sourceNote: "First-pass preview based on the accepted Portfolio Refresh v2 design and current Relay dogfood state.",
};
