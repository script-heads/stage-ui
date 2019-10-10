import { css, keyframes } from '@emotion/core';
import useFlow from '../../misc/hooks/useFlow';
import SpinnerTypes from './types';
import callProp from '../../misc/utils/callProp';
import useStyleProps from '../../misc/hooks/useStyleProps';

export default (props: SpinnerTypes.Props) => {

    const { theme } = useFlow();
    const styleProps = useStyleProps(props);
    const color = callProp(props.color, theme.color) || theme.color.hardest.css();
    const duration = props.duration || 1;

    const spinAnimation = keyframes({
        "from": {
            transform: "rotate(0deg)"
        },
        "to": {
            transform: "rotate(360deg)"
        }
    });

    return {
        container: css(
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                color: color,
                fontSize: props.size || '1.125em'
            },
            styleProps.all,
        ),

        children: css({
            width: 'fit-content',
            animation: `${spinAnimation} ${duration}s linear infinite`
        }),
    }
}