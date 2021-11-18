import { Preset } from 'unocss'
import { getPreflights } from './preflights'

interface TypographyOptions {
  /**
   * The class name to use the typographic utilities.
   * Not to apply the styles to the elements, use it like
   * `not-${className}` which is by default `not-prose`.
   *
   * @defaultValue `prose`
   */
  className?: string
}

/**
 * UnoCSS Preset for Typography
 *
 * ```js
 * // unocss.config.js
 * import { presetAttributify, presetUno, defineConfig } from 'unocss'
 * import { presetTypography } from 'unocss-preset-typography'
 *
 * export default defineConfig({
 *   presets: [
 *     presetAttributify(), // required if using attributify mode
 *     presetUno(), // required
 *     presetTypography()
 *   ]
 * })
 * ```
 *
 * @returns typography preset
 * @public
 */
export function presetTypography(options?: TypographyOptions): Preset {
  let hasProseClass = false
  let selectorProse = ''
  const className = options?.className || 'prose'
  const classNameRE = new RegExp(`^${className}$`)
  const colorsRE = new RegExp(
    `${className}-(rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|warmgray|truegray|gray|coolgray|bluegray)`
  )
  const invertRE = new RegExp(`${className}-invert`)

  return {
    name: 'unocss-preset-typography',
    enforce: 'post',
    layers: { typography: 8 },
    rules: [
      [
        classNameRE,
        (_, { rawSelector }) => {
          hasProseClass = true
          selectorProse = rawSelector
          return { color: 'var(--uno-prose-body)', 'max-width': '65ch' }
        },
        { layer: 'typography' }
      ],
      [
        colorsRE,
        ([, color], { theme }) => {
          return {
            '--uno-prose-body': theme['colors'][color][700],
            '--uno-prose-headings': theme['colors'][color][900],
            '--uno-prose-lead': theme['colors'][color][600],
            '--uno-prose-links': theme['colors'][color][900],
            '--uno-prose-bold': theme['colors'][color][900],
            '--uno-prose-counters': theme['colors'][color][500],
            '--uno-prose-bullets': theme['colors'][color][300],
            '--uno-prose-hr': theme['colors'][color][200],
            '--uno-prose-quotes': theme['colors'][color][900],
            '--uno-prose-quote-borders': theme['colors'][color][200],
            '--uno-prose-captions': theme['colors'][color][500],
            '--uno-prose-code': theme['colors'][color][900],
            '--uno-prose-pre-code': theme['colors'][color][200],
            '--uno-prose-pre-bg': theme['colors'][color][800],
            '--uno-prose-th-borders': theme['colors'][color][300],
            '--uno-prose-td-borders': theme['colors'][color][200],
            '--uno-prose-tr-bg': theme['colors'][color][100],
            '--uno-prose-invert-headings': theme['colors'].white,
            '--uno-prose-invert-lead': theme['colors'][color][400],
            '--uno-prose-invert-body': theme['colors'][color][300],
            '--uno-prose-invert-links': theme['colors'].white,
            '--uno-prose-invert-bold': theme['colors'].white,
            '--uno-prose-invert-counters': theme['colors'][color][400],
            '--uno-prose-invert-bullets': theme['colors'][color][600],
            '--uno-prose-invert-hr': theme['colors'][color][700],
            '--uno-prose-invert-quotes': theme['colors'][color][100],
            '--uno-prose-invert-quote-borders': theme['colors'][color][700],
            '--uno-prose-invert-captions': theme['colors'][color][400],
            '--uno-prose-invert-code': theme['colors'].white,
            '--uno-prose-invert-pre-code': theme['colors'][color][300],
            '--uno-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--uno-prose-invert-th-borders': theme['colors'][color][600],
            '--uno-prose-invert-td-borders': theme['colors'][color][700],
            '--uno-prose-invert-tr-bg': theme['colors'][color][800]
          }
        },
        { layer: 'typography' }
      ],
      [
        invertRE,
        () => {
          return {
            '--uno-prose-body': 'var(--uno-prose-invert-body)',
            '--uno-prose-headings': 'var(--uno-prose-invert-headings)',
            '--uno-prose-lead': 'var(--uno-prose-invert-lead)',
            '--uno-prose-links': 'var(--uno-prose-invert-links)',
            '--uno-prose-bold': 'var(--uno-prose-invert-bold)',
            '--uno-prose-counters': 'var(--uno-prose-invert-counters)',
            '--uno-prose-bullets': 'var(--uno-prose-invert-bullets)',
            '--uno-prose-hr': 'var(--uno-prose-invert-hr)',
            '--uno-prose-quotes': 'var(--uno-prose-invert-quotes)',
            '--uno-prose-quote-borders':
              'var(--uno-prose-invert-quote-borders)',
            '--uno-prose-captions': 'var(--uno-prose-invert-captions)',
            '--uno-prose-code': 'var(--uno-prose-invert-code)',
            '--uno-prose-pre-code': 'var(--uno-prose-invert-pre)',
            '--uno-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--uno-prose-th-borders': 'var(--uno-prose-invert-th-borders)',
            '--uno-prose-td-borders': 'var(--uno-prose-invert-td-borders)',
            '--uno-prose-tr-bg': 'var(--uno-prose-invert-tr-bg)'
          }
        },
        { layer: 'typography' }
      ]
    ],
    preflights: [
      {
        layer: 'typography',
        getCSS: () =>
          hasProseClass ? getPreflights(selectorProse, className) : undefined
      }
    ]
  }
}
