import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vitest/config';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import fs from 'fs';

const getCert = ()=>{
  try{
    return fs.readFileSync('./proxy/host.crt');
  } catch(ex){
    console.error("Cert not found\n", ex);
  }
}
const getKey = ()=>{
  try{
    return fs.readFileSync('./proxy/host.key');
  } catch(ex){
    console.error("Key not found\n", ex);
  }
}

const config = {
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
    https: {
      key: getKey(),
      cert: getCert(),
    },
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
}

export default defineConfig(config);
