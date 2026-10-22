# Portfolio Refresh v2 — Design Specification

Status: DESIGN DRAFT
Branch: `design/portfolio-refresh-v2`
Architecture baseline: `01e24746207c67b1eca2d731f267ec30f2433b3a`

## 1. Design objective

Translate the accepted portfolio architecture into a concrete content and page system.

The design must support three uses without creating three separate narratives:

1. website case study;
2. interview discussion;
3. later social-media / LinkedIn posts.

The website is the canonical source. Social content is derived from evidence-backed story chapters inside each project record.

No production Astro implementation is authorized in this phase.

## 2. Audience model

The portfolio has three primary audiences.

### A. Recruiter / first-pass reviewer

Typical need:
- identify professional positioning quickly;
- understand whether the work is relevant;
- see maturity, role, technologies, and evidence without reading the whole page.

Design implication:
- front-load identity, status, role, and proof;
- use scannable headings;
- keep cards concise;
- do not require domain knowledge to understand why the project matters.

### B. Technical hiring manager / engineering leader

Typical need:
- assess technical judgment;
- understand constraints and trade-offs;
- distinguish implementation from claims;
- see how Carlos handled failure, ambiguity, and iteration.

Design implication:
- expose technical story chapters;
- include alternatives, decisions, evidence, and limitations;
- link to repositories, reports, benchmarks, and demos.

### C. Domain / consulting prospect

Typical need:
- see whether Carlos understands real operational problems;
- determine whether the work can transfer to industrial settings;
- understand deployment and evidence boundaries.

Design implication:
- connect technical decisions to operational constraints;
- avoid generic ML framing when domain context matters;
- be explicit about what is proven and what remains research.

## 3. Page hierarchy

### 3.1 Homepage

Recommended order:

1. Hero / positioning
2. Featured — four project cards in a responsive 2×2 desktop grid
3. Professional context — concise domain/AI bridge
4. In Progress — compact cards
5. Experience
6. Education
7. Contact

Featured cards:
- Seneca
- WellPlot — Phase 1
- CodingRabbit
- Flight Sentry

In-progress cards:
- WellPlot — Phase 2
- Tension Modeling
- Relay

MIDS is not expanded on the homepage.

### 3.2 Work index

Sections:
1. Featured
2. In Progress
3. UC Berkeley MIDS — Selected Work

Repeated cards are allowed.

### 3.3 Canonical project pages

Canonical project pages remain unique.

- CodingRabbit → one page
- Flight Sentry → one page
- Seneca → one page
- WellPlot → one page, Phase 1 + Phase 2
- Tension Modeling → one page
- Relay → one page

## 4. Immediate scan layer

Every full project page begins with a compact scan layer.

Required elements:
- project title;
- one-sentence description;
- maturity/status;
- Carlos's role;
- team context;
- date range;
- strongest links;
- 2–4 evidence facts;
- technologies, kept secondary.

Evidence facts must be useful rather than decorative.

Good examples:
- "31M flight records"
- "PyPI package + LAS/DLIS"
- "53/53 canonical FEM runtime checks"
- "B4 cold-start: 10/10 questions passed"
- "32-source / 100 MiB supported Seneca reference envelope"

Avoid:
- line counts;
- commit counts;
- number of frameworks;
- inflated "1000+ tests" claims without relevance.

## 5. Story chapter contract

### 5.1 Purpose

Project pages should not be written as one long chronological history or as a generic Challenge/Solution/Impact template.

Instead, each project contains a small number of **story chapters**.

A story chapter records one meaningful engineering tension and how it was resolved, rejected, or left open.

Each chapter should be independently understandable and reusable later as:
- a LinkedIn post;
- an interview story;
- a presentation slide sequence;
- a section of the project page.

### 5.2 Story chapter fields

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

Not every chapter needs every field, but a publishable chapter must contain:
- a real situation;
- a meaningful constraint/tension;
- a decision or explicit non-decision;
- evidence;
- a conclusion or lesson.

### 5.3 Narrative sequence

Default sequence:

