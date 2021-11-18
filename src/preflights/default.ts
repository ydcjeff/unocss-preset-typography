export const DEFAULT = {
  'h1,h2,h3,h4,h5,h6': {
    color: 'var(--uno-prose-headings)',
    'font-weight': '600',
    'line-height': 1.25
  },
  a: {
    color: 'var(--uno-prose-links)',
    'text-decoration': 'underline',
    'font-weight': '500'
  },
  'a code': {
    color: 'var(--uno-prose-links)'
  },
  'p,ul,ol': {
    margin: '1em 0',
    'line-height': 1.75
  },
  blockquote: {
    margin: '1em 0',
    'padding-left': '1em',
    'font-style': 'italic',
    'border-left': '.25em solid var(--uno-prose-quote-borders)'
  },
  // taking 16px as a base, we scale h1, h2, h3, and h4 like
  // 16 (base) > 18 (h4) > 22 (h3) > 28 (h2) > 36 (h1)
  h1: {
    margin: '1rem 0', // h1 is always at the top of the page, so only margin 1 * root font size
    'font-size': '2.25em'
  },
  h2: {
    margin: '1.75em 0 .5em',
    'font-size': '1.75em'
  },
  h3: {
    margin: '1.5em 0 .5em',
    'font-size': '1.375em'
  },
  h4: {
    margin: '1em 0',
    'font-size': '1.125em'
  },
  'img,video': {
    'max-width': '100%'
  },
  figure: {
    margin: '1em 0'
  },
  figcaption: {
    color: 'var(--uno-prose-captions)',
    'font-size': '0.875em'
  },
  code: {
    color: 'var(--uno-prose-code)',
    'font-size': '0.875em',
    'font-weight': 600,
    'font-family':
      'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation-Mono,Courier-New,monospace'
  },
  ':not(pre) > code::before,:not(pre) > code::after': {
    content: '"`"'
  },
  pre: {
    padding: '1.25rem 1.5rem',
    margin: 0,
    'overflow-x': 'auto',
    'border-radius': '0.375rem'
  },
  'pre,code': {
    'white-space': 'pre',
    'word-spacing': 'normal',
    'word-break': 'normal',
    'word-wrap': 'normal',
    '-moz-tab-size': 4,
    '-o-tab-size': 4,
    'tab-size': 4,
    '-webkit-hyphens': 'none',
    '-moz-hyphens': 'none',
    hyphens: 'none',
    background: 'transparent'
  },
  'pre code': {
    'font-weight': 'inherit'
  },
  'ol,ul': {
    'padding-left': '1.25em'
  },
  ul: {
    'list-style-type': 'disc'
  },
  'ol > li::marker,ul > li::marker': {
    color: 'var(--uno-prose-counters)'
  },
  hr: {
    margin: '2em 0',
    border: '1px solid var(--uno-prose-hr)'
  },
  table: {
    display: 'block',
    margin: '1em 0',
    'border-collapse': 'collapse',
    'overflow-x': 'auto'
  },
  'tr:nth-child(2n)': {
    'background-color': 'var(--uno-prose-tr-bg)'
  },
  'td,th': {
    border: '1px solid var(--uno-prose-td-borders)',
    padding: '.625em 1em'
  }
}
