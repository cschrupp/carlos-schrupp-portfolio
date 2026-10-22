# Seneca Portfolio Research — Independent Review 003

**Review:** SENECA-PORTFOLIO-RESEARCH-IR-003  
**Disposition:** ACCEPT  
**Date:** 2026-10-22  
**Portfolio branch:** `design/portfolio-refresh-v2`  
**Review class:** independent corrective content/evidence review  
**Production implementation:** NOT AUTHORIZED / NOT MODIFIED

## Reviewed package

Archive:

`SENECA_RESEARCH_IR003_CORRECTIVE_CANDIDATE(1).zip`

Archive integrity: PASS. The bundled `SHA256SUMS.txt` validates all 11 research artifacts.

| Artifact | SHA-256 |
|---|---|
| `README_PACKAGE.md` | `83b228936aa8a1405b810da40aea185151ea77ea6fe18d69def76bcdfae3c5b6` |
| `SENECA_ACADEMIC_AND_TECHNICAL_REFERENCES.md` | `ed7596cdfd144d32e97b8967bf236a283b7295ba762247b8067c637c60c02de8` |
| `SENECA_ACADEMIC_REFERENCES.json` | `21c699baa8bc7dd8d283079de49b98bba249e23ceaa24e8d69833642e6c68406` |
| `SENECA_EVIDENCE_LEDGER.json` | `dc9592636d1dc79871cb247c92f51d92f64f6c68eff72e6af370470a7356473e` |
| `SENECA_IR001_REWORK_REPORT.md` | `78fd228e157b5e376461848d0c0c89b9a9e8dc36512443b1f0251ab9af3d3c84` |
| `SENECA_IR003_CORRECTIVE_REPORT.md` | `ad946c9657fd01810f933bad78652088360fed67577e604aef6ba3318208723e` |
| `SENECA_PORTFOLIO_RESEARCH.md` | `819ea6332da5cbd7990a7f2fd9b97560f8a31fb0898cc79d5bda5d90440e4435` |
| `SENECA_SOURCE_INDEX.md` | `118e634c8e69396ea31d127d580485c3d5bff34b0a8a95ff298bf159aa4979bd` |
| `SENECA_STORY_MAP.json` | `36c3995870574729e0868fdac60343e5199ec33801d42bfc270a4383bb902efc` |
| `SENECA_VISUAL_INVENTORY.json` | `75d01be4aa45c78a50c93a9127b6b74125c00d2e062b3c16f3c69e1fad70e6af` |
| `SENECA_VISUAL_INVENTORY.md` | `7704b71d1a1c52263f6c9a67a65bec17b7c62d340045792bcac8dbe7cc311f5e` |

## Structural verification

Independent IR parsing confirms:

- evidence records: **72**
- duplicate evidence IDs: **0**
- story candidates: **8**
- A-rated story candidates: **4**
- story IDs use separate `ST-*` namespace
- unresolved story→evidence references: **0**
- visual targets: **15**
- publication-relevant strong evidence records with missing dates: **0**
- `PROD-04` now has recoverable date basis and immutable source identity

## Independent repository verification

### Visual audit

Pinned Seneca source snapshot:

`8d527101cf3e79a8c012233c918020aa41dcf0d5`

Independent GitHub tree inspection confirms:

- source tree entries: **1,291**
- source tree truncated: **false**
- image assets matching PNG/JPEG/WebP/GIF: exactly four:
  - `ui/public/brand/seneca/seneca-splash-background-1280.webp`
  - `ui/public/brand/seneca/seneca-splash-background-1600.webp`
  - `ui/public/brand/seneca/seneca-splash-background-960.webp`
  - `ui/public/brand/seneca/seneca-splash-mobile-4x5.webp`

No committed application screenshot asset is present in that audited image set.

Portfolio review snapshot:

`2767e09490d87ca7f6cfe9da3340b9959831b9cf`

Independent tree inspection confirms:

- portfolio tree entries: **47**
- tree truncated: **false**

The visual-audit classification therefore passes: actual app screens are correctly marked `CAPTURE_REQUIRED`; benchmark graphics are correctly marked `REGENERATE_FROM_EVIDENCE`; the four Seneca splash images are correctly marked existing brand artwork rather than UI screenshots.

### CUDA bounded three-run evidence

Independent inspection of the exact run artifacts confirms:

- G1-1: `1.1700188985334534` min
- G1-2: `1.4735220839832133` min
- G1-3: `1.1086222106498704` min

Therefore:

- median: `1.1700188985334534` min
- max: `1.4735220839832133` min

The G1-3 assessment records:

- `correctness_ok=true`
- `parity_ok=true`
- terminal: `select_g1`

The package's ~1.17 min median / ~1.47 min max interpretation is accepted.

### CPU parity and timing interpretation

Independent inspection confirms:

**ONNX QINT8 ↔ CUDA FP16**
- disposition: FAIL
- median document cosine: `0.7538459029426661`
- median query cosine: `0.8509375139761804`
- Top-1 agreement: `16/16`
- mean Top-10 overlap: `0.70`

This supports rejecting the tested QINT8 derivative for the shared-index parity contract while not condemning ONNX generally.

**ONNX FP32 ↔ CUDA FP16**
- disposition: PASS
- median document cosine: `0.999998212735219`
- median query cosine: `0.9999982699370334`
- Top-1 agreement: `16/16`
- mean Top-10 overlap: `1.0`

**ONNX FP32 128-child screen**
- disposition: `PRODUCT-PRACTICAL`
- measured 128-child encode wall: ~288.48 s
- projected 1296-child time: `48.68127353649343` min
- projection is correctly not represented as a measured full-1296 CPU run

