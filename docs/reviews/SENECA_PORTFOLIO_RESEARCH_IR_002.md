# Seneca Portfolio Research — Independent Review 002

**Review:** SENECA-PORTFOLIO-RESEARCH-IR-002  
**Disposition:** REWORK REQUIRED — NARROW FINAL REWORK  
**Date:** 2026-10-22  
**Portfolio branch:** `design/portfolio-refresh-v2`  
**Review class:** independent corrective content/evidence review  
**Production implementation:** NOT AUTHORIZED / NOT MODIFIED

## Reviewed package

Archive supplied for IR-002:

`SENECA_RESEARCH_REWORK_IR002(1).zip`

Extracted subject hashes:

| Artifact | SHA-256 |
|---|---|
| `README_PACKAGE.md` | `b00255b641f304da8841e1839d023d0faeb229d73f45359e31f4428c7d7f6379` |
| `SENECA_ACADEMIC_AND_TECHNICAL_REFERENCES.md` | `ed7596cdfd144d32e97b8967bf236a283b7295ba762247b8067c637c60c02de8` |
| `SENECA_ACADEMIC_REFERENCES.json` | `21c699baa8bc7dd8d283079de49b98bba249e23ceaa24e8d69833642e6c68406` |
| `SENECA_EVIDENCE_LEDGER.json` | `267a668652784a5b7a781f3d9e155749e7f79ba63fadf212ac3d96d6031193cd` |
| `SENECA_IR001_REWORK_REPORT.md` | `78fd228e157b5e376461848d0c0c89b9a9e8dc36512443b1f0251ab9af3d3c84` |
| `SENECA_PORTFOLIO_RESEARCH.md` | `9036c909b912a0f3d3daf5be60b2f9fbadff426af06a7d68fff64b79d133f496` |
| `SENECA_SOURCE_INDEX.md` | `df1d0c45db439fc966959fab6b34a65aa4f23956d1c1a9a5c3d893a1f346075a` |
| `SENECA_STORY_MAP.json` | `2b5ce40d5efae0358cada92b58441d37fb360bc6536b95d13e8ceddcc1d64701` |
| `SENECA_VISUAL_INVENTORY.md` | `0b458e46d591de67073161610358f8f48c5221f4aed6cd17e0456482281cc711` |

## Independent repository verification

IR independently inspected current `cschrupp/offline-rag` branch evidence.

### CUDA three-run aggregation

The exact bounded D2 G1 runs are:

- G1-1: `1.1700188985` min
- G1-2: `1.4735220840` min
- G1-3: `1.1086222106` min

Therefore:

- three-run median = `1.1700188985` min
- three-run max = `1.4735220840` min

The package's ~1.17 median / ~1.47 max statement is independently verified.

The G1-3 assessment records correctness=true, parity=true, terminal `select_g1`.

### P1 current state

Branch `implementation/16k-d-dual-backend-p1-runtime-substrate` still points to:

`8d527101cf3e79a8c012233c918020aa41dcf0d5`

with commit message:

`feat(16k-d): implement dual-backend P1 qualified runtime substrate`

No later acceptance record is present on that branch at IR time. The rework correctly treats P1 as a candidate rather than accepted product promotion.

# IR-001 closure assessment

| IR-001 finding | IR-002 disposition |
|---|---|
| F001 current 16K state missing | PARTIALLY CLOSED |
| F002 ledger incomplete | SUBSTANTIALLY CLOSED / residual provenance work |
| F003 story placeholders/template leakage | PARTIALLY CLOSED |
| F004 16K runtime story missing | CLOSED |
| F005 Gold Lab causal boundary | CLOSED WITH MINOR SOCIAL-HOOK EDIT |
| F006 visual inventory incomplete | OPEN |
| F007 ownership provisional | OPEN |
| F008 operational envelope conflated | PARTIALLY CLOSED |
| F009 immutable provenance | PARTIALLY CLOSED |
| F010 story/evidence namespace collision | OPEN / MINOR |

# Findings

## F001-R2 — BLOCKER — Research document was supplemented, not reconciled

The rework added an authoritative 16K corrective supplement, but the main research document still contains stale statements that conflict with it.

Examples in the same file:

- Operational envelope still says definitive 16K GPU/memory capacity is not established without explaining the now-established 16K-C contract and bounded 16K-D measurements.
- `DO_NOT_CLAIM` still says "later 16K evidence unresolved".
- Open question #2 still says to locate latest accepted 16K D0/D1 evidence even though the corrective supplement now incorporates it.
- Candidate story section still says seven candidates / three A, while the revised story map has eight candidates / four A.
- The original visual section remains a bounded placeholder even though a separate visual-audit artifact was added.

