# Portfolio Refresh v2 — Design Specification

**Status:** DESIGN CANDIDATE — READY FOR INDEPENDENT REVIEW  
**Branch:** `design/portfolio-refresh-v2`  
**Architecture baseline:** `01e24746207c67b1eca2d731f267ec30f2433b3a`  
**Design baseline before completion:** `0f2d835dbf678d5b1ec00a90cb6cf76069bdac82`

## 1. Design objective

Translate the accepted portfolio architecture into a concrete page, content and data system that can support the first complete website candidate without forcing every project into the same narrative depth.

The website is the canonical presentation surface. Interview material and later social posts are derivatives of accepted project evidence and stories.

No production Astro implementation is authorized by this document alone.

## 2. Portfolio-wide design decision

The portfolio will intentionally support **three project-detail depths**.

### A. Deep technical case study

Use when the project has enough accepted evidence to sustain multiple distinct engineering stories.

Projects:
- Seneca
- WellPlot

Expected composition:
- immediate scan layer;
- overview;
- 3–4 primary story chapters;
- evidence visuals;
- architecture/current-state material;
- explicit limitations/current frontier;
- artifacts/links.

### B. Compact evidence-backed project page

Use for strong collaborative/academic work where the public project itself already has a credible canonical presentation and the portfolio primarily needs to establish technical signal and Carlos's role.

Projects:
- Coding Rabbit
- Flight Sentry

Expected composition:
- immediate scan layer;
- short project/team context;
- 2–4 evidence facts;
- compact technical approach;
- **My contribution**;
- one primary visual or architecture/result graphic;
- strongest external project links;
- concise attribution/limitations note.

These pages are not required to use StoryChapters.

### C. In-progress preview page

Use for substantial active work that deserves portfolio visibility but has not yet completed the same research/content-selection cycle as the flagship case studies.

Projects:
- Tension Modeling
- Relay

Expected composition for first implementation:
- immediate scan layer;
- what exists now;
- why the problem matters;
- current technical direction;
- current frontier / what remains unproven;
- repository/evidence links where appropriate.

Do not manufacture a deep case study merely to make these pages match Seneca and WellPlot.

## 3. Audience model

### Recruiter / first-pass reviewer

Needs:
- professional positioning quickly;
- relevance;
- maturity;
- role;
- strongest evidence.

Design response:
- front-load identity/status/role;
- use concise cards;
- surface evidence without requiring a deep read.

### Technical hiring manager / engineering leader

Needs:
- technical judgment;
- constraints and trade-offs;
- evidence quality;
- boundaries between implementation and claims.

Design response:
- deep chapters on Seneca/WellPlot;
- visible evidence and rejected approaches;
- precise attribution;
- current-frontier sections.

### Domain / consulting prospect

Needs:
- evidence that Carlos understands operational/scientific context;
- distinction between prototype, accepted engineering, and production validation.

Design response:
- connect technical decisions to domain constraints;
- preserve limits explicitly;
- prioritize real project outputs over generic AI imagery.

## 4. Site hierarchy

### 4.1 Homepage

Recommended order:

1. Hero / positioning
2. Featured — four cards, responsive 2×2 desktop grid
3. Professional context / domain-to-AI bridge
4. In Progress — three compact cards
5. Selected experience
6. Education
7. Contact

Featured:
- Seneca
- WellPlot — Phase 1
- Coding Rabbit
- Flight Sentry

In Progress:
- WellPlot — Phase 2
- Tension Modeling
- Relay

The homepage does not expand the full MIDS collection.

### 4.2 Work index

Sections:

1. Featured
2. In Progress
3. UC Berkeley MIDS — Selected Work

Repeated cards are allowed because cards are navigation placements, not duplicate project identities.

Coding Rabbit and Flight Sentry appear in:
- Featured
- MIDS

WellPlot appears as:
- Featured card → Phase 1 anchor
- In Progress card → Phase 2 anchor
- one canonical project page

