import { useEffect, useState, useMemo } from 'react'
import useTheme from '@stage-ui/system/hooks/useTheme'

export const useBreakpoints = <T>(values: T[]): T => {

    const calcIndex = () => {
        let idx = 0
        const w = document.body.clientWidth || document.body.offsetWidth
        breakpoints.map((breakpoint, i) => {
            if (w <= breakpoint) {
                idx = i
            }
        })
        return idx
    }
    
    const theme = useTheme()
    const breakpoints = useMemo(() => theme.breakpoints.map((s) => parseFloat(s.replace(/[^0-9\\.]/g, ''))), [])
    
    let index = calcIndex()

    const [_, reload] = useState<number>(index)

    const calcState = () => {
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