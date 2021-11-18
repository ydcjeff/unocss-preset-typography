import { mergeDeep } from 'unocss'
import { DEFAULT } from './default'

function getCSS(
  selectorProse: string,
  className: string,
  preflights: object
): string {
  let css = ''

  for (const selector in preflights) {
    const cssDeclarations = preflights[selector]

    // since pseudo class & elements can't be matched
    // within single :where(), they are splitted and rejoined.
    const pseudoCSSMatchArray = selector
      .split(',')
      .map((s) => {
        // pseudo class & pseudo elements matcher
        // matches :, ::, -, (), numbers and words
        const match = s.match(/::?(?:[\(\)\:\-\d\w]+)$/g)

        if (match) {
          const matchStr = match[0]
          s = s.replace(matchStr, '')
          return `${selectorProse} :where(${s}):not(.not-${className})${matchStr}`
        }
      })
      .filter((v) => v)

    // rejoin pseudo class & elements
    // multi selectors, single utility
    if (pseudoCSSMatchArray.length) {
      css += pseudoCSSMatchArray.join(',')
    } else {
      // directly from css declaration
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
  className: string,
  cssExtend?: object | undefined
): string {
  // attribute selector
  if (!selectorProse.startsWith('[')) {
    selectorProse = '.' + selectorProse
  }

  if (cssExtend) {
    return getCSS(selectorProse, className, mergeDeep(DEFAULT, cssExtend))
  }

  return getCSS(selectorProse, className, DEFAULT)
}