The CPU/GPU story interpretation is accepted.

### P1 boundary

Branch `implementation/16k-d-dual-backend-p1-runtime-substrate` remains at:

`8d527101cf3e79a8c012233c918020aa41dcf0d5`

The package correctly describes this as an implementation candidate with bounded smoke evidence rather than a Human-accepted/promotion-proven production configuration.

## IR-002 finding closure

| IR-002 finding | IR-003 result |
|---|---|
| F001-R2 canonical research unreconciled | **CLOSED** |
| F002-R2 UI/PER story placeholders | **CLOSED** |
| F003-R2 visual inventory incomplete | **CLOSED** |
| F004-R2 ownership provisional | **CLOSED** |
| F005-R2 operational envelope not integrated | **CLOSED** |
| F006-R2 provenance incomplete | **CLOSED FOR PORTFOLIO-RELEVANT EVIDENCE** |
| F007-R2 Gold Lab social causal compression | **CLOSED** |
| F008-R2 story/evidence namespace collision | **CLOSED** |

## Accepted research model

### Canonical current-state document

The canonical research no longer relies on a superseding supplement. It now integrates:

- Slices 0–16 chronology;
- 16K-C capacity-contract semantics;
- bounded 16K-D CUDA/CPU work;
- P1 candidate boundary;
- current story count/ranking;
- visual audit;
- ownership;
- claim restrictions;
- remaining evidence boundaries.

### Operational envelope

The package correctly separates:

1. **transport/request contract**
   - 32 files/request
   - 25 MiB/document
   - 100 MiB/request

2. **workspace-capacity contract**
   - active-source ceiling optional/unset by default
   - searchable-child ceiling optional/unset by default
   - transport limits are not a universal workspace-size claim

3. **observed bounded workloads**
   - 14C / Level-C measurements
   - D2 CUDA 1296-child proxy
   - QINT8 CPU screen/parity failure
   - FP32 CPU parity and projected timing screen
   - P1 candidate boundary

This is accepted.

### Ownership

The conservative role statement is accepted for downstream drafting:

> Founder / technical lead — initiated from Rich's request; led problem framing, product direction, architecture/evaluation decisions and Human acceptance; implementation carried out through an agent-assisted development process.

The supporting attribution table correctly distinguishes owner testimony, repository stewardship, Human acceptance, agent-assisted implementation and independent review.

### Story map

The story map is accepted as the **research candidate pool**, not as final editorial selection.

A-rated:
- `ST-GL-01` — Gold Lab / expert-attention bottleneck
- `ST-RET-01` — query formulation
- `ST-GEN-01` — prompt/citation reversal
- `ST-CPU-16K` — GPU/CPU parity and runtime

B-rated:
- recovery
- security evaluation
- browser upload reliability
- bounded performance measurement

These rankings are acceptable starting points for Human story selection.

## Non-blocking editorial notes

Two small cleanup points should be corrected during Human story selection/content drafting; they do **not** require a fourth research cycle.

### N001 — CPU story evidence list

`ST-CPU-16K` quotes the exact three-run CUDA sequence in its consequence, while its direct `evidence_ids` list references the older CUDA-01/CUDA-02 records rather than the newer:

- `CUDA-G1-RUN-01`
- `CUDA-G1-RUN-02`
- `CUDA-G1-RUN-03`
- `CUDA-G1-AGG-01`

Those records are present in the accepted ledger and the exact run artifacts are linked elsewhere in the package.

During content drafting, link the story directly to the aggregate/run evidence IDs and remove the stale phrase:

> "GPU 3-run statistics are noted from independent IR but not re-extracted in this package."

The package now does contain those records.

### N002 — Gold Lab tension wording

The hook, situation and unresolved boundary correctly separate:

- Rich's reported scheduling constraint;
- independent repository fact of 9G deferral;
- owner interpretation motivating microtasks.

For final prose, soften:

> "Domain expert time rather than algorithm capacity blocked corpus expansion."

to avoid implying that Rich's scheduling constraint is the independently established sole cause of 9G deferral.

Suggested semantic boundary:

> Expert annotation time emerged as a practical product constraint, while the repository separately records the formal reasons 9G remained deferred.

This is an editorial precision adjustment, not a research blocker.

## Research boundaries preserved

IR confirms the package does **not** claim:

- customer/production validation;
- firefighting safety efficacy;
- publication-grade 9G/9H;
- prompt-injection security success;
- hallucination-free operation;
- generic real-time performance;
- 32 files / 100 MiB as a universal workspace limit;
- full CPU/GPU interchangeability;
- measured Gold Lab participation uplift;
- P1 production promotion;
- manually authored implementation of every module;
- self-independent review by Carlos.

## Terminal disposition

```text
SENECA-PORTFOLIO-RESEARCH-IR-003

Archive integrity:
PASS

Canonical current-state reconstruction:
ACCEPT

Evidence ledger:
ACCEPT

Source index:
ACCEPT

Story research:
ACCEPT

Visual-source audit:
ACCEPT

Ownership attribution:
ACCEPT

Claim-boundary discipline:
ACCEPT

16K technical interpretation:
ACCEPT

Independent CUDA aggregation:
PASS

Independent CPU parity verification:
PASS

Production code changed:
NO

Portfolio implementation changed:
NO

Terminal disposition:
ACCEPT
```

## Next gate

**Research phase for Seneca: CLOSED / ACCEPTED.**

Next authorized activity:

**Human story selection and editorial emphasis.**

This gate selects which accepted candidate stories belong on the Seneca project page and which are retained only as supporting/social/interview material.

Portfolio production implementation remains unauthorized until the broader Portfolio Design → IR → Human approval sequence reaches implementation authority.
