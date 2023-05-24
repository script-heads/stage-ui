import { useEffect, useState } from 'react'

type Appearance = 'dark' | 'light'

// Detects changes to the system theme and returns 'dark' or 'light'
const useAppearance = (): Appearance => {
  let initial: Appearance = 'dark'
  if (typeof window !== 'undefined') {
    initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const [appearance, setAppearance] = useState(initial)
  useEffect(() => {
    const onChange = (e: { matches: boolean }) => {
      setAppearance(e.matches ? 'dark' : 'light')
    }
    if (typeof window !== 'undefined') {
      const watchMedia = window?.matchMedia?.('(prefers-color-scheme: dark)')
      watchMedia?.addEventListener('change', onChange)
      setAppearance(watchMedia?.matches ? 'dark' : 'light')
      return () => {
        watchMedia?.removeEventListener('change', onChange)
      }
    }
  }, [])

  return appearance
}

export default useAppearance
