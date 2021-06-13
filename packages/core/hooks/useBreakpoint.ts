/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useMemo } from 'react'
import useTheme from '@stage-ui/system/hooks/useTheme'

export const useBreakpoint = <T>(values: T[]): T => {
  const theme = useTheme()
  const breakpoints = useMemo(
    () => theme.breakpoints.map((s) => parseFloat(s.replace(/[^0-9\\.]/g, ''))),
    [],
  )

  const calcIndex = () => {
    let idx = 0
    const w = document.body.clientWidth || document.body.offsetWidth
    breakpoints.forEach((breakpoint, i) => {
      if (w <= breakpoint) {
        idx = i
      }
    })
    return idx
  }

  let index = calcIndex()

  const [reload, forceReload] = useState<number>(index)

  const calcState = () => {
    const idx = calcIndex()
    if (idx !== index) {
      forceReload(idx)
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