1. **Opening fact** — the concrete observation that makes the chapter worth reading.
2. **Situation** — enough context to understand the engineering problem.
3. **Tension** — what made the obvious answer insufficient.
4. **Decision** — what was tried, chosen, rejected, or frozen.
5. **Evidence** — what the test, measurement, user behavior, or implementation showed.
6. **Judgment** — what the result changed in the project.
7. **Boundary** — what the result still does not establish.

This sequence is intentionally closer to an engineering decision record and a postmortem than to marketing copy.

## 6. Storytelling rules

### 6.1 Start with the interesting fact, not the project history

Prefer:
"One version of the FEM model converged numerically and still produced an invalid physical result."

Avoid:
"Tension Modeling is an innovative project designed to explore..."

### 6.2 Preserve uncertainty

A good technical story may end with:
- a rejected approach;
- a narrower claim;
- an unresolved question;
- a decision to defer work.

This is evidence of judgment, not failure of storytelling.

### 6.3 Show alternatives when they mattered

If several real options were considered, name them.

Example:
- dense only;
- hybrid;
- reranking;
- context expansion.

Or:
- CUDA;
- ONNX CPU;
- llama.cpp / GGUF feasibility.

Do not fabricate alternatives merely to create drama.

### 6.4 Separate team result from individual contribution

Each collaborative story must distinguish:
- what the team achieved;
- Carlos's direct role;
- what another teammate owned where relevant.

### 6.5 Use failures selectively

Not every defect deserves a story.

A failure is story-worthy when it changed:
- architecture;
- methodology;
- acceptance criteria;
- understanding of the problem;
- operational design.

### 6.6 Do not manufacture a hero narrative

Avoid:
- "Against all odds..."
- "I refused to give up..."
- "The breakthrough came when..."
unless the source evidence genuinely supports that framing.

The subject is the engineering decision, not Carlos as protagonist.

## 7. Evidence presentation

### 7.1 Evidence strip

Near the top of each project page, render 2–4 evidence facts.

Each fact should include a short qualifier if needed.

Example:

```text
31M
flight records
Team dataset

0.697
F2
Final team evaluation

Custom join
Carlos's contribution
PySpark feature pipeline
```

### 7.2 Evidence blocks inside chapters

Evidence may be:
- metric table;
- screenshot;
- rendered log;
- benchmark plot;
- architecture diagram;
- acceptance record;
- test summary;
- before/after comparison;
- excerpt from a public project report.

Each visual should have:
- caption;
- what it demonstrates;
- scope/limitation where material.

### 7.3 Evidence ledger

Project data should maintain evidence records separately from prose.

Conceptual model:

```text
EvidenceRecord
  id
  project_id
  kind
  value
  label
  scope
  provenance
  source_url_or_repo_ref
  date
  team_or_individual
  caveat
```

Story chapters reference evidence IDs.

This prevents the same metric from acquiring different wording or scope across the website and social posts.

## 8. Social-media derivative design

### 8.1 Principle

Do not write LinkedIn posts first and then retrofit them into the portfolio.

Write one canonical engineering chapter and derive a shorter social version.

### 8.2 Social chapter format

A normal LinkedIn post should usually represent one story chapter.

Suggested structure:

```text
Opening observation
2–4 short paragraphs of context
The decision / experiment
Concrete evidence
What I changed / learned
Optional question or link to the full project page
```

The post should stand alone. A reader should not need to have seen "Part 1".

### 8.3 Series size

Do not force every project into the same number of posts.

Recommended upper bounds:
- Featured project: 2–4 strong posts;
- active R&D project: 2–5 posts over time;
- smaller MIDS project: usually 1 post or a grouped academic post.

A project with only one genuinely interesting engineering story gets one post.

### 8.4 Series labels

Use subtle continuity, not aggressive serial branding.

Good:
- "Building Seneca — retrieval was not the slow part."
- "WellPlot Phase 2 — the frontier-model experiment taught us the wrong lesson."
- "Tension Modeling — convergence was not enough."

Avoid:
- "🚀 AI BUILD SERIES PART 1/10"
- forced cliffhangers;
- "Like and follow for Part 2";
- identical hook formulas.

### 8.5 Format selection

Use:
- text + one real screenshot/figure for a focused engineering lesson;
- PDF/document carousel when a visual sequence genuinely helps;
- article for a deeper single topic that cannot fit comfortably in a feed post;
- newsletter only if a coherent recurring theme and cadence later justify it.

