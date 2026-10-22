# Portfolio Refresh v2 — Information & Editorial Architecture

Status: ARCHITECTURE DRAFT — REVISION 2
Branch: `architecture/portfolio-refresh-v2`
Base: `portfolio-v1`

## 1. Purpose

Refresh the portfolio so it reflects Carlos Schrupp's current work accurately and reads like a professional site written by a technically experienced person, not a generic generated case-study template.

This phase defines structure, evidence rules, editorial voice, project collections, and page responsibilities only. It does not authorize production-page implementation.

## 2. Goals

The portfolio should:

1. make the strongest completed/demonstrable work easy to find;
2. distinguish shipped or demonstrable work from active R&D;
3. show Carlos's actual contribution rather than describing collaborative projects as solo work;
4. connect AI/ML work to 20+ years of engineering and energy-domain experience without turning every page into a biography;
5. present evidence, limitations, and current status explicitly;
6. use clear, natural language with academic professionalism but without formulaic AI-copy patterns;
7. support selected UC Berkeley MIDS work without giving routine coursework the same visual weight as flagship projects;
8. let the same project appear in more than one collection without duplicating its canonical detail page.

## 3. Portfolio collections

Collections are presentation contexts, not mutually exclusive categories.

A project may appear in more than one collection. The card can be repeated where it helps navigation, but the project has one canonical detail page.

### 3.1 Featured

Projects sufficiently complete and demonstrable to represent Carlos's current professional capability.

- Seneca
- WellPlot — Phase 1
- CodingRabbit
- Flight Sentry

"Featured" means portfolio-ready. It does not imply commercial adoption, enterprise scale, or customer production history.

Four Featured projects are intentional: they show four distinct capabilities rather than four variants of the same skill.

- Seneca — Applied AI / retrieval / evaluation / product engineering
- WellPlot Phase 1 — domain software / scientific visualization / open source
- CodingRabbit — collaborative cloud AI product / application engineering
- Flight Sentry — large-scale machine learning / distributed data processing

### 3.2 In progress

Substantial projects with meaningful implemented work, but where an important capability or scientific/product claim remains under active validation.

- WellPlot — Phase 2
- Tension Modeling
- Relay

These cards should show both what already exists and the exact current frontier. They should not be written as future concepts, but they also should not imply completion.

### 3.3 Selected UC Berkeley MIDS work

A separate academic collection for selected graduate projects.

Initial anchors:
- CodingRabbit
- Flight Sentry

Both may also appear in Featured. Their cards can be repeated in the MIDS collection and link to the same canonical detail pages.

Additional MIDS projects should be selected for a distinct technical signal: statistics, experimentation, data engineering, visualization, NLP, machine learning, or applied research. Do not import every assignment merely because it exists on LinkedIn.

## 4. Canonical page and card model

### 4.1 One project identity, many cards

Cards are navigation/presentation objects.

The same canonical project can appear:
- on Home;
- in Featured;
- in MIDS;
- in a filtered Work view;
- in a phase-specific context.

This is acceptable duplication because the card helps a different browsing task.

Do not duplicate:
- case-study body copy;
- evidence records;
- project metadata;
- project detail pages.

### 4.2 WellPlot is one canonical project page

WellPlot should have one canonical page with at least two major sections:

1. Phase 1 — renderer-first product foundation
2. Phase 2 — semantic / natural-language editing R&D

Separate cards can represent the phases:
- `WellPlot — Phase 1` → `/portfolio/wellplot#phase-1`
- `WellPlot — Phase 2` → `/portfolio/wellplot#phase-2`

This preserves the continuity of one project while keeping maturity claims separate.

## 5. Project identity model

The current `Project` type assumes every project has the same maturity, collection membership, and narrative. Replace that with a model that separates canonical identity from collection cards and page sections.

Proposed conceptual model:

```text
Project
  id
  slug
  family
  title
  short_title
  project_type
  status_label
  status_detail
  year_start
  year_end
  role
  team_context
  summary
  technologies
  links
  collections[]           # featured | in_progress | mids
  source_refs[]
  media[]
  tags[]
  phases[]                # optional

ProjectPhase
  id
  label
  status
  anchor
  summary
  what_exists
  evidence[]
  limitations[]
  current_frontier

ProjectCardPlacement
  project_id
  collection
  card_title              # may be phase-specific
  card_summary
  phase_anchor            # optional
  priority
  visual_variant

ProjectSection
  kind
  heading
  body
  evidence_refs[]
```

