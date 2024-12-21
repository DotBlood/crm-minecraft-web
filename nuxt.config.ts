// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@prisma/nuxt", "@nuxt/ui", "@pinia/nuxt"],
  css: ["./src/shared/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  alias: {
    "@": "../src",
  },

  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
  },
});
