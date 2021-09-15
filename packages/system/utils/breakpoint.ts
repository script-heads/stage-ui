import { toPixel } from './size'

/**
 * calculate breakpoint value
 */
export const breakpointIndex = (t: Stage.Theme) => {
  let idx = 0
  const w = document.body.clientWidth || document.body.offsetWidth
  t.breakpoints.forEach((bp, i) => {
    if (w <= toPixel(bp)) {
      idx = i
    }
  })
  return idx
}

/**
 * calculate breakpoint value
 */
export const breakpoint = <P = string | number | undefined>(v: P[], t: Stage.Theme): P => {
  return v[breakpointIndex(t)] || v[v.length - 1]
}
