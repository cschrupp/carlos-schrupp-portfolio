# Seneca Portfolio Research — Independent Review 001

**Review:** SENECA-PORTFOLIO-RESEARCH-IR-001  
**Disposition:** REWORK REQUIRED  
**Date:** 2026-10-22  
**Portfolio branch:** `design/portfolio-refresh-v2`  
**Review class:** independent content/evidence review  
**Production implementation:** NOT AUTHORIZED / NOT MODIFIED

## Reviewed subjects

The review subject is the uploaded four-file research package:

| Artifact | SHA-256 |
|---|---|
| `SENECA_PORTFOLIO_RESEARCH(1).md` | `e336830162e0c4e75f20bd62cfe74aae26bc39bc87929df157100e961ef606ec` |
| `SENECA_EVIDENCE_LEDGER(1).json` | `713ebae613ae930636ce8229a739e90f54b818f8030d420e531e8778c4e23498` |
| `SENECA_STORY_MAP(1).json` | `325b9d0bfc2115f70feaad2fc5652d3a8c183f653f6540e89f28ff621304f178` |
| `SENECA_SOURCE_INDEX(1).md` | `0c0a6e616dd08e9a35ad9713731d450a15779bd0673fffc2142e9064d22e1728` |

Independent repository verification also inspected current `cschrupp/offline-rag` branches relevant to Slice 16K, including:

- `implementation/16k-c-first-user-capacity-model`
- `implementation/16k-d-dense-cuda-profiling`
- `implementation/16k-d-cpu-onnx-feasibility`
- `implementation/16k-d-dual-backend-p1-runtime-substrate`

## Executive review

The package demonstrates strong evidence discipline and is a good research foundation. In particular it:

- preserves pilot/development labels rather than converting them into promotion claims;
- keeps retrieval and end-to-end benchmark populations separate;
- preserves recovery as not evaluable rather than success/failure;
- preserves the 13B security disposition as completed/fail;
- distinguishes owner testimony about Rich from repository documentary evidence;
- records useful negative results and claim boundaries;
- contains internally valid story-to-evidence references.

However, the package is not yet complete enough to become the canonical Seneca portfolio source. Its own declared status is PARTIAL, and independent review confirms that the missing current-state work materially affects the operational envelope, performance story, evidence ledger and story selection.

The package therefore requires bounded rework rather than replacement.

# Findings

## F001 — BLOCKER — Current-state reconstruction stops before material Slice 16K evidence

The research chronology effectively stops at Slice 16, and the operational section declares later 16K capacity/GPU evidence unresolved.

Independent repository review shows material later evidence already exists outside `main`:

### 16K-C capacity contract

`docs/slice16k_c_first_user_capacity_model.md` records:

- implementation complete / independently accepted;
- transport defaults remain:
  - 32 files/request,
  - 25 MiB/document,
  - 100 MiB/request;
- workspace active-source and searchable-child ceilings are separate controls and default unset/null;
- unset workspace ceilings mean no numeric product-supported workspace envelope is claimed.

This distinction must replace the looser statement that 16K capacity is simply unresolved.

### 16K-D CUDA profiling

Current branch evidence records:

- D0 complete / independently accepted;
- D1 complete / independently accepted;
- D2 implementation accepted and campaign complete;
- selected bounded deployment candidate: CUDA FP16, batch 32;
- three G1 measurements with median 1.17 min and maximum 1.47 min on the frozen 1296-child proxy;
- retrieval parity PASS;
- production default promotion remains separately unauthorized.

This is material performance evidence and a strong engineering story.

### CPU ONNX feasibility

Current branch evidence records:

- QINT8 screen too slow and QINT8 parity failure;
- FP32 ONNX ↔ CUDA FP16 vector-space parity PASS with approximately 0.999998 median document/query cosine, Top-1 16/16 and mean Top-10 overlap 1.0;
- FP32 128-child screen classified PRODUCT-PRACTICAL under the experiment's ≤50-minute gate, with projected 1296-child time ~48.68 min;
- full 1296 confirmation and production routing remain not authorized/run.

This materially changes the CPU/GPU deployment story.

### Dual-backend P1

A newer candidate exists at `8d527101cf3e79a8c012233c918020aa41dcf0d5` with bounded real-model ONNX FP32 smoke evidence. Its exact review/acceptance state must be established rather than inferred.

### Required correction

Perform a branch-aware current-state sweep through at least 16K-C and the relevant 16K-D lineage, then update:

- chronology;
- capability status;
- operational envelope;
- performance section;
- negative-result inventory;
- decision inventory;
- evidence ledger;
- source index;
- DO_NOT_CLAIM boundaries;
- story ranking.

Do not equate selected candidate with production promotion.

---

