import { forwardRef } from 'react';
import { jsx, css } from '@emotion/core';
import DividerTypes from './types';
import useFlow from '../../misc/hooks/useFlow';
import useContainer from '../../misc/hooks/useContainer';
import useStyleProps from '../../misc/hooks/useStyleProps';
import callProp from '../../misc/utils/callProp';

const Divider = (props: DividerTypes.Props, ref) => {
    const { theme } = useFlow();
    const { attributes } = useContainer(props);
    const styleProps = useStyleProps(props);
    const color = callProp(props.color, theme.color) || theme.assets.border.color;
    let { gap = 0, dash = 0, vertical } = props;

    if (gap && !dash) {
        dash = 1
    }

    if (dash && !gap) {
        gap = dash
    }

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: css(
                vertical
                    ? {
                        height: '100%',
                        width: '1px',
                        ...(gap || dash)
                            ? {
                                backgroundImage: `linear-gradient(
                                to bottom,
                                ${color},
                                ${color} ${dash}px,
                                transparent ${dash}px, 
                                transparent ${gap}px 
                            )`,
                                backgroundPosition: 'right top',
                                backgroundSize: `${props.w || '1px'} ${gap + dash}px`,
                                backgroundRepeat: 'repeat-y',
                            }
                            : {
                                background: color
                            }
                    }
                    : {
                        width: '100%',
                        height: '1px',
                        ...(gap || dash)
                            ? {
                                backgroundImage: `linear-gradient(
                                to right,
                                ${color},
                                ${color} ${dash}px,
                                transparent ${dash}px, 
                                transparent ${gap}px 
                            )`,
                                backgroundPosition: 'left bottom',
                                backgroundSize: `${gap + dash}px`,
                                backgroundRepeat: 'repeat-x',
                            }
                            : {
                                background: color
                            }
                    },
                styleProps.all
            )
        }
    )
}

export default forwardRef(Divider)
