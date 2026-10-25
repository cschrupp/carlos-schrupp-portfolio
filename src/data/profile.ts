export const profile = {
  name: "Carlos Schrupp",
  role: "Applied AI & Computational Engineering",
  focus: "Energy · Subsurface · Industrial AI",
  statement:
    "I build AI, machine-learning and scientific-computing systems for engineering problems where domain knowledge, physical constraints and operational judgment affect the result.",
  email: null as string | null,
  linkedin: "https://www.linkedin.com/in/cschrupp/",
  github: "https://github.com/cschrupp",
};

export const experience = [
  {
    organization: "Geo Studio Datascience",
    role: "Owner & Principal Consultant",
    period: "2016 — Present",
    summary:
      "Independent subsurface and wireline consulting, including technical assurance, acquisition QA/QC, operational risk control, training and applied data-science work.",
    evidence:
      "Work across operator and service-company contexts, with technical decisions grounded in well-log acquisition, interpretation constraints and field execution.",
  },
  {
    organization: "YPFB Chaco",
    role: "Well-logging technical focal point",
    period: "2021 — 2024",
    summary:
      "Reviewed acquisition programs against subsurface requirements and supported technical, commercial and analytical decisions on the operator side.",
    evidence:
      "A VSP technical review reduced the final acquisition scope to roughly 40% of the original proposal after identifying geometry that would not properly illuminate the target.",
  },
  {
    organization: "Baker Hughes",
    role: "General Field Engineer → Wireline Operations Manager",
    period: "International field and operations career",
    summary:
      "Formation evaluation, well integrity and intervention work across Bolivia, Argentina, Colombia and the United States, followed by operations leadership.",
    evidence:
      "Managed an approximately 15-person team and a US$6.5M operating budget, with responsibility spanning people, equipment, HSE and service delivery.",
  },
] as const;

export const credentials = [
  {
    institution: "UC Berkeley",
    credential: "Master of Information and Data Science",
    detail: "Completed 2026 · GPA 3.922",
  },
  {
    institution: "MITx",
    credential: "MicroMasters in Statistics and Data Science",
    detail: "Probability, statistics, machine learning and data analysis",
  },
  {
    institution: "Universidad Evangélica Boliviana",
    credential: "Electronics Engineering",
    detail: "Engineering foundation in electronics and microprocessors",
  },
] as const;
