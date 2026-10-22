# Portfolio Refresh v2 — Information & Editorial Architecture

Status: ARCHITECTURE DRAFT
Branch: `architecture/portfolio-refresh-v2`
Base: `portfolio-v1`

## 1. Purpose

Refresh the portfolio so it reflects Carlos Schrupp's current work accurately and reads like a professional site written by a technically experienced person, not a generic generated case-study template.

This phase defines structure, evidence rules, editorial voice, and project taxonomy only. It does not authorize production-page implementation.

## 2. Goals

The portfolio should:

1. make the strongest completed/demonstrable work easy to find;
2. distinguish shipped or demonstrable work from active R&D;
3. show Carlos's actual contribution rather than describing projects as if all work were solo;
4. connect AI/ML work to 20+ years of engineering and energy-domain experience without turning every page into a biography;
5. present evidence, limitations, and current status explicitly;
6. use clear, natural language with academic professionalism but without formulaic AI-copy patterns;
7. support selected UC Berkeley MIDS work without giving coursework the same visual weight as flagship projects.

## 3. Portfolio taxonomy

### 3.1 Featured

Projects that are sufficiently complete and demonstrable to represent Carlos's current professional capability.

- CodingRabbit
- WellPlot — Phase 1
- Seneca

"Featured" means portfolio-ready. It does not imply commercial adoption, enterprise scale, or customer production history.

### 3.2 In progress

Substantial projects with meaningful implemented work, but where an important capability or scientific/product claim remains under active validation.

- WellPlot — Phase 2
- Tension Modeling
- Relay

These pages should show both what already exists and the exact current frontier. They should not be written as future concepts, but they also should not imply completion.

### 3.3 Selected UC Berkeley MIDS work

A separate academic collection for selected graduate projects.

- CodingRabbit remains a Featured project and may also carry a MIDS tag. It should have one canonical case-study page, not duplicated content.
- Other MIDS projects should use compact academic cards and, where justified, shorter detail pages.
- The section should prioritize projects that demonstrate a distinct technical capability: statistics, machine learning, experimentation, data engineering, NLP, or applied research.
- We should not import every assignment from LinkedIn. Selection is based on portfolio value.

## 4. Project identity model

The current `Project` type assumes every project has the same maturity and narrative. Replace that with a model that separates identity, maturity, evidence, and presentation.

Proposed conceptual fields:

```text
id
slug
family                  # e.g. WellPlot
phase                   # optional: Phase 1, Phase 2
title
short_title
category                 # featured | in_progress | mids
project_type             # product | open_source | research | academic
status_label
status_detail
year_start
year_end
role
team_context
summary
technologies
links

problem
what_exists
my_contribution
technical_approach
evidence
limitations
current_frontier
next_step

source_refs
media
tags
```

Not every field must be rendered for every project.

## 5. Canonical project boundaries

### CodingRabbit

Canonical identity:
- collaborative UC Berkeley MIDS capstone;
- deployed MVP / live beta;
- Carlos's role centered on infrastructure, AWS backend, application workflows, evaluation infrastructure, dashboards, and UI;
- results may include confidence, retrieval, guardrail, and judge metrics only with their original limitations.

Must not imply:
- solo ownership;
- causal proof of long-term learning gains;
- that Carlos owned every RAG/guardrail/model component.

### WellPlot — Phase 1

Canonical identity:
- the mature renderer-first/open-source software foundation;
- LAS/DLIS ingestion, typed scientific data, layouts, YAML/Python authoring, static/interactive rendering, publication/distribution, and existing MCP surfaces where appropriate;
- demonstrable and installable.

Must not mix in:
- experimental natural-language semantic decomposition claims that belong to Phase 2.

### Seneca

Canonical identity:
- local-first knowledge workspace built on OfflineRAG;
- hybrid retrieval, reranking, grounded answers, citations/evidence, evaluation, product API/UI, local-model boundary, deployment and operational validation;
- suitable as a flagship Applied AI / ML systems project.

Must retain:
- explicit supported deployment envelope;
- distinction between accepted implementation evidence and publication-grade quality claims;
- no claim of customer production history or enterprise multi-user readiness unless later established.

### WellPlot — Phase 2

Canonical identity:
- active R&D layer for natural-language / semantic editing of well-log layouts;
- deterministic contracts, constrained decomposition, evaluation methodology, provider/model qualification, and live semantic validation.

Must not imply:
- that the NLP path is already production-qualified;
- that provider-free rehearsal equals live model success.

### Tension Modeling

Canonical identity:
- scientific-computing and physics-based wireline tension/friction program;
- soft-string mechanics, inverse methods, hybrid/physics-aware ML direction, FEM/contact work, reproducible scientific runtime.

Must distinguish:
- established components from unresolved contact-mechanics validation;
- numerical solver convergence from physical correctness.

### Relay

Canonical identity:
- governance control plane for agentic software engineering;
- authorization, evidence, immutable history, replay, human acceptance, agent-runtime and role contracts;
- demonstrated cold-start dogfood/recovery behavior.

Must not imply:
- autonomous real-project engineering loop is complete;
- production adoption.

## 6. Site information architecture

### Home

Purpose: establish professional positioning and surface the strongest work quickly.

Order:
1. Hero / positioning
2. Featured projects
3. Short professional context
4. Selected experience
5. Education
6. Contact

The homepage should not list all active research projects in equal visual weight.

### Work index

Primary portfolio navigation page.

Sections:
1. Featured
2. In progress
3. UC Berkeley MIDS — selected work

Each section gets a short plain-language introduction. Project cards show status explicitly.

### Project detail pages

Use a flexible page system instead of one fixed case-study narrative.

Common blocks:
- project header
- role/team/status
- concise overview
- evidence/links
- limitations/current status

