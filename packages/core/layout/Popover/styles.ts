import PopoverTypes from "./types";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import css, { Interpolation } from "@emotion/css";
import ThemeTypes from "../../misc/themes/types";

export default (props: PopoverTypes.Props) => {
    const { theme } = useFlow();
    const styleProps = useStyleProps(props);
    const overrides = theme.overrides.popover;

    return {
        container: css(
            styleProps.all,
            {
                width: 'fit-content',
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                borderRadius: theme.radius.default,
                background: theme.color.surface.css(),
                filter: `drop-shadow(${theme.assets.shadow.default})`,
                padding: theme.distance.small
            },
            overrides && overrides.container,
        ),
        arrow: css(
            {
                width: '.75rem',
                height: '.5rem',
                position: 'absolute',
                '&::before, &::after': {
                    position: 'absolute',
                    display: 'inline-block',
                    content: "''",
                    borderColor: 'transparent',
                    borderStyle: 'solid',
                }
            },
            getPosition(props.align, theme, overrides, props),
            overrides && overrides.arrow,
            {
                width: props.arrowWidth,
                height: props.arrowHeight,
            }
        )
    }
}

function getPosition(align: PopoverTypes.Props["align"], theme: ThemeTypes.Index, overrides, props): Interpolation {

    const background = theme.color.surface.css();
    const borderColor = theme.assets.border.color;
    const borderWidth = theme.assets.border.width
    const width = props.arrowWidth || (overrides && overrides.arrow.width) || '.75rem'
    const height = props.arrowHeight || (overrides && overrides.arrow.height) || '.5rem'
    const halfWidth = `calc(${width} / 2)`;

    switch (align) {
        case 'top':
            return {
                height, width,
                bottom: `calc(100% + ${borderWidth})`,
                left: '50%',
                transform: 'translateX(-50%)',
                '&::before': {
                    top: 0,
                    borderWidth: `0 ${halfWidth} ${height}`,
                    borderBottomColor: background,
                },
                '&::after': {
                    top: borderWidth,
                    borderWidth: `0 ${halfWidth} ${height}`,
                    borderBottomColor: background,
                }
            }
        case 'bottom':
            return {
                height, width,
                top: `calc(100% + ${borderWidth})`,
                left: '50%',
                transform: 'translateX(-50%)',
                '&::before': {
                    bottom: 0,
                    borderWidth: `${height} ${halfWidth} 0`,
                    borderTopColor: borderColor,
                },
                '&::after': {
                    bottom: borderWidth,
                    borderWidth: `${height} ${halfWidth} 0`,
                    borderTopColor: background,
                }
            }
        case 'right':
            return {
                height: width,
                width: height,
                left: `calc(100% + ${borderWidth})`,
                top: '50%',
                transform: 'translateY(-50%)',
                '&::before': {
                    right: 0,
                    borderWidth: `${halfWidth} 0 ${halfWidth} ${height}`,
                    borderLeftColor: borderColor,
                },
                '&::after': {
                    right: borderWidth,
                    borderWidth: `${halfWidth} 0 ${halfWidth} ${height}`,
                    borderLeftColor: background,
                }
            }
        case 'left':
            return {
                height: width,
                width: height,
                right: `calc(100% + ${borderWidth})`,
                top: '50%',
                transform: 'translateY(-50%)',
                '&::before': {
                    left: 0,
                    borderWidth: `${halfWidth} ${height} ${halfWidth} 0`,
                    borderRightColor: borderColor,
                },
                '&::after': {
                    left: borderWidth,
                    borderWidth: `${halfWidth} ${height} ${halfWidth} 0`,
                    borderRightColor: background,
                }
            }
        default:
            return {
                height, width,
                bottom: `calc(100% + ${borderWidth})`,
                left: '50%',
                transform: 'translateX(-50%)',
                '&::before': {
                    top: 0,
                    borderWidth: `0 ${halfWidth} ${height}`,
                    borderBottomColor: borderColor,
                },
                '&::after': {
                    top: borderWidth,
                    borderWidth: `0 ${halfWidth} ${height}`,
                    borderBottomColor: background,
                }
            }
    }
}