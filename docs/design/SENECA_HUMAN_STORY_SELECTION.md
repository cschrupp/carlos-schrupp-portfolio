# Seneca — Human Story Selection

**Decision:** HUMAN APPROVED STORY SELECTION  
**Date:** 2026-10-22  
**Research baseline:** `SENECA-PORTFOLIO-RESEARCH-IR-003` — ACCEPT  
**IR-003 review commit:** `08fbe9b59db737306ba4dddfc1ec76f23222cfd2`  
**Branch:** `design/portfolio-refresh-v2`

## 1. Decision

Use **four primary story chapters** on the canonical Seneca portfolio page.

The four selected chapters are:

1. `ST-GL-01` — expert annotation constraint → Gold Lab
2. `ST-RET-01` — query formulation / retrieval experiment
3. `ST-GEN-01` — provenance-prompt regression / non-promotion
4. `ST-CPU-16K` — GPU/CPU runtime, parity and backend qualification

The remaining B-rated stories are preserved as secondary material for:
- interview discussion;
- LinkedIn/social derivatives;
- supporting evidence;
- possible future expansion of the page.

They are not primary website chapters at this stage.

## 2. Narrative order

The four chapters should appear in this order.

### Chapter 1 — From expert annotation bottleneck to Gold Lab

**Story ID:** `ST-GL-01`

**Narrative function:** establish that Seneca began from a real knowledge-work problem and that the evaluation/product system had to account for expert attention as a scarce resource.

**Core sequence:**

- Rich had difficulty setting aside sustained time for annotation — owner testimony.
- Separately, the repository records that formal 9G gold expansion remained deferred.
- This experience helped motivate smaller, evidence-based Gold Lab interactions.
- Machine proposals remain Silver/advisory.
- Human adjudication remains authoritative for Gold.
- Gold Lab implementation was accepted.
- No participation-uplift claim is made.

**Preferred editorial direction:**

Do not frame Rich's time constraint as the sole documented cause of 9G deferral.

Preferred semantic boundary:

> Expert annotation time emerged as a practical product constraint, while the repository separately records why the formal 9G expansion remained deferred.

**Why selected:**

This chapter connects:
- original user need;
- product design;
- evaluation methodology;
- Human-in-the-loop AI;
- evidence governance.

It is the most human entry point into the project without becoming a marketing origin story.

**Preferred visual:**
real Gold Lab / Question Check / Rapid Fire capture when available; otherwise a compact Silver → Human review → Gold flow diagram derived from accepted evidence.

**Social potential:** HIGH.

---

### Chapter 2 — When changing the query mattered more than adding retrieval machinery

**Story ID:** `ST-RET-01`

**Narrative function:** show experimental ML/RAG judgment rather than presenting Seneca's retrieval stack as a fixed list of technologies.

**Core evidence:**

- 9H-P development pilot: 22 cases, 16 human-reviewed.
- Dense baseline full-22 nDCG@10: ~0.7643.
- Dense query-prompt full-22 nDCG@10: ~0.8573.
- Arm H full-22: ~0.8596.
- Relative ranking changed on the human-16 subset.
- Hybrid/reranking behavior carried additional cost.
- No configuration promotion was justified from this development cohort.

**Engineering judgment:**

A higher metric on one small development population was not enough to declare a winner. Query representation itself was an important retrieval variable, but the sensitivity of the ranking to the reviewed subset meant the result remained a hypothesis rather than a product promotion.

**Why selected:**

This demonstrates:
- retrieval-system understanding;
- experimental design;
- willingness not to overfit to a convenient metric;
- distinction between promising evidence and product decisions.

**Preferred visual:**
paired full-22 versus human-16 retrieval comparison, with development/non-promotional qualifier visible.

**Social potential:** HIGH.

---

### Chapter 3 — The prompt revision that made citation recall worse

**Story ID:** `ST-GEN-01`

**Narrative function:** show negative-result discipline in generation evaluation.

**Core evidence:**

- controlled 10E prompt A/B;
- 20/22 positive-evidence questions answered under each prompt;
- 2/22 generation failures under each prompt;
- mean gold citation recall decreased from ~0.636 to ~0.596 under provenance-v2;
- 5/16 hard negatives were answered when abstention was expected under both variants;
- semantic judge used the same model/endpoint, which limits interpretation;
- v2 was not promoted.

**Engineering judgment:**

A prompt that looked more explicit about provenance did not produce a better measured system. The correct response was to retain the existing version and preserve the uncomfortable evidence instead of selecting the newer prompt because it sounded better.

**Why selected:**

This is a concise example of:
- controlled LLM evaluation;
- negative results;
- citation quality;
- abstention difficulty;
- evidence-driven non-promotion.

**Preferred visual:**
citation-recall comparison plus a small hard-negative outcome annotation.

**Social potential:** HIGH.

---

### Chapter 4 — GPU speed solved one bottleneck; CPU fallback exposed a vector-space failure

**Story ID:** `ST-CPU-16K`

**Narrative function:** close the page with the strongest systems-engineering story and show how performance, numerical equivalence and deployment architecture interact.

**Core sequence:**

1. The bounded dense baseline did not satisfy the practical usability target.
2. Profiling/attribution work narrowed the problem instead of blindly changing models.
3. CUDA FP16 / batch 32 became the selected bounded candidate.
4. Three 1296-child proxy runs:
   - 1.1700188985 min
   - 1.4735220840 min
   - 1.1086222106 min
   - median ~1.17 min
   - max ~1.47 min