The page renderer should allow different section combinations by project. Not every project should contain the same headings.

## 6. Canonical project boundaries

### CodingRabbit

Canonical identity:
- collaborative UC Berkeley MIDS capstone;
- deployed MVP / live beta;
- Carlos's role centered on infrastructure, AWS backend, application workflows, evaluation infrastructure, dashboards, and UI;
- results may include confidence, retrieval, guardrail, and judge metrics only with their original limitations.

Must not imply:
- solo ownership;
- causal proof of long-term learning gains;
- that Carlos owned every retrieval/guardrail/model component.

Collections:
- Featured
- MIDS

### Flight Sentry

Canonical identity:
- collaborative UC Berkeley MIDS Machine Learning at Scale project;
- large-scale flight-delay prediction using U.S. flight and NOAA weather data under a strict pre-departure information boundary;
- approximately 31 million domestic-flight records in the externally published team write-up;
- PySpark / Databricks large-scale ML workflow;
- team work explored classification, regression, tree ensembles, CNN/MLP approaches, temporal validation, and eventually a regression ensemble;
- published team-level final evaluation reports F2 0.697 and AUC-PR 0.72 when regression outputs are evaluated against the 15-minute delay threshold;
- Carlos is explicitly credited in the team write-up for the custom data join and MLP/CNN models.

Must not imply:
- Carlos personally built the final SparkXGBoost ensemble;
- the final team metrics are Carlos-only results;
- production airline deployment.

Collections:
- Featured
- MIDS

Portfolio value:
- adds a large-scale/distributed-ML signal that is not otherwise represented strongly in the Featured set.

### WellPlot — Phase 1

Canonical identity:
- mature renderer-first/open-source software foundation;
- LAS/DLIS ingestion, typed scientific data, layouts, YAML/Python authoring, static/interactive rendering, publication/distribution, and existing bounded agent/MCP surfaces where appropriate;
- demonstrable and installable.

Must not mix in:
- experimental natural-language semantic decomposition claims that belong to Phase 2.

Collection card:
- Featured

Canonical page:
- WellPlot, Phase 1 section

### Seneca

Canonical identity:
- local-first knowledge workspace built on OfflineRAG;
- hybrid retrieval, reranking, grounded answers, citations/evidence, evaluation, product API/UI, local-model boundary, deployment and operational validation;
- suitable as a flagship Applied AI / ML systems project.

Must retain:
- explicit supported deployment envelope;
- distinction between accepted implementation evidence and publication-grade quality claims;
- no claim of customer production history or enterprise multi-user readiness unless later established.

Collection:
- Featured

### WellPlot — Phase 2

Canonical identity:
- active R&D layer for natural-language / semantic editing of well-log layouts;
- deterministic contracts, constrained decomposition, evaluation methodology, provider/model qualification, and live semantic validation.

Must not imply:
- that the NLP path is already production-qualified;
- that provider-free rehearsal equals live model success.

Collection card:
- In progress

Canonical page:
- WellPlot, Phase 2 section

### Tension Modeling

Canonical identity:
- scientific-computing and physics-based wireline tension/friction program;
- soft-string mechanics, inverse methods, hybrid/physics-aware ML direction, FEM/contact work, reproducible scientific runtime.

Must distinguish:
- established components from unresolved contact-mechanics validation;
- numerical solver convergence from physical correctness.

Collection:
- In progress

### Relay

Canonical identity:
- governance control plane for agentic software engineering;
- authorization, evidence, immutable history, replay, human acceptance, agent-runtime and role contracts;
- demonstrated cold-start dogfood/recovery behavior.

Must not imply:
- autonomous real-project engineering loop is complete;
- production adoption.

Collection:
- In progress

## 7. Research-informed site information architecture

The architecture is based on two observations from external portfolio research:

