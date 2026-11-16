import type { Project } from "./types";

export const flightSentry: Project = {
  slug: "flight-sentry",
  title: "Flight Sentry",
  shortTitle: "Flight Sentry",
  eyebrow: "UC Berkeley MIDS · ML at Scale",
  summary: "Large-scale flight-delay prediction using flight and weather data available before departure.",
  description:
    "A collaborative Berkeley project that joined roughly 31 million domestic-flight records with weather data using only information available before departure.",
  detailMode: "compact",
  role: "Custom data join · MLP/CNN experiments",
  teamContext: "UC Berkeley MIDS Machine Learning at Scale team project",
  status: "Completed academic project",
  statusDetail: "Completed team project; the headline model results below are team results.",
  dates: "2025",
  accent: "violet",
  technologies: ["PySpark", "Databricks", "Spark ML", "TensorFlow", "NOAA weather", "Temporal validation"],
  collections: ["featured", "mids"],
  links: [{ label: "Berkeley project site", href: "https://groups.ischool.berkeley.edu/flight_delay_prediction_model/" }],
  facts: [
    { value: "~31M", label: "Flight records", detail: "Domestic-flight scale reported by the project team." },
    { value: "0.697", label: "Team F2 score", detail: "Final team evaluation at the 15-minute delay threshold." },
    { value: "0.72", label: "Team AUC-PR", detail: "Final team evaluation reported in the project write-up." },
  ],
  sections: [
    {
      id: "overview",
      kind: "overview",
      eyebrow: "What we built",
      title: "Predicting delays without future information",
      paragraphs: [
        "Flight Sentry combined U.S. domestic-flight history with NOAA weather data to predict delays before departure. The difficult part was not only model choice: every feature had to respect what would actually have been known at prediction time.",
      ],
    },
    {
      id: "contribution",
      kind: "contribution",
      eyebrow: "My contribution",
      title: "Point-in-time data joining and neural-network experiments",
      bullets: [
        "Built part of the custom distributed join that aligned flight and weather data at large scale.",
        "Kept later weather and flight outcomes out of the training features so the model used only information available before departure.",
        "Implemented MLP and CNN experiments as part of the team's model comparison.",
        "Contributed those experiments to the broader team workflow; the final ensemble and headline metrics are team results.",
      ],
    },
    {
      id: "result",
      kind: "evidence",
      eyebrow: "Team result",
      title: "Final project evaluation",
      paragraphs: [
        "The team's final evaluation reported F2 = 0.697 and AUC-PR = 0.72 when regression outputs were evaluated against the 15-minute delay threshold.",
      ],
    },
  ],
};
