import { useEffect, useState, useMemo } from 'react'
import useTheme from './useTheme'

let memoValue: any = null

const useBreakpoints = <T>(values: T[]): T | null => {

    const theme = useTheme()
    const breakpoints = useMemo(() => {
        return theme.breakpoints
            .map((s) => parseFloat(s.replace(/[^0-9\\.]/g, '')))
    }, [])
    const calc = () => {
        let val = values[0]
        const w = document.body.clientWidth || document.body.offsetWidth
        breakpoints.map((breakpoint, index) => {
            if (w <= breakpoint) {
                val = values[index] || val
            }
        })
        return val
    }
    
    memoValue = calc()

    const [value, setValue] = useState<T>(memoValue)

    const calcState = () => {
        const val = calc()
        if (val !== memoValue) {
            memoValue = val
            setValue(calc())
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

    return value || null
}
export default useBreakpoints