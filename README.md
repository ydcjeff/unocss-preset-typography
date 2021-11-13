# unocss-preset-typography <a href="https://npmjs.com/package/unocss-preset-typography" target="_blank" rel="noopener noreferrer"><img class="not-prose" src="https://img.shields.io/npm/v/unocss-preset-typography" alt="npm version"></a>

> UnoCSS Preset for Typography

Installation:

```sh
npm i unocss-preset-typography --save-dev # with npm
yarn add unocss-preset-typography -D # with yarn
pnpm add unocss-preset-typography -D # with pnpm
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

<div style="overflow: auto">
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
<article class="prose prose-truegray xl:prose-xl">
  {{ markdown }}
  <p class="not-prose">some text</p>
</article>
```

</td>

<td>

<!-- prettier-ignore -->
```html
<article prose prose-truegray xl="prose-xl">
  {{ markdown }}
  <p not-prose>some text</p>
</article>
```

</td>
</tr>
</tbody>
</table>
</div>

## Highlight

- Almost same styles as TailwindCSS/WindiCSS Typography.

- `prose` does not have any color by default, instead use any color supported by
  UnoCSS for theme color (for e.g. `prose-coolgray`, `prose-sky`)
  with the exception of `black`, `white`, `light`, and `dark`.

- Use `prose-invert` for typographic dark mode (background color needs to be handled by users).

- No style resetting, styles outside of `prose` will stay the same.

- Apply `not-prose` to the elements that you don't want the typographic styles to apply.

## Utilities

| Rules              | Body font size  |
| ------------------ | --------------- |
| `prose-sm`         | 0.875rem (14px) |
| `prose/prose-base` | 1rem (16px)     |
| `prose-lg`         | 1.125rem (18px) |
| `prose-xl`         | 1.25rem (20px)  |
| `prose-2xl`        | 1.5rem (24px)   |

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

## Acknowledgement

- [TailwindCSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [WindiCSS Typography](https://github.com/windicss/windicss/tree/main/src/plugin/typography)

## License

MIT
