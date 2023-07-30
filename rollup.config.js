import shebangPlugin from './rollup-plugins/rollup-plugin-shebang.js'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
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
  plugins: [typescript(), shebangPlugin()],
}
