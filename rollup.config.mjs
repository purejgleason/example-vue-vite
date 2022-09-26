import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy'
export default {
  input: 'src/index.mjs',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'index.html', dest: 'dist' }
      ]
    })
  ]
};