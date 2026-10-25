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
  {
    id: "featured-seneca",
    projectId: "seneca",
    collection: "featured",
    title: "Seneca",
    eyebrow: "Applied AI · local knowledge systems",
    summary: "Retrieval, grounded generation, human evaluation and runtime qualification in one local-first product.",
    status: "Active product R&D",
    priority: 1,
  },
  {
    id: "featured-wellplot-phase-1",
    projectId: "wellplot",
    collection: "featured",
    title: "WellPlot — Phase 1",
    eyebrow: "Scientific software · released",
    summary: "Renderer-first well-log composition from LAS/DLIS data to reproducible print and interactive outputs.",
    status: "Released",
    phaseAnchor: "phase-1",
    priority: 2,
    visualVariant: "phase",
  },
  {
    id: "featured-codingrabbit",
    projectId: "codingrabbit",
    collection: "featured",
    title: "Coding Rabbit",
    eyebrow: "UC Berkeley MIDS capstone",
    summary: "A deployed AI teaching assistant built around guided programming practice rather than answer generation.",
    status: "Completed capstone MVP",
    priority: 3,
    visualVariant: "academic",
  },
  {
    id: "featured-flight-sentry",
    projectId: "flight-sentry",
    collection: "featured",
    title: "Flight Sentry",
    eyebrow: "UC Berkeley MIDS · ML at Scale",
    summary: "Distributed flight-delay prediction with temporal joining, weather data and large-scale experimentation.",
    status: "Completed academic project",
    priority: 4,
    visualVariant: "academic",
  },
  {
    id: "progress-wellplot-phase-2",
    projectId: "wellplot",
    collection: "in_progress",
    title: "WellPlot — Phase 2",
    eyebrow: "Semantic authoring R&D",
    summary: "A bounded semantic compiler for scientific authoring, still open on end-to-end live qualification.",
    status: "Qualification open",
    phaseAnchor: "phase-2",
    priority: 1,
    visualVariant: "phase",
  },
  {
    id: "progress-tension",
    projectId: "tension-modeling",
    collection: "in_progress",
    title: "Tension Modeling",
    eyebrow: "Computational mechanics",
    summary: "Physics-based wireline tension/friction modeling moving toward contact-aware FEM and inverse methods.",
    status: "Active scientific R&D",
    priority: 2,
    visualVariant: "preview",
  },
  {
    id: "progress-relay",
    projectId: "relay",
    collection: "in_progress",
    title: "Relay",
    eyebrow: "Agentic engineering governance",
    summary: "A durable control plane for authority, evidence, review and promotion in agent-assisted software work.",
    status: "Active platform R&D",
    priority: 3,
    visualVariant: "preview",
  },
  {
    id: "mids-codingrabbit",
    projectId: "codingrabbit",
    collection: "mids",
    title: "Coding Rabbit",
    eyebrow: "MIDS capstone",
    summary: "AI tutoring, cloud application engineering and evaluation in a five-person capstone team.",
    status: "2026",
    priority: 1,
    visualVariant: "academic",
  },
  {
    id: "mids-flight-sentry",
    projectId: "flight-sentry",
    collection: "mids",
    title: "Flight Sentry",
    eyebrow: "ML at Scale",
    summary: "Distributed ML on flight and weather data, with explicit point-in-time feature constraints.",
    status: "2025",
    priority: 2,
    visualVariant: "academic",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getPlacements(collection: CollectionId): Array<ProjectCardPlacement & { project: Project }> {
  return cardPlacements
    .filter((placement) => placement.collection === collection)
    .sort((a, b) => a.priority - b.priority)
    .map((placement) => ({
      ...placement,
      project: getProject(placement.projectId)!,
    }));
}
