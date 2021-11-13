import { em, round, rem } from './utils'
import { VariantHandler, escapeSelector } from 'unocss'

interface Style {
  sm: Record<string, string | object>
  base: Record<string, string | object>
  lg: Record<string, string | object>
  xl: Record<string, string | object>
  '2xl': Record<string, string | object>
}

// Below styles are referenced from
// https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
// License MIT - TailwindCSS

export const styles: Style = {
  sm: {
    'font-size': rem(14),
    'line-height': round(24 / 14),
    p: {
      'margin-top': em(16, 14),
      'margin-bottom': em(16, 14)
    },
    '[class~="lead"]': {
      'font-size': em(18, 14),
      'line-height': round(28 / 18),
      'margin-top': em(16, 18),
      'margin-bottom': em(16, 18)
    },
    blockquote: {
      'margin-top': em(24, 18),
      'margin-bottom': em(24, 18),
      'padding-left': em(20, 18)
    },
    h1: {
      'font-size': em(30, 14),
      'margin-top': '0',
      'margin-bottom': em(24, 30),
      'line-height': round(36 / 30)
    },
    h2: {
      'font-size': em(20, 14),
      'margin-top': em(32, 20),
      'margin-bottom': em(16, 20),
      'line-height': round(28 / 20)
    },
    h3: {
      'font-size': em(18, 14),
      'margin-top': em(28, 18),
      'margin-bottom': em(8, 18),
      'line-height': round(28 / 18)
    },
    h4: {
      'margin-top': em(20, 14),
      'margin-bottom': em(8, 14),
      'line-height': round(20 / 14)
    },
    img: {
      'margin-top': em(24, 14),
      'margin-bottom': em(24, 14)
    },
    video: {
      'margin-top': em(24, 14),
      'margin-bottom': em(24, 14)
    },
    figure: {
      'margin-top': em(24, 14),
      'margin-bottom': em(24, 14)
    },
    'figure > *': {
      'margin-top': '0',
      'margin-bottom': '0'
    },
    figcaption: {
      'font-size': em(12, 14),
      'line-height': round(16 / 12),
      'margin-top': em(8, 12)
    },
    code: {
      'font-size': em(12, 14)
    },
    'h2 code': {
      'font-size': em(18, 20)
    },
    'h3 code': {
      'font-size': em(16, 18)
    },
    pre: {
      'font-size': em(12, 14),
      'line-height': round(20 / 12),
      'margin-top': em(20, 12),
      'margin-bottom': em(20, 12),
      'border-radius': rem(4),
      'padding-top': em(8, 12),
      'padding-right': em(12, 12),
      'padding-bottom': em(8, 12),
      'padding-left': em(12, 12)
    },
    ol: {
      'margin-top': em(16, 14),
      'margin-bottom': em(16, 14),
      'padding-left': em(22, 14)
    },
    ul: {
      'margin-top': em(16, 14),
      'margin-bottom': em(16, 14),
      'padding-left': em(22, 14)
    },
    li: {
      'margin-top': em(4, 14),
      'margin-bottom': em(4, 14)
    },
    'ol > li': {
      'padding-left': em(6, 14)
    },
    'ul > li': {
      'padding-left': em(6, 14)
    },
    '> ul > li p': {
      'margin-top': em(8, 14),
      'margin-bottom': em(8, 14)
    },
    '> ul > li > *:first-child': {
      'margin-top': em(16, 14)
    },
    '> ul > li > *:last-child': {
      'margin-bottom': em(16, 14)
    },
    '> ol > li > *:first-child': {
      'margin-top': em(16, 14)
    },
    '> ol > li > *:last-child': {
      'margin-bottom': em(16, 14)
    },
    'ul ul, ul ol, ol ul, ol ol': {
      'margin-top': em(8, 14),
      'margin-bottom': em(8, 14)
    },
    hr: {
      'margin-top': em(40, 14),
      'margin-bottom': em(40, 14)
    },
    'hr + *': {
      'margin-top': '0'
    },
    'h2 + *': {
      'margin-top': '0'
    },
    'h3 + *': {
      'margin-top': '0'
    },
    'h4 + *': {
      'margin-top': '0'
    },
    table: {
      'font-size': em(12, 14),
      'line-height': round(18 / 12)
    },
    'thead th': {
      'padding-right': em(12, 12),
      'padding-bottom': em(8, 12),
      'padding-left': em(12, 12)
    },
    'tbody td': {
      'padding-top': em(8, 12),
      'padding-right': em(12, 12),
      'padding-bottom': em(8, 12),
      'padding-left': em(12, 12)
    },
    '> :first-child': {
      'margin-top': '0'
    },
    '> :last-child': {
      'margin-bottom': '0'
    }
  },
  base: {
    'max-width': '65ch',
    'font-size': rem(16),
    'line-height': round(28 / 16),
    color: 'var(--uno-prose-body)',
    a: {
      color: 'var(--uno-prose-links)',
      'text-decoration': 'underline',
      'font-weight': '500'
    },
    'a code': {
      color: 'var(--uno-prose-links)'
    },
    strong: {
      color: 'var(--uno-prose-bold)',
      'font-weight': '600'
    },
    p: {
      'margin-top': em(20, 16),
      'margin-bottom': em(20, 16)
    },
    '[class~="lead"]': {
      color: 'var(--uno-prose-lead)',
      'font-size': em(20, 16),
      'line-height': round(32 / 20),
      'margin-top': em(24, 20),
      'margin-bottom': em(24, 20)
    },
    blockquote: {
      color: 'var(--uno-prose-quotes)',
      margin: em(32, 20) + ' 0 ' + em(32, 20),
      'padding-left': em(20, 20),
      'font-weight': '500',
      'font-style': 'italic',
      'border-left': '.25rem solid var(--uno-prose-quote-borders)'
    },
    h1: {
      color: 'var(--uno-prose-headings)',
      'font-size': em(36, 16),
      'margin-top': '0',
      'margin-bottom': em(32, 36),
      'line-height': round(40 / 36),
      'font-weight': '800'
    },
    'h1 strong': {
      'font-weight': '900'
    },
    h2: {
      color: 'var(--uno-prose-headings)',
      'font-weight': '700',
      'font-size': em(24, 16),
      'margin-top': em(48, 24),
      'margin-bottom': em(24, 24),
      'line-height': round(32 / 24)
    },
    'h2 strong': {
      'font-weight': '800'
    },
    h3: {
      color: 'var(--uno-prose-headings)',
      'font-weight': '600',
      'font-size': em(20, 16),
      'margin-top': em(32, 20),
      'margin-bottom': em(12, 20),
      'line-height': round(32 / 20)
    },
    'h3 strong': {
      'font-weight': '700'
    },
    h4: {
      color: 'var(--uno-prose-headings)',
      'font-weight': '600',
      'margin-top': em(24, 16),
      'margin-bottom': em(8, 16),
      'line-height': round(24 / 16)
    },
    'h4 strong': {
      'font-weight': '700'
    },
    img: {
      height: 'auto',
      'max-width': '100%',
      margin: em(32, 16) + ' 0 ' + em(32, 16)
    },
    video: {
      height: 'auto',
      margin: em(32, 16) + ' 0 ' + em(32, 16),
      'max-width': '100%'
    },
    figure: {
      margin: em(32, 16) + ' 0 ' + em(32, 16)
    },
    'figure > *': {
      'margin-top': '0',
      'margin-bottom': '0'
    },
    figcaption: {
      color: 'var(--uno-prose-captions)',
      'font-size': em(14, 16),
      'line-height': round(20 / 14),
      'margin-top': em(12, 14)
    },
    code: {
      color: 'var(--uno-prose-code)',
      'font-weight': '600',
      'font-size': em(14, 16)
    },
    'code::before': {
      content: '"`"'
    },
    'code::after': {
      content: '"`"'
    },
    'h2 code': {
      'font-size': em(21, 24)
    },
    'h3 code': {
      'font-size': em(18, 20)
    },
    pre: {
      color: 'var(--uno-prose-pre-code)',
      'overflow-x': 'auto',
      'background-color': 'var(--uno-prose-pre-bg)',
      'font-weight': '400',
      'font-size': em(14, 16),
      'line-height': round(24 / 14),
      'margin-top': em(24, 14),
      'margin-bottom': em(24, 14),
      'border-radius': rem(6),
      'padding-top': em(12, 14),
      'padding-right': em(16, 14),
      'padding-bottom': em(12, 14),
      'padding-left': em(16, 14)
    },
    'pre code': {
      color: 'inherit',
      padding: '0',
      'background-color': 'transparent',
      'border-width': '0',
      'border-radius': '0',
      'font-weight': 'inherit',
      'font-size': 'inherit',
      'font-family': 'inherit',
      'line-height': 'inherit'
    },
    'pre code::before': {
      content: 'none'
    },
    'pre code::after': {
      content: 'none'
    },
    ol: {
      'list-style-type': 'decimal',
      'margin-top': em(20, 16),
      'margin-bottom': em(20, 16),
      'padding-left': em(26, 16)
    },
    'ol[type="A"]': {
      'list-style-type': 'upper-alpha'
    },
    'ol[type="a"]': {
      'list-style-type': 'lower-alpha'
    },
    'ol[type="A" s]': {
      'list-style-type': 'upper-alpha'
    },
    'ol[type="a" s]': {
      'list-style-type': 'lower-alpha'
    },
    'ol[type="I"]': {
      'list-style-type': 'upper-roman'
    },
    'ol[type="i"]': {
      'list-style-type': 'lower-roman'
    },
    'ol[type="I" s]': {
      'list-style-type': 'upper-roman'
    },
    'ol[type="i" s]': {
      'list-style-type': 'lower-roman'
    },
    'ol[type="1"]': {
      'list-style-type': 'decimal'
    },
    'ol > li::marker': {
      'font-weight': '400',
      color: 'var(--uno-prose-counters)'
    },
    ul: {
      'margin-top': em(20, 16),
      'margin-bottom': em(20, 16),
      'padding-left': em(26, 16),
      'list-style-type': 'disc'
    },
    'ul > li::marker': {
      color: 'var(--uno-prose-bullets)'
    },
    li: {
      'margin-top': em(8, 16),
      'margin-bottom': em(8, 16)
    },
    'ol > li': {
      'padding-left': em(6, 16)
    },
    'ul > li': {
      'padding-left': em(6, 16)
    },
    '> ul > li p': {
      'margin-top': em(12, 16),
      'margin-bottom': em(12, 16)
    },
    '> ul > li > *:first-child': {
      'margin-top': em(20, 16)
    },
    '> ul > li > *:last-child': {
      'margin-bottom': em(20, 16)
    },
    '> ol > li > *:first-child': {
      'margin-top': em(20, 16)
    },
    '> ol > li > *:last-child': {
      'margin-bottom': em(20, 16)
    },
    'ul ul, ul ol, ol ul, ol ol': {
      'margin-top': em(12, 16),
      'margin-bottom': em(12, 16)
    },
    hr: {
      'margin-top': em(48, 16),
      'margin-bottom': em(48, 16),
      'border-color': 'var(--uno-prose-hr)',
      'border-top-width': 1
    },
    'hr + *': {
      'margin-top': '0'
    },
    'h2 + *': {
      'margin-top': '0'
    },
    'h3 + *': {
      'margin-top': '0'
    },
    'h4 + *': {
      'margin-top': '0'
    },
    table: {
      width: '100%',
      'table-layout': 'auto',
      'text-align': 'left',
      'margin-top': em(32, 16),
      'margin-bottom': em(32, 16),
      'font-size': em(14, 16),
      'line-height': round(24 / 14),
      'text-indent': 0,
      'border-color': 'inherit',
      'border-collapse': 'collapse',
      'overflow-x': 'auto'
    },
    thead: {
      'border-bottom': '1px solid var(--uno-prose-th-borders)'
    },
    'thead th': {
      color: 'var(--uno-prose-headings)',
      'font-weight': '600',
      'vertical-align': 'bottom',
      'padding-top': em(8, 14),
      'padding-right': em(8, 14),
      'padding-bottom': em(8, 14),
      'padding-left': em(8, 14)
    },
    'tbody tr': {
      'border-bottom': '1px solid var(--uno-prose-th-borders)'
    },
    'tbody tr:last-child': {
      'border-bottom-width': '0'
    },
    'tbody td': {
      'vertical-align': 'baseline',
      'padding-top': em(8, 14),
      'padding-right': em(8, 14),
      'padding-bottom': em(8, 14),
      'padding-left': em(8, 14)
    },
    'tr:nth-child(2n)': {
      'background-color': 'var(--uno-prose-tr-bg)'
    },
    'td, th': {
      border: '1px solid var(--uno-prose-td-borders)'
    },
    '> :first-child': {
      'margin-top': '0'
    },
    '> :last-child': {
      'margin-bottom': '0'
    }
  },
  lg: {
    'font-size': rem(18),
    'line-height': round(32 / 18),
    p: {
      'margin-top': em(24, 18),
      'margin-bottom': em(24, 18)
    },
    '[class~="lead"]': {
      'font-size': em(22, 18),
      'line-height': round(32 / 22),
      'margin-top': em(24, 22),
      'margin-bottom': em(24, 22)
    },
    blockquote: {
      'margin-top': em(40, 24),
      'margin-bottom': em(40, 24),
      'padding-left': em(24, 24)
    },
    h1: {
      'font-size': em(48, 18),
      'margin-top': '0',
      'margin-bottom': em(40, 48),
      'line-height': round(48 / 48)
    },
    h2: {
      'font-size': em(30, 18),
      'margin-top': em(56, 30),
      'margin-bottom': em(32, 30),
      'line-height': round(40 / 30)
    },
    h3: {
      'font-size': em(24, 18),
      'margin-top': em(40, 24),
      'margin-bottom': em(16, 24),
      'line-height': round(36 / 24)
    },
    h4: {
      'margin-top': em(32, 18),
      'margin-bottom': em(8, 18),
      'line-height': round(28 / 18)
    },
    img: {
      'margin-top': em(32, 18),
      'margin-bottom': em(32, 18)
    },
    video: {
      'margin-top': em(32, 18),
      'margin-bottom': em(32, 18)
    },
    figure: {
      'margin-top': em(32, 18),
      'margin-bottom': em(32, 18)
    },
    'figure > *': {
      'margin-top': '0',
      'margin-bottom': '0'
    },
    figcaption: {
      'font-size': em(16, 18),
      'line-height': round(24 / 16),
      'margin-top': em(16, 16)
    },
    code: {
      'font-size': em(16, 18)
    },
    'h2 code': {
      'font-size': em(26, 30)
    },
    'h3 code': {
      'font-size': em(21, 24)
    },
    pre: {
      'font-size': em(16, 18),
      'line-height': round(28 / 16),
      'margin-top': em(32, 16),
      'margin-bottom': em(32, 16),
      'border-radius': rem(6),
      'padding-top': em(16, 16),
      'padding-right': em(24, 16),
      'padding-bottom': em(16, 16),
      'padding-left': em(24, 16)
    },
    ol: {
      'margin-top': em(24, 18),
      'margin-bottom': em(24, 18),
      'padding-left': em(28, 18)
    },
    ul: {
      'margin-top': em(24, 18),
      'margin-bottom': em(24, 18),
      'padding-left': em(28, 18)
    },
    li: {
      'margin-top': em(12, 18),
      'margin-bottom': em(12, 18)
    },
    'ol > li': {
      'padding-left': em(8, 18)
    },
    'ul > li': {
      'padding-left': em(8, 18)
    },
    '> ul > li p': {
      'margin-top': em(16, 18),
      'margin-bottom': em(16, 18)
    },
    '> ul > li > *:first-child': {
      'margin-top': em(24, 18)
    },
    '> ul > li > *:last-child': {
      'margin-bottom': em(24, 18)
    },
    '> ol > li > *:first-child': {
      'margin-top': em(24, 18)
    },
    '> ol > li > *:last-child': {
      'margin-bottom': em(24, 18)
    },
    'ul ul, ul ol, ol ul, ol ol': {
      'margin-top': em(16, 18),
      'margin-bottom': em(16, 18)
    },
    hr: {
      'margin-top': em(56, 18),
      'margin-bottom': em(56, 18)
    },
    'hr + *': {
      'margin-top': '0'
    },
    'h2 + *': {
      'margin-top': '0'
    },
    'h3 + *': {
      'margin-top': '0'
    },
    'h4 + *': {
      'margin-top': '0'
    },
    table: {
      'font-size': em(16, 18),
      'line-height': round(24 / 16)
    },
    'thead th': {
      'padding-right': em(12, 16),
      'padding-bottom': em(12, 16),
      'padding-left': em(12, 16)
    },
    'tbody td': {
      'padding-top': em(12, 16),
      'padding-right': em(12, 16),
      'padding-bottom': em(12, 16),
      'padding-left': em(12, 16)
    },
    '> :first-child': {
      'margin-top': '0'
    },
    '> :last-child': {
      'margin-bottom': '0'
    }
  },
  xl: {
    'font-size': rem(20),
    'line-height': round(36 / 20),
    p: {
      'margin-top': em(24, 20),
      'margin-bottom': em(24, 20)
    },
    '[class~="lead"]': {
      'font-size': em(24, 20),
      'line-height': round(36 / 24),
      'margin-top': em(24, 24),
      'margin-bottom': em(24, 24)
    },
    blockquote: {
      'margin-top': em(48, 30),
      'margin-bottom': em(48, 30),
      'padding-left': em(32, 30)
    },
    h1: {
      'font-size': em(56, 20),
      'margin-top': '0',
      'margin-bottom': em(48, 56),
      'line-height': round(56 / 56)
    },
    h2: {
      'font-size': em(36, 20),
      'margin-top': em(56, 36),
      'margin-bottom': em(32, 36),
      'line-height': round(40 / 36)
    },
    h3: {
      'font-size': em(30, 20),
      'margin-top': em(48, 30),
      'margin-bottom': em(20, 30),
      'line-height': round(40 / 30)
    },
    h4: {
      'margin-top': em(36, 20),
      'margin-bottom': em(12, 20),
      'line-height': round(32 / 20)
    },
    img: {
      'margin-top': em(40, 20),
      'margin-bottom': em(40, 20)
    },
    video: {
      'margin-top': em(40, 20),
      'margin-bottom': em(40, 20)
    },
    figure: {
      'margin-top': em(40, 20),
      'margin-bottom': em(40, 20)
    },
    'figure > *': {
      'margin-top': '0',
      'margin-bottom': '0'
    },
    figcaption: {
      'font-size': em(18, 20),
      'line-height': round(28 / 18),
      'margin-top': em(18, 18)
    },
    code: {
      'font-size': em(18, 20)
    },
    'h2 code': {
      'font-size': em(31, 36)
    },
    'h3 code': {
      'font-size': em(27, 30)
    },
    pre: {
      'font-size': em(18, 20),
      'line-height': round(32 / 18),
      'margin-top': em(36, 18),
      'margin-bottom': em(36, 18),
      'border-radius': rem(8),
      'padding-top': em(20, 18),
      'padding-right': em(24, 18),
      'padding-bottom': em(20, 18),
      'padding-left': em(24, 18)
    },
    ol: {
      'margin-top': em(24, 20),
      'margin-bottom': em(24, 20),
      'padding-left': em(32, 20)
    },
    ul: {
      'margin-top': em(24, 20),
      'margin-bottom': em(24, 20),
      'padding-left': em(32, 20)
    },
    li: {
      'margin-top': em(12, 20),
      'margin-bottom': em(12, 20)
    },
    'ol > li': {
      'padding-left': em(8, 20)
    },
    'ul > li': {
      'padding-left': em(8, 20)
    },
    '> ul > li p': {
      'margin-top': em(16, 20),
      'margin-bottom': em(16, 20)
    },
    '> ul > li > *:first-child': {
      'margin-top': em(24, 20)
    },
    '> ul > li > *:last-child': {
      'margin-bottom': em(24, 20)
    },
    '> ol > li > *:first-child': {
      'margin-top': em(24, 20)
    },
    '> ol > li > *:last-child': {
      'margin-bottom': em(24, 20)
    },
    'ul ul, ul ol, ol ul, ol ol': {
      'margin-top': em(16, 20),
      'margin-bottom': em(16, 20)
    },
    hr: {
      'margin-top': em(56, 20),
      'margin-bottom': em(56, 20)
    },
    'hr + *': {
      'margin-top': '0'
    },
    'h2 + *': {
      'margin-top': '0'
    },
    'h3 + *': {
      'margin-top': '0'
    },
    'h4 + *': {
      'margin-top': '0'
    },
    table: {
      'font-size': em(18, 20),
      'line-height': round(28 / 18)
    },
    'thead th': {
      'padding-right': em(12, 18),
      'padding-bottom': em(16, 18),
      'padding-left': em(12, 18)
    },
    'tbody td': {
      'padding-top': em(16, 18),
      'padding-right': em(12, 18),
      'padding-bottom': em(16, 18),
      'padding-left': em(12, 18)
    },
    '> :first-child': {
      'margin-top': '0'
    },
    '> :last-child': {
      'margin-bottom': '0'
    }
  },
  '2xl': {
    'font-size': rem(24),
    'line-height': round(40 / 24),
    p: {
      'margin-top': em(32, 24),
      'margin-bottom': em(32, 24)
    },
    '[class~="lead"]': {
      'font-size': em(30, 24),
      'line-height': round(44 / 30),
      'margin-top': em(32, 30),
      'margin-bottom': em(32, 30)
    },
    blockquote: {
      'margin-top': em(64, 36),
      'margin-bottom': em(64, 36),
      'padding-left': em(40, 36)
    },
    h1: {
      'font-size': em(64, 24),
      'margin-top': '0',
      'margin-bottom': em(56, 64),
      'line-height': round(64 / 64)
    },
    h2: {
      'font-size': em(48, 24),
      'margin-top': em(72, 48),
      'margin-bottom': em(40, 48),
      'line-height': round(52 / 48)
    },
    h3: {
      'font-size': em(36, 24),
      'margin-top': em(56, 36),
      'margin-bottom': em(24, 36),
      'line-height': round(44 / 36)
    },
    h4: {
      'margin-top': em(40, 24),
      'margin-bottom': em(16, 24),
      'line-height': round(36 / 24)
    },
    img: {
      'margin-top': em(48, 24),
      'margin-bottom': em(48, 24)
    },
    video: {
      'margin-top': em(48, 24),
      'margin-bottom': em(48, 24)
    },
    figure: {
      'margin-top': em(48, 24),
      'margin-bottom': em(48, 24)
    },
    'figure > *': {
      'margin-top': '0',
      'margin-bottom': '0'
    },
    figcaption: {
      'font-size': em(20, 24),
      'line-height': round(32 / 20),
      'margin-top': em(20, 20)
    },
    code: {
      'font-size': em(20, 24)
    },
    'h2 code': {
      'font-size': em(42, 48)
    },
    'h3 code': {
      'font-size': em(32, 36)
    },
    pre: {
      'font-size': em(20, 24),
      'line-height': round(36 / 20),
      'margin-top': em(40, 20),
      'margin-bottom': em(40, 20),
      'border-radius': rem(8),
      'padding-top': em(24, 20),
      'padding-right': em(32, 20),
      'padding-bottom': em(24, 20),
      'padding-left': em(32, 20)
    },
    ol: {
      'margin-top': em(32, 24),
      'margin-bottom': em(32, 24),
      'padding-left': em(38, 24)
    },
    ul: {
      'margin-top': em(32, 24),
      'margin-bottom': em(32, 24),
      'padding-left': em(38, 24)
    },
    li: {
      'margin-top': em(12, 24),
      'margin-bottom': em(12, 24)
    },
    'ol > li': {
      'padding-left': em(10, 24)
    },
    'ul > li': {
      'padding-left': em(10, 24)
    },
    '> ul > li p': {
      'margin-top': em(20, 24),
      'margin-bottom': em(20, 24)
    },
    '> ul > li > *:first-child': {
      'margin-top': em(32, 24)
    },
    '> ul > li > *:last-child': {
      'margin-bottom': em(32, 24)
    },
    '> ol > li > *:first-child': {
      'margin-top': em(32, 24)
    },
    '> ol > li > *:last-child': {
      'margin-bottom': em(32, 24)
    },
    'ul ul, ul ol, ol ul, ol ol': {
      'margin-top': em(16, 24),
      'margin-bottom': em(16, 24)
    },
    hr: {
      'margin-top': em(72, 24),
      'margin-bottom': em(72, 24)
    },
    'hr + *': {
      'margin-top': '0'
    },
    'h2 + *': {
      'margin-top': '0'
    },
    'h3 + *': {
      'margin-top': '0'
    },
    'h4 + *': {
      'margin-top': '0'
    },
    table: {
      'font-size': em(20, 24),
      'line-height': round(28 / 20)
    },
    'thead th': {
      'padding-right': em(12, 20),
      'padding-bottom': em(16, 20),
      'padding-left': em(12, 20)
    },
    'tbody td': {
      'padding-top': em(16, 20),
      'padding-right': em(12, 20),
      'padding-bottom': em(16, 20),
      'padding-left': em(12, 20)
    },
    '> :first-child': {
      'margin-top': '0'
    },
    '> :last-child': {
      'margin-bottom': '0'
    }
  }
}

