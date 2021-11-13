export function round(num: Number): string {
  return num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
}

export function rem(px: number): string {
  return `${round(px / 16)}rem`
}

export function em(px: number, base: number): string {
  return `${round(px / base)}em`
}
