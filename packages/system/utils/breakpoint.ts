import isBrowser from './isBrowser'
import { toPixel } from './size'

/**
 * calculate breakpoint index
 */
export const breakpointIndex = (t: Stage.Theme) => {
  let idx = 0
  const w = isBrowser ? document.body.clientWidth || document.body.offsetWidth : 0
  t.breakpoints.forEach((bp, i) => {
    if (w <= toPixel(bp)) {
      idx = i
    }
  })
  return idx
}

/**
 * get breakpoint value
 */
export const breakpoint = <P = string | number | undefined>(
  v: P[],
  t: Stage.Theme,
): P => {
  return v[breakpointIndex(t)] || v[v.length - 1]
}