### 4.3 Canonical project pages

Canonical pages:
- Seneca
- WellPlot
- Coding Rabbit
- Flight Sentry
- Tension Modeling
- Relay

No duplicate WellPlot page.

## 5. Professional positioning

Primary site positioning:

**Applied AI & Computational Engineering**

Supporting domain line:

**Energy · Subsurface · Industrial AI**

The site should make clear that Carlos's AI/ML work sits on top of an engineering and subsurface background rather than replacing it.

Avoid generic positioning such as:
- AI enthusiast;
- innovation leader;
- cutting-edge technologist;
- generic full-stack AI engineer.

## 6. Canonical project / placement data model

The current `src/data/projects.ts` model is too rigid because it assumes:
- one collection;
- one maturity;
- one card;
- one fixed detail-page sequence;
- no project phases.

Implementation should move toward this conceptual model:

```text
Project
  id
  slug
  family
  title
  short_title
  description
  detail_mode              # deep | compact | preview
  status_label
  status_detail
  role
  team_context
  dates
  technologies[]
  links[]
  collections[]
  evidence_facts[]
  media[]
  sections[]
  phases[]                  # optional
  source_refs[]

ProjectPhase
  id
  label
  anchor
  status
  summary
  what_exists[]
  evidence_refs[]
  limitations[]
  current_frontier

ProjectCardPlacement
  id
  project_id
  collection               # featured | in_progress | mids
  title
  summary
  status
  phase_anchor              # optional
  priority
  visual_variant

ProjectSection
  kind                      # overview | story | architecture | contribution |
                            # evidence | current_status | roadmap | artifacts
  heading
  body
  evidence_refs[]
  media[]
  phase_id                  # optional

EvidenceRecord
  id
  project_id
  kind
  value
  label
  detail
  scope
  provenance
  source
  date
  team_or_individual
  caveat
```

The implementation does not need to reproduce these names literally, but it must preserve these separations.

## 7. Immediate scan layer

Every canonical project page begins with:

- title;
- one-sentence description;
- maturity/status;
- Carlos's role;
- team context;
- date range;
- strongest links;
- 2–4 evidence facts;
- technologies as secondary metadata.

Evidence facts should provide real information.

Prefer:
- `PyPI · LAS/DLIS`
- `20/20 valid · 4/20 semantic`
- `31M flight records — team dataset`
- `47/57 executable semantic — bounded WELL-IR experiment`

Avoid decorative counts such as total commits or lines of code.

## 8. Seneca — accepted page design

**Detail mode:** deep technical case study  
**Collection:** Featured

Research baseline:
- `SENECA-PORTFOLIO-RESEARCH-IR-003` — ACCEPT

Human-selected chapters:

1. `ST-GL-01` — expert annotation constraint → Gold Lab
2. `ST-RET-01` — query formulation / retrieval experiment
3. `ST-GEN-01` — provenance-prompt regression / non-promotion
4. `ST-CPU-16K` — GPU/CPU runtime, parity and backend qualification

Preferred narrative arc:

1. A real user's constraint changed the product.
2. Retrieval experiments changed what appeared to matter.
3. A seemingly better generation prompt produced worse measured citation behavior.
4. Runtime qualification required both performance and vector-space equivalence.

Secondary material:
- recovery;
- security;
- browser ingestion;
- general latency.

These may appear as evidence callouts or interview/social material, not additional primary page chapters.

Visual priorities:
- Gold Lab / training UI capture;
- retrieval comparison;
- citation-recall comparison;
- CUDA/QINT8/FP32 runtime/parity figure.

Until real UI captures are available, use evidence-derived diagrams/plots rather than synthetic screenshots.

## 9. WellPlot — accepted page design

**Detail mode:** deep technical case study  
**Collections:** Featured via Phase 1; In Progress via Phase 2  
**Canonical pages:** one

