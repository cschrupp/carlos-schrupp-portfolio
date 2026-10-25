# Portfolio Refresh v2 — Independent Design Review 001

**Review:** PORTFOLIO-REFRESH-V2-DESIGN-IR-001  
**Disposition:** ACCEPT  
**Date:** 2026-10-24  
**Design candidate commit:** `96fae8f74f33327bacec9d7b68ba2c45306a0dc3`  
**Architecture baseline:** `01e24746207c67b1eca2d731f267ec30f2433b3a`  
**Branch:** `design/portfolio-refresh-v2`  
**Production implementation:** NOT YET AUTHORIZED

## 1. Review scope

This review tests whether the completed Design V2 is sufficiently specific, internally coherent and consistent with accepted research/Human decisions to authorize a first full website implementation after Human approval.

The review is not a content-copy approval and does not authorize fabrication of missing evidence or media.

## 2. Architecture conformance

### Collections

Design matches the accepted architecture.

Featured:
- Seneca
- WellPlot — Phase 1
- Coding Rabbit
- Flight Sentry

In Progress:
- WellPlot — Phase 2
- Tension Modeling
- Relay

MIDS:
- Coding Rabbit
- Flight Sentry

**Disposition:** ACCEPT

### Canonical project identity

Design preserves:
- one canonical project identity per project;
- repeated cards as navigation placements;
- one canonical WellPlot page with Phase 1 and Phase 2 anchors.

**Disposition:** ACCEPT

## 3. Page-depth model

The design introduces three explicit detail modes:

1. deep technical case study;
2. compact evidence-backed project page;
3. in-progress preview.

This is a strong correction to the current site's single-template assumption.

It allows:
- Seneca and WellPlot to carry accepted technical narratives;
- Coding Rabbit and Flight Sentry to remain concise and team-attributed;
- Tension and Relay to be visible without inventing unaccepted deep stories.

The design avoids the false requirement that every project must have equal narrative depth.

**Disposition:** ACCEPT

## 4. Seneca integration

Accepted research:
- `SENECA-PORTFOLIO-RESEARCH-IR-003`

Accepted Human selection:
- `ST-GL-01`
- `ST-RET-01`
- `ST-GEN-01`
- `ST-CPU-16K`

Design correctly retains:
- four-page-chapter maximum;
- secondary recovery/security/UI/performance material as supporting evidence;
- real/evidence-derived visuals only;
- current claim boundaries.

**Disposition:** ACCEPT

## 5. WellPlot integration

Accepted research:
- `WELLPLOT-PORTFOLIO-RESEARCH-IR-002`

Accepted Human selection:
- `ST-01`
- `ST-02`
- `ST-03`
- `ST-05`

Design correctly:
- separates Phase 1 released product from Phase 2 semantic R&D;
- integrates `ST-04` as architecture rather than a duplicate chapter;
- keeps `ST-06` secondary;
- uses `ST-07` as a supporting evaluation callout;
- uses `ST-08` only as roadmap;
- preserves one canonical WellPlot route.

**Disposition:** ACCEPT

## 6. Coding Rabbit / Flight Sentry treatment

The design intentionally avoids another deep research cycle for these collaborative academic projects.

### Coding Rabbit

Accepted design:
- compact canonical portfolio page;
- public Coding Rabbit site and Berkeley capstone page remain primary external presentations;
- team result separated from Carlos's contribution;
- no ownership claim over every retrieval/guardrail/model component;
- no causal long-term learning claim from bounded pilot/automated metrics.

### Flight Sentry

Accepted design:
- compact canonical portfolio page;
- Berkeley-hosted project site remains primary public presentation;
- large-scale-ML signal is preserved;
- Carlos's contribution is bounded to established attribution;
- team-level result stays team-level;
- no production airline deployment implication.

This treatment is appropriate for the first website candidate and improves portfolio hierarchy.

**Disposition:** ACCEPT

## 7. Tension Modeling / Relay first-pass treatment

The design correctly does not block the first website candidate on another deep research program.

Both projects receive bounded in-progress preview pages with:
- implemented/current work;
- technical direction;
- explicit unresolved frontier;
- no false completion claim.

They can be upgraded later without changing canonical identity or route.

**Disposition:** ACCEPT

## 8. Data-model / renderer design

The current implementation has a single rigid `Project` type and a fixed `[slug].astro` case-study sequence.

Design V2 explicitly requires separation of:
- canonical project identity;
- collection/card placement;
- phases;
- evidence;
- flexible sections;
- detail depth.

This is sufficient to guide implementation without creating a parallel architecture.

Minimum section variants are explicit and no page is required to render empty sections.

**Disposition:** ACCEPT

## 9. Homepage / Work index

Accepted design:
- Featured 2×2 desktop grid;
- separate compact In Progress section;
- Work index with Featured / In Progress / MIDS;
- repeated cards allowed;
- MIDS not expanded on homepage.

This improves scanability and correctly distinguishes maturity.

**Disposition:** ACCEPT

## 10. Visual / evidence policy

The design:
- prioritizes real project artifacts;
- allows evidence-derived diagrams/plots;
- prohibits fake screenshots and fabricated benchmark figures;
- keeps missing-media placeholders explicit;
- does not require all visuals before first implementation.

**Disposition:** ACCEPT

## 11. Implementation readiness

The first implementation scope is concrete enough to authorize:

- data-model refactor;
- collection-aware cards;
- six canonical project routes;
- WellPlot phase anchors;
- flexible project-page sections;
- deep/compact/preview page variants;
- responsive Featured/In Progress/MIDS presentation;
- evidence/status/role scan layers;
- preservation of current restrained engineering identity.

No material design decision is left to an implementer in a way that would require inventing project hierarchy or maturity.

**Disposition:** ACCEPT

## 12. Non-blocking implementation notes

### N001 — External academic-source freshness

Coding Rabbit and Flight Sentry page copy should be rechecked against their named public sources at implementation time.

If a public source is inaccessible, implementation must use already accepted evidence or omit the unsupported detail rather than infer it.

### N002 — Media incompleteness is allowed

Seneca UI captures and several evidence figures are still pending.

The first website candidate may use clearly labeled evidence-derived diagrams or neutral placeholders. Missing visuals must not delay structural implementation.

### N003 — Preview-page copy must remain conservative

Tension Modeling and Relay are intentionally not research-closed portfolio case studies yet.

Implementation should not transform the preview format into deep narrative copy through stylistic embellishment.

## 13. Terminal disposition

```text
PORTFOLIO-REFRESH-V2-DESIGN-IR-001

Architecture conformance:
ACCEPT

Collection hierarchy:
ACCEPT

Canonical project/card model:
ACCEPT

Deep/compact/preview page model:
ACCEPT

Seneca integration:
ACCEPT

WellPlot integration:
ACCEPT

Coding Rabbit treatment:
ACCEPT

Flight Sentry treatment:
ACCEPT

Tension first-pass treatment:
ACCEPT

Relay first-pass treatment:
ACCEPT

Evidence/visual policy:
ACCEPT

Implementation scope:
ACCEPT

Production Astro implementation:
NOT YET AUTHORIZED

Terminal disposition:
ACCEPT
```

## 14. Next gate

**Portfolio Design V2: ACCEPTED BY INDEPENDENT REVIEW.**

Next required gate:

**Human final design approval.**

After explicit Human approval, implementation may open from the accepted design candidate and produce the first complete Astro website candidate.
