import { css, ObjectInterpolation } from '@emotion/core';
import useFlow from '@flow-ui/core/misc/hooks/useFlow';
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps';
import callProp from '@flow-ui/core/misc/utils/callProp';
import chroma from 'chroma-js';
import MenuTypes from './types';

export default (props: MenuTypes.Props) => {
    const { theme } = useFlow();
    const {
        decoration = 'underline',
        size = 'medium',
        flip = false,
        direction = 'row',
        border = 'none',
        shape,
        align,
        distance,
    } = props;

    const sizes = getSizes(size, theme);
    const decorations = getDecorations(theme, sizes, props);

    switch (shape) {
        case 'square':
            decorations.shape = 0;
            break;
        case 'round':
            decorations.shape = '4rem';
            break;
        case 'rounded':
            decorations.shape = theme.radius.narrow;
            break;
    };

    const justifyContent = align
        ? align === 'center'
            ? align
            : 'flex-' + align
        : direction === 'row'
            ? 'center'
            : flip
                ? 'flex-end'
                : 'flex-start';

    const borderStyles: ObjectInterpolation<undefined> = {
        '&::after': {
            zIndex: -1,
            position: 'absolute',
            content: "''",
            background: theme.color.lightest.css(),
            margin: direction === 'column' && decoration === 'underline'
                ? sizes.item.padding
                : 0,
            ...linePosition(direction, flip, border === 'narrow' ? '1px' : sizes.underline)
        },
        '#item-content': direction === 'column' && decoration === 'underline' && {
            [flip ? 'paddingRight' : 'paddingLeft']: sizes.borderDistance + ' !important'
        },
    }

    return {
        container: css(
            {
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'stretch',
                flexDirection: props.direction,
            },
            distance && {
                '>:not(:last-child)': {
                    [direction === 'row'
                        ? 'marginRight'
                        : 'marginBottom']: distance
                }
            },
            border != 'none' && borderStyles,
            useStyleProps(props).all,
        ),
        item: (active: boolean, disabled: boolean) => css(
            {
                outline: 'none',
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
                overflow: 'hidden',
                borderRadius: decorations.shape,
                cursor: disabled ? 'not-allowed' : 'pointer',
                "#item-content": {
                    display: 'flex',
                    width: '100%',
                    justifyContent: justifyContent,
                    alignItems: 'center',
                    userSelect: 'none',
                    ...sizes.itemContent
                }
            },
            sizes.item,
            active
                ? decorations.active
                : decorations.ordinary,
        ),
        separator: css({
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            padding: sizes.separatorDistance
        })
    }
}

function getSizes(size, theme) {
    switch (size) {
        case 'xsmall':
            return {
                item: {
                    padding: '0.25rem 0',
                },
                itemContent: {
                    padding: '0 .25rem',
                    ...theme.typography.caption[3],
                },
                underline: '.125rem',
                borderDistance: '.75rem',
                separatorDistance: '.25rem',
            };
        case 'small':
            return {
                item: {
                    padding: '0.375rem 0',
                },
                itemContent: {
                    padding: '0 .5rem',
                    ...theme.typography.caption[2],
                },
                underline: '.125rem',
                borderDistance: '1rem',
                separatorDistance: '.375rem',
            }
        case 'medium':
        default:
            return {
                item: {
                    padding: '0.5rem 0',
                },
                itemContent: {
                    padding: '0 .75rem',
                    ...theme.typography.caption[1],
                },
                underline: '.25rem',
                borderDistance: '1.25rem',
                separatorDistance: '.5rem',
            }
        case 'large':
            return {
                item: {
                    padding: '0.625rem 0',
                },
                itemContent: {
                    padding: '0 1rem',
                    fontSize: theme.typography.header[4].fontSize,
                    lineHeight: theme.typography.header[4].lineHeight,
                },
                underline: '.375rem',
                borderDistance: '1.5rem',
                separatorDistance: '.625rem',
            }
        case 'xlarge':
            return {
                item: {
                    padding: '0.75rem 0',
                },
                itemContent: {
                    padding: '0 1.25rem',
                    fontSize: theme.typography.header[3].fontSize,
                    lineHeight: theme.typography.header[3].lineHeight,
                },
                underline: '.5rem',
                borderDistance: '1.75rem',
                separatorDistance: '.75rem',
            };
    }
}