1. Reviewers scan first and read selectively. Clear headings, strong information scent, concise project summaries, consistent cards, and visible evidence support that behavior.
2. Strong technical portfolios are curated by theme and proof rather than by exhaustive chronology. Established ML practitioners commonly put a concise identity/positioning statement first, then selected work/themes, with deeper material available behind links.

### 7.1 Home

Purpose: establish professional positioning and surface strongest proof quickly.

Recommended order:
1. Hero / positioning
2. Featured projects — four projects
3. Short professional context / differentiator
4. In-progress work — compact treatment
5. Selected experience
6. Education
7. Contact

The four Featured projects should be visually easy to compare. Design phase should test a responsive 2×2 desktop arrangement rather than four long full-width case-study teasers.

The homepage should not expose every MIDS item.

### 7.2 Work index

Primary portfolio navigation page.

Sections:
1. Featured
2. In progress
3. UC Berkeley MIDS — selected work

Cards may repeat across these collections.

Each card should answer quickly:
- What is it?
- What was Carlos's role?
- What technical signal does it demonstrate?
- What is its status?
- Is there evidence / a live artifact / code?

### 7.3 Project detail pages

Use a flexible page system instead of one fixed case-study narrative.

Recommended common header:
- one-sentence project description;
- status/maturity;
- role;
- team context;
- dates;
- strongest relevant links;
- 2–4 evidence facts where appropriate.

Recommended section library:
- Problem / context
- What we built
- My contribution / team split
- Data and constraints
- Technical approach / architecture
- Experiments and evaluation
- Results / evidence
- What changed during the work
- Failure or trade-off worth discussing
- Current status / limitations
- Current research frontier
- Artifacts and links

A product page, research page, and academic page should not be forced to use identical headings.

### 7.4 MIDS collection

Use a lightweight collection/index with cards for selected graduate projects.

Full project pages are justified when there is enough technical material and evidence. Smaller projects can stay as compact cards linking to GitHub, reports, notebooks, Berkeley pages, or LinkedIn.

CodingRabbit and Flight Sentry can appear here even though they are already Featured.

## 8. Evidence architecture

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
- whether result is development, pilot, academic, or publication-grade;
- relevant hardware/runtime context for performance claims;
- whether a metric belongs to Carlos individually or to a team system.

### E3 — Role/contribution
Supported by project records, report authorship/contribution notes, or Carlos's direct account.

Collaborative projects must distinguish Carlos's contribution from team output.

### E4 — Interpretation
A professional conclusion drawn from the work.

These should be phrased as interpretation, not as measured fact.

### E5 — Current frontier
Explicitly states what is not yet established.

For active R&D projects, this is a first-class section rather than a buried caveat.

## 9. Source hierarchy

For factual accuracy, use this order:

1. accepted/current repository evidence;
2. final project reports and formal project documentation;
3. externally published team/project write-ups where contribution or results are explicitly documented;
4. current project conversations where they capture later accepted state;
5. Carlos's direct clarification;
6. older portfolio copy only as a lead, never as authority.

When sources conflict, newer accepted project evidence wins for current implementation state.

For collaborative academic work, preserve attribution even when a team-level metric is strong.

## 10. Editorial voice

Target voice: technically literate, direct, conversational, academically professional.

Use:
- first person where ownership matters;
- "we" for team work;
- concrete nouns and verbs;
- normal sentence rhythm;
- explicit uncertainty and limitations;
- short explanations before jargon;
- measured claims;
- specific descriptions of choices, failures, and trade-offs.

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
- "For Flight Sentry, I worked on the custom data join and the MLP/CNN experiments. The final ensemble was team work and should be presented that way."

The copy may sound slightly imperfect or personal if it remains clear and correct. That is preferable to polished but generic generated prose.

## 11. Current-site content audit

The existing site is structurally sound but has four architectural content problems.

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

Current WellPlot copy combines the mature renderer product with experimental agent/MCP/NLP direction.

Resolution: one canonical WellPlot page with explicit Phase 1 and Phase 2 sections, plus phase-specific cards.

### C. Evidence and interpretation are mixed

Current copy sometimes moves directly from an implementation fact to an implied professional conclusion.

Resolution: separate implementation, evidence/results, attribution, and limitations/current-frontier blocks.

### D. Collection membership is currently one-dimensional

The current model assumes one project belongs in one place.

