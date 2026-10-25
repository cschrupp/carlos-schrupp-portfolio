import type { Project } from "./types";

export const seneca: Project = {
  slug: "seneca",
  title: "Seneca",
  shortTitle: "Seneca",
  eyebrow: "Local-first applied AI",
  summary: "A local knowledge workspace built to make technical manuals inspectable, searchable and evidence-backed.",
  description:
    "Seneca combines document ingestion, hybrid retrieval, reranking, grounded generation, citations, human evaluation and local-model deployment in one offline-first product system.",
  detailMode: "deep",
  role: "Founder / technical lead",
  teamContext: "Independent product · implementation substantially agent-assisted",
  status: "Active development product",
  statusDetail:
    "Core retrieval, grounded answering, evaluation and product workflows are implemented; large-source and dual-backend qualification remain bounded by explicit evidence gates.",
  dates: "2026 — Present",
  accent: "teal",
  technologies: ["Python", "FastAPI", "React", "Qdrant", "Docling", "Qwen embeddings", "ONNX", "CUDA"],
  collections: ["featured"],
  links: [{ label: "GitHub", href: "https://github.com/cschrupp/offline-rag" }],
  facts: [
    { value: "Human Gold", label: "Evaluation authority", detail: "Machine proposals remain advisory; accepted Gold labels require human adjudication." },
    { value: "0.764 → 0.857", label: "Dense retrieval nDCG@10", detail: "Development pilot, full 22-case cohort; not promoted as a production winner." },
    { value: "1.17 min", label: "CUDA proxy median", detail: "Median of three accepted 1296-child proxy runs for the selected FP16/batch-32 candidate." },
    { value: "0.999998", label: "CPU FP32 cosine parity", detail: "Median document/query cosine against the CUDA reference in the bounded parity study." },
  ],
  visual: {
    type: "diagram",
    alt: "Seneca product pipeline from document ingestion through retrieval, grounded answers and human evaluation.",
    caption: "Product architecture — evidence-derived diagram, not a screenshot.",
    labels: ["Documents", "Hybrid retrieval", "Evidence", "Grounded answer", "Human Gold"],
  },
  sections: [
    {
      id: "overview", kind: "overview", eyebrow: "Product context",
      title: "Local knowledge work, with the evidence left visible.",
      paragraphs: [
        "Seneca grew from a practical request: make technical manuals usable with local language models without hiding the evidence behind a generic chat interface. The product keeps ingestion, retrieval, generation and evaluation inspectable so a useful answer can still be traced back to the source material.",
        "The application is local-first. Retrieval and product services are separated from the external local generator, which lets the model runtime change without rebuilding the rest of the system. The current portfolio story focuses on the decisions that changed the product, not on presenting RAG as a fixed recipe.",
      ],
    },
    {
      id: "gold-lab", kind: "story", eyebrow: "01 · Product judgment",
      title: "Expert annotation time became part of the system design.",
      opening: "A domain expert could not consistently set aside long blocks of time for annotation, while the repository separately recorded that formal Gold expansion remained deferred.",
      paragraphs: [
        "That combination changed the product question. Instead of assuming that a better annotation interface would make expert time abundant, Seneca introduced smaller evidence-based interactions through Gold Lab, Question Check and Rapid Fire.",
        "Machine judgments remain Silver/advisory. Human review is still the authority that turns evidence into Gold. The accepted result is the workflow itself; the project does not claim that the new interaction style has already increased participation.",
      ],
      caveat: "The expert-time constraint is owner testimony and should not be presented as the sole documented cause of the formal 9G deferral.",
    },
    {
      id: "retrieval", kind: "story", eyebrow: "02 · Retrieval experiment",
      title: "Changing the query mattered more than adding retrieval machinery.",
      opening: "On the 22-case development pilot, the dense baseline scored about 0.764 nDCG@10 while a model-query formulation reached about 0.857.",
      paragraphs: [
        "The result was useful because it moved attention from adding more retrieval layers to the representation of the query itself. But the relative ranking changed on the 16 human-reviewed cases, so the experiment did not justify promoting one configuration as the production winner.",
        "The practical lesson was narrower: query formulation was a first-class retrieval variable, and small development cohorts were not strong enough to erase uncertainty just because one aggregate metric looked better.",
      ],
    },
    {
      id: "generation", kind: "story", eyebrow: "03 · Generation evaluation",
      title: "The prompt that sounded better cited worse.",
      opening: "A provenance-focused prompt revision reduced mean Gold citation recall from roughly 0.636 to 0.596 in the controlled 10E comparison.",
      paragraphs: [
        "Both prompt variants answered 20 of 22 positive-evidence questions and both failed two generations. More importantly, five of sixteen hard negatives were still answered when abstention was expected under either prompt.",
        "The newer prompt was not promoted. The experiment was retained as negative evidence rather than rationalized away because the wording looked more explicit about provenance.",
      ],
      caveat: "The semantic judge used the same model/endpoint, which limits how strongly the result can be generalized.",
    },
    {
      id: "runtime", kind: "story", eyebrow: "04 · Runtime engineering",
      title: "GPU speed solved one bottleneck; CPU fallback exposed a vector-space failure.",
      opening: "The selected CUDA FP16 / batch-32 candidate completed three accepted 1296-child proxy runs in 1.170, 1.474 and 1.109 minutes.",
      paragraphs: [
        "That made dense embedding practical on the tested GPU, but the obvious CPU fallback created a different problem. ONNX QINT8 was not merely slower than hoped; its embedding vectors diverged materially from the CUDA reference, which made a shared retrieval index unsafe.",
        "ONNX FP32 restored numerical parity — median document/query cosine was about 0.999998, Top-1 agreement was 16/16 and mean Top-10 overlap was 1.0 — but its full-corpus runtime remains projected rather than measured. The dual-backend substrate therefore remains a bounded engineering candidate, not a deployed fallback claim.",
      ],
      facts: [
        { value: "1.170 / 1.474 / 1.109 min", label: "CUDA G1 runs", detail: "Three accepted proxy runs." },
        { value: "0.754 / 0.851", label: "QINT8 median cosine", detail: "Document / query parity failed materially." },
        { value: "16/16", label: "FP32 Top-1 agreement", detail: "Bounded parity set against CUDA FP16." },
      ],
    },
    {
      id: "status", kind: "current_status", eyebrow: "Current boundary",
      title: "What Seneca currently establishes — and what it does not.",
      bullets: [
        "Implemented: document ingestion, hybrid retrieval, reranking, grounded answers, citations, abstention logic, workspaces, conversations and human evaluation workflows.",
        "Supported reference envelope and transport limits are explicit; transport limits are not presented as a numeric workspace-capacity guarantee.",
        "Large-source CUDA work is accepted as bounded evidence; CPU FP32 full-1296 timing remains projected, not measured.",
        "No claim of customer production history, enterprise multi-user readiness or publication-grade quality is made.",
      ],
    },
    {
      id: "artifacts", kind: "artifacts", eyebrow: "Artifacts",
      title: "Project evidence and source code.",
      bullets: [
        "OfflineRAG / Seneca repository and accepted architecture/evaluation records.",
        "Gold Lab and evaluation evidence used for the portfolio research package.",
        "Bounded CUDA/CPU parity and runtime evidence for the 16K program.",
      ],
    },
  ],
  sourceNote: "Portfolio claims are grounded in the accepted Seneca research package (IR-003) and its Human-selected story set. Missing UI captures are intentionally not replaced with synthetic screenshots.",
};
