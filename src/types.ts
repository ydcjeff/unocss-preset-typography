export interface Style {
  sm: Record<string, string | object>
  base: Record<string, string | object>
  lg: Record<string, string | object>
  xl: Record<string, string | object>
  '2xl': Record<string, string | object>
}

export interface TypographyOptions {
  /**
   * The class name to use the typographic utilities.
   * Not to apply the styles to the elements, use it like
   * `not-${className}` which is by default `not-prose`.
   *
   * @defaultValue `prose`
   */
  className?: string
}
