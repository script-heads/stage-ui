import { useEffect, useMemo, useState } from 'react'

import useTheme from './useTheme'

let index = 0

const useBreakpoints = <T>(values: T[]): T => {
  const theme = useTheme()
  const breakpoints = useMemo(
    () => theme.breakpoints.map((s) => parseFloat(s.replace(/[^0-9\\.]/g, ''))),
    [],
  )

  const calcIndex = (): number => {
    let idx = 0
    const w = document.body.clientWidth || document.body.offsetWidth
    breakpoints.forEach((breakpoint, i) => {
      if (w <= breakpoint) {
        idx = i
      }
    })
    return idx
  }

  index = calcIndex()

  const [, reload] = useState<number>(index)

  const calcState = (): void => {
    const idx = calcIndex()
    if (idx !== index) {
      reload(idx)
      index = idx
    }
  }

  useEffect(() => {
    window.addEventListener('resize', calcState)
    window.addEventListener('orientationchange', calcState)
    return () => {
      window.removeEventListener('resize', calcState)
      window.removeEventListener('orientationchange', calcState)
    }
  }, [])

  return values[index] || values[values.length - 1]
}

export default useBreakpoints
