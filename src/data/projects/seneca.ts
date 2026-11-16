import type { Project } from "./types";

export const seneca: Project = {
  slug: "seneca",
  title: "Seneca",
  shortTitle: "Seneca",
  eyebrow: "Local-first applied AI",
  summary: "A local knowledge workspace for technical documents with inspectable retrieval, grounded answers and human review.",
  description:
    "Seneca reads technical documents locally, finds the passages relevant to a question, writes a cited answer and keeps the supporting evidence visible.",
  detailMode: "deep",
  role: "Founder / technical lead",
  teamContext: "Independent product",
  status: "Active development product",
  statusDetail:
    "Core document, search, answer and review workflows are implemented. Large-source CPU runtime is still being measured.",
  dates: "2026 — Present",
  accent: "teal",
  technologies: ["Python", "FastAPI", "React", "Qdrant", "Docling", "Qwen embeddings", "ONNX", "CUDA"],
  collections: ["featured"],
  links: [{ label: "GitHub", href: "https://github.com/cschrupp/offline-rag" }],
  facts: [],
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "What it does",
      title: "Local document QA with visible evidence",
      paragraphs: [
        "I built Seneca to work with technical manuals and other reference documents on a local machine. It parses the files, searches by keyword and meaning, reranks the strongest passages, and uses those passages to write an answer with citations.",
        "The interface keeps the retrieved evidence visible. Gold Lab adds a separate human-review workflow for grading questions and answers, so evaluation is part of the product instead of a spreadsheet outside it.",
      ],
    },
    {
      id: "retrieval",
      kind: "story",
      eyebrow: "Search",
      title: "Rewriting the question before search",
      opening:
        "Rewriting the user's question before search raised retrieval quality from about 0.76 to 0.86 nDCG@10 across 22 test questions.",
      paragraphs: [
        "On the 16 human-checked questions, the ranking of methods changed. I did not make the higher aggregate score the default because the sample was too small to separate methods that were this close.",
        "The useful result was the direction: how the question is represented can matter as much as adding another retrieval component.",
      ],
    },
    {
      id: "generation",
      kind: "story",
      eyebrow: "Answer quality",
      title: "Rejecting a prompt that cited worse",
      opening:
        "A prompt revision that emphasized source tracing reduced mean citation recall from about 0.64 to 0.60 in the controlled comparison.",
      paragraphs: [
        "Both versions answered 20 of 22 questions that had supporting evidence, and both failed to generate two answers. The newer wording sounded more explicit, but the measured citation behavior was worse.",
        "I kept the older prompt. That result is a useful example of why Seneca evaluates changes before they become product defaults.",
      ],
    },
    {
      id: "runtime",
      kind: "story",
      eyebrow: "Runtime",
      title: "Keeping CPU and GPU retrieval compatible",
      opening:
        "The first quantized CPU embedding path produced vectors that differed too much from the GPU reference to share one retrieval index safely.",
      paragraphs: [
        "I tested a full-precision ONNX CPU path instead. On the comparison set it matched the GPU vector space closely, including 16 of 16 top-result matches and complete mean overlap in the top ten results.",
        "The compatibility problem is solved on that bounded test set. Full-corpus CPU timing is still being measured, so I do not present the CPU path as a finished performance result.",
      ],
    },
    {
      id: "status",
      kind: "current_status",
      eyebrow: "Status and links",
      title: "Current state",
      bullets: [
        "Implemented: document ingestion, hybrid search, reranking, cited answers, workspaces, conversations and human-review workflows.",
        "Runs locally, with a separate local model runtime for answer generation.",
        "Source code and current engineering work are available in the GitHub repository linked above.",
      ],
    },
  ],
};
