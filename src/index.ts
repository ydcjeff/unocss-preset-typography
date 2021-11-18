import { Preset, CSSObject } from 'unocss'
import { getPreflights } from './preflights'

/**
 * @public
 */
export interface TypographyOptions {
  /**
   * The class name to use the typographic utilities.
   * Not to apply the styles to the elements, use it like
   * `not-${className}` which is by default `not-prose`.
   *
   * Note: `not` utility is only usable in class.
   *
   * @defaultValue `prose`
   */
  className?: string

  /**
   * Extend or override CSS selectors with CSS declarations.
   *
   * @defaultValue undefined
   */
  cssExtend?: Record<string, CSSObject>
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
  let colorProse = ''
  const className = options?.className || 'prose'
  const classNameRE = new RegExp(`^${className}$`)
  const colorsRE = new RegExp(
    `${className}-(rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|warmgray|truegray|gray|coolgray|bluegray)`
  )
  const invertRE = new RegExp(`^${className}-invert$`)
  const cssExtend = options?.cssExtend

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
          colorProse = color
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
            '--uno-prose-tr-bg': theme['colors'][color][100]
          }
        },
        { layer: 'typography' }
      ],
      [
        invertRE,
        (_, { theme }) => {
          const color = colorProse
          return {
            '--uno-prose-body': theme['colors'][color][300],
            '--uno-prose-headings': theme['colors'].white,
            '--uno-prose-lead': theme['colors'][color][400],
            '--uno-prose-links': theme['colors'].white,
            '--uno-prose-bold': theme['colors'].white,
            '--uno-prose-counters': theme['colors'][color][400],
            '--uno-prose-bullets': theme['colors'][color][600],
            '--uno-prose-hr': theme['colors'][color][700],
            '--uno-prose-quotes': theme['colors'][color][100],
            '--uno-prose-quote-borders': theme['colors'][color][700],
            '--uno-prose-captions': theme['colors'][color][400],
            '--uno-prose-code': theme['colors'].white,
            '--uno-prose-pre-code': theme['colors'][color][300],
            '--uno-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--uno-prose-th-borders': theme['colors'][color][600],
            '--uno-prose-td-borders': theme['colors'][color][700],
            '--uno-prose-tr-bg': theme['colors'][color][800]
          }
        },
        { layer: 'typography' }
      ]
    ],
    preflights: [
      {
        layer: 'typography',
        getCSS: () =>
          hasProseClass
            ? getPreflights(selectorProse, className, cssExtend)
            : undefined
      }
    ]
  }
}
