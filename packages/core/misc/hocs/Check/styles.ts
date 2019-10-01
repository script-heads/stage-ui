import { css } from '@emotion/core';
import Global from '../../../types';
import useFlow from '../../hooks/useFlow';
import useStyleProps from '../../hooks/useStyleProps';
import callProp from '../../utils/callProp';
import variant from '../../utils/variant';
import ChecTypes from './types';

export default (props: ChecTypes.Props) => {
    const { theme } = useFlow();

    let { animated, disabled, size, labelColor } = props;

    const styleProps = useStyleProps(props);

    if (!size) {
        size = 'medium'
    }

    return {
        container: css(
            {
                display: "flex",
                alignItems: "center",
                cursor: disabled
                    ? "not-allowed"
                    : "pointer",
                color: theme.color.onSurface.css(),
            },
            styleProps.all,
            animated && {
                transition: "all .15s"
            }
        ),

        label: css(
            {
                marginLeft: "0.5rem",
                userSelect: "none",
                color: disabled
                    ? callProp(theme.color.light.css(), theme.color)
                    : callProp(labelColor, theme.color),
            },
            variant<Global.Size>(size, {
                xsmall: {
                    ...theme.typography.caption[3],
                },
                small: {
                    ...theme.typography.caption[2],
                },
                medium: {
                    ...theme.typography.caption[1],
                },
                large: {
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight,
                },
                xlarge: {
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight,
                },
            }),
            props.uppercase && {
                textTransform: "uppercase"
            },
            animated && {
                transition: "all .15s"
            }
        ),
    }
}