Resolution: collection membership becomes many-to-many. Repeated cards are permitted; canonical pages remain unique.

## 12. Visual architecture constraints

Preserve the current Astro site's restrained engineering visual identity unless the design phase finds a concrete usability problem.

Design phase may change:
- project-card hierarchy;
- responsive Featured grid;
- collection grouping;
- status badges;
- detail-page section composition;
- evidence/result presentation;
- media treatment;
- MIDS card density;
- card variants for canonical project vs project phase.

Design phase should avoid:
- decorative AI imagery;
- generic stock illustrations;
- excessive animation;
- redesigning the site purely to signal "AI";
- large skill-meter sections that repeat what project evidence already demonstrates.

Use real project screenshots, diagrams, plots, rendered logs, evaluation figures, and architecture graphics wherever possible.

## 13. Research synthesis informing the design phase

Recurring patterns from established ML practitioners, Berkeley/MIDS portfolios, usability research, and hiring discussions:

### Fast scan before deep read
Web users scan headings and consistent visual chunks before committing to detail. The design should therefore put project identity, role, maturity, and strongest evidence high on the page.

### Curated collections beat exhaustive inventories
Strong practitioner sites organize work around themes and selected work rather than presenting every artifact at equal weight.

### A project page should show judgment, not only a tool list
Hiring-manager discussions repeatedly value problem framing, data quality, real constraints, trade-offs, and end-to-end execution over standard notebook/model demonstrations.

### Team attribution is a strength when it is precise
Berkeley career guidance specifically recommends that group-project entries focus on the candidate's role. Portfolio pages should preserve both the team result and Carlos's specific contribution.

### Evidence should be visible, not buried
Measured outcomes, dataset scale, deployment state, test evidence, or accepted experimental findings can serve as fast proof points. They must keep their original scope and limitations.

### Academic work should remain curated
MIDS work adds breadth, but the strongest projects should be promoted into Featured while the broader academic collection remains lighter.

Representative external references used during architecture research:
- Nielsen Norman Group — scanning, headings, concise web writing
- Eugene Yan — theme-based technical work / selected projects
- Chip Huyen — concise identity + selected technical work
- Hamel Husain — focused professional theme + selected writing/work
- UC Berkeley School of Information career guidance — specificity and personal role in group projects
- Berkeley/MIDS alumni portfolios — compact graduate-project collections
- hiring-manager/community discussions — problem ownership, data quality, end-to-end execution, and explainability

## 14. Governance / delivery sequence

### Architecture
Freeze collections, canonical-project model, evidence rules, editorial voice, and page responsibilities.

### Design
Produce the concrete page/content schema, navigation, card variants, case-study variants, WellPlot phase layout, MIDS representation, and migration map from current content.

### Independent Review (IR)
Review architecture + design for:
- factual risk;
- misleading maturity claims;
- incorrect team attribution;
- unnecessary duplication;
- content-model gaps;
- generated-language patterns;
- usability and portfolio hierarchy;
- evidence claims without appropriate scope.

IR produces findings only. No production implementation.

### Human approval
Carlos accepts, rejects, or amends the design and IR findings.

### Implementation
Only after explicit Human approval:
- update Astro data types;
- revise current CodingRabbit and WellPlot copy from evidence;
- add Seneca / Flight Sentry / WellPlot Phase 2 / Tension Modeling / Relay / selected MIDS content;
- update pages/components/styles;
- add real project media;
- run `npm run check` and `npm run build`;
- review final diff before promotion.

## 15. Architecture exit criteria

Architecture is ready for design when:

- [ ] Featured collection with Seneca, WellPlot Phase 1, CodingRabbit, and Flight Sentry is accepted.
- [ ] In-progress collection is accepted.
- [ ] MIDS is accepted as a non-exclusive collection with repeated cards allowed.
- [ ] One canonical WellPlot page with Phase 1 / Phase 2 anchors is accepted.
- [ ] Canonical-project / card-placement data model is accepted.
- [ ] Flexible project content model is accepted.
- [ ] Evidence/source hierarchy is accepted.
- [ ] Editorial voice and anti-pattern list are accepted.
- [ ] No production content or UI implementation has been performed under this phase.