The website remains canonical even if a LinkedIn article is longer than a post.

### 8.6 Analytics feedback loop

Track:
- impressions;
- profile activity;
- saves/sends where available;
- comments with substantive questions;
- viewer demographics where useful.

Use this to learn which technical stories resonate.

Do not rewrite technical claims to chase engagement.

## 9. Recommended story inventory by project

These are design candidates, not final copy.

### Seneca

Potential chapters:

1. **Local by design**
   - Why the generator lives outside the application container.
   - Model independence, privacy, deployment trade-off.

2. **A RAG system needs its own measurement system**
   - Retrieval and generation evaluated separately.
   - Gold authoring, citations, abstention, security.

3. **The beta corpus broke the comfortable assumptions**
   - 45 files / ~1.05 GB exposed performance and reliability issues beyond the earlier supported envelope.
   - What changed in ingestion/capacity work.

4. **CPU fallback was a correctness problem before it was a speed problem**
   - CUDA vs ONNX / quantized alternatives.
   - Numerical parity and performance gates.

Optional fifth:
5. **When recovery should remain disabled**
   - evidence was insufficient to justify recovery/orchestration;
   - complexity had to earn its place.

### WellPlot

One page, two phases.

#### Phase 1 candidates

1. **Treat the well log as an engineering document**
   - renderer-first architecture;
   - data model separate from presentation;
   - LAS/DLIS, printable and interactive outputs.

2. **A real CBL/VDL layout forced the abstraction to become honest**
   - array/raster channels, micro-time axes, fills, overlays, annotations;
   - real domain requirements shaping API design.

3. **From library to usable tooling**
   - packaging, PyPI/docs, bounded MCP/API interfaces.

#### Phase 2 candidates

4. **The best models were answering the wrong question**
   - frontier-model screening methodology failure;
   - comparing invented representations against ground truth was not sufficient.

5. **Structure before model size**
   - lessons from CW/TW experiments;
   - constrained IR, deterministic lowering, semantic qualification.

6. **Provider-free tests can prove plumbing, not model capability**
   - 9/9 rehearsal and request-control evidence;
   - live model qualification remains a separate claim.

### CodingRabbit

Potential chapters:

1. **A tutoring assistant has a different objective from a coding assistant**
   - learning vs answer generation;
   - instructional constraints.

2. **My part of the system**
   - AWS/backend/application ownership;
   - Cognito, deployment, data workflows, professor/admin UI.

3. **Evaluation had to be separated from live tutoring**
   - offline evaluation lane;
   - metrics and their limits.

Possible fourth only if evidence supports a strong story:
4. **What the pilot actually showed**
   - confidence and automated evaluation;
   - avoid causal learning claims.

### Flight Sentry

Potential chapters:

1. **The join was part of the ML problem**
   - 31M flights + weather;
   - point-in-time correctness / leakage constraints;
   - Carlos's custom data join contribution.

2. **Classification looked obvious; regression worked better**
   - team modeling evolution;
   - architecture simplification;
   - final ensemble result.

3. **What large-scale ML changed about experimentation**
   - Spark/Databricks;
   - temporal cross-validation;
   - feature and compute constraints.

Optional:
4. **MLP/CNN experiments in tabular/time-dependent data**
   - Carlos's experiments;
   - what they contributed even if not in final ensemble.

### Tension Modeling

Potential chapters:

1. **Why friction cannot simply be measured**
   - inverse problem / operational context;
   - soft-string baseline.

2. **The solver converged and the physics still failed**
   - contact nonpenetration;
   - why numerical convergence was rejected as acceptance.

3. **Reproducibility became part of the scientific model**
   - canonical FEM runtime;
   - image pinning / dependency identity / 53/53 validation.

4. **The current frontier**
   - D59/D73/contact recovery path;
   - what remains unresolved.

### Relay

Potential chapters:

1. **Agents make reasonable changes that can still move the project in the wrong direction**
   - governance problem;
   - authority and scope drift.

2. **Authority has to survive the chat**
   - durable state, immutable records, replay.

3. **Cold start was the first real test**
   - fresh operator;
   - 10/10 questions;
   - no prior conversation.

4. **Why successful agent execution is not enough**
   - runtime/roles/context/workspace;
   - acceptance and promotion separation.

