import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import shebangPlugin from './rollup-plugins/rollup-plugin-shebang.js'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
      plugins: [terser()],
    },
  ],
  plugins: [typescript(), nodeResolve(), commonjs(), shebangPlugin()],
}
