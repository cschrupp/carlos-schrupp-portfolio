# WellPlot — Human Story Selection

**Decision:** HUMAN APPROVED STORY SELECTION  
**Date:** 2026-10-24  
**Research baseline:** `WELLPLOT-PORTFOLIO-RESEARCH-IR-002` — ACCEPT  
**IR-002 review commit:** `e4d94e23e8096f612ea952c5b3f105f5976ba7ff`  
**Branch:** `design/portfolio-refresh-v2`

## 1. Decision

Use **four primary story chapters** on the canonical WellPlot portfolio page:

1. `ST-01` — Scientific software first
2. `ST-02` — ~80 MCP decisions → semantic compiler
3. `ST-03` — 20/20 valid, 4/20 scientifically correct
4. `ST-05` — Debug the contract before blaming the model

The remaining stories are preserved as secondary material, architecture synthesis, or roadmap context.

## 2. Canonical page structure

WellPlot remains **one canonical project page** with two maturity regimes plus roadmap:

### Phase 1 — Released deterministic scientific product

Primary chapter:

- `ST-01` — Scientific software first

Purpose:
- establish that WellPlot is a real scientific-software product before introducing AI;
- show LAS/DLIS/programmatic data ingestion;
- show typed scientific/document abstractions;
- show YAML/Python authoring;
- show Matplotlib/Plotly rendering;
- preserve public release history and experimental-MCP boundary.

Preferred visuals:
- released CBL/VDL project render;
- raster-array render;
- deterministic architecture diagram.

### Phase 2 — Semantic / NL authoring R&D

Primary chapters:

- `ST-02` — ~80 MCP decisions → semantic compiler
- `ST-03` — 20/20 valid, 4/20 scientifically correct
- `ST-05` — Debug the contract before blaming the model

These chapters should tell the evolution from architecture problem → controlled semantic evidence → mature evaluation/custody discipline.

## 3. Chapter roles

### ST-01 — Scientific software first

**Narrative function:** establish technical credibility and product maturity before any AI narrative.

Core message:

WellPlot was already a functioning renderer-first well-log toolkit before natural-language authoring was added. The AI work is therefore an extension of a real scientific engine rather than an AI plotting demo.

Do not describe Phase 1 as:
- an AI application;
- a thin Matplotlib wrapper;
- dependent on the Phase-2 semantic system.

### ST-02 — ~80 MCP decisions → semantic compiler

**Narrative function:** explain the architectural pivot.

Core message:

An early long-horizon MCP workflow could successfully reconstruct a complex scientific result, but required roughly eighty low-level autonomous decisions. The result worked; the architecture was the problem. That experience motivated a compiler-style semantic layer with bounded model responsibilities and deterministic host execution.

Important boundary:

Do not generalize this into "agents do not work." The finding is about this scientific-authoring workload and the cost of long-horizon low-level tool inference.

### ST-03 — 20/20 valid, 4/20 scientifically correct

**Narrative function:** provide the strongest compact empirical demonstration that structure is not semantic grounding.

Core evidence:

- 20/20 structurally valid outputs;
- 4/20 Gate-A scientific-semantic passes.

Core message:

Constrained output solved syntax and shape, but not scientific meaning. This triggered controlled schema/contract experiments and forced the project to separate:
- provider success;
- structured-output validity;
- semantic correctness;
- deterministic host behavior.

### ST-05 — Debug the contract before blaming the model

**Narrative function:** show evaluation maturity and engineering judgment.

Core sequence:

1. Early D5 comparison produced useful outcome evidence but lacked exact model-facing prompts and raw structured answers.
2. That custody weakness made model-level causal claims unsafe.
3. The evaluation system evolved toward exact request/response custody, schema/validation boundaries, deterministic transforms, persistence/render evidence and first-divergence analysis.
4. D5-5I Live-002 then produced:
   - 2 PASS;
   - 7 FAIL;
   - 21 logical calls;
   - 21 physical attempts;
   - terminal `FAIL / RESIDUAL_SEMANTIC`.
