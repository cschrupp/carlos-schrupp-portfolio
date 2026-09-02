import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://cschrupp.github.io/carlos-schrupp-portfolio";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
});
