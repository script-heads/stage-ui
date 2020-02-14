
import WhaleTypes from '@flow-ui/whale/types'
import colorProp from '@flow-ui/whale/utils/colorProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {

    const color = colorProp(theme, props.color) || theme.color.primary

    return {
        container: (variant) => [
            {
                fontWeight: 600,
                cursor: 'pointer',
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
                userSelect: 'none',
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
                                ? color.darken(.6).rgb().string()
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
                    'xs': [{
                        ...theme.assets.field.xs,
                        ...theme.typography.text.xs
                    }],
                    's': [{
                        ...theme.assets.field.s,
                        ...theme.typography.text.s
                    }],
                    'm': [{
                        ...theme.assets.field.m,
                        ...theme.typography.text.m
                    }],
                    'l': [{
                        ...theme.assets.field.l,
                        ...theme.typography.text.l
                    }],
                    'xl': [{
                        ...theme.assets.field.xl,
                        ...theme.typography.header.xs,
                    }]
                }
            }),

            props.disabled && {
                cursor: 'not-allowed'
            },

            props.uppercase && {
                textTransform: 'uppercase'
            },
        ]
    }
}

export default styles