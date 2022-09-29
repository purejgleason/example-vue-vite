import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vitest/config';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
  ],
  build: {
    minify: true,
    soucemap: 'inline',
  },
  resolve: {
    extensions: ['.js', '.vue', '.mjs'],
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    proxy: {
      '/environment': {
        target: process.env.CLOUD_URL,
        autoRewrite: true,
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: 'happy-dom',
    globals: ['vitest/globals'],
    coverage: {
      reporter: ['html'],
    },
  },
});
