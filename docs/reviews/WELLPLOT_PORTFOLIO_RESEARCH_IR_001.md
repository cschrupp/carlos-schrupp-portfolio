# WellPlot Portfolio Research — Independent Review 001

**Review:** WELLPLOT-PORTFOLIO-RESEARCH-IR-001  
**Disposition:** REWORK — NARROW  
**Date:** 2026-10-24  
**Portfolio branch:** `design/portfolio-refresh-v2`  
**Review class:** independent content/evidence review  
**Production implementation:** NOT AUTHORIZED / NOT MODIFIED

## Reviewed package

Archive:

`WELLPLOT_PORTFOLIO_RESEARCH_STAGE7_2026-10-23(1).zip`

Archive SHA-256:

`8986c05ab4e93df06f15e6e1d34c0581e8a4e716e9e3ee81bce639fdb8fc4707`

The package manifest validates all seven research artifacts:

| Artifact | SHA-256 |
|---|---|
| `PROJECT_PORTFOLIO_RESEARCH.md` | `11203e08e7362de559aa3bdeec6f4f594bee8c9a3b7a532a6d3366b44f3c9934` |
| `PROJECT_EVIDENCE_LEDGER.json` | `150fd862bd4708e04f02d9f6ad58042a4980797fb9fc88bf926d327dd0773cce` |
| `PROJECT_STORY_MAP.json` | `a4693218c21492d521185d932a40391c18ee2455b44761e871dc19a81db0b053` |
| `PROJECT_SOURCE_INDEX.md` | `72accfd62bbb0a75ab84bc888d0db3d557ec78388c25ad6b9cdcc9933d1a6ebd` |
| `PROJECT_ACADEMIC_AND_TECHNICAL_REFERENCES.md` | `f2b170e182b4d6c404acf7bd1cb48f14c0a9d01caa65c763a758a660ed7c6990` |
| `PROJECT_VISUAL_INVENTORY.md` | `6d4689d28c79dc2525b63766c222c67ca5e11f78d7ee45bd4212c8dfb02cc678` |
| `PROJECT_RESEARCH_REVIEW_REPORT.md` | `8e15adba9ce8e959c8230ad073a130058a894b047bc5826af44abda8986c94fa` |

## Executive review

The package is technically strong and substantially evidence-bounded.

It correctly establishes the central portfolio framing:

- WellPlot began as deterministic scientific software rather than an AI demo;
- Phase 1 is a released renderer-first scientific package;
- Phase 2 is a separate natural-language/semantic-authoring development program;
- the model/host ownership boundary is explicit;
- structural validity is not conflated with semantic correctness;
- historical model comparisons preserve their evidence-custody limitations;
- the latest included live D5-5I campaign remains a failed qualification rather than being promoted into success;
- WELL-IR is correctly presented as parallel compact-model research rather than the canonical production D5 path;
- future QC/processing/petrophysical ambitions are labeled as owner roadmap intent.

The package does **not** need a broad research restart.

However, it is not yet suitable as the canonical current-state source because one material corrective implementation line was already active before the package freeze and is absent from the package.

# Independent verification

## Public deterministic product

Independent GitHub inspection confirms:

- public README describes WellPlot as an open-source Python toolkit for printable and interactive well-log layouts from LAS/DLIS;
- released architecture separates `WellDataset`, document/composition, and renderer output;
- current public version file reports `0.3.0`;
- changelog records:
  - `0.1.0` on 2026-04-22;
  - `0.3.0` on 2026-04-28 with experimental MCP support;
- README explicitly marks MCP as experimental.

These package claims are accepted.

## Controlled semantic evidence

Independent inspection of the accepted D5-5F reconciliation confirms:

- TW-03: 20/20 structurally valid; 4/20 Gate-A semantic pass;
- TW-07: required form 20/20 structured, 4/20 semantic; defaulted form 0/20 / 0/20;
- TW-08: defaulted R0 1/20 structured, 0/20 semantic; required R1 20/20 structured, 20/20 Gate A;
- CM-56R8: both arms 0/15 complete scientific passes, with selective 9/9 raster-profile recovery;
- CM-57P10: 4/24 → 16/24 stable passes, but rejected due to a protected regression, two terminal failures and failure to meet the ≥18 stable-pass gate;
- CM-59A: 21/24 stable passes with residual planner/wrong-plan failures and no promotion.

The package handles these results conservatively and correctly.

## D5 comparative custody

Independent library inspection confirms that the original Qwen/DeepSeek comparison did not preserve exact model-facing prompts or raw structured answers. The package is correct to retain 6/9 versus 5/9 only as bounded outcome evidence and not as a causal model ranking.

## D5-5I Live-002

Independent inspection confirms:

- exact request/response custody was available;
- all 21 request and 21 response body SHA-256 values were verified;
- 9 turns;
- 21 logical calls;
- 21 physical attempts;
- 2 PASS;
- 7 FAIL;
- terminal: `FAIL / RESIDUAL_SEMANTIC`;
- first-divergence classes include persistence/reload/render, correction preservation and semantic failure.

