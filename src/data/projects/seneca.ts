import type { Project } from "./types";

export const seneca: Project = {
  slug: "seneca",
  title: "Seneca",
  shortTitle: "Seneca",
  eyebrow: "Local-first applied AI",
  summary: "A local knowledge workspace for technical documents, built around inspectable retrieval, grounded answers and human review.",
  description:
    "Seneca reads technical documents locally, retrieves the passages that matter, writes grounded answers with citations, and keeps the evidence visible for review.",
  detailMode: "deep",
  role: "Founder / technical lead",
  teamContext: "Independent product",
  status: "Active development product",
  statusDetail:
    "Core retrieval, grounded answering, evaluation and product workflows are implemented; larger-source and dual-backend qualification remain active engineering work.",
  dates: "2026 — Present",
  accent: "teal",
  technologies: ["Python", "FastAPI", "React", "Qdrant", "Docling", "Qwen embeddings", "ONNX", "CUDA"],
  collections: ["featured"],
  heroMeta: [
    { label: "Status", value: "Active development product" },
    { label: "Objective", value: "Portfolio sample · technical case study" },
  ],
  links: [{ label: "GitHub", href: "https://github.com/cschrupp/offline-rag" }],
  facts: [],
  visual: {
    type: "flow",
    alt: "Seneca workflow from technical documents through parsing, indexing, retrieval, grounded answers and human review.",
    heading: "How Seneca works",
    subheading: "Offline-first document QA with inspectable evidence and human evaluation.",
    steps: [
      { title: "Documents", detail: "PDFs, manuals and technical references" },
      { title: "Parse & chunk", detail: "Structured text blocks with source context" },
      { title: "Embed & index", detail: "Dense vectors and local search indexes" },
      { title: "Retrieve & rerank", detail: "Keyword + semantic search, then reranking" },
      { title: "Grounded answer", detail: "Answer from retrieved passages with citations" },
      { title: "Human review", detail: "Gold Lab and evaluation workflows" },
    ],
    feedback: "Review findings inform evaluation, prompts and retrieval changes.",
    caption: "Product flow — simplified from the implemented Seneca architecture.",
  },
  developmentApproach:
    "I use a human-directed agentic engineering workflow: I define product direction, architecture, technical constraints, experiments and acceptance criteria; coding agents perform substantial implementation, testing and iterative repair under those boundaries. Generated changes are reviewed and validated before they are accepted.",
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "Product context",
      title: "Ask technical documents a question and inspect the answer.",
      paragraphs: [
        "Seneca is a local-first knowledge workspace for technical documents. It ingests source material, searches it by keyword and meaning, reranks the strongest passages, and uses those passages to write an answer with citations.",
        "The evidence stays visible rather than disappearing behind a chat response. Retrieval, answer generation and human evaluation are separate parts of the system, so each can be inspected and changed without turning the whole product into one opaque model call.",
      ],
    },
    {
      id: "gold-lab",
      kind: "story",
      eyebrow: "01 · Product judgment",
      title: "Human review shaped the product, not just the benchmark.",
      opening:
        "Expert review is the final authority for Gold labels, but long annotation sessions are difficult to sustain in real work.",
      paragraphs: [
        "That constraint changed the interface. Seneca added smaller review interactions through Gold Lab, Question Check and Rapid Fire instead of assuming that domain experts would spend hours inside an annotation tool.",
        "Machine judgments remain advisory. The important product decision was to make expert review easier to enter and leave while keeping the human decision authoritative.",
      ],
      caveat:
        "The workflow is implemented; it is not yet evidence that reviewers complete more annotations because of the new interaction design.",
    },
    {
      id: "retrieval",
      kind: "story",
      eyebrow: "02 · Retrieval experiment",
      title: "Search quality depended on how the question was represented.",
      opening:
        "In a 22-question development pilot, a model-assisted query formulation improved retrieval quality over the dense baseline.",
      paragraphs: [
        "The result was useful, but the ordering changed when only the human-reviewed cases were counted. That was enough to stop treating the best aggregate score as a production winner.",
        "The practical lesson was simpler: query formulation is a first-class retrieval variable, and small development sets are good for finding directions, not for declaring a definitive champion.",
      ],
    },
    {
      id: "generation",
      kind: "story",
      eyebrow: "03 · Generation evaluation",
      title: "A clearer prompt did not automatically produce better citations.",
      opening:
        "A prompt revision that emphasized source provenance reduced citation recall in the controlled comparison.",
      paragraphs: [
        "Both prompt variants answered 20 of 22 positive-evidence questions, and both failed two generations. Five of sixteen hard-negative cases were still answered when the desired behavior was to abstain.",
        "The newer prompt was therefore not promoted. The negative result was more useful than a nicer-sounding instruction because it showed exactly where the system still needed work.",
      ],
      caveat:
        "The semantic grading used the same model endpoint as generation, so the result is a development signal rather than an independent quality estimate.",
    },
    {
      id: "runtime",
      kind: "story",
      eyebrow: "04 · Runtime engineering",
      title: "GPU acceleration helped, but CPU fallback had to preserve the same retrieval space.",
      opening:
        "The CUDA path made large-source embedding practical on the tested GPU; the first quantized CPU fallback produced materially different vectors.",
      paragraphs: [
        "That difference mattered more than raw speed. If CPU and GPU embeddings do not live in effectively the same vector space, they cannot safely share the same retrieval index.",
        "An ONNX FP32 path restored close numerical parity with the CUDA reference on the bounded comparison set. Full-corpus CPU timing is still projected rather than measured, so the fallback remains an engineering candidate rather than a finished performance claim.",
      ],
    },
    {
      id: "status",
      kind: "current_status",
      eyebrow: "Current state",
      title: "What is real today.",
      bullets: [
        "Document ingestion, hybrid retrieval, reranking, grounded answers, citations, abstention logic, workspaces, conversations and human-evaluation workflows are implemented.",
        "The product has explicit limits around source size and runtime resources rather than pretending every machine or workspace has the same capacity.",
        "GPU and CPU embedding paths have been compared for numerical compatibility; the larger CPU runtime still needs direct measurement.",
        "The project is an active development product, not a claim of enterprise deployment or customer production history.",
      ],
    },
    {
      id: "artifacts",
      kind: "artifacts",
      eyebrow: "Code and evidence",
      title: "The implementation and the decisions behind it are inspectable.",
      bullets: [
        "Public Seneca / OfflineRAG source repository.",
        "Evaluation and Gold Lab records used to test retrieval, generation and human-review workflows.",
        "Runtime and parity studies used to decide which CPU/GPU paths were safe to keep developing.",
      ],
    },
  ],
  sourceNote:
    "Claims on this page are grounded in project source and evaluation records.",
};
