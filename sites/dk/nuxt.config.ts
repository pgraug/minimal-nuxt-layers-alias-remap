import { fileURLToPath } from "node:url";

import { createResolver } from "nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: "2025-09-15",
  extends: ["../../"],
  // alias: {
  //   c: fileURLToPath(new URL("../..", import.meta.url)),
  // },
  alias: {
    "~": resolve("../../app/"),
    "~~": resolve("../../"),
  },
});