5. The failures had multiple first-divergence classes and were not all reducible to "the model failed."
6. D5-5J became a provider-free corrective implementation response.
7. D5-5J does not retroactively convert D5-5I into a scientific success and is not represented as live-qualified at the accepted research cutoff.

Preferred visuals:
- evidence-custody maturation diagram;
- D5-5I first-divergence map;
- D5-5I → D5-5J status diagram;
- optionally the 4/24 → 16/24 still-rejected result as supporting evidence.

## 4. Secondary-story disposition

### ST-04 — Use the model for meaning; deterministic software for facts and mechanics

**Disposition:** INTEGRATE INTO ST-02 / ST-05, NOT A SEPARATE FULL CHAPTER.

This is the architectural conclusion connecting the Phase-2 stories:

- model: bounded semantic interpretation;
- host: IDs, source resolution, mutation, persistence, rendering and verification.

It should appear prominently in diagrams and prose, but a separate chapter would duplicate ST-02 and ST-05.

### ST-06 — Can a 1.7B local model compile well-log instructions?

**Disposition:** SECONDARY RESEARCH DEEP DIVE / INTERVIEW / SOCIAL.

Useful evidence:
- 6 GB RTX 3060 Laptop constraint;
- Qwen3-1.7B untuned ~42.1%;
- SLM-02 47/57 = 82.56% executable semantic;
- 47/70 = 67.14% overall;
- 98.57% schema validity;
- 0/13 ambiguity/unsupported.

Use when discussing:
- local-model specialization;
- QLoRA;
- hardware constraints;
- supported-operation learning vs fail-closed behavior.

Do not call the result product readiness.

### ST-07 — Stable passes rose from 4/24 to 16/24—and the candidate was still rejected

**Disposition:** SUPPORTING CALLOUT INSIDE ST-05 / INTERVIEW / SOCIAL.

This is excellent evidence of evaluation discipline but is too narrow for another full page chapter.

Keep the full promotion context:
- 4/24 → 16/24 stable passes;
- one protected regression;
- two terminal failures;
- required ≥18/24 gate;
- candidate rejected.

### ST-08 — Toward an integrated well-log workstation

**Disposition:** SHORT ROADMAP ENDING.

Use as a brief forward-looking section after Phase 2.

Clearly distinguish:
- implemented/released capabilities;
- active semantic-authoring R&D;
- future owner intent for UI, QC, processing and petrophysical workflows.

Do not present future roadmap items as current product functionality.

## 5. Preferred narrative arc

The main page should read as:

1. **A real scientific product existed first.**
2. **A successful agentic workflow exposed an architectural scaling problem.**
3. **Controlled experiments proved that structural validity was not scientific correctness.**
4. **The project matured into an evidence-driven semantic system where contract, custody and first divergence matter as much as the model.**

This gives WellPlot four distinct kinds of engineering evidence:

- scientific-software design;
- agentic-system architecture;
- empirical AI/semantic evaluation;
- governed systems/debugging methodology.

## 6. Relationship to cards

The canonical page remains unique.

Cards may link into phase anchors:

- Featured WellPlot Phase 1 card → `/portfolio/wellplot#phase-1`
- In-progress WellPlot Phase 2 card → `/portfolio/wellplot#phase-2`

Card duplication across collections is intentional navigation, not duplicate project identity.

## 7. Human selection disposition

```text
WELLPLOT HUMAN STORY SELECTION

Research baseline:
IR-002 ACCEPTED

Canonical project pages:
1

Primary website chapters:
4

Selected:
ST-01
ST-02
ST-03
ST-05

Integrated architecture:
ST-04

Secondary/supporting:
ST-06
ST-07

Roadmap:
ST-08

Human story selection:
ACCEPTED

Portfolio production implementation:
NOT YET AUTHORIZED
```

## 8. Next activity

WellPlot research and Human story selection are complete.

The selected material can now feed the broader portfolio Design package and later content drafting.

Production Astro implementation remains unauthorized until the portfolio-wide Design → Independent Review → Human approval sequence reaches implementation authority.
