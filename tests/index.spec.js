// @ts-check

import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { createGenerator, presetUno } from 'unocss'
import { presetTypography } from 'unocss-preset-typography'
import { genSnapshot } from './utils.js'
import prettier from 'prettier'

const update = process.argv.includes('-u')
const typography = suite('typography')

const testConfigs = [
  // prose test
  {
    name: 'prose-&-text-base',
    input: 'prose text-base',
    typographyOptions: {}
  },
  { name: 'prose-&-text-sm', input: 'prose text-sm', typographyOptions: {} },
  { name: 'prose-&-text-lg', input: 'prose text-lg', typographyOptions: {} },
  { name: 'prose-&-text-xl', input: 'prose text-xl', typographyOptions: {} },
  {
    name: 'prose-&-text-2xl',
    input: 'prose text-2xl',
    typographyOptions: {}
  },

  // prose & screen variants test
  {
    name: 'prose-&-sm:text-sm',
    input: 'prose sm:text-sm',
    typographyOptions: {}
  },

  // custom className test
  {
    name: 'className-testing-&-text-base',
    input: 'testing text-base',
    typographyOptions: { className: 'testing' }
  }
]

for (const tc of testConfigs) {
  typography(tc.name, async () => {
    const generator = createGenerator({
      presets: [presetUno(), presetTypography(tc.typographyOptions)]
    })

    let { css } = await generator.generate(tc.input)
    css = prettier.format(css, {
      semi: false,
      tabWidth: 2,
      singleQuote: true,
      printWidth: 80,
      trailingComma: 'none',
      parser: 'css'
    })
    const expected = genSnapshot(css, tc.name, update)

    assert.snapshot(css, expected)
  })
}

typography.run()
