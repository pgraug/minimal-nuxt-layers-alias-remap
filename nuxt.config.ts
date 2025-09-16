import { fileURLToPath } from "node:url";

console.log("a: ", fileURLToPath(new URL(".", import.meta.url)));

export default defineNuxtConfig({
  compatibilityDate: "2025-09-15",
  devtools: { enabled: true },
  alias: {
    "~": fileURLToPath(new URL("./app", import.meta.url)),
    "~~": fileURLToPath(new URL(".", import.meta.url)),
  },

  // This import works as intended
  css: ["~/assets/main.css"],
});
