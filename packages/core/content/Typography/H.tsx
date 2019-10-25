import useFlow from '@flow-ui/core/misc/hooks/useFlow'
import React, { forwardRef } from 'react'
import Types from './types'
import Typography from './Typography'

export const H1 = forwardRef(function H1(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return <Typography tag="h1" defaultStyles={theme.typography.header[1]} theme={theme} ref={ref} {...props} />
})

export const H2 = forwardRef(function H2(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return <Typography tag="h2" defaultStyles={theme.typography.header[2]} theme={theme} ref={ref} {...props} />
})

export const H3 = forwardRef(function H3(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return <Typography tag="h3" defaultStyles={theme.typography.header[3]} theme={theme} ref={ref} {...props} />
})

export const H4 = forwardRef(function H4(props: Types.TextProps, ref) {
    const { theme } = useFlow()
    return <Typography tag="h4" defaultStyles={theme.typography.header[4]} theme={theme} ref={ref} {...props} />
})
