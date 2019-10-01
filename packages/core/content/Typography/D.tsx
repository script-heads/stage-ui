import React, { forwardRef } from 'react';
import Types from './types'
import Typography from './Typography'
import useFlow from '../../misc/hooks/useFlow';

/**
 * DISPLAYS
 */

export const D1 = forwardRef(function D1(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.display[1]} theme={theme} ref={ref} display={props.display || 'block'} {...props} />
})

export const D2 = forwardRef(function D2(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.display[2]} theme={theme} ref={ref} display={props.display || 'block'} {...props} />
})

export const D3 = forwardRef(function D3(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.display[3]} theme={theme} ref={ref} display={props.display || 'block'} {...props} />
})

export const D4 = forwardRef(function D4(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.display[4]} theme={theme} ref={ref} display={props.display || 'block'} {...props} />
})