Future chapter:
5. **First governed real-project execution**
   - only after it actually exists.

## 10. Project-page composition

Each project page may use:

### Header
Immediate scan layer.

### Overview
2–4 paragraphs maximum.

### Story chapters
2–6, depending on project depth.

Each chapter:
- clear factual heading;
- 2–5 paragraphs;
- evidence visual(s);
- optional decision box;
- explicit caveat only when necessary.

### Evidence / artifacts
A compact index of:
- repository;
- demo;
- documentation;
- report;
- benchmark;
- accepted evidence.

### Current status
For active R&D:
- what works;
- what is being validated;
- what is not claimed.

### Next project
Navigation only.

## 11. Writing mechanics

Use active voice by default.

Prefer:
"I changed the evaluation after the frontier-model run exposed a flaw in the methodology."

Avoid:
"A change in evaluation methodology was implemented after flaws were identified."

Paragraph rhythm:
- mix short and medium sentences;
- avoid identical paragraph lengths;
- avoid three-item rhetorical symmetry unless naturally required;
- technical terms are welcome when defined.

Headings:
- factual and specific;
- often derived from the actual result.

Examples:
- "The solver converged. The contact model did not."
- "Why the model is outside the container"
- "31 million flights made the join a modeling problem"

Avoid:
- "The Challenge"
- "The Journey"
- "The Solution"
- "The Impact"
- "Innovation in action"

## 12. Visual narrative design

Every major chapter should attempt to pair with one real artifact.

Preferred visual classes:
- application screenshot;
- architecture diagram;
- benchmark/result figure;
- real render/output;
- experimental comparison;
- state/evidence diagram.

A project page should not become an image gallery. Each visual needs a narrative job.

For active R&D, diagrams may show the current frontier and unresolved boundary.

## 13. Content production workflow

For each project:

1. retrieve the latest project evidence;
2. build an evidence ledger;
3. identify candidate story chapters;
4. select only chapters with distinct technical value;
5. draft canonical project copy;
6. run factual/attribution review;
7. run editorial/voice review;
8. derive social-post outlines from accepted chapters;
9. do not publish social derivatives before canonical project facts are accepted.

## 14. Research basis

The design uses the following external guidance:

- Nielsen Norman Group portfolio research: hiring managers want process, constraints, iterations, rationale, and outcomes; portfolios should be scannable.
- Nielsen Norman Group web-reading research: readers scan and benefit from front-loaded information, meaningful headings, concise paragraphs, and plain language.
- Google Technical Writing: define the audience, summarize important points early, and prefer active voice for clarity.
- Architecture Decision Record practice: preserve context, considered options, decisions, rationale, and consequences.
- Google SRE postmortem practice: use failures as structured learning, preserve evidence, and avoid blame/hero narratives.
- LinkedIn current creator guidance: useful content should reflect real expertise, experience, perspective, and actionable learning; generic polished "AI slop" is discouraged.
- LinkedIn publishing model: posts are feed-oriented; articles support long-form depth; newsletters work best when a clear recurring theme and cadence exist.

## 15. Design review questions

IR should specifically test:

1. Are story chapters genuinely distinct or do they repeat the same claim?
2. Does each chapter contain evidence?
3. Is the individual/team attribution correct?
4. Is any failure being dramatized beyond the evidence?
5. Is the current frontier explicit for active R&D?
6. Can a recruiter understand the page without reading every chapter?
7. Can a technical reviewer go deeper without being forced into repository internals?
8. Can each selected social chapter stand alone without "Part N" dependency?
9. Does the prose sound like Carlos explaining engineering work rather than a marketing writer?
10. Is any metric presented without enough context to interpret it?

## 16. Design exit criteria

Design is ready for Independent Review when:

- [ ] audience model is accepted;
- [ ] homepage/work hierarchy is accepted;
- [ ] immediate-scan layer is accepted;
- [ ] story chapter contract is accepted;
- [ ] evidence ledger model is accepted;
- [ ] social-derivative model is accepted;
- [ ] WellPlot one-page/two-phase composition is accepted;
- [ ] initial story inventory for all six canonical projects is accepted as a starting point;
- [ ] no production Astro implementation has been performed.
