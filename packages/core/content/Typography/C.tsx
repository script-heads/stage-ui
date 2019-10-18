import useFlow from '@flow-ui/core/misc/hooks/useFlow';
import React, { forwardRef } from 'react';
import Types from './types';
import Typography from './Typography';

/**
 * CAPTIONS
 */

export const C1 = forwardRef(function C1(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.caption[1]} theme={theme} ref={ref} {...props} />
})

export const C2 = forwardRef(function C2(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.caption[2]} theme={theme} ref={ref} {...props} />
})

export const C3 = forwardRef(function C3(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.caption[3]} theme={theme} ref={ref} {...props} />
})

export const C4 = forwardRef(function C4(props: Types.TextProps, ref) {
    const { theme } = useFlow();
    return <Typography tag='span' defaultStyles={theme.typography.caption[4]} theme={theme} ref={ref} {...props} />
})