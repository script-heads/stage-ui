// got from React conf 2018
// don't trust this codeimport{ useState, useEffect } from 'react'

const useProgress = (animate: boolean, time: number, pause, currentProgress) => {
  const [progress, setProgress] = useState(currentProgress)
  let rafId: number | null = null
  let start = null

  useEffect(() => {
    if (animate) {
      const step = (timestamp) => {
        if (!pause) {
          if (!start) {
            start = timestamp
          }
          const currentProgress = timestamp - start!
          setProgress(currentProgress)

          if (progress < time) {
            rafId = requestAnimationFrame(step)
          }
        }
      }
      rafId = requestAnimationFrame(step)
      return () => cancelAnimationFrame(rafId!)
    }
    return () => void 0
  }, [animate, time])

  return progress / time
}

export default useProgress
