import path from 'path'

import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import del from 'rollup-plugin-delete'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'build',
    format: 'esm',
  },
  external: id => !(id.startsWith('.') || path.isAbsolute(id)),
  plugins: [
    del({
      targets: ['./build/**/*'],
    }),
    typescript(),
  ],
})