This remains valid as the latest included live scientific campaign.

## WELL-IR

Independent inspection confirms:

- 6 GB RTX 3060 Laptop GPU constraint;
- untuned Qwen3-1.7B reference ~42.1%;
- tested ~3B SmolLM3/Phi-4-mini configurations did not outperform that reference on the frozen task;
- SLM-02:
  - 47/57 executable semantic = 82.56%;
  - 47/70 overall = 67.14%;
  - schema validity 98.57%;
  - ambiguity/unsupported 0/13;
- SLM-03 remains non-comparable as a simple before/after regression because the IR/gold/fixtures/splits/filter/prompt changed.

The package's interpretation is accepted.

## Visual anchors

Independent GitHub inspection confirms the exact repository blobs used by the visual inventory:

- `examples/cbl_job_demo.log.yaml` → `9d3adc32367caebdbfbb0a7cff742c7bf748f935`
- `examples/cbl_vdl_array_mvp.log.yaml` → `48cc210e88b2094f4cb0028156ab6f2e87c87859`
- `examples/triple_combo.yaml` → `fcb9f7fb1e0319869c2d4aedaec930f9dbeb21f1`

The visual plan is accepted as research input. Actual renders can be generated later from these project-owned examples.

# Findings

## F001 — BLOCKER — Current frontier omits D5-5J work that predates the package freeze

The package was created at approximately:

`2026-10-23T22:26Z`

and declares a research cutoff of 2026-10-23.

However, the WellPlot repository already contained substantial D5-5J corrective implementation work before that package timestamp.

By `2026-10-23T20:18Z`, commit:

`050c174fafc76b6602f55f76232c75657a29d25c`

recorded the D5-5J provider-free corrective checkpoint, including:

- canonical request-obligation extraction;
- exact UTF-8 request/span custody;
- host verification of extracted spans;
- capability-parent closure;
- worker checks before lowering;
- final preservation containment;
- canonical reconciliation diff verification before persistence;
- prospective stage evidence;
- durable evidence archive handling;
- 21 focused obligation/archive tests;
- 11 comparative static/entrypoint tests;
- 9/9 provider-free reproduction for each Qwen and DeepSeek fixture lane;
- broader canonical surface: 286 tests;
- zero provider/model/endpoint calls;
- no live campaign.

The result explicitly remained a provider-free implementation candidate requiring independent review before live qualification.

### Why this matters

The package's statement that D5-5I is the latest **live scientific endpoint** remains correct.

The problem is different: the package also presents D5-5H as the current engineering implementation endpoint and says future evidence after D5-5I requires amendment. That is stale relative to its own cutoff.

D5-5J does not erase or improve the D5-5I scientific result. It is a corrective engineering response to that evidence.

### Required correction

Add D5-5J to:

- architecture/current-state chronology;
- evidence ledger;
- source index;
- current-frontier/status section;
- ST-05 ("Debug the contract before blaming the model");
- visual/evidence-custody story if useful.

Preserve the exact distinction:

**D5-5I = latest live scientific qualification result**  
**D5-5J = provider-free corrective implementation candidate at the package cutoff**

Do not represent D5-5J as live-qualified or production-promoted.

The rework should freeze the exact D5-5J state appropriate to the package cutoff rather than silently importing later 2026-10-24 work.

---

## F002 — MAJOR — Carlos's role/contribution is not yet established

The accepted portfolio architecture requires each serious project to distinguish:

- project ownership;
- role;
- contribution;
- team/agent context.

This package intentionally leaves ownership/contribution unresolved. Its own unresolved-gap list says ownership statements beyond repository authorship and owner testimony should remain conservative unless separately audited.

There is no portfolio-ready contribution record equivalent to the Seneca ownership audit.

### Required correction

Add a bounded ownership/contribution section and evidence records.

At minimum distinguish:

- project conception/origin — owner testimony where needed;
- public package authorship/maintainership — repository/package evidence;
- deterministic scientific architecture/product direction;
- Phase 2 architecture and experimental program direction;
- Human acceptance/governance decisions;
- agent-assisted implementation;
- independent review performed by separate agents/reviewers rather than Carlos himself.

Do not claim manual authorship of every module or experiment artifact unless established.

A conservative final role statement is sufficient.

---

## F003 — MAJOR — Story map preempts the Human story-selection gate

The package repeatedly describes the eight stories as "selected" and says:

> The portfolio should use the following hierarchy.

That exceeds the research-stage authority used for the portfolio refresh.

The expected sequence is:

**research → independent research review → Human story selection → content drafting**

The agent may rank/recommend stories, but it should not declare final portfolio selection.

### Required correction

Change the story map and research narrative from:

- selected stories;
- final portfolio order;
- portfolio should use;

