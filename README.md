# unocss-preset-typography

<p>
  <a href="https://npmjs.com/package/unocss-preset-typography" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/v/unocss-preset-typography" alt="npm version">
  </a>
  <a href="https://nodejs.org/en/about/releases/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/node/v/unocss-preset-typography" alt="node version">
  </a>
  <a href="https://github.com/ydcjeff/unocss-preset-typography/actions/workflows/ci.yml" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/ydcjeff/unocss-preset-typography/actions/workflows/ci.yml/badge.svg" alt="CI status">
  </a>
</p>

> Typography Preset for UnoCSS

Installation:

```sh
npm i unocss-preset-typography unocss --save-dev # with npm
yarn add unocss-preset-typography unocss -D # with yarn
pnpm add unocss-preset-typography unocss -D # with pnpm
```

Usage:

```js
// unocss.config.js
import { presetAttributify, presetUno, defineConfig } from 'unocss'
import { presetTypography } from 'unocss-preset-typography'

export default defineConfig({
  presets: [
    presetAttributify(), // required if using attributify mode
    presetUno(), // required
    presetTypography()
  ]
})
```

<table>
<thead>
<tr style="text-align: center">
<th>With classes</th>
<th>With attributes</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<!-- prettier-ignore -->
```html
<article class="text-base prose prose-truegray xl:text-xl">
  {{ markdown }}
  <p class="not-prose">
    some text
  </p>
</article>
```

</td>

<td>

<!-- prettier-ignore -->
```html
<article text-base prose prose-truegray xl="text-xl">
  {{ markdown }}
  <p class="not-prose">
    not-prose is only available in class.
  </p>
</article>
```

</td>
</tr>
</tbody>
</table>

## Highlight

- **Any font size you want**

  Apply any font size for body you like and `prose` will scale the styles
  for the respective HTML elements. For instance, `prose text-lg` has body font
  size `1.125rem` and `h1` will with scale with that size 2.25 times.
  See [all the supported HTML elements].

  [all the supported html elements]: https://github.com/ydcjeff/unocss-preset-typography/blob/main/src/preflights/default.ts

- **Any color you like**

  Apply any color with `prose-${colorName}` by UnoCSS (e.g. `prose-coolgray`,
  `prose-sky`) since `prose` does not have any color by default.
  See [available colors](#colors). For instance, `prose prose-truegray` will
  use the respective colors for the respective HTML elements.

- **Dark mode in ONE utility**

  Apply typographic dark mode with `prose-invert` (background color needs to be
  handled by users). For instance, `prose dark:prose-invert` will use the
  inverted colors in the dark mode.

- **Your own style, still your style**

  Styles of elements not within `prose` will stay the same. No style resetting
  just like UnoCSS.

- **Undo with `not` utility**

  Apply `not-prose` to the elements to undo the typographic styles.
  For instance, `<table class="not-prose">` will skip the styles by this preset
  for the `table` element **(NOTE: `not` utility is only usable in class)**.

## Utilities

|  Rule   |                                            Styles by this rule                                            |
| :-----: | :-------------------------------------------------------------------------------------------------------: |
| `prose` | See [on GitHub](https://github.com/ydcjeff/unocss-preset-typography/blob/main/src/preflights/default.ts). |

### Colors

| Rules (color)    |
| ---------------- |
| `prose-rose`     |
| `prose-pink`     |
| `prose-fuchsia`  |
| `prose-purple`   |
| `prose-violet`   |
| `prose-indigo`   |
| `prose-blue`     |
| `prose-sky`      |
| `prose-cyan`     |
| `prose-teal`     |
| `prose-emerald`  |
| `prose-green`    |
| `prose-lime`     |
| `prose-yellow`   |
| `prose-amber`    |
| `prose-orange`   |
| `prose-red`      |
| `prose-warmgray` |
| `prose-truegray` |
| `prose-gray`     |
| `prose-coolgray` |
| `prose-bluegray` |

## Configurations

This preset has `className` and `cssExtend` configurations for users who
like to override or extend.

The CSS declarations passed to `cssExtend` will

- **override** the built-in styles if the values are conflicting, else

- **be merged** deeply with built-in styles.

```ts
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
```

### Example

```ts
// unocss.config.ts
import { presetAttributify, presetUno, defineConfig } from 'unocss'
import { presetTypography } from 'unocss-preset-typography'

export default defineConfig({
  presets: [
    presetAttributify(), // required if using attributify mode
    presetUno(), // required
    presetTypography({
      className: 'markdown', // now use like `markdown markdown-gray`, `not-markdown`
      cssExtend: {
        code: {
          color: '#8b5cf6'
        },
        'a:hover': {
          color: '#f43f5e'
        },
        'a:visited': {
          color: '#14b8a6'
        }
      }
    })
  ]
})
```

## Acknowledgement

- [TailwindCSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [WindiCSS Typography](https://github.com/windicss/windicss/tree/main/src/plugin/typography)

## License

MIT
