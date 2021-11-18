import { DEFAULT } from './default'

function getCSS(
  selectorProse: string,
  className: string,
  preflights: object
): string {
  let css = ''

  for (const selector in preflights) {
    const cssDeclarations = preflights[selector]

    if (
      selector.endsWith('::before') ||
      selector.endsWith('::after') ||
      selector.endsWith('::marker')
    ) {
      css += selector
        .split(',')
        .map((s) => {
          if (s.endsWith('::before')) {
            s = s.replace('::before', '')
            return `${selectorProse} :where(${s}):not(.not-${className})::before`
          }

          if (s.endsWith('::after')) {
            s = s.replace('::after', '')
            return `${selectorProse} :where(${s}):not(.not-${className})::after`
          }

          if (s.endsWith('::marker')) {
            s = s.replace('::marker', '')
            return `${selectorProse} :where(${s}):not(.not-${className})::marker`
          }
        })
        .join(',')
    } else {
      css += `${selectorProse} :where(${selector}):not(.not-${className})`
    }

    css += '{'

    for (const k in cssDeclarations) {
      const v = cssDeclarations[k]
      css += `${k}:${v};`
    }

    css += '}'
  }
  return css
}

export function getPreflights(
  selectorProse: string,
  className: string
): string {
  // attribute selector
  if (!selectorProse.startsWith('[')) {
    selectorProse = '.' + selectorProse
  }

  let css = getCSS(selectorProse, className, DEFAULT)

  return css
}