## F002 — BLOCKER — Evidence ledger does not satisfy the issued evidence contract

The ledger contains 33 records and is internally referentially consistent: all story evidence IDs resolve and no evidence IDs are duplicated.

However it is heavily concentrated in retrieval, generation and old performance measurements.

Missing or materially underrepresented evidence classes include:

- core implementation facts;
- architecture boundaries;
- deployment;
- offline/privacy controls;
- capacity;
- reliability/ingestion;
- accessibility/product integration;
- test/acceptance evidence;
- current runtime/model feasibility;
- current 16K performance evidence.

There are no ledger records categorized as `implementation` or `deployment`.

The issued scope required evidence records for important externally visible implementation facts as well as measurements.

Additional ledger defects:

- all 33 `date` fields are null;
- `PROD-04` has no `source_commit_or_identity`;
- some compound identities should be represented as multiple source references rather than an ambiguous slash-separated string;
- branch-only facts need branch/commit-specific provenance rather than only `main` URLs.

### Required correction

Expand the ledger to cover the claims actually needed by the page, not only experiment metrics.

At minimum add records for:

- product architecture/implementation;
- reference deployment topology;
- offline trust boundary;
- transport and workspace-capacity semantics;
- accepted Slice 16 integration/product state;
- meaningful accessibility/responsive evidence;
- 16K-C capacity semantics;
- D0/D1/D2 runtime findings;
- ONNX QINT8 rejection;
- ONNX FP32 parity and screen;
- current dual-backend candidate status where appropriate.

Populate dates where repository evidence makes them recoverable.

---

## F003 — MAJOR — Story map still contains template placeholders rather than reconstructed engineering stories

All seven chapters use the same placeholder for `options_considered`:

> Only repository-documented alternatives; validate exact option set before publication

This means a required story field has not been researched.

The story map also repeatedly uses generic template text such as:

- `situation = "Seneca / OfflineRAG engineering development"`;
- `engineering_judgment = "Implementation or favorable pilot does not automatically authorize promotion."`;
- all three A-rated social outlines use the same lesson:
  `"Research integrity depends on explicit evidence boundaries."`

That repetition is exactly the generated-content pattern the portfolio design is intended to avoid.

### Required correction

For each retained chapter:

1. recover the real alternatives actually considered;
2. make the situation specific to that chapter;
3. state the chapter-specific engineering judgment;
4. state what changed after the evidence;
5. give the social derivative a chapter-specific lesson.

If the repository does not establish alternatives, explicitly use `not established` and do not fabricate them.

---

## F004 — MAJOR — Story ranking overweights older research results and misses a stronger current product/runtime story

The current A-rated set is:

- Gold Lab expert-time bottleneck;
- retrieval query representation;
- provenance-prompt regression.

These are legitimate candidates.

However, after current 16K evidence is incorporated, the story inventory should be re-ranked.

At least one likely A-level candidate is currently absent:

### GPU speed solved one problem; CPU fallback exposed another

Potential evidence chain:

- clean dense baseline failed the 10-minute proxy;
- D1 attribution showed the problem was not simply generic host noise;
- CUDA FP16/b32 reduced the 1296-child proxy to roughly 1.17 min median with parity PASS;
- QINT8 CPU was rejected first for speed and then for vector-space parity;
- FP32 ONNX restored parity but remained much slower;
- this led toward a qualified dual-backend runtime rather than pretending one backend fits every machine.

This is more representative of production-oriented engineering judgment than several existing candidates.

### Required correction

After the current-state sweep, rerank all story candidates on:

- distinctiveness;
- relevance to Applied AI/ML systems work;
- evidence strength;
- customer/product relevance;
- quality of engineering tension;
- reusability for interview/social discussion.

Do not preserve current A/B labels merely because they already exist.

---

## F005 — MAJOR — Gold Lab causal wording needs a sharper testimony/repository boundary

The package correctly notes that Rich's annotation-time difficulty comes from Carlos's account and is not independently established in Git history.

However, the A-rated chapter currently compresses:

> Rich found sustained gold annotation hard to schedule; 9G was deferred.

and then states:

> Domain expert time rather than algorithm capacity blocked corpus expansion.

This risks reading as if the repository proves that Rich's scheduling difficulty caused 9G deferral.

### Required correction

Separate the propositions:

- owner testimony: Rich had difficulty allocating sustained time to gold annotation;
- repository fact: 9G was deferred;
- owner interpretation: that experience motivated the Gold Lab microtask/game idea;
- repository fact: Gold Lab/Silver→Human Gold workflow was implemented/accepted.

Do not claim measured participation improvement.

---

## F006 — MAJOR — Visual inventory is explicitly incomplete

The requested research scope asked for a usable visual inventory.