5. Retrieval parity/correctness passed for the CUDA candidate.
6. ONNX QINT8 CPU initially looked attractive as a fallback, but:
   - bounded speed screen was too slow for its original gate;
   - vector-space parity against CUDA FP16 failed materially.
7. ONNX FP32 restored parity:
   - median document/query cosine ~0.999998;
   - Top-1 agreement 16/16;
   - mean Top-10 overlap 1.0.
8. FP32 CPU remained much slower; its full-1296 time is only projected in the bounded screen, not measured.
9. A dual-backend P1 runtime substrate exists as an implementation candidate; it is not represented as Human-accepted production promotion.

**Engineering judgment:**

Performance is not sufficient if an optimization changes the retrieval space. Conversely, numerical parity is not sufficient if the runtime is operationally impractical. Backend qualification therefore has to consider both behavior and cost.

**Evidence-link correction for drafting:**

Prefer direct references to:
- `CUDA-G1-RUN-01`
- `CUDA-G1-RUN-02`
- `CUDA-G1-RUN-03`
- `CUDA-G1-AGG-01`

alongside the CPU parity/screen evidence, rather than relying only on older CUDA summary records.

**Why selected:**

This is Seneca's strongest evidence of:
- performance engineering;
- model/runtime qualification;
- numerical validation;
- rejected optimization paths;
- deployment trade-offs;
- architecture evolving from measured evidence.

**Preferred visual:**
one compact comparison figure:
- CUDA FP16 three-run timing;
- QINT8 parity failure;
- FP32 parity success;
- explicit note that FP32 full-corpus CPU timing remains projected.

**Social potential:** VERY HIGH.

## 3. Website chapter count

Four is the current maximum for the main Seneca page.

Do not add additional full chapters merely because research exists.

The page may reference supporting results in:
- evidence callouts;
- limitations;
- current-status sections;
- footnotes/captions;
- artifact links.

## 4. Secondary story disposition

### `ST-REC-01` — recovery evaluation with zero eligible triggers
**Disposition:** SUPPORTING / INTERVIEW / POSSIBLE SOCIAL.

Useful for discussing why an implemented mechanism was kept disabled when the evaluation population could not establish efficacy.

Do not use as a primary website chapter unless the page later needs a stronger explicit example of refusing unproven complexity.

### `ST-SEC-01` — completed security campaign that still records failure
**Disposition:** SUPPORTING / INTERVIEW / POSSIBLE SOCIAL.

Useful evidence of fail-closed evaluation discipline.

Keep visible in the project's claim boundaries/security section, but not as a full primary story because it may distract from the main Seneca narrative without enough space to explain the exact invariant.

### `ST-UI-01` — browser ingestion/retry contract
**Disposition:** SUPPORTING WEBSITE DETAIL / INTERVIEW.

Strong product-engineering detail, but better placed inside architecture/product implementation than as a separate main chapter.

### `ST-PER-01` — independent latency envelopes
**Disposition:** SUPPORTING EVIDENCE.

Use its numbers where performance context is needed. Do not make it a full story because Chapter 4 already carries the stronger runtime narrative and avoids duplicating the performance theme.

## 5. Overall Seneca narrative

The selected four chapters intentionally form one larger arc without requiring the page to be chronological:

1. **A real user's constraint changed the product.**
2. **Retrieval experiments changed what we thought mattered.**
3. **A seemingly better generation prompt produced worse evidence.**
4. **Deployment optimization required both speed and mathematical equivalence.**

This is the preferred editorial spine.

It demonstrates four different forms of engineering judgment:
- product judgment;
- ML/retrieval judgment;
- LLM/evaluation judgment;
- systems/runtime judgment.

## 6. Immediate-scan layer relationship

The chapter selection does not replace the fast scan layer.

Above the stories, the page should still expose:
- concise product definition;
- Carlos's role;
- solo-led / agent-assisted context;
- current maturity;
- strongest project links;
- 2–4 high-value evidence facts.

Do not make a recruiter read the stories to understand what Seneca is.

## 7. Social derivative rule

Each selected chapter may later generate one primary LinkedIn/social story.

They should stand independently and should not be labeled as mandatory `Part 1/4`, `Part 2/4`, etc.

Possible working social headings:

- **Seneca — when expert attention became part of the system design**
- **Seneca — changing the query mattered more than another retrieval layer**
- **Seneca — the prompt that looked better and cited worse**
- **Seneca — why a faster embedding backend was still the wrong backend**

These are working directions, not approved final social copy.

## 8. Human selection disposition

```text
SENECA HUMAN STORY SELECTION

Research baseline:
IR-003 ACCEPTED

Primary website chapters:
4

Selected:
ST-GL-01
ST-RET-01
ST-GEN-01
ST-CPU-16K

Secondary/supporting:
ST-REC-01
ST-SEC-01
ST-UI-01
ST-PER-01

Story research:
CLOSED

Human story selection:
ACCEPTED

Portfolio production implementation:
NOT YET AUTHORIZED
```

## 9. Next activity

The Seneca research/story-selection work is now ready to feed the broader portfolio Design package.

Before production implementation, the portfolio-wide Design still needs to complete:
- content schema;
- page/card composition;
- project-by-project research for the remaining projects;
- independent Design review;
- Human approval.

Seneca-specific copy can be drafted during the content-design stage, but it should remain separate from production Astro implementation until that gate opens.