A supplement marked authoritative is not sufficient for the canonical portfolio research document. Downstream writers should not have to know which earlier paragraphs to ignore.

### Required correction

Rewrite the base sections in place so the canonical research document has one coherent state:

- chronology includes 16K-C / 16K-D;
- capability/operational sections incorporate current bounded runtime evidence;
- story count/ranking is current;
- DO_NOT_CLAIM reflects the actual 16K boundary;
- open questions remove items already resolved;
- no "supplement overrides earlier text" rule remains necessary.

After reconciliation, remove or fold the corrective supplement.

---

## F002-R2 — MAJOR — Two story chapters still retain the original template placeholder

Six of eight stories now have real alternatives and chapter-specific judgment.

However:

### UI-01
still contains:

`Only repository-documented alternatives; validate exact option set before publication`

and generic judgment:

`Implementation or favorable pilot does not automatically authorize promotion.`

### PER-01
contains the same placeholder and generic judgment.

This means IR-001 F003 is not fully closed.

### Required correction

For UI-01 and PER-01 either:

1. reconstruct the actual alternatives/decision context from repository evidence; or
2. state explicitly that alternatives are not established and narrow the chapter accordingly.

Do not retain placeholder prose in a supposedly complete story map.

Also replace generic `situation = "A bounded decision in the Seneca knowledge-workspace program"` where a more specific one-sentence situation materially improves the chapter.

---

## F003-R2 — MAJOR — Visual inventory still does not satisfy the research scope

The new `SENECA_VISUAL_INVENTORY.md` is transparent and useful as a checklist, but it explicitly says:

> Existing screenshot verified? No

for every listed product surface.

The original research scope required a repository sweep for portfolio-usable visuals and classification of actual candidates. The rework still has not performed that sweep.

### Required correction

Perform a bounded visual-content audit.

For each target surface, report one of:

- EXISTING — exact repository path/artifact;
- CAPTURE_REQUIRED — behavior exists but no image asset exists;
- REGENERATE_FROM_EVIDENCE — exact data/source required;
- NOT AVAILABLE.

Required surfaces:

- main Seneca workspace;
- Ask + citation/evidence inspection;
- Training Mode;
- Gold Lab;
- Question Check / Rapid Fire;
- ingestion/progress;
- Engineering evidence;
- retrieval/generation/performance figure candidates;
- CPU/GPU parity/runtime story.

No synthetic UI screenshot should be created in this research pass.

---

## F004-R2 — MAJOR — Ownership attribution remains explicitly provisional

The main research still says repository author metadata and acceptance records should be inspected and calls the proposed role provisional.

This leaves an original required workstream unfinished.

### Required correction

Complete the ownership audit far enough to support one bounded portfolio role statement.

Recommended final distinction:

- product/problem definition — Human/owner;
- architecture and experiment/evaluation design — identify documentary support;
- engineering direction and acceptance — identify Human acceptance/governance support;
- implementation — agent-assisted; do not claim manual authorship of every module;
- independent review — do not claim Carlos independently reviewed his own implementation when a separate reviewer/agent performed that role.

Where ownership is known only from Carlos's direct account, label it owner testimony rather than Git-derived evidence.

The final role sentence may remain conservative; it may not remain "owner confirmation pending".

---

## F005-R2 — MAJOR — Operational envelope must be integrated as three explicit layers

The corrective supplement correctly records 16K-C semantics:

1. transport defaults;
2. optional workspace capacity ceilings;
3. observed runtime workloads.

But the canonical operational-envelope section still presents the older pre-16K wording.

### Required correction

Replace it with an explicit three-layer model:

### Transport/request contract
- 32 files/request
- 25 MiB/document
- 100 MiB/request

### Workspace capacity contract
- active-source ceiling: optional/unset by default
- searchable-child ceiling: optional/unset by default
- transport defaults are not a supported workspace-size claim

### Observed bounded workloads
- 14C / Level-C where relevant;
- D2 1296-child CUDA FP16 three-run evidence;
- ONNX QINT8 bounded screen + parity fail;
- ONNX FP32 bounded parity + projected screen;
- no full-1296 FP32 CPU confirmation;
- P1 candidate not yet accepted/promotion-proven.

This distinction should appear once, canonically.

---

## F006-R2 — MAJOR — Evidence ledger provenance improved but is not fully closed

The ledger is materially better:

