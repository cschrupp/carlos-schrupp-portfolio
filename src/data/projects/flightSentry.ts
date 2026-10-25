import type { Project } from "./types";

export const flightSentry: Project = {
  slug: "flight-sentry",
  title: "Flight Sentry",
  shortTitle: "Flight Sentry",
  eyebrow: "UC Berkeley MIDS · ML at Scale",
  summary: "Large-scale flight-delay prediction using flight and weather data under a pre-departure information boundary.",
  description:
    "A collaborative Berkeley MIDS project that treated data joining, temporal leakage and distributed experimentation as part of the machine-learning problem rather than as preprocessing details.",
  detailMode: "compact",
  role: "Custom data join · MLP/CNN experiments",
  teamContext: "Collaborative UC Berkeley MIDS Machine Learning at Scale project",
  status: "Completed academic project",
  statusDetail:
    "Team project with a Berkeley-hosted public presentation; portfolio attribution stays separate between team results and Carlos's contribution.",
  dates: "2025",
  accent: "violet",
  technologies: ["PySpark", "Databricks", "Spark ML", "TensorFlow", "Weather data", "Temporal validation"],
  collections: ["featured", "mids"],
  links: [
    {
      label: "Berkeley project site",
      href: "https://groups.ischool.berkeley.edu/flight_delay_prediction_model/",
    },
  ],
  facts: [
    {
      value: "~31M",
      label: "Domestic-flight records",
      detail: "Team dataset scale reported in the accepted portfolio research/architecture source set.",
    },
    {
      value: "Point-in-time",
      label: "Prediction boundary",
      detail: "Features were constrained to information available before departure to reduce leakage.",
    },
    {
      value: "Join + MLP/CNN",
      label: "Carlos's contribution",
      detail: "Custom data join plus neural-network experiments; final ensemble remained team work.",
    },
  ],
  visual: {
    type: "diagram",
    alt: "Flight Sentry flow from flight and weather data through temporal joining, distributed features and model evaluation.",
    caption: "Project summary diagram derived from the accepted team-project evidence.",
    labels: ["Flights", "NOAA weather", "Point-in-time join", "Spark features", "Delay models"],
  },
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "Project snapshot",
      title: "At this scale, the join was part of the model.",
      paragraphs: [
        "Flight Sentry combined U.S. domestic-flight history with weather information to predict delays before departure. The project used distributed processing and temporal validation rather than treating the dataset as a conventional in-memory tabular exercise.",
        "The Berkeley-hosted site remains the primary public project presentation. This portfolio page keeps the emphasis on scale, leakage control and contribution attribution.",
      ],
    },
    {
      id: "technical-signal",
      kind: "architecture",
      eyebrow: "Technical signal",
      title: "Distributed ML with a strict information boundary.",
      bullets: [
        "Approximately 31 million domestic-flight records in the accepted team write-up.",
        "Flight and NOAA weather data joined with point-in-time constraints so future information did not leak into pre-departure prediction.",
        "PySpark / Databricks workflow for feature engineering and model experimentation.",
        "Team exploration included classification, regression, tree ensembles and neural-network approaches.",
      ],
    },
    {
      id: "contribution",
      kind: "contribution",
      eyebrow: "My contribution",
      title: "Data joining and neural-network experiments.",
      paragraphs: [
        "My documented contribution centered on the custom data join and MLP/CNN modeling experiments. The final team result should remain attributed to the project team rather than presented as my individual model.",
      ],
    },
    {
      id: "artifacts",
      kind: "artifacts",
      eyebrow: "Go deeper",
      title: "Berkeley project presentation.",
      bullets: [
        "The Berkeley-hosted Flight Sentry site contains the fuller project narrative, methodology and team results.",
      ],
    },
  ],
  sourceNote:
    "The Berkeley page is linked as the primary public source. Because that site was not retrievable by the implementation browser backend, this page uses only facts already accepted in the portfolio architecture/research record and does not invent refreshed metrics.",
};
