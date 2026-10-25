export type ProjectSlug =
  | "seneca"
  | "wellplot"
  | "codingrabbit"
  | "flight-sentry"
  | "tension-modeling"
  | "relay";

export type CollectionId = "featured" | "in_progress" | "mids";
export type DetailMode = "deep" | "compact" | "preview";
export type Accent = "teal" | "orange" | "blue" | "violet";

export type ProjectLink = { label: string; href: string; };
export type ProjectFact = { value: string; label: string; detail: string; };

export type ProjectVisual = {
  type: "image" | "diagram";
  src?: string;
  alt: string;
  caption?: string;
  labels?: string[];
};

export type ProjectSection = {
  id: string;
  kind: "overview" | "story" | "architecture" | "contribution" | "evidence" | "current_status" | "roadmap" | "artifacts";
  eyebrow?: string;
  title: string;
  opening?: string;
  paragraphs?: string[];
  bullets?: string[];
  facts?: ProjectFact[];
  phaseId?: string;
  caveat?: string;
};

export type ProjectPhase = { id: string; label: string; status: string; summary: string; };\nexport type ProjectHeroMeta = { label: string; value: string; };

export type Project = {
  slug: ProjectSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  detailMode: DetailMode;
  role: string;
  teamContext: string;
  status: string;
  statusDetail: string;
  dates: string;
  accent: Accent;
  technologies: string[];
  collections: CollectionId[];
  links: ProjectLink[];
  facts: ProjectFact[];
  visual: ProjectVisual;
  phases?: ProjectPhase[];
  sections: ProjectSection[];
  sourceNote: string;
};

export type ProjectCardPlacement = {
  id: string;
  projectId: ProjectSlug;
  collection: CollectionId;
  title: string;
  summary: string;
  eyebrow: string;
  status: string;
  phaseAnchor?: string;
  priority: number;
  visualVariant?: "default" | "phase" | "academic" | "preview";
};