The package currently says the actual UI screenshot is still to be located/captured and labels the visual inventory bounded.

This is appropriate disclosure, but not completion.

### Required correction

Inspect the repository/application artifacts for:

- Seneca main workspace;
- evidence/citation inspection;
- Training Mode;
- Gold Lab / Question Check / Rapid Fire;
- ingestion/progress/recovery UX;
- engineering-evidence surface;
- architecture/deployment diagrams;
- accepted benchmark tables/plots.

For each visual record:

- exact path/source;
- whether it already exists;
- whether capture/regeneration is needed;
- publication suitability;
- sensitivity/privacy risk;
- target story/section.

No synthetic product screenshots.

---

## F007 — MAJOR — Engineering ownership remains provisional

The research recommends:

> Founder / technical lead — product definition, architecture, evaluation design, engineering direction and acceptance; agent-assisted implementation.

This is directionally appropriate, but the package itself says the attribution remains provisional and that repository author/acceptance records require further inspection.

### Required correction

Complete the role/ownership audit.

The final package should distinguish:

- user/problem discovery;
- product definition;
- architecture;
- experiment/evaluation design;
- governance/review;
- Human acceptance;
- agent-assisted implementation;
- any work that should not be represented as manually authored by Carlos.

A direct Human confirmation may be used for ownership facts that cannot be established from Git alone, but it must be labeled as such.

---

## F008 — MAJOR — Operational envelope needs three distinct layers

The current package correctly avoids broad scale claims, but after 16K-C the operational section should explicitly separate:

### Transport contract
Currently accepted default request limits.

### Workspace-capacity contract
Independent controls whose default numeric ceilings may remain unset, meaning there is no default product-supported workspace-count/chunk-count envelope from those settings alone.

### Observed workloads
Specific accepted/characterized workloads, including their hardware/runtime context.

Do not use the old shorthand `32 files / 100 MiB` as if it were a universal workspace-size limit; it is primarily a transport/request envelope under 16K-C.

---

## F009 — MINOR — Research provenance URLs should become immutable where practical

Many ledger/source-index URLs target `main` while the actual evidentiary identity is stored separately.

For research provenance, prefer:

- commit-pinned GitHub URLs, or
- branch + exact accepted SHA + path.

This matters especially where accepted work has not yet reached `main`.

Public portfolio links may later point to stable public documentation after promotion.

---

## F010 — MINOR — Story/evidence namespaces should not collide

Story IDs such as `RET-01`, `GEN-01` and `SEC-01` collide conceptually with evidence IDs of the same names.

Although JSON references are currently valid, this creates avoidable ambiguity in downstream tooling and review.

Recommended:

- evidence: `RET-01`, `GEN-01`, ...
- stories: `ST-RET-01`, `ST-GEN-01`, ...

---

# What is accepted from this package

The following work should be preserved during rework:

1. **Project identity framing** — OfflineRAG engine/platform vs Seneca application is clear.
2. **Original-user story boundary** — Rich's account is correctly marked as owner testimony.
3. **Retrieval evidence handling** — small-development-population and label-sensitivity limits are preserved.
4. **Generation evidence handling** — self-judge, hard-negative failures and non-promotion are preserved.
5. **Recovery interpretation** — zero triggers means not evaluable, not failure.
6. **Security interpretation** — completed/fail is not rewritten as a security pass.
7. **Performance population separation** — 14C and Level-C are not merged.
8. **DO_NOT_CLAIM section** — concept and most existing boundaries are useful.
9. **Story-to-evidence integrity** — all current story evidence IDs resolve.
10. **No implementation mutation** — research remained non-production.

# Rework scope

This is a bounded corrective research pass, not a restart.

The agent should:

1. preserve existing valid evidence;
2. inspect branch-aware 16K current state;
3. add missing evidence classes;
4. repair provenance/date fields;
5. complete visual and ownership audits;
6. rebuild the affected operational/performance narrative;
7. rewrite story-map placeholders into real chapter-specific reasoning;
8. re-rank stories after current evidence is included;
9. return the same four artifacts as Revision 2;
10. mark the package COMPLETE only if the original acceptance criteria are actually satisfied.

# IR disposition

```text
SENECA-PORTFOLIO-RESEARCH-IR-001

Research package:
VALID FOUNDATION

Current-state reconstruction:
REWORK REQUIRED

Evidence ledger:
REWORK REQUIRED

Source index:
REWORK REQUIRED

Story map:
REWORK REQUIRED

Factual discipline:
ACCEPT

Claim-boundary discipline:
ACCEPT

Production code changed:
NO

Portfolio implementation changed:
NO

Terminal disposition:
REWORK REQUIRED
```

A revised package should return for `SENECA-PORTFOLIO-RESEARCH-IR-002`.