Optional blocks by project:
- problem/context
- what I built / what we built
- my contribution
- architecture/technical approach
- experiments/evaluation
- results
- current research frontier
- lessons/trade-offs

A product page, research page, and academic page should not be forced to use identical headings.

### MIDS collection

Prefer a lightweight collection/index first.

A project gets a full detail page only if there is enough technical material to justify it. Smaller projects can link to GitHub, reports, notebooks, or LinkedIn from compact cards.

## 7. Evidence architecture

Every externally visible factual claim belongs to one of these classes:

### E1 — Direct implementation fact
Supported by current repository code/docs or an accepted artifact.

Examples:
- WellPlot supports LAS and DLIS.
- Seneca has a React UI and FastAPI product layer.

### E2 — Measured result
Supported by a named experiment, benchmark, report, or capstone result.

Must preserve:
- population/sample size when material;
- whether result is development, pilot, or publication-grade;
- relevant hardware/runtime context for performance claims.

### E3 — Role/contribution
Supported by project records, report authorship/contribution notes, or Carlos's direct account.

Collaborative projects must distinguish Carlos's contribution from team output.

### E4 — Interpretation
A professional conclusion drawn from the work.

These should be phrased as interpretation, not as measured fact.

### E5 — Current frontier
Explicitly states what is not yet established.

For active R&D projects, this is a first-class section rather than a buried caveat.

## 8. Source hierarchy

For factual accuracy, use this order:

1. accepted/current repository evidence;
2. final project reports and formal project documentation;
3. current project conversations where they capture later accepted state;
4. Carlos's direct clarification;
5. older portfolio copy only as a lead, never as authority.

When sources conflict, newer accepted project evidence wins.

## 9. Editorial voice

Target voice: technically literate, direct, conversational, academically professional.

Use:
- first person where ownership matters;
- "we" for team work;
- concrete nouns and verbs;
- normal sentence rhythm;
- explicit uncertainty and limitations;
- short explanations before jargon;
- measured claims.

Avoid generic AI/marketing phrasing such as:
- "leveraging cutting-edge AI"
- "unlocking value"
- "driving innovation"
- "seamlessly"
- "robust solution" when no specific property is meant
- "at the intersection of..."
- "passionate about..."
- "empowering users..."
- "revolutionize / transform" without evidence
- "state of the art" without a benchmark

Also avoid common generated-copy structures:
- repeated "not just X, but Y";
- repeated "from X to Y" headlines;
- rhetorical three-item lists in every paragraph;
- excessive em dashes;
- every section ending in a grand conclusion;
- generic headings such as "The challenge", "The solution", "The impact" when the project has more precise language available;
- describing architecture as "clean", "scalable", "robust", or "production-ready" without evidence;
- turning every design choice into a virtue.

Prefer sentences like:
- "I kept generation outside the application container so the model runtime can change without rebuilding the retrieval application."
- "The first FEM formulation converged numerically but violated the contact constraints, so I did not accept it as a physical solution."
- "My part of CodingRabbit was mainly the AWS/backend/application side; other team members led retrieval, guardrails, and evaluation work."

The copy may sound slightly imperfect or personal if it remains clear and correct. That is preferable to polished but generic generated prose.

## 10. Current-site content audit

The existing site is structurally sound but has three architectural content problems.

### A. One narrative template for every project

The fixed sequence:
- Context
- Product
- System architecture
- Contribution
- Engineering decisions

makes unrelated projects sound artificially similar.

Resolution: flexible section composition.

### B. Phase boundaries are missing

Current WellPlot copy combines the mature renderer product with experimental agent/MCP direction.

Resolution: explicit WellPlot Phase 1 and Phase 2 portfolio identities.

### C. Evidence and interpretation are mixed

Current copy sometimes moves directly from an implementation fact to an implied professional conclusion.

Resolution: separate implementation, evidence/results, and limitations/current-frontier blocks.

## 11. Visual architecture constraints

Preserve the current Astro site's restrained engineering visual identity unless the design phase finds a concrete usability problem.

Design phase may change:
- project-card hierarchy;
- section grouping;
- status badges;
- detail-page section composition;
- evidence/result presentation;
- media treatment;
- MIDS card density.

Design phase should avoid:
- decorative AI imagery;
- generic stock illustrations;
- excessive animation;
- redesigning the site purely to signal "AI".

Use real project screenshots, diagrams, plots, rendered logs, evaluation figures, and architecture graphics wherever possible.

## 12. Governance / delivery sequence

### Architecture
Freeze taxonomy, information model, evidence rules, editorial voice, and page responsibilities.

### Design
Produce the concrete page/content schema, navigation, card variants, case-study variants, and migration map from current content.

### Independent Review (IR)
Review architecture + design for:
- factual risk;
- misleading maturity claims;
- duplicated information;
- content-model gaps;
- generated-language patterns;
- usability and portfolio hierarchy.

IR produces findings only. No production implementation.

### Human approval
Carlos accepts, rejects, or amends the design and IR findings.

### Implementation
Only after explicit Human approval:
- update Astro data types;
- revise project copy;
- add Seneca / WellPlot Phase 2 / Tension Modeling / Relay / MIDS content;
- update pages/components/styles;
- add real project media;
- run `npm run check` and `npm run build`;
- review final diff before promotion.

## 13. Architecture exit criteria

Architecture is ready for design when:

- [ ] Featured / In progress / MIDS taxonomy is accepted.
- [ ] WellPlot Phase 1 / Phase 2 boundary is accepted.
- [ ] Flexible project content model is accepted.
- [ ] Evidence/source hierarchy is accepted.
- [ ] Editorial voice and anti-pattern list are accepted.
- [ ] No production content or UI implementation has been performed under this phase.

