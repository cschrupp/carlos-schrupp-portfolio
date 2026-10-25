export type ProjectSlug =
  | "seneca"
  | "wellplot"
  | "codingrabbit"
  | "flight-sentry"
  | "tension-modeling"
  | "relay";

export type CollectionId = "featured" | "in_progress" | "mids";
export type DetailMode = "deep" | "compact" | "preview";
export type Accent = "teal" | "orange" | "blue" | "violet";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFact = {
  value: string;
  label: string;
  detail: string;
};

export type ProjectVisual = {
  type: "image" | "diagram";
  src?: string;
  alt: string;
  caption?: string;
  labels?: string[];
};

export type ProjectSection = {
  id: string;
  kind:
    | "overview"
    | "story"
    | "architecture"
    | "contribution"
    | "evidence"
    | "current_status"
    | "roadmap"
    | "artifacts";
  eyebrow?: string;
  title: string;
  opening?: string;
  paragraphs?: string[];
  bullets?: string[];
  facts?: ProjectFact[];
  phaseId?: string;
  caveat?: string;
};

export type ProjectPhase = {
  id: string;
  label: string;
  status: string;
  summary: string;
};

export type Project = {
  slug: ProjectSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  detailMode: DetailMode;
  role: string;
  teamContext: string;
  status: string;
  statusDetail: string;
  dates: string;
  accent: Accent;
  technologies: string[];
  collections: CollectionId[];
  links: ProjectLink[];
  facts: ProjectFact[];
  visual: ProjectVisual;
  phases?: ProjectPhase[];
  sections: ProjectSection[];
  sourceNote: string;
};

export type ProjectCardPlacement = {
  id: string;
  projectId: ProjectSlug;
  collection: CollectionId;
  title: string;
  summary: string;
  eyebrow: string;
  status: string;
  phaseAnchor?: string;
  priority: number;
  visualVariant?: "default" | "phase" | "academic" | "preview";
};

