import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  build: {
    minify: true,
    soucemap: "inline",
    lib: {
      name: 'index',
      formats: ['es'],
    }
  },
  resolve: {
    extensions: [".js", ".vue", ".mjs"],
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 8080,
  }
};