Research baseline:
- `WELLPLOT-PORTFOLIO-RESEARCH-IR-002` — ACCEPT

Human-selected chapters:

1. `ST-01` — Scientific software first
2. `ST-02` — ~80 MCP decisions → semantic compiler
3. `ST-03` — 20/20 valid, 4/20 scientifically correct
4. `ST-05` — Debug the contract before blaming the model

Page structure:

### Phase 1 — Released deterministic scientific product

Use `ST-01`.

Show:
- LAS/DLIS/programmatic input;
- typed dataset/document architecture;
- YAML/Python authoring;
- Matplotlib/Plotly outputs;
- real CBL/VDL project renders;
- public package/release links.

### Phase 2 — Semantic / NL authoring R&D

Use:
- `ST-02`
- `ST-03`
- `ST-05`

Integrate `ST-04` as the architecture principle:
- model owns bounded semantic interpretation;
- host owns IDs, source resolution, mutation, persistence, rendering and verification.

Use `ST-07` as a supporting callout:
- stable passes 4/24 → 16/24;
- still rejected because the declared promotion contract was not met.

Use `ST-06` as optional secondary research:
- compact-model / 6 GB GPU work;
- not a primary chapter.

### Roadmap

Use `ST-08` only as a short closing section.

Clearly label future UI/QC/processing/petrophysical ambitions as owner intent, not implemented capability.

Card targets:
- Featured `WellPlot — Phase 1` → `/portfolio/wellplot#phase-1`
- In Progress `WellPlot — Phase 2` → `/portfolio/wellplot#phase-2`

## 10. Coding Rabbit — compact page design

**Detail mode:** compact evidence-backed project  
**Collections:** Featured, MIDS  
**Context:** five-person UC Berkeley MIDS capstone

Primary external sources:
- `https://www.codingrabbit.dev/`
- Berkeley MIDS capstone page supplied by Carlos

The project site should be treated as a primary public presentation surface rather than recreated inside the portfolio.

Portfolio page purpose:
- explain what the project is;
- show why it is technically distinct;
- establish Carlos's contribution;
- send interested readers to the full project site/Berkeley page.

Recommended sections:

### Project snapshot

A deployed AI teaching assistant for programming courses designed around guided learning rather than direct answer generation.

### Team / academic context

Five-person UC Berkeley MIDS capstone.

Use `we` for team-level claims.

### Technical signal

Compact summary of:
- VS Code learning workflow;
- AWS deployment/application architecture;
- course/context grounding;
- evaluation and safety/guardrail work.

### My contribution

Use precise role evidence already established in portfolio architecture/project materials:
- infrastructure/AWS backend;
- application workflows;
- professor/admin surfaces;
- evaluation infrastructure/dashboard;
- UI/presentation contributions where supported.

Do not imply ownership of every retrieval, guardrail or modeling component.

### Links

Prominent:
- Coding Rabbit site
- Berkeley capstone page
- demo / repository if still appropriate

### Evidence policy

Use only a small number of metrics if their source and limitations are clear.

Do not make causal long-term learning claims from small/self-reported or automated evaluation results.

## 11. Flight Sentry — compact page design

**Detail mode:** compact evidence-backed project  
**Collections:** Featured, MIDS  
**Context:** collaborative UC Berkeley MIDS Machine Learning at Scale project

Primary public source:
- `https://groups.ischool.berkeley.edu/flight_delay_prediction_model/`

The portfolio should summarize the Berkeley-hosted project rather than reconstruct its full development history.

Recommended sections:

### Project snapshot

Large-scale flight-delay prediction using U.S. flight and NOAA weather data under a pre-departure information boundary.

### Scale / method

Where supported by the Berkeley/team material:
- approximately 31M domestic-flight records;
- PySpark / Databricks;
- temporal validation;
- team exploration of classification, regression and multiple model families.

### My contribution

