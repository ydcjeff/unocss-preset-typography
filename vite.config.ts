import { defineConfig } from 'vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import { presetTypography } from './src'

import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    unocss({
      presets: [
        presetAttributify(),
        presetIcons(),
        presetUno(),
        presetTypography()
      ]
    })
  ],
  build: {
    minify: process.env.DEMO === 'demo',
    lib: process.env.DEMO
      ? false
      : {
          entry: './src/index.ts',
          formats: ['es', 'cjs'],
          fileName: (fmt: string) => 'index' + (fmt === 'es' ? `.js` : `.cjs`)
        },
    rollupOptions: {
      external: ['unocss']
    }
  }
})
