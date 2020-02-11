import { ObjectInterpolation } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'
import colorProp from '@flow-ui/whale/utils/colorProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    const {
        decoration = 'underline',
        size = 'm',
        flip = false,
        direction = 'row',
        border = 'none',
        shape,
        align,
        spacing,
    } = props

    const sizes = getSizes(size, theme)
    const decorations = getDecorations(theme, sizes, props)

    switch (shape) {
        case 'square':
            decorations.shape = 0
            break
        case 'round':
            decorations.shape = '4rem'
            break
        case 'rounded':
            decorations.shape = theme.radius.narrow
            break
    }

    const justifyContent = align
        ? align === 'center'
            ? align
            : 'flex-' + align
        : direction === 'row'
            ? 'center'
            : flip
                ? 'flex-end'
                : 'flex-start'

    const borderStyles: ObjectInterpolation<undefined> = {
        '&::after': {
            zIndex: -1,
            position: 'absolute',
            content: '\'\'',
            background: theme.color.lightest.rgb().string(),
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
        container: (variant) => [
            {
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'stretch',
                width: 'fit-content',
                flexDirection: props.direction,
            },
            spacing && {
                '>:not(:last-child)': {
                    [direction === 'row'
                        ? 'marginRight'
                        : 'marginBottom']: spacing
                }
            },
            border != 'none' && borderStyles
        ],
        item: (variant) => [
            {
                outline: 'none',
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
                overflow: 'hidden',
                borderRadius: decorations.shape,
                cursor: 'pointer',
                '#item-content': {
                    display: 'flex',
                    width: '100%',
                    justifyContent: justifyContent,
                    alignItems: 'center',
                    userSelect: 'none',
                    ...sizes.itemContent
                }
            },
            decorations.ordinary,
            variant({
                active: decorations.active,
                disabled: [{
                    cursor: 'not-allowed',
                }]
            }),
            sizes.item,
        ],
        separator: [{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            padding: sizes.separatorDistance
        }]
    }
}

function getSizes(size, theme) {
    switch (size) {
        case 'xs':
            return {
                item: {
                    padding: '0.25rem 0',
                },
                itemContent: {
                    padding: '0 .25rem',
                    fontSize: '40px !important',
                    // ...theme.typography.text.xs,
                },
                // underline: '.125rem',
                // borderDistance: '.75rem',
                // separatorDistance: '.25rem',
            }
        case 's':
            return {
                item: {
                    padding: '0.375rem 0',
                },
                itemContent: {
                    padding: '0 .5rem',
                    ...theme.typography.text.s,
                },
                underline: '.125rem',
                borderDistance: '1rem',
                separatorDistance: '.375rem',
            }
        case 'm':
        default:
            return {
                item: {
                    padding: '0.5rem 0',
                },
                itemContent: {
                    padding: '0 .75rem',
                    ...theme.typography.text.m,
                },
                underline: '.25rem',
                borderDistance: '1.25rem',
                separatorDistance: '.5rem',
            }
        case 'l':
            return {
                item: {
                    padding: '0.625rem 0',
                },
                itemContent: {
                    padding: '0 1rem',
                    fontSize: theme.typography.header.l.fontSize,
                    lineHeight: theme.typography.header.l.lineHeight,
                },
                underline: '.375rem',
                borderDistance: '1.5rem',
                separatorDistance: '.625rem',
            }
        case 'xl':
            return {
                item: {
                    padding: '0.75rem 0',
                },
                itemContent: {
                    padding: '0 1.25rem',
                    fontSize: theme.typography.header.xl.fontSize,
                    lineHeight: theme.typography.header.xl.lineHeight,
                },
                underline: '.5rem',
                borderDistance: '1.75rem',
                separatorDistance: '.75rem',
            }
    }
}