Keep contribution bounded to established team attribution:
- custom data join;
- MLP/CNN experiments.

Do not attribute the final ensemble to Carlos individually.

### Team result

Team-level final metrics may be shown only with explicit team attribution and original evaluation context.

### Links / visual

Use:
- Berkeley project site as the primary destination;
- one project-derived architecture/result graphic or screenshot where licensing/source context is clear.

No deep StoryChapter cycle is required for first implementation.

## 12. Tension Modeling — first-pass preview design

**Detail mode:** in-progress preview  
**Collection:** In Progress

The first website candidate should not wait for the full Tension research program to finish.

Required page content:
- physics-based wireline tension/friction problem;
- soft-string/inverse-method context;
- current FEM/contact work;
- reproducibility/scientific-runtime discipline;
- explicit current frontier.

Do not claim:
- solved contact mechanics;
- validated production physics;
- physical correctness merely from numerical convergence.

A later research cycle can upgrade this page into a deep case study without changing its canonical slug.

## 13. Relay — first-pass preview design

**Detail mode:** in-progress preview  
**Collection:** In Progress

Required page content:
- governance/control-plane problem for agentic development;
- durable authority/evidence/replay concepts;
- current dogfood evidence;
- current boundary: full autonomous real-project loop is not yet a completed production claim.

For the first implementation, keep the page shorter than Seneca/WellPlot.

A later accepted research package may promote Relay to a deeper case study.

## 14. Project cards

### Featured cards

Desktop:
- responsive 2×2 grid;
- equal visual weight;
- concise text;
- visible maturity;
- no giant alternating full-width cards.

Each card should communicate:
- what it is;
- Carlos's role;
- strongest technical signal;
- status;
- one useful visual.

### In-progress cards

More compact than Featured.

Must show:
- what already exists;
- current frontier/status;
- no “coming soon” vagueness.

### MIDS cards

Compact academic treatment.

Coding Rabbit and Flight Sentry may repeat here and link to the same canonical pages.

## 15. Flexible page renderer

The current `[slug].astro` page hard-codes one case-study sequence.

Replace that with section-driven rendering.

Minimum section variants required for first implementation:
- `overview`
- `story`
- `architecture`
- `contribution`
- `evidence`
- `current_status`
- `roadmap`
- `artifacts`

Not every page uses every section.

WellPlot sections may carry a phase anchor.

Coding Rabbit and Flight Sentry should render naturally without empty placeholder sections.

## 16. Story chapter contract

Story chapters remain the canonical reusable narrative unit for deep pages.

```text
StoryChapter
  id
  title
  phase_or_period
  opening_fact
  situation
  constraint_or_tension
  options_considered[]
  decision_or_action
  evidence[]
  consequence
  what_changed
  judgment
  unresolved_boundary
  media[]
  source_refs[]
  social_angle
```

A publishable chapter requires:
- real situation;
- meaningful technical tension;
- decision or explicit non-decision;
- evidence;
- judgment;
- boundary where material.

Compact academic pages are exempt from this requirement.

## 17. Evidence presentation

### Evidence strip

Near the top of deep and compact project pages, show 2–4 useful evidence facts.

Every metric must retain:
- denominator/population when material;
- team vs individual attribution;
- development/pilot/accepted status;
- relevant caveat.

### Chapter evidence

May use:
- project screenshots;
- real scientific renders;
- architecture diagrams;
- experimental comparison plots;
- benchmark figures;
- acceptance/evidence diagrams.

Each visual must have a narrative job.

## 18. Visual design

Preserve the restrained engineering identity of the current site:
- light neutral backgrounds;
- dark technical typography;
- restrained teal/orange accent system;
- strong whitespace;
- real artifacts.

Improve:
- card density/hierarchy;
- phase/status badges;
- evidence presentation;
- responsive Featured grid;
- section rhythm;
- visual differentiation between deep, compact and preview pages.

