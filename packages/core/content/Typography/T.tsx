import useFlow from '@flow-ui/core/misc/hooks/useFlow'
import React, { forwardRef } from 'react'
import Types from './types'
import Typography from './Typography'

/**
 * TEXTS
 */

export const T1 = forwardRef(function T1(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return (
        <Typography 
            tag="span" 
            defaultStyles={theme.typography.text[1]} 
            theme={theme} 
            ref={ref} 
            display={props.display || 'block'} 
            {...props} 
        />
    )
})

export const T2 = forwardRef(function T2(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return (
        <Typography 
            tag="span" 
            defaultStyles={theme.typography.text[2]} 
            theme={theme} 
            ref={ref} 
            display={props.display || 'block'} 
            {...props} 
        />
    )
})

export const T3 = forwardRef(function T2(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return (
        <Typography 
            tag="span" 
            defaultStyles={theme.typography.text[3]} 
            theme={theme} 
            ref={ref} 
            display={props.display || 'block'} 
            {...props} 
        />
    )
})

export const T4 = forwardRef(function T4(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return (
        <Typography 
            tag="span" 
            defaultStyles={theme.typography.text[4]} 
            theme={theme} 
            ref={ref} 
            display={props.display || 'block'} 
            {...props} 
        />
    )
    
})