import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
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
  },
  test: {
    coverage: {
      reporter: ['html'],
    },
  }
});