function getDecorations(theme, sizes, props) {
    let color = colorProp(theme, props.color) || theme.color.primary
    let { flip, direction, decoration } = props

    switch (decoration) {
        case 'underline':
        default:
            return {
                active: {
                    ...underlineStyles(flip, direction, color, sizes.underline),
                    '&[disabled]': {
                        color: theme.color.light.rgb().string(),
                        ...underlineStyles(flip, direction, theme.color.light, sizes.underline),
                    },
                    '&:hover:not([disabled])': {
                        ...underlineStyles(flip, direction, color, sizes.underline)
                    },
                },
                ordinary: {
                    '&[disabled]': {
                        color: theme.color.light.rgb().string(),
                    },
                    '&:hover:not([disabled])': {
                        ...underlineStyles(flip, direction, color.alpha(.1), sizes.underline)
                    },
                }
            }
        case 'filled':
            return {
                active: {
                    background: color.rgb().string(),
                    color: color.contrast(theme.color.onPrimary) > 3
                        ? theme.color.onPrimary.rgb().string()
                        : theme.color.onSurface.rgb().string(),
                    '&:hover:not([disabled])': {
                        background: color.rgb().string(),
                    },
                    '&:active:not([disabled])': {
                        background: color.hsl().array()[2] > .2
                            ? color.darken(.2).rgb().string()
                            : color.lighten(.75).rgb().string(),
                    },
                    '&[disabled]': {
                        background: theme.color.lightest.rgb().string(),
                        color: theme.color.light.rgb().string(),
                    }
                },
                ordinary: {
                    '&:hover:not([disabled])': {
                        background: color.alpha(.05).rgb().string(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).rgb().string(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.rgb().string(),
                    }
                },
                shape: theme.radius.narrow
            }
        case 'outline':
            return {
                active: {
                    border: '1px solid ' + color.alpha(.7).rgb().string(),
                    '&:hover:not([disabled])': {
                        border: '1px solid ' + color.alpha(.7).rgb().string(),
                    },
                    color: color.rgb().string(),
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).rgb().string(),
                    },
                    '&[disabled]': {
                        border: '1px solid ' + theme.color.lightest.rgb().string(),
                        color: theme.color.light.rgb().string(),
                    }
                },
                ordinary: {
                    border: '1px solid transparent',
                    '&:hover:not([disabled])': {
                        border: '1px solid ' + theme.color.lightest.rgb().string(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).rgb().string(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.rgb().string(),
                    }
                },
                shape: theme.radius.narrow
            }
        case 'tab':
            let borderStyles = tabBorderStyles(direction, flip)
            color = colorProp(theme, props.color) || theme.color.surface
            return {
                active: {
                    background: color.rgb().string(),
                    border: '1px solid ' + theme.color.lightest.rgb().string(),
                    '&:hover:not([disabled])': {
                        background: color.rgb().string(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).rgb().string(),
                    },
                    '&[disabled]': {
                        border: '1px solid ' + theme.color.lightest.rgb().string(),
                        ...borderStyles,
                        background: color.rgb().string(),
                        color: theme.color.light.rgb().string(),
                    },
                    ...borderStyles
                },
                ordinary: {
                    borderColor: 'transparent',
                    background: 'transparent',
                    '&:hover:not([disabled])': {
                        background: theme.color.lightest.alpha(.5).rgb().string(),
                    },
                    '&:active:not([disabled])': {
                        background: theme.color.lightest.alpha(.25).rgb().string(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.rgb().string(),
                    },
                    ...borderStyles,
                },
                shape: theme.radius.narrow
            }
        case 'filled-underline':
            return {
                active: {
                    background: color.alpha(.15).rgb().string(),
                    '&:hover:not([disabled])': {
                        background: color.alpha(.15).rgb().string(),
                    },
                    ...underlineStyles(flip, direction, color, true),
                    '&[disabled]': {
                        background: theme.color.lightest.rgb().string(),
                        color: theme.color.light.rgb().string(),
                    }
                },
                ordinary: {
                    '&:hover:not([disabled])': {
                        background: color.alpha(.05).rgb().string(),
                    },
                    '&:active:not([disabled])': {
                        background: color.alpha(.02).rgb().string(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.rgb().string(),
                    }
                }
            }
        case 'color':
            return {
                active: {
                    color: color.rgb().string(),
                    '&:hover:not([disabled])': {
                        color: color.rgb().string(),
                    },
                    '&[disabled]': {
                        color: theme.color.light.rgb().string(),
                    }
                },
                ordinary: {
                    '&[disabled]': {
                        color: theme.color.lightest.rgb().string(),
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
            content: '\'\'',
            background: color.rgb().string(),
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

export default styles