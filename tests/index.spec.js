import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { createGenerator, presetUno, presetAttributify } from 'unocss'
import { presetTypography } from 'unocss-preset-typography'
import { genSnapshot } from './utils.js'
import prettier from 'prettier'

const update = process.argv.includes('-u')
const typography = suite('typography')

const testConfigs = [
  // prose test
  {
    name: 'prose-class',
    input: 'prose text-base prose-teal dark:prose-invert',
    typographyOptions: {},
  },

  // custom prose test
  {
    name: 'prose-class-custom',
    input: 'custom text-base custom-teal dark:custom-invert',
    typographyOptions: { className: 'custom' },
  },

  // prose attribute test
  {
    name: 'prose-attribute',
    input: '<main prose text-base prose-teal dark="prose-invert"></main>',
    typographyOptions: {},
  },

  // custom prose attribute test
  {
    name: 'prose-attribute-custom',
    input: '<main custom text-base custom-teal dark="custom-invert"></main>',
    typographyOptions: { className: 'custom' },
  },

  // custom css test
  {
    name: 'prose-custom-css',
    input: 'prose',
    typographyOptions: {
      cssExtend: {
        code: {
          color: '#8b5cf6',
        },
        'a:hover': {
          color: '#f43f5e',
        },
        'a:visited': {
          color: '#14b8a6',
        },
      },
    },
  },
]

for (const tc of testConfigs) {
  typography(tc.name, async () => {
    const generator = createGenerator({
      presets: [
        presetAttributify(),
        presetUno(),
        presetTypography(tc.typographyOptions),
      ],
    })

    let { css } = await generator.generate(tc.input)
    css = prettier.format(css, {
      semi: false,
      tabWidth: 2,
      singleQuote: true,
      printWidth: 80,
      trailingComma: 'none',
      parser: 'css',
    })
    const expected = genSnapshot(css, tc.name, update)

    assert.snapshot(css, expected)
  })
}

typography.run()
