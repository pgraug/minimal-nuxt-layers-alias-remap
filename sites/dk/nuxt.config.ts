import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-09-15",
  extends: ["../../"],
  alias: {
    "~site": fileURLToPath(new URL("./app", import.meta.url)),
    "~~site": fileURLToPath(new URL(".", import.meta.url)),
  },

  // This didn't seem to have any effect
  // vite: {
  //   resolve: {
  //     alias: {
  //       "~site": fileURLToPath(new URL("./app", import.meta.url)),
  //       "~~site": fileURLToPath(new URL(".", import.meta.url)),
  //     },
  //   },
  // },
});