Avoid:
- decorative AI artwork;
- stock engineering imagery;
- excessive gradients/animation;
- “AI dashboard” aesthetics unrelated to the actual projects.

## 19. Editorial voice

Target:
- technically literate;
- direct;
- conversational;
- academically professional.

Use:
- concrete facts;
- first person for individual contribution;
- `we` for collaborative team work;
- explicit limitations;
- normal sentence rhythm.

Avoid:
- generic Challenge/Solution/Impact headings;
- “leveraging cutting-edge AI”;
- “at the intersection of”;
- “revolutionary”;
- repeated rhetorical triads;
- forcing every project into a heroic arc.

## 20. Social derivative model

Deep-page accepted chapters may later become independent LinkedIn/social stories.

Do not write social content first.

Typical limits:
- Seneca: up to four high-value posts;
- WellPlot: up to four;
- Coding Rabbit: usually one strong capstone/team post;
- Flight Sentry: usually one academic/large-scale-ML post;
- Tension/Relay: only when a specific accepted milestone warrants it.

No mandatory Part 1/4 serialization.

## 21. First implementation candidate scope

The first website implementation should include:

### Required

- new multi-collection/card data model;
- Featured 2×2 homepage grid;
- In Progress homepage section;
- Work index with Featured / In Progress / MIDS;
- six canonical project routes;
- one canonical WellPlot route with Phase 1/2 anchors;
- deep Seneca page structure;
- deep WellPlot page structure;
- compact Coding Rabbit page;
- compact Flight Sentry page;
- preview Tension Modeling page;
- preview Relay page;
- evidence/status/role scan layer;
- responsive behavior;
- current restrained visual identity.

### May use placeholders only for unavailable media

Allowed:
- clearly labeled evidence-derived diagram placeholder;
- neutral project-art placeholder.

Not allowed:
- synthetic screenshots presented as real UI;
- fabricated benchmark plots;
- stock visuals pretending to be project output.

### Not required for first implementation

- complete social content;
- full Tension research case study;
- full Relay research case study;
- every Seneca UI screenshot;
- all possible WellPlot experiment visuals;
- redesign of contact/experience content beyond what is needed for layout consistency.

## 22. Implementation acceptance questions

The first website candidate should be judged on:

1. Can a recruiter identify Carlos's positioning and strongest four projects quickly?
2. Are Featured and In Progress visibly different maturity categories?
3. Does WellPlot read as one project with two clear maturity phases?
4. Do Seneca and WellPlot reward deep reading without making the homepage dense?
5. Do Coding Rabbit and Flight Sentry feel credible and substantial without inflated case-study prose?
6. Are Carlos's collaborative contributions explicit?
7. Do Tension and Relay look like real active work rather than empty “coming soon” pages?
8. Are evidence facts scoped correctly?
9. Is any future capability visually mistaken for an implemented capability?
10. Does the site still feel like an engineering portfolio rather than a generic AI template?

## 23. Design exit criteria

- [x] audience model defined;
- [x] homepage/work hierarchy defined;
- [x] immediate-scan layer defined;
- [x] canonical project/card/phase model defined;
- [x] deep/compact/preview page depths defined;
- [x] story chapter contract defined;
- [x] evidence model defined;
- [x] social-derivative model defined;
- [x] Seneca research and Human story selection integrated;
- [x] WellPlot research and Human story selection integrated;
- [x] Coding Rabbit compact treatment defined;
- [x] Flight Sentry compact treatment defined;
- [x] Tension first-pass treatment defined;
- [x] Relay first-pass treatment defined;
- [x] WellPlot one-page/two-phase composition frozen;
- [x] first implementation candidate scope defined;
- [x] no production Astro implementation performed.

## 24. Design gate

This document is now a **Design Candidate**.

Next gate:

**Independent Portfolio Design Review**

If accepted:
1. Human final approval;
2. implementation authority;
3. first full Astro website candidate.
