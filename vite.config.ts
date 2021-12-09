import { defineConfig } from 'vite'
import { presetUno, presetAttributify } from 'unocss'
import { presetTypography } from './src'

import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetTypography({
          cssExtend: {
            code: {
              color: '#8b5cf6',
            },
            'a:hover': {
              color: '#f43f5e',
              'text-decoration': 'none',
            },
            'a:visited': {
              color: '#14b8a6',
            },
          },
        }),
      ],
    }),
  ],
  build: {
    minify: process.env.DEMO === 'demo',
    lib: process.env.DEMO
      ? false
      : {
          entry: './src/index.ts',
          formats: ['es'],
          fileName: () => 'index.js',
        },
    rollupOptions: {
      external: ['unocss'],
    },
  },
})