- 68 records;
- 18 implementation records;
- 5 capacity records;
- 10 model/runtime records;
- all story evidence IDs resolve;
- no duplicate evidence IDs.

This closes the substantive completeness blocker from IR-001.

Residual issues:

- all 68 `date` fields remain null even where exact repository/evidence timestamps are recoverable;
- `PROD-04` still lacks `source_commit_or_identity`;
- several source identities are abbreviated or descriptive rather than exact immutable commit/artifact identities;
- some URLs point to branch/main rather than exact commit URLs.

### Required correction

For evidence likely to appear in the portfolio or a story, populate recoverable dates and exact immutable provenance.

It is acceptable for genuinely unavailable historical dates to remain null.

Do not spend time perfecting provenance for low-value supporting records if they will not be externally used.

---

## F007-R2 — MINOR — Gold Lab social hook still compresses testimony and repository fact

The canonical Gold Lab chapter is substantially corrected and now explicitly distinguishes:

- Rich's reported time constraint;
- separate 9G deferral;
- design interpretation;
- accepted implementation.

However the social hook still reads:

`Rich found sustained gold annotation hard to schedule; 9G was deferred.`

For social reuse this may again imply causal documentary linkage.

### Required correction

Use wording such as:

`Rich had difficulty setting aside sustained annotation time. Separately, the larger 9G gold expansion remained deferred.`

Then explain that the experience motivated the microtask design as owner interpretation.

---

## F008-R2 — MINOR — Story/evidence namespaces remain ambiguous

Story IDs still reuse identifiers such as:

- `RET-01`
- `GEN-01`
- `SEC-01`

that also exist as evidence IDs.

The JSON works, but downstream tooling/review can confuse the namespaces.

### Required correction

Rename story IDs:

- `ST-GL-01`
- `ST-RET-01`
- `ST-GEN-01`
- etc.

No evidence IDs need to change.

# Items accepted in IR-002

## 16K runtime reconstruction

The new CPU/GPU story is accepted as a strong candidate.

The package correctly separates:

- CUDA FP16 selection from production promotion;
- QINT8 speed from QINT8 vector-space parity;
- QINT8 failure from FP32 ONNX success;
- bounded FP32 parity from full-workload CPU confirmation;
- P1 implementation candidate from accepted product state.

## Three-run CUDA result

Independently verified by IR:

- 1.1700188985 min
- 1.4735220840 min
- 1.1086222106 min

Median ~1.17 min; max ~1.47 min.

This no longer needs to be described as secondhand once the package is updated with the exact three source artifacts.

## Evidence-ledger expansion

The shift from 33 to 68 records materially closes the original evidence-class coverage problem.

## Story quality

GL-01, RET-01, GEN-01, REC-01, SEC-01, and CPU-16K now contain real alternatives/engineering judgments rather than the repeated generic placeholder.

CPU-16K is particularly strong and should remain A-rated.

## Gold Lab causal boundary

The main canonical story now sufficiently separates owner testimony, repository state, design interpretation, and implementation evidence.

## Academic/technical references

The literature package is appropriately bounded: external papers/standards provide conceptual context only and are not used as substitute validation for Seneca's implementation or results.

The literature is useful but should remain secondary to project evidence on the portfolio page.

# IR-002 terminal disposition

```text
SENECA-PORTFOLIO-RESEARCH-IR-002

Research package:
STRONG CORRECTIVE CANDIDATE

Current-state reconstruction:
SUBSTANTIALLY CORRECT / CANONICAL DOCUMENT RECONCILIATION REQUIRED

Evidence ledger:
SUBSTANTIVELY ACCEPTABLE / PROVENANCE CLEANUP REQUIRED

Source index:
SUBSTANTIVELY ACCEPTABLE / STALE UNRESOLVED QUEUE MUST BE RECONCILED

Story map:
REWORK REQUIRED

Visual inventory:
REWORK REQUIRED

Ownership attribution:
REWORK REQUIRED

Claim-boundary discipline:
ACCEPT

16K technical interpretation:
ACCEPT

Three-run CUDA aggregation:
INDEPENDENTLY VERIFIED

Production code changed:
NO

Portfolio implementation changed:
NO

Terminal disposition:
REWORK REQUIRED — NARROW FINAL REWORK
```

The next candidate should return for `SENECA-PORTFOLIO-RESEARCH-IR-003`.

This is not a request for another deep research cycle. The remaining work is reconciliation, two unfinished story records, visual-source auditing, ownership closure, and provenance cleanup.