to:

- candidate story pool;
- recommended research ranking;
- candidate page roles.

Retain grades/priorities as recommendations.

Final selection remains a Human decision after research acceptance.

---

## F004 — MAJOR — One-page / two-phase structure should be explicit in the research package

The accepted portfolio design requires:

- one canonical WellPlot project page;
- Phase 1 and Phase 2 as distinct sections;
- phase-specific cards may link to anchors.

The package supports this conceptually but the story map itself does not explicitly classify stories by phase.

### Required correction

Add a phase/page-placement field or equivalent.

Recommended classification:

- `ST-01` → Phase 1 / released deterministic product
- `ST-02`–`ST-07` → Phase 2 / semantic authoring R&D
- `ST-08` → roadmap / future vision, not Phase-2 implementation

This prevents Phase-2 research metrics from being visually mistaken for Phase-1 release claims.

---

## F005 — MINOR — "4× benchmark gain" is too imprecise

`ST-07` is titled:

> A 4× benchmark gain that was still rejected

The underlying evidence is specifically:

**stable pass count increased from 4/24 to 16/24**

The title can be read as a generic 4× benchmark-score improvement.

### Required correction

Use wording closer to:

> Stable passes rose from 4/24 to 16/24—and the candidate was still rejected

or:

> A fourfold increase in stable passes was still not enough for promotion

Keep the denominator and gate context visible.

---

## F006 — MINOR — Freeze semantics need one explicit timestamp/identity rule

The package says it is frozen "through 2026-10-23", but several active branches changed repeatedly that day.

A date-only cutoff is insufficient for a fast-moving governed project.

### Required correction

For current-state research, freeze:

- exact UTC cutoff timestamp; and/or
- exact branch/commit identities for every active-current source.

Historical artifact blobs may remain independently pinned.

This will avoid future ambiguity about whether a same-day corrective commit belongs inside the research package.

# Accepted package components

The following do not need broad rework.

## Phase 1

Accepted:

- renderer-first scientific product framing;
- LAS/DLIS/programmatic data;
- WellDataset → composition → LogDocument → Matplotlib/Plotly separation;
- YAML + Python authoring;
- public 0.1.0 / 0.3.0 history;
- experimental public MCP distinction;
- exact project render anchors.

## Phase 2 architecture

Accepted:

- long-horizon MCP → compiler-style pivot;
- single canonical semantic path;
- model owns bounded semantic meaning;
- deterministic host owns IDs, grounding, resolution, mutation, persistence, rendering and verification;
- no model-specific fallback semantic engine.

## Experimental evidence

Accepted:

- TW-03 structural-vs-semantic distinction;
- TW-05/06 compatibility localization without overclaiming one keyword/provider cause;
- TW-07/08 local required/defaulted result;
- CM-56R8 selective semantic-contract effect;
- CM-57P10 protected-regression discipline;
- CM-59A safety ≠ semantic correctness.

## Evidence custody

Accepted:

- original D5 comparison as outcome-only evidence;
- later shift toward exact model-I/O custody;
- D5-5I 2/9 PASS, 7/9 FAIL;
- no collapsing all seven failures into "model failure".

## WELL-IR

Accepted as a parallel research story with the existing caveats.

## Visual research

Accepted. The package correctly favors:
- real WellPlot renders;
- evidence-derived charts;
- explanatory architecture diagrams;
- no vendor screenshots or generic stock well-log imagery.

# Rework scope

This is a bounded corrective pass.

Do not repeat the historical experiment research.

The next package should:

1. reconcile D5-5J at the exact Stage-7 cutoff;
2. preserve D5-5I as the latest live scientific result;
3. add a conservative ownership/contribution audit;
4. re-label story selection as candidate/recommended pending Human selection;
5. explicitly phase-tag story candidates;
6. rename the ST-07 headline;
7. freeze exact current-state timestamp/identities;
8. update affected ledger/source/story/visual/current-status records only.

# Terminal disposition

```text
WELLPLOT-PORTFOLIO-RESEARCH-IR-001

Archive integrity:
PASS

Phase 1 product reconstruction:
ACCEPT

Phase 1 / Phase 2 conceptual boundary:
ACCEPT

Historical experimental evidence:
ACCEPT

D5-5I scientific interpretation:
ACCEPT

WELL-IR interpretation:
ACCEPT

Evidence ledger:
SUBSTANTIVELY ACCEPTABLE

Visual inventory:
ACCEPT

Current-state reconstruction:
REWORK REQUIRED

Ownership/contribution:
REWORK REQUIRED

Story-selection governance:
REWORK REQUIRED

Phase-tagging/page mapping:
REWORK REQUIRED

Production code changed:
NO

Portfolio implementation changed:
NO

Terminal disposition:
REWORK — NARROW
```

A corrected package should return for:

`WELLPLOT-PORTFOLIO-RESEARCH-IR-002`.
