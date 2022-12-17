export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "my_nuxt_project",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/_index.scss",
    "@/assets/css/reset.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/vue-awesome-swiper", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["@/assets/scss/_variables.scss"],
  },
  // axios: {
  //   baseURL: development ? "http://localhost:8000" : "https://domain",
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/svg-sprite",
    "@nuxtjs/axios",
    "cookie-universal-nuxt",
    [
      "@nuxtjs/dotenv",
      { filename: `.env.${process.env.NODE_ENV}`, systemvars: true },
    ],
  ],
  svgSprite: {
    // manipulate module options
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  //server setup
  server: {
    port: 5000,
  },

};
