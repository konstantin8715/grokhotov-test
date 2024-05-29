// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": "/<rootDir>",
  },
  modules: ["@pinia/nuxt", "nuxt-icon"],
  css: ["~/assets/main.scss"],
});