export function getCSS(
  // @ts-ignore
  styles,
  prose: string,
  variantHandlers: VariantHandler[]
): string {
  let css = ''
  let end = ''

  for (const vh of variantHandlers) {
    const mq = vh.mediaQuery
    if (mq) {
      css += `${mq} {`
      end = '}'
    }
  }

  for (const key in styles) {
    const value = styles[key]
    const isStrValue = typeof value === 'string'

    if (prose.startsWith('[')) {
      css += isStrValue ? `${prose}` : `${prose} ${key}`
    } else {
      css += `.${escapeSelector(prose)}`

      if (key.endsWith('::before')) {
        css += ` :where(${key.slice(
          0,
          -8
        )}):not(:where([class~="not-prose"]))::before`
      } else if (key.endsWith('::after')) {
        css += ` :where(${key.slice(
          0,
          -7
        )}):not(:where([class~="not-prose"]))::after`
      } else if (key.endsWith('::marker')) {
        css += ` :where(${key.slice(
          0,
          -8
        )}):not(:where([class~="not-prose"]))::marker`
      } else if (!isStrValue) {
        css += ` :where(${key}):not(:where([class~="not-prose"]))`
      }
    }

    css += '{'

    if (isStrValue) {
      css += `${key}:${value};`
    } else {
      for (const cssKey in value) {
        const cssVal = value[cssKey]
        css += `${cssKey}:${cssVal};`
      }
    }
    css += '}'
  }

  return css + end
}
