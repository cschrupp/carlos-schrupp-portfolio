import type { CollectionId, Project, ProjectCardPlacement } from "./projects/types";
import { seneca } from "./projects/seneca";
import { wellplot } from "./projects/wellplot";
import { codingRabbit } from "./projects/codingRabbit";
import { flightSentry } from "./projects/flightSentry";
import { tension } from "./projects/tension";
import { relay } from "./projects/relay";

export type { CollectionId, DetailMode, Project, ProjectCardPlacement, ProjectFact, ProjectLink, ProjectPhase, ProjectSection, ProjectSlug, ProjectVisual } from "./projects/types";

export const projects: Project[] = [seneca, wellplot, codingRabbit, flightSentry, tension, relay];

export const cardPlacements: ProjectCardPlacement[] = [
  { id: "featured-seneca", projectId: "seneca", collection: "featured", title: "Seneca", eyebrow: "Applied AI · local knowledge systems", summary: "Local document QA with grounded answers, visible evidence and human review.", status: "Active development product", priority: 1 },
  { id: "featured-wellplot", projectId: "wellplot", collection: "featured", title: "WellPlot", eyebrow: "Scientific software · released", summary: "Open-source well-log composition and rendering, with experimental natural-language authoring on top.", status: "Renderer released", priority: 2 },
  { id: "featured-codingrabbit", projectId: "codingrabbit", collection: "featured", title: "Coding Rabbit", eyebrow: "UC Berkeley MIDS capstone", summary: "A deployed AI teaching assistant built by a five-person team around guided programming practice.", status: "Completed capstone MVP", priority: 3 },
  { id: "featured-flight-sentry", projectId: "flight-sentry", collection: "featured", title: "Flight Sentry", eyebrow: "UC Berkeley MIDS · ML at Scale", summary: "Distributed flight-delay prediction with point-in-time flight and weather joining.", status: "Completed academic project", priority: 4 },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getPlacements(collection: CollectionId): Array<ProjectCardPlacement & { project: Project }> {
  return cardPlacements.filter((placement) => placement.collection === collection).sort((a, b) => a.priority - b.priority).map((placement) => ({ ...placement, project: getProject(placement.projectId)! }));
}
