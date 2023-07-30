import shebangPlugin from './rollup-plugins/rollup-plugin-shebang.js'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.ts',
  plugins: [shebangPlugin()],
  output: [
    {
      file: 'dist/index.js',
      format: 'iife',
    },
    {
      file: 'dist/index.min.js',
      format: 'iife',
      plugins: [terser()],
    },
  ],
}
