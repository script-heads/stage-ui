import { useEffect, useMemo, useState, useRef } from 'react'

import isBrowser from '../utils/isBrowser'

import toRem from '../utils/toRem'

import useTheme from './useTheme'

const useBreakpoints = <T>(values: T[]): T => {
  const theme = useTheme()
  const breakpoints = useMemo(
    () =>
      theme.breakpoints.map((s) => {
        return {
          value: parseFloat(s.replace(/[^0-9\\.]/g, '')),
          isRem: s.endsWith('rem'),
        }
      }),
    [],
  )

  const calcIndex = (): number => {
    let idx = 0

    if (!isBrowser) {
      return idx
    }

    const w = document.body.clientWidth || document.body.offsetWidth

    breakpoints.forEach((breakpoint, i) => {
      const value = breakpoint.isRem ? +parseInt(toRem(w), 10) : w
      if (value <= breakpoint.value) {
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
    if (!isBrowser) {
      return
    }

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
