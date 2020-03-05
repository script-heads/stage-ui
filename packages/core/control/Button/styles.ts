
import WhaleTypes from '@flow-ui/whale/types'
import colorProp from '@flow-ui/whale/utils/colorProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const { size, shape } = props
    const color = colorProp(theme, props.color) || theme.color.primary
    const typography = theme.assets.typography.text[size || 'm'] || theme.assets.typography.text['m']

    return {
        container: (variant) => [
            {
                fontWeight: 600,
                whiteSpace: 'nowrap',
                outline: 'none',
                boxShadow: 'unset',
                borderColor: 'transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                background: 'transparent',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content',
                '&:active': {
                    borderStyle: 'solid'
                },
                '&::-moz-focus-inner': {
                    border: 0
                }
            },

            variant({
                decoration: {
                    outline: [{
                        borderColor: color.alpha(.7).rgb().string(),
                        color: color.rgb().string(),
                        '&:hover:not([disabled])': {
                            background: color.alpha(.05).rgb().string(),
                        },
                        '&:active:not([disabled])': {
                            background: color.alpha(.02).rgb().string(),
                        },
                        '&:disabled': {
                            borderColor: theme.color.lightest.rgb().string(),
                            color: theme.color.light.rgb().string(),
                        }
                    }],
                    text: [{
                        color: color.rgb().string(),
                        '&:hover:not([disabled])': {
                            background: color.alpha(.05).rgb().string(),
                        },
                        '&:active:not([disabled])': {
                            background: color.alpha(.02).rgb().string(),
                        },
                        '&:disabled': {
                            color: theme.color.light.rgb().string(),
                        }
                    }],
                    'plain': [{
                        borderColor: theme.assets.border.color,
                        background: theme.color.surface.rgb().string(),
                        color: theme.color.onSurface.rgb().string(),
                        '&:hover:not([disabled])': {
                            background: color.alpha(.05).rgb().string(),
                        },
                        '&:active:not([disabled])': {
                            background: color.alpha(.02).rgb().string(),
                        },
                        '&:disabled': {
                            background: theme.color.lightest.rgb().string(),
                            color: theme.color.light.rgb().string(),
                        }
                    }],
                    'filled': [{
                        background: color.rgb().string(),
                        color: color.contrast(theme.color.onPrimary) > 3
                            ? theme.color.onPrimary.rgb().string()
                            : theme.color.onSurface.rgb().string(),
                        '&:hover:not([disabled])': {
                            background: color.hsl().array()[2] > .2
                                ? color.darken(.3).rgb().string()
                                : color.lighten(1.5).rgb().string(),
                        },
                        '&:active:not([disabled])': {
                            background: color.hsl().array()[2] > .2
                                ? color.darken(.2).rgb().string()
                                : color.lighten(.75).rgb().string(),
                        },
                        '&:disabled': {
                            background: theme.color.lightest.rgb().string(),
                            color: theme.color.light.rgb().string(),
                        }
                    }]
                },
                shape: {
                    'rounded': [{
                        borderRadius: theme.radius.narrow
                    }],
                    'round': [{
                        borderRadius: '4rem'
                    }]
                },
                size: {
                    xs: [{
                        ...theme.assets.field.xs,
                        ...theme.assets.typography.text.xs
                    }],
                    s: [{
                        ...theme.assets.field.s,
                        ...theme.assets.typography.text.s
                    }],
                    m: [{
                        ...theme.assets.field.m,
                        ...theme.assets.typography.text.m
                    }],
                    l: [{
                        ...theme.assets.field.l,
                        ...theme.assets.typography.text.l
                    }],
                    xl: [{
                        ...theme.assets.field.xl,
                        ...theme.assets.typography.header.xs,
                    }]
                }
            }),

            props.disabled && {
                cursor: 'not-allowed'
            },

            props.uppercase && {
                textTransform: 'uppercase'
            },
        ],
        child: (variant) => [
            {
                flexGrow: 0,
                flexShrink: 1,
                display: 'flex',
                alignItems: 'center',
                ' > span': {
                    height: 'auto',
                    '> svg': {
                        height: typography.fontSize,
                        width: typography.fontSize
                    }
                },
            },
            variant({
                align: {
                    left: [
                        {
                            marginRight: '.375rem'
                        },
                        variant({
                            size: {
                                xs: { marginRight: '.125rem' },
                                s: { marginRight: '.25rem' },
                                l: { marginRight: '.5rem' },
                                xl: { marginRight: '.75rem' },
                            }
                        })
                    ],
                    right: [
                        {
                            marginLeft: '.375rem'
                        },
                        variant({
                            size: {
                                xs: { marginLeft: '.125rem' },
                                s: { marginLeft: '.25rem' },
                                l: { marginLeft: '.5rem' },
                                xl: { marginLeft: '.75rem' },
                            }
                        })
                    ],
                },
            }),
        ]
    }
}

export default styles