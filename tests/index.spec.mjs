// @ts-check

import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import { createGenerator, presetUno } from 'unocss'
import { presetTypography } from 'unocss-preset-typography'
import { genSnapshot } from './utils.mjs'

const typography = suite('typography')

const testConfigs = [
  // prose & its modifiers
  { name: 'prose', input: 'prose', typographyOptions: {} },
  { name: 'prose-&-prose-sm', input: 'prose prose-sm', typographyOptions: {} },
  { name: 'prose-&-prose-lg', input: 'prose prose-lg', typographyOptions: {} },
  { name: 'prose-&-prose-xl', input: 'prose prose-xl', typographyOptions: {} },
  {
    name: 'prose-&-prose-2xl',
    input: 'prose prose-2xl',
    typographyOptions: {}
  },

  // prose & its modifiers with screen variants
  {
    name: 'prose-&-sm:prose-sm',
    input: 'prose sm:prose-sm',
    typographyOptions: {}
  },
  {
    name: 'prose-&-lg:prose-lg',
    input: 'prose lg:prose-lg',
    typographyOptions: {}
  },
  {
    name: 'prose-&-xl:prose-xl',
    input: 'prose xl:prose-xl',
    typographyOptions: {}
  },
  {
    name: 'prose-&-2xl:prose-2xl',
    input: 'prose 2xl:prose-2xl',
    typographyOptions: {}
  },

  // custom className
  {
    name: 'className-test',
    input: 'test',
    typographyOptions: { className: 'test' }
  },
  {
    name: 'className-test-&-test-sm',
    input: 'test test-sm',
    typographyOptions: { className: 'test' }
  },
  {
    name: 'className-test-&-test-lg',
    input: 'test test-lg',
    typographyOptions: { className: 'test' }
  },
  {
    name: 'className-test-&-test-xl',
    input: 'test test-xl',
    typographyOptions: { className: 'test' }
  },
  {
    name: 'className-test-&-test-2xl',
    input: 'test test-2xl',
    typographyOptions: { className: 'test' }
  }
]

for (const tc of testConfigs) {
  typography(tc.name, async () => {
    const generator = createGenerator({
      presets: [presetUno(), presetTypography(tc.typographyOptions)]
    })

    const { css } = await generator.generate(tc.input)
    const expected = genSnapshot(css, tc.name)

    assert.snapshot(css, expected)
  })
}

typography.run()
