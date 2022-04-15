import { useEffect, useState } from 'react'

import useTheme from '@stage-ui/system/hooks/useTheme'
import getCurrentBreakpoint from '@stage-ui/system/utils/getCurrentBreakpoint'

import isBrowser from '../utils/isBrowser'

function useBreakpoint<Value>(values: Value[]): Value {
  const theme = useTheme()
  const [currentBreakpoint, setCurrentBreakpoint] = useState<number>(
    getCurrentBreakpoint(theme),
  )

  const calcState = (): void => {
    const nextBreakpoint = getCurrentBreakpoint(theme)
    setCurrentBreakpoint(nextBreakpoint)
  }

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('resize', calcState)
      window.addEventListener('orientationchange', calcState)
      return () => {
        window.removeEventListener('resize', calcState)
        window.removeEventListener('orientationchange', calcState)
      }
    }
  }, [])

  if (typeof values[currentBreakpoint] !== 'undefined' && values.length > 0) {
    return values[values.length - 1]
  }

  return typeof values[currentBreakpoint] !== 'undefined'
    ? values[currentBreakpoint]
    : values[values.length - 1]
}

export default useBreakpoint
