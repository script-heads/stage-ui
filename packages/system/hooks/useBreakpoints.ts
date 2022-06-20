import { useEffect, useMemo, useState, useRef } from 'react'

import useTheme from './useTheme'

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

  const index = useRef(calcIndex())

  const [, reload] = useState<number>()

  const calcState = (): void => {
    const idx = calcIndex()
    if (idx !== index.current) {
      index.current = idx
      reload(idx)
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

  return values[index.current] || values[values.length - 1]
}

export default useBreakpoints