function getDecorations(theme, sizes, props) {
    let color = chroma(callProp(props.color, theme.color) || theme.color.primary.css());
    let { flip, direction, decoration } = props;

    switch (decoration) {
        case 'underline':
        default:
            return {
                active: {
                    ...underlineStyles(flip, direction, color, sizes.underline),
                    '&[disabled]': {
                        color: theme.color.light.css(),
                        ...underlineStyles(flip, direction, theme.color.light, sizes.underline),
                    }
                },
                ordinary: {
                    '&:hover:not([disabled])': {
                        ...underlineStyles(flip, direction, color.alpha(.1), sizes.underline)
                    },
                    '&[disabled]': {
                        color: theme.color.light.css(),
                    }
                }
            }
        case 'filled':
            return {
                active: {
                    background: color.css(),
                    color: chroma.contrast(color, theme.color.onPrimary) > 3
                        ? theme.color.onPrimary.css()
                        : theme.color.onSurface.css(),
                    '&:active:not([disabled])': {
                        background: color.get('hsl.l') > .2
                            ? color.darken(.2).css()
                            : color.brighten(.75).css(),
                    },
                    '&[disabled]': {
                        background: theme.color.lightest.css(),
                        color: theme.color.light.css(),
                    }
                },
                ordinary: {
                    '&:hover:not([disabled])': {
                        background: color.alpha(.05).css(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.css(),
                    }
                },
                shape: theme.radius.narrow
            }
        case 'outline':
            return {
                active: {
                    border: '1px solid ' + color.alpha(.7).css(),
                    color: color.css(),
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&[disabled]': {
                        border: '1px solid ' + theme.color.lightest.css(),
                        color: theme.color.light.css(),
                    }
                },
                ordinary: {
                    border: '1px solid transparent',
                    '&:hover:not([disabled])': {
                        border: '1px solid ' + theme.color.lightest.css(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.css(),
                    }
                },
                shape: theme.radius.narrow
            }
        case 'tab':
            let borderStyles = tabBorderStyles(direction, flip);
            color = chroma(callProp(props.color, theme.color) || theme.color.surface.css());
            return {
                active: {
                    background: color.css(),
                    border: '1px solid ' + theme.color.lightest.css(),
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&[disabled]': {
                        border: '1px solid ' + theme.color.lightest.css(),
                        ...borderStyles,
                        background: color.css(),
                        color: theme.color.light.css(),
                    },
                    ...borderStyles
                },
                ordinary: {
                    borderColor: 'transparent',
                    background: 'transparent',
                    '&:hover:not([disabled])': {
                        background: theme.color.lightest.alpha(.5).css(),
                    },
                    '&:active:not([disabled])': {
                        background: theme.color.lightest.alpha(.25).css(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.css(),
                    },
                    ...borderStyles,
                },
                shape: theme.radius.narrow
            }
        case 'filled-underline':
            return {
                active: {
                    background: color.alpha(.15).css(),
                    ...underlineStyles(flip, direction, color, true),
                    '&[disabled]': {
                        background: theme.color.lightest.css(),
                        color: theme.color.light.css(),
                    }
                },
                ordinary: {
                    '&:hover:not([disabled])': {
                        background: color.alpha(.05).css(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).css(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.css(),
                    }
                }
            }
        case 'color':
            return {
                active: {
                    color: color.css(),
                    '&[disabled]': {
                        color: theme.color.light.css(),
                    }
                },
                ordinary: {
                    '&[disabled]': {
                        color: theme.color.lightest.css(),
                    }
                }
            }
    }
}

function underlineStyles(flip, direction, color, size, alwaysFull?) {

    const containerStyles: ObjectInterpolation<undefined> = {
        position: 'relative',
        '&::after': {
            position: 'absolute',
            content: "''",
            background: color.css(),
            ...linePosition(direction, flip, size)
        }
    }

    if (direction === 'column' && !alwaysFull) {
        return {
            '#item-content': containerStyles
        }
    }

    return containerStyles
}

function linePosition(direction, flip, size) {
    if (direction === 'column') {
        return flip
            ? {
                top: 0,
                bottom: 0,
                right: 0,
                width: size
            }
            : {
                top: 0,
                bottom: 0,
                left: 0,
                width: size
            }
    }

    return flip
        ? {
            left: 0,
            right: 0,
            top: 0,
            height: size
        }
        : {
            left: 0,
            right: 0,
            bottom: 0,
            height: size
        }
}

function tabBorderStyles(direction, flip) {
    if (direction === 'column') {
        return flip
            ? {
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                borderRight: 0,
            }
            : {
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                borderLeft: 0,
            }
    }

    return flip
        ? {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderTop: 0,
        }
        : {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottom: 0,
        }
}