export const profile = {
  name: "Carlos Schrupp",
  role: "Data Scientist & Machine Learning Engineer",
  focus: "Energy · Subsurface · Applied AI",
  statement:
    "I build data and machine-learning systems for engineering problems where domain knowledge and operational judgment affect the result.",
  // TODO: Add Carlos's preferred public contact email after confirmation.
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
      "Independent subsurface and wireline consulting, including technical assurance, acquisition QA/QC, operational risk control and professional training.",
    evidence:
      "Work for YPFB Corporación, YPFB Chaco and Petrobras Bolivia; a five-module quality and operational-control program developed from a 200+ job knowledge base.",
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
