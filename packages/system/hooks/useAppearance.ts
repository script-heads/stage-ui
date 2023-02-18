import { useEffect, useState } from 'react'

type Appearance = 'dark' | 'light'

// Detects changes to the system theme and returns 'dark' or 'light'
const useAppearance = (): Appearance => {
  const [appearance, setAppearance] = useState<Appearance>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )
  useEffect(() => {
    const onChange = (e: { matches: boolean }) => {
      setAppearance(e.matches ? 'dark' : 'light')
    }
    const watchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    watchMedia.addEventListener('change', onChange)
    setAppearance(watchMedia.matches ? 'dark' : 'light')
    return () => {
      watchMedia.removeEventListener('change', onChange)
    }
  }, [])

  return appearance
}

export default useAppearance