const seneca: Project = {
  slug: "seneca",
  title: "Seneca",
  shortTitle: "Seneca",
  eyebrow: "Local-first applied AI",
  summary: "A local knowledge workspace built to make technical manuals inspectable, searchable and evidence-backed.",
  description:
    "Seneca combines document ingestion, hybrid retrieval, reranking, grounded generation, citations, human evaluation and local-model deployment in one offline-first product system.",
  detailMode: "deep",
  role: "Founder / technical lead",
  teamContext: "Independent product Â· implementation substantially agent-assisted",
  status: "Active product R&D",
  statusDetail:
    "Core retrieval, grounded answering, evaluation and product workflows are implemented; large-source and dual-backend qualification remain bounded by explicit evidence gates.",
  dates: "2026 â€” Present",
  accent: "teal",
  technologies: ["Python", "FastAPI", "React", "Qdrant", "Docling", "Qwen embeddings", "ONNX", "CUDA"],
  collections: ["featured"],
  links: [
    { label: "GitHub", href: "https://github.com/cschrupp/offline-rag" },
  ],
  facts: [
    {
      value: "Human Gold",
      label: "Evaluation authority",
      detail: "Machine proposals remain advisory; accepted Gold labels require human adjudication.",
    },
    {
      value: "0.764 â†’ 0.857",
      label: "Dense retrieval nDCG@10",
      detail: "Development pilot, full 22-case cohort; not promoted as a production winner.",
    },
    {
      value: "1.17 min",
      label: "CUDA proxy median",
      detail: "Median of three accepted 1296-child proxy runs for the selected FP16/batch-32 candidate.",
    },
    {
      value: "0.999998",
      label: "CPU FP32 cosine parity",
      detail: "Median document/query cosine against the CUDA reference in the bounded parity study.",
    },
  ],
  visual: {
    type: "diagram",
    alt: "Seneca product pipeline from document ingestion through retrieval, grounded answers and human evaluation.",
    caption: "Product architecture â€” evidence-derived diagram, not a screenshot.",
    labels: ["Documents", "Hybrid retrieval", "Evidence", "Grounded answer", "Human Gold"],
  },
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "Product context",
      title: "Local knowledge work, with the evidence left visible.",
      paragraphs: [
        "Seneca grew from a practical request: make technical manuals usable with local language models without hiding the evidence behind a generic chat interface. The product keeps ingestion, retrieval, generation and evaluation inspectable so a useful answer can still be traced back to the source material.",
        "The application is local-first. Retrieval and product services are separated from the external local generator, which lets the model runtime change without rebuilding the rest of the system. The current portfolio story focuses on the decisions that changed the product, not on presenting RAG as a fixed recipe.",
      ],
    },
    {
      id: "gold-lab",
      kind: "story",
      eyebrow: "01 Â· Product judgment",
      title: "Expert annotation time became part of the system design.",
      opening:
        "A domain expert could not consistently set aside long blocks of time for annotation, while the repository separately recorded that formal Gold expansion remained deferred.",
      paragraphs: [
        "That combination changed the product question. Instead of assuming that a better annotation interface would make expert time abundant, Seneca introduced smaller evidence-based interactions through Gold Lab, Question Check and Rapid Fire.",
        "Machine judgments remain Silver/advisory. Human review is still the authority that turns evidence into Gold. The accepted result is the workflow itself; the project does not claim that the new interaction style has already increased participation.",
      ],
      caveat:
        "The expert-time constraint is owner testimony and should not be presented as the sole documented cause of the formal 9G deferral.",
    },
    {
      id: "retrieval",
      kind: "story",
      eyebrow: "02 Â· Retrieval experiment",
      title: "Changing the query mattered more than adding retrieval machinery.",
      opening:
        "On the 22-case development pilot, the dense baseline scored about 0.764 nDCG@10 while a model-query formulation reached about 0.857.",
      paragraphs: [
        "The result was useful because it moved attention from adding more retrieval layers to the representation of the query itself. But the relative ranking changed on the 16 human-reviewed cases, so the experiment did not justify promoting one configuration as the production winner.",
        "The practical lesson was narrower: query formulation was a first-class retrieval variable, and small development cohorts were not strong enough to erase uncertainty just because one aggregate metric looked better.",
      ],
    },
    {
      id: "generation",
      kind: "story",
      eyebrow: "03 Â· Generation evaluation",
      title: "The prompt that sounded better cited worse.",
      opening:
        "A provenance-focused prompt revision reduced mean Gold citation recall from roughly 0.636 to 0.596 in the controlled 10E comparison.",
      paragraphs: [
        "Both prompt variants answered 20 of 22 positive-evidence questions and both failed two generations. More importantly, five of sixteen hard negatives were still answered when abstention was expected under either prompt.",
        "The newer prompt was not promoted. The experiment was retained as negative evidence rather than rationalized away because the wording looked more explicit about provenance.",
      ],
      caveat:
        "The semantic judge used the same model/endpoint, which limits how strongly the result can be generalized.",
    },
    {
      id: "runtime",
      kind: "story",
      eyebrow: "04 Â· Runtime engineering",
      title: "GPU speed solved one bottleneck; CPU fallback exposed a vector-space failure.",
      opening:
        "The selected CUDA FP16 / batch-32 candidate completed three accepted 1296-child proxy runs in 1.170, 1.474 and 1.109 minutes.",
      paragraphs: [
        "That made dense embedding practical on the tested GPU, but the obvious CPU fallback created a different problem. ONNX QINT8 was not merely slower than hoped: its embedding vectors diverged materially from the CUDA reference, which made a shared retrieval index unsafe.",
        "ONNX FP32 restored numerical parity â€” median document/query cosine was about 0.999998, Top-1 agreement was 16/16 and mean Top-10 overlap was 1.0 â€” but its full-corpus runtime remains projected rather than measured. The dual-backend substrate therefore remains a bounded engineering candidate, not a deployed fallback claim.",
      ],
      facts: [
        { value: "1.170 / 1.474 / 1.109 min", label: "CUDA G1 runs", detail: "Three accepted proxy runs." },
        { value: "0.754 / 0.851", label: "QINT8 median cosine", detail: "Document / query parity failed materially." },
        { value: "16/16", label: "FP32 Top-1 agreement", detail: "Bounded parity set against CUDA FP16." },
      ],
    },
    {
      id: "status",
      kind: "current_status",
      eyebrow: "Current boundary",
      title: "What Seneca currently establishes â€” and what it does not.",
      bullets: [
        "Implemented: y‘½Õµ•¹Ğ¥¹•ÍÑ¥½¸°¡å‰É¥É•ÑÉ¥•Ù…°°É•É…¹­¥¹œ°É½Õ¹‘•…¹Íİ•ÉÌ°¥Ñ…Ñ¥½¹Ì°…‰ÍÑ•¹Ñ¥½¸±½¥Œ°İ½É­ÍÁ…•Ì°½¹Ù•ÉÍ…Ñ¥½¹Ì…¹¡Õµ…¸•Ù…±Õ…Ñ¥½¸İ½É­™±½İÌ¸ˆ°(€€€€€€€€‰MÕÁÁ½ÉÑ•É•™•É•¹”•¹Ù•±½Á”…¹ÑÉ…¹ÍÁ½ÉĞ±¥µ¥ÑÌ…É”•áÁ±¥¥ĞìÑÉ…¹ÍÁ½ÉĞ±¥µ¥ÑÌ…É”¹½ĞÁÉ•Í•¹Ñ•…Ì„¹Õµ•É¥Œİ½É­ÍÁ…”µ…Á…¥ÑäÕ…É…¹Ñ•”¸ˆ°(€€€€€€€€‰1…É”µÍ½ÕÉ”Uİ½É¬¥Ì…•ÁÑ•…Ì‰½Õ¹‘••Ù¥‘•¹”ìAT@ÌÈ™Õ±°´ÄÈäØÑ¥µ¥¹œÉ•µ…¥¹ÌÁÉ½©•Ñ•°¹½Ğµ•…ÍÕÉ•¸ˆ°(€€€€€€€€‰9¼±…¥´½˜ÕÍÑ½µ•ÈÁÉ½‘ÕÑ¥½¸¡¥ÍÑ½Éä°•¹Ñ•ÉÁÉ¥Í”µÕ±Ñ¤µÕÍ•ÈÉ•…‘¥¹•ÍÌ½ÈÁÕ‰±¥…Ñ¥½¸µÉ…‘”ÅÕ…±¥Ñä¥Ìµ…‘”¸ˆ°(€€€€€t°(€€€ô°(€€€ì(€€€€€¥è€‰…ÉÑ¥™…ÑÌˆ°(€€€€€­¥¹è€‰…ÉÑ¥™…ÑÌˆ°(€€€€€•å•‰É½Üè€‰ÉÑ¥™…ÑÌˆ°(€€€€€Ñ¥Ñ±”è€‰AÉ½©•Ğ•Ù¥‘•¹”…¹Í½ÕÉ”½‘”¸ˆ°(€€€€€‰Õ±±•ÑÌèl(€€€€€€€€‰=™™±¥¹•I€¼M•¹•„É•Á½Í¥Ñ½Éä…¹…•ÁÑ•…É¡¥Ñ•ÑÕÉ”½•Ù…±Õ…Ñ¥½¸É•½É‘Ì¸ˆ°(€€€€€€€€‰½±1…ˆ…¹•Ù…±Õ…Ñ¥½¸•Ù¥‘•¹”ÕÍ•™½ÈÑ¡”Á½ÉÑ™½±¥¼É•Í•…É Á…­…”¸ˆ°(€€€€€€€€‰	½Õ¹‘•U½ATÁ…É¥Ñä…¹ÉÕ¹Ñ¥µ”•Ù¥‘•¹”™½ÈÑ¡”€ÄÙ,ÁÉ½É…´¸ˆ°(€€€€€t°(€€€ô°(€t°(€Í½ÕÉ•9½Ñ”è(€€€€‰A½ÉÑ™½±¥¼±…¥µÌ…É”É½Õ¹‘•¥¸Ñ¡”…•ÁÑ•M•¹•„É•Í•…É Á…­…”€¡%H´ÀÀÌ¤…¹¥ÑÌ!Õµ…¸µÍ•±•Ñ•ÍÑ½ÉäÍ•Ğ¸5¥ÍÍ¥¹œU$…ÁÑÕÉ•Ì…É”¥¹Ñ•¹Ñ¥½¹…±±ä¹½ĞÉ•Á±…•İ¥Ñ Íå¹Ñ¡•Ñ¥ŒÍÉ••¹Í¡½ÑÌ¸ˆ°)ôì()½¹ÍĞİ•±±Á±½ĞèAÉ½©•Ğ€ôì(€Í±Õœè€‰İ•±±Á±½Ğˆ°(€Ñ¥Ñ±”è€‰]•±±A±½Ğˆ°(€Í¡½ÉÑQ¥Ñ±”è€‰]•±±A±½Ğˆ°(€•å•‰É½Üè€‰M¥•¹Ñ¥™¥ŒÍ½™Ñİ…É”€¬Í•µ…¹Ñ¥ŒH™ˆ°(€ÍÕµµ…Éäè€‰É•¹‘•É•Èµ™¥ÉÍĞİ•±°µ±½œÑ½½±­¥Ğ°İ¥Ñ „Í•Á…É…Ñ”H™ÁÉ½É…´™½È¹…ÑÕÉ…°µ±…¹Õ…”Í¥•¹Ñ¥™¥Œ…ÕÑ¡½É¥¹œ¸ˆ°(€‘•ÍÉ¥ÁÑ¥½¸è(€€€€‰]•±±A±½ĞÍ•Á…É…Ñ•ÌÍ¥•¹Ñ¥™¥Œ‘…Ñ„°‘½Õµ•¹Ğ½µÁ½Í¥Ñ¥½¸…¹É•¹‘•É¥¹œ°Ñ¡•¸•áÁ±½É•Ì„‰½Õ¹‘•Í•µ…¹Ñ¥Œ½µÁ¥±•ÈÑ¡…Ğ…¸ÑÉ…¹Í±…Ñ”¹…ÑÕÉ…°µ±…¹Õ…”¥¹Ñ•¹Ğİ¥Ñ¡½ÕĞ¥Ù¥¹œÑ¡”µ½‘•°…ÕÑ¡½É¥Ñä½Ù•ÈÑ¡”™¥¹…°Í¥•¹Ñ¥™¥Œ…ÉÑ¥™…Ğ¸ˆ°(€‘•Ñ…¥±5½‘”è€‰‘••Àˆ°(€É½±”è€‰AÉ½©•ĞÉ•…Ñ½È€¼ÁÉ½‘ÕĞ…¹É•Í•…É ±•…ˆ°(€Ñ•…µ½¹Ñ•áĞè€‰%¹‘•Á•¹‘•¹Ğ½Á•¸µÍ½ÕÉ”ÁÉ½©•Ğƒ
Ü¥µÁ±•µ•¹Ñ…Ñ¥½¸ÍÕ‰ÍÑ…¹Ñ¥…±±ä…•¹Ğµ…ÍÍ¥ÍÑ•ˆ°(€ÍÑ…ÑÕÌè€‰A¡…Í”€ÄÉ•±•…Í•ƒ
ÜA¡…Í”€È…Ñ¥Ù”H™ˆ°(€ÍÑ…ÑÕÍ•Ñ…¥°è(€€€€‰Q¡”‘•Ñ•Éµ¥¹¥ÍÑ¥ŒÉ•¹‘•É•È¥ÌÁÕ‰±¥Œ…¹¥¹ÍÑ…±±…‰±”¸Q¡”¹…ÑÕÉ…°µ±…¹Õ…”Í•µ…¹Ñ¥Œ±…å•ÈÉ•µ…¥¹ÌÕ¹‘•È…Ñ¥Ù”ÅÕ…±¥™¥…Ñ¥½¸…™Ñ•È¥ÑÌ±…Ñ•ÍĞ¥¹±Õ‘•±¥Ù”…µÁ…¥¸™…¥±•Ñ¡”Í¥•¹Ñ¥™¥Œ…Ñ”¸ˆ°(€‘…Ñ•Ìè€ˆÈÀÈØƒŠPAÉ•Í•¹Ğˆ°(€…•¹Ğè€‰‰±Õ”ˆ°(€Ñ•¡¹½±½¥•Ìèl‰AåÑ¡½¸ˆ°€‰1Lˆ°€‰1%Lˆ°€‰5…ÑÁ±½Ñ±¥ˆˆ°€‰A±½Ñ±äˆ°€‰e50ˆ°€‰5@ˆ°€‰114Í•µ…¹Ñ¥ŒÁ±…¹¹¥¹œ‰t°(€½±±•Ñ¥½¹Ìèl‰™•…ÑÕÉ•ˆ°€‰¥¹}ÁÉ½É•ÍÌ‰t°(€±¥¹­Ìèl(€€€ì±…‰•°è€‰¥Ñ!Õˆˆ°¡É•˜è€‰¡ÑÑÁÌè¼½¥Ñ¡Õˆ¹½´½Í¡ÉÕÁÀ½İ•±±Á±½Ğˆô°(€€€ì±…‰•°è€‰AåA$ˆ°¡É•˜è€‰¡ÑÑÁÌè¼½ÁåÁ¤¹½Éœ½ÁÉ½©•Ğ½İ•±±Á±½Ğ¼ˆô°(€€€ì±…‰•°è€‰½Õµ•¹Ñ…Ñ¥½¸ˆ°¡É•˜è€‰¡ÑÑÁÌè¼½İ•±±Á±½Ğ¹É•…‘Ñ¡•‘½Ì¹¥¼½•¸½±…Ñ•ÍĞ¼ˆô°(€t°(€™…ÑÌèl(€€€ì(€€€€€Ù…±Õ”è€ˆÀ¸Ì¸Àˆ°(€€€€€±…‰•°è€‰AÕ‰±¥ŒÁ…­…”ˆ°(€€€€€‘•Ñ…¥°è€‰I•±•…Í•‘•Ñ•Éµ¥¹¥ÍÑ¥ŒÍ¥•¹Ñ¥™¥ŒÑ½½±­¥Ğì5@É•µ…¥¹Ì•áÁ±¥¥Ñ±ä•áÁ•É¥µ•¹Ñ…°¸ˆ°(€€€ô°(€€€ì(€€€€€Ù…±Õ”è€‰1Lƒ
Ü1%Lˆ°(€€€€€±…‰•°è€‰M¥•¹Ñ¥™¥Œ¥¹ÁÕÑÌˆ°(€€€€€‘•Ñ…¥°è€‰A±ÕÌÁÉ½É…µµ…Ñ¥Œ9ÕµAä½Á…¹‘…Ìİ½É­™±½İÌ…¹e50‘½Õµ•¹Ğ…ÕÑ¡½É¥¹œ¸ˆ°(€€€ô°(€€€ì(€€€€€Ù…±Õ”è€ˆÈÀ¼ÈÀƒŠH€Ğ¼ÈÀˆ°(€€€€€±…‰•°è€‰MÑÉÕÑÕÉ”ÙÌÍ•µ…¹Ñ¥Ìˆ°(€€€€€‘•Ñ…¥°è€‰Q\´ÀÌè…±°½ÕÑÁÕÑÌİ•É”ÍÑÉÕÑÕÉ…±±äÙ…±¥°½¹±ä™½ÕÈÁ…ÍÍ•Ñ¡”Í¥•¹Ñ¥™¥ŒÍ•µ…¹Ñ¥Œ…Ñ”¸ˆ°(€€€ô°(€€€ì(€€€€€Ù…±Õ”è€ˆÈ¼äˆ°(€€€€€±…‰•°è€‰1…Ñ•ÍĞ¥¹±Õ‘•±¥Ù”ÔÁ…ÍÌ½Õ¹Ğˆ°(€€€€€‘•Ñ…¥°è€‰Ô´Õ$1¥Ù”´ÀÀÈÑ•Éµ¥¹…Ñ•%0€¼IM%U1}M59Q%¸ˆ°(€€€ô°(€t°(€Ù¥ÍÕ…°èì(€€€ÑåÁ”è€‰¥µ…”ˆ°(€€€ÍÉŒè€ˆ½…ÍÍ•ÑÌ½İ•±±Á±½Ğµµ…¥¸µÁ…ÍÌ¹İ•‰Àˆ°(€€€…±Ğè€‰]•±±A±½Ğ•µ•¹Ğµ‰½¹µ±½œ½ÕÑÁÕĞİ¥Ñ ÕÉÙ•Ì…¹Y0İ…Ù•™½É´É•¹‘•É¥¹œ¸ˆ°(€€€…ÁÑ¥½¸è€‰É•…°]•±±A±½ĞÁÉ½©•ĞÉ•¹‘•È•¹•É…Ñ•‰äÑ¡”‘•Ñ•Éµ¥¹¥ÍÑ¥Œ•¹¥¹”¸ˆ°(€ô°(€Á¡…Í•Ìèl(€€€ì(€€€€€¥è€‰Á¡…Í”´Äˆ°(€€€€€±…‰•°è€‰A¡…Í”€ÄƒŠPI•±•…Í•Í¥•¹Ñ¥™¥ŒÁÉ½‘ÕĞˆ°(€€€€€ÍÑ…ÑÕÌè€‰I•±•…Í•ˆ°(€€€€€ÍÕµµ…Éäè€‰I•¹‘•É•Èµ™¥ÉÍĞİ•±°µ±½œ½µÁ½Í¥Ñ¥½¸…¹Ù¥ÍÕ…±¥é…Ñ¥½¸¸ˆ°(€€€ô°(€€€ì(€€€€€¥è€‰Á¡…Í”´Èˆ°(€€€€€±…‰•°è€‰A¡…Í”€ÈƒŠPM•µ…¹Ñ¥Œ…ÕÑ¡½É¥¹œH™ˆ°(€€€€€ÍÑ…ÑÕÌè€‰%¸ÁÉ½É•ÍÌˆ°(€€€€€ÍÕµµ…Éäè€‰	½Õ¹‘•¹…ÑÕÉ…°µ±…¹Õ…”¥¹Ñ•ÉÁÉ•Ñ…Ñ¥½¸İ¥Ñ ‘•Ñ•Éµ¥¹¥ÍÑ¥Œ•á•ÕÑ¥½¸…¹Ù•É¥™¥…Ñ¥½¸¸ˆ°(€€€ô°(€t°(€Í•Ñ¥½¹Ìèl(€€€ì(€€€€€¥è€‰Á¡…Í”´Äˆ°(€€€€€Á¡…Í•%è€‰Á¡…Í”´Äˆ°(€€€€€­¥¹è€‰ÍÑ½Éäˆ°(€€€€€•å•‰É½Üè€‰A¡…Í”€Äƒ
ÜI•±•…Í•ÁÉ½‘ÕĞˆ°(€€€€€Ñ¥Ñ±”è€‰M¥•¹Ñ¥™¥ŒÍ½™Ñİ…É”™¥ÉÍĞ¸ˆ°(€€€€€½Á•¹¥¹œè(€€€€€€€€‰]•±±A±½Ğİ…Ì…±É•…‘ä„™Õ¹Ñ¥½¹¥¹œÍ¥•¹Ñ¥™¥ŒÙ¥ÍÕ…±¥é…Ñ¥½¸Á…­…”‰•™½É”¹…ÑÕÉ…°µ±…¹Õ…”…ÕÑ¡½É¥¹œ•¹Ñ•É•Ñ¡”ÁÉ½©•Ğ¸ˆ°(€€€€€Á…É…É…Á¡Ìèl(€€€€€€€€‰Q¡”É•±•…Í•ÍåÍÑ•´¹½Éµ…±¥é•Ì1L°1%L…¹½µÁÕÑ•¡…¹¹•±Ì¥¹Ñ¼ÑåÁ•‘…Ñ„½‰©•ÑÌ°½µÁ½Í•Ì‘½Õµ•¹ĞÍÑÉÕÑÕÉ”Ñ¡É½Õ e50½ÈAåÑ¡½¸°…¹É•¹‘•ÉÌÑ¡”Í…µ”‘½Õµ•¹Ğµ½‘•°Ñ¼ÁÉ¥¹Ñ…‰±”½ÍÑ…Ñ¥Œ…¹¥¹Ñ•É…Ñ¥Ù”½ÕÑÁÕÑÌ¸ˆ°(€€€€€€€€‰QÉ•…Ñ¥¹œ„İ•±°±½œ…Ì…¸•¹¥¹••É¥¹œ‘½Õµ•¹ĞƒŠPİ¥Ñ •áÁ±¥¥ĞÁ…”•½µ•ÑÉä°ÑÉ…­Ì°Í…±•Ì°‰¥¹‘¥¹Ì°É…ÍÑ•È…ÉÉ…åÌ°™¥±±Ì°…¹¹½Ñ…Ñ¥½¹Ì…¹¡•…‘•ÉÌƒŠP¥Ìİ¡…Ğ¥Ù•ÌA¡…Í”€È„‘•Ñ•Éµ¥¹¥ÍÑ¥ŒÍÕ‰ÍÑÉ…Ñ”Ñ¼½Á•É…Ñ”½¸¸Q¡”$±…å•È¥Ì…¸•áÑ•¹Í¥½¸½˜Ñ¡…Ğ•¹¥¹”°¹½ĞÑ¡”•¹¥¹”¥ÑÍ•±˜¸ˆ°(€€€€€t°(€€€€€‰Õ±±•ÑÌèl(€€€€€€€€‰AÕ‰±¥Œ€À¸Ä¸ÀÉ•±•…Í”è€ÈÀÈØ´ÀĞ´ÈÈ¸ˆ°(€€€€€€€€‰AÕ‰±¥Œ€À¸Ì¸ÀÉ•±•…Í”è€ÈÀÈØ´ÀĞ´Èàİ¥Ñ •áÁ•É¥µ•¹Ñ…°5@ÍÕÁÁ½ÉĞ¸ˆ°(€€€€€€€€‰=¹”É•¹‘•É•Èµ¹•ÕÑÉ…°‘½Õµ•¹Ğµ½‘•°™••‘Ì5…ÑÁ±½Ñ±¥ˆ…¹A±½Ñ±ä½ÕÑÁÕÑÌ¸ˆ°(€€€€€t°(€€€ô°(€€€ì(€€€€€¥è€‰½µÁ¥±•ÈµÁ¥Ù½Ğˆ°(€€€€€Á¡…Í•%è€‰Á¡…Í”´Èˆ°(€€€€€­¥¹è€‰ÍÑ½Éäˆ°(€€€€€•å•‰É½Üè€‰A¡…Í”€Èƒ
ÜÉ¡¥Ñ•ÑÕÉ”ˆ°(€€€€€Ñ¥Ñ±”è€‰‰½ÕĞ•¥¡Ñä5@‘•¥Í¥½¹Ìİ•É”„ÍÕ•ÍÌƒŠP€and an architecture warning.",
      opening:
        "An early agentic workflow could successfully reconstruct a complex CBL result, but doing so required roughly eighty low-level autonomous decisions.",
      paragraphs: [
        "The important result was not that agents failed. The workflow worked. The problem was that scientific authoring depended on too much long-horizon state, object addressing and constraint management inside the agent loop.",
        "WellPlot therefore moved toward a compiler-style semantic path: the model supplies bounded semantic facts, while deterministic software owns identities, source resolution, mutation, persistence, rendering and verification.",
      ],
    },
    {
      id: "valid-not-correct",
      phaseId: "phase-2",
      kind: "story",
      eyebrow: "Phase 2 Â» Controlled experiment",
      title: "20/20 valid. 4/20 scientifically correct.",
      opening:
        "TW-03 produced twenty structurally valid outputs in twenty attempts, yet only four passed the scientific Gate-A semantics.",
      paragraphs: [
        "That result separated two questions that are easy to collapse in LLM systems: can the model emit a legal object, and does that object actually mean the right scientific thing?",
        "The project began reporting provider failure, structured-output failure, semantic failure and deterministic-host failure separately. Later schema experiments showed that representation itself could change behavior, but the evidence remained local to the tested stack rather than being generalized into a universal provider rule.",
      ],
    },
    {
      id: "contract-debugging",
      phaseId: "phase-2",
      kind: "story",
      eyebrow: "Phase 2 Â» Evaluation discipline",
      title: "Debug the contract before blaming the model.",
      opening:
        "The first Qwen/DeepSeek comparison preserved outcome scores but not the exact model-facing prompts or raw structured responses, which made model-level causal claims unsafe.",
      paragraphs: [
        "The evaluation program changed accordingly. Later campaigns preserved exact requests and responses, schema/validation boundaries, deterministic transforms, persistence/reload/render evidence and the earliest supported point of divergence.",
        "D5-5I Live-002 then finished with 2 PASS and 7 FAIL across nine turns, 21 logical calls and 21 physical attempts. The failures did not share one cause, so the correct terminal remained FAIL / RESIDUAL_SEMANTIC rather than a simplified 'the model failed' story.",
        "D5-5J was a provider-free corrective engineering response at the accepted research cutoff. It improved request-obligation preservation and stage evidence, but it did not retroactively convert D5-5I into a live scientific success.",
      ],
      facts: [
        { value: "4/24 â†’ 16/24", label: "Stable-pass prompt result", detail: "Still rejected: protected regression, terminal failures and <18/24 gate." },
        { value: "21 + 21 hashes", label: "Live-002 custody", detail: "All request and response body SHA-256 values independently verified." },
        { value: "0", label: "D5-5J live calls", detail: "Provider-free corrective work; not live qualification." },
      ],
    },
    {
      id: "roadmap",
      kind: "roadmap",
      eyebrow: "Roadmap",
      title: "Toward an integrated well-log workstation.",
      paragraphs: [
        "The released renderer and the developing semantic layer create a path toward richer interactive authoring. Longer-term QC, processing and petrophysical workflows remain owner roadmap intent rather than current product capabilities.",
      ],
    },
    {
      id: "status",
      kind: "current_status",
      eyebrow: "Current boundary",
      title: "Released renderer; qualification-open semantic authoring.",
      bullets: [
        "Phase 1 is public scientific software and may be described as released.",
        "Phase 2 has one canonical semantic architecture, but its latest included live scientific campaign failed qualification.",
        "Provider-free rehearsals and corrective tests establish plumbing and contracts, not model capability.",
        "WELL-IR compact-model research is parallel research, not the production D5 semantic engine.",
      ],
    },
  ],
  sourceNote:
    "WellPlot content is grounded in the accepted IR-002 research package and Human story selection. Phase 1 and Phase 2 intentionally retain different maturity language.",
};

const codingRabbit: Project = {
  slug: "codingrabbit",
  title: "Coding Rabbit",
  shortTitle: "Coding Rabbit",
  eyebrow: "UC Berkeley MIDS capstone",
  summary: "A deployed AI teaching assistant designed to support programming practice without becoming an answer generator.",
  description:
    "Coding Rabbit combines a VS Code learning workflow, course context, cloud application infrastructure, safety controls and offline evaluation in a five-person Berkeley MIDS capstone.",
  detailMode: "compact",
  role: "Infrastructure, AWS backend, application workflows and evaluation UI",
  teamContext: "Five-person UC Berkeley MIDS capstone team",
  status: "Completed capstone MVP",
  statusDetail:
    "Deployed end-to-end academic MVP with ongoing public project materials and additional user testing beyond the original capstone build.",
  dates: "2026",
  accent: "orange",
  technologies: ["FastAPI", "React", "TypeScript", "AWS", "Cognito", "Aurora PostgreSQL", "Qdrant", "VS Code"],
  collections: ["featured", "mids"],
  links: [
    { label: "Project site", href: "https://www.codingrabbit.dev/" },
    {
      label: "Berkeley capstone",
      href: "https://www.ischool.berkeley.edu/programs/mids/capstone/2026b-summer/coding-rabbit-ai-teaching-assistant-c-c-courses-and-beyond",
    },
    { label: "GitHub", href: "https://github.com/emowat/ai-teaching-assistant" },
    { label: "Demo", href: "https://youtu.be/bWv3M2eNa4c" },
  ],
  facts: [
    {
      value: "5 people",
      label: "Capstone team",
      detail: "Collaborative UC Berkeley MIDS project; team results are presented as team results.",
    },
    {
      value: "14 weeks",
      label: "Build window",
      detail: "Public Berkeley-associated project commentary describes an end-to-end deployed build in one semester.",
    },
    {
      value: "AWS + VS Code",
      label: "Deployed workflow",
      detail: "Cloud-backed application integrated into the programming environment students already use.",
    },
  ],
  visual: {
    type: "image",
    src: "/assets/codingrabbit-architecture.webp",
    alt: "Coding Rabbit architecture diagram showing student, instructor, cloud and evaluation components.",
    caption: "Coding Rabbit project architecture.",
  },
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "Project snapshot",
      title: "A tutoring assistant has a different objective from a coding assistant.",
      paragraphs: [
        "Coding Rabbit was built around guided learning rather than direct solution generation. The product combines editor context, course context and instructor controls with a cloud application and evaluation layer.",
        "The portfolio keeps this page intentionally compact. The public Coding Rabbit site and Berkeley capstone page remain the richer canonical project presentations.",
      ],
    },
    {
      id: "technical-signal",
      kind: "architecture",
      eyebrow: "Technical signal",
      title: "Editor workflow, course grounding, cloud services and evaluation in one system.",
      bullets: [
        "VS Code / Codespaces student workflow with guided assistance modes.",
        "AWS-backed identity, application state, deployment and instructor/admin workflows.",
        "Course-scoped retrieval and guarded model routing as team-level system capabilities.",
        "Offline evaluation separated from live tutoring so judge workloads do not interrupt student interactions.",
      ],
    },
    {
      id: "contribution",
      kind: "contribution",
      eyebrow: "My contribution",
      title: "Infrastructure and application surfaces.",
      bullets: [
        "Built infrastructure and AWS backend slices across authentication, deployment and application data workflows.",
        "Implemented Cognito-backed invitation and role-aware section workflows.",
        "Developed professor analytics, teaching-plan and student drill-down interfaces.",
        "Added offline evaluation APIs, worker deployment and the administrative evaluation dashboard.",
        "Contributed to the final landing-page and architecture presentation.",
      ],
      caveat:
        "Coding Rabbit was team work. Retrieval, guardrails, modeling and evaluation components should not be attributed to Carlos individually unless the underlying project record says so.",
    },
    {
      id: "artifacts",
      kind: "artifacts",
      eyebrow: "Go deeper",
      title: "The public project already tells the longer story.",
      bullets: [
        "CodingRabbit.dev â€” product presentation and project narrative.",
        "UC Berkeley MIDS capstone page â€” academic/team context.",
        "GitHub and demo â€” implementation and end-to-end behavior.",
      ],
    },
  ],
  sourceNote:
    "Public project links are treated as the primary external presentation. Portfolio copy preserves team attribution and avoids causal claims about long-term learning outcomes.",
};
