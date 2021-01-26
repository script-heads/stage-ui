import SystemTypes from '@stage-ui/system/types'
import colorProp from '@stage-ui/system/utils/colorProp'
import Types from './types'

type ExtractFunction<T> = {
    [K in keyof T]: Extract<T[K], Function>
}

const fieldStyles = <T extends Types.Styles>(
    props: Omit<Types.Props, 'onChange'>,
    theme: SystemTypes.Theme,
    stylePatch?: Partial<ExtractFunction<SystemTypes.Styles<T>>>
): SystemTypes.Styles<Types.Styles> => {

    const color = colorProp(theme, props.color)

    return {
        container: (variant) => [
            {
                position: 'relative',
                display: 'flex',
                minWidth: '1rem',
                flex: 1,
                flexDirection: 'column',
                outline: 'none'
            },
            //FIXME: types
            //@ts-ignore
            stylePatch?.container?.(variant)
        ],

        field: (variant) => [
            {
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
                flexGrow: 1,
                background: theme.color.surface.rgb().string(),
                borderColor: theme.color.lightest.rgb().string(),
                borderRadius: theme.radius.s,
                borderWidth: '1px',
                borderStyle: 'solid',
                outline: 'none',
                display: 'flex',
                alignItems: 'stretch',
                boxSizing: 'border-box',
            },
            theme.assets.field.m,
            theme.assets.typography.text.m,
            variant({
                shape: {
                    square: {
                        borderRadius: 0
                    },
                    round: [
                        {
                            borderRadius: `calc(${theme.assets.field.m.minHeight}/2)`
                        },
                        variant({
                            size: {
                                xl: { borderRadius: `calc(${theme.assets.field.xl.minHeight}/2)` },
                                l: { borderRadius: `calc(${theme.assets.field.l.minHeight}/2)` },
                                s: { borderRadius: `calc(${theme.assets.field.s.minHeight}/2)` },
                                xs: { borderRadius: `calc(${theme.assets.field.xs.minHeight}/2)` }
                            },
                        })
                    ]
                },
                size: {
                    xs: [
                        theme.assets.field.xs,
                        theme.assets.typography.text.xs,
                    ],
                    s: [
                        theme.assets.field.s,
                        theme.assets.typography.text.s,
                    ],
                    l: [
                        theme.assets.field.l,
                        theme.assets.typography.text.l,
                    ],
                    xl: [
                        theme.assets.field.xl,
                        theme.assets.typography.text.xl,
                    ]
                },
                focus: {
                    borderColor: theme.color.primary.rgb().string()
                },
                disabled: {
                    color: theme.color.light.rgb().string(),
                    cursor: 'not-allowed'
                },
                decoration: {
                    outline: [
                        variant({
                            disabled: [{
                                background: theme.color.lightest.rgb().string(),
                            }]
                        })
                    ],
                    filled: [
                        {
                            borderColor: 'transparent'
                        },
                        variant({
                            disabled: [{
                                background: theme.color.lightest.rgb().string(),
                            }]
                        })
                    ],
                    underline: {
                        borderTopColor: 'transparent',
                        borderLeftColor: 'transparent',
                        borderRightColor: 'transparent',
                        background: 'transparent',
                        paddingLeft: 0,
                        paddingRight: 0,
                        borderRadius: 0,
                    },
                    none: {
                        background: 'transparent',
                        borderColor: 'transparent',
                    }
                },
            }),
            //FIXME: types
            //@ts-ignore
            stylePatch?.field?.(variant)
        ],

        content: (variant) => [
            {
                display: 'flex',
                flexGrow: 1,
                flexShrink: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden'
            },
            //FIXME: types
            //@ts-ignore
            stylePatch?.content?.(variant),
        ],

        label: (variant) => [
            {
                color: theme.color.hard.rgb().string(),
                display: 'flex',
                userSelect: 'none',
                paddingBottom: '0.125rem'
            },
            theme.assets.typography.text.m,
            variant({
                size: {
                    xs: [
                        theme.assets.typography.text.xs,
                    ],
                    s: [
                        theme.assets.typography.text.s,
                    ],
                    l: [
                        theme.assets.typography.text.l,
                    ],
                    xl: [
                        theme.assets.typography.text.xl,
                    ]
                },
                labelType: {
                    inside: [
                        {
                            lineHeight: 0.7,
                            fontSize: '0.85rem',
                            paddingTop: '0.25rem',
                        },
                        variant({
                            size: {
                                xs: {
                                    fontSize: '0.5rem',
                                    lineHeight: 0.2,
                                },
                                s: {
                                    fontSize: '0.625rem',
                                    lineHeight: 0.6,
                                    paddingTop: '0.125rem',
                                },
                                l: {
                                    fontSize: '1rem',
                                    lineHeight: 0.8,
                                },
                                xl: {
                                    fontSize: '1.25rem',
                                    lineHeight: 1,
                                }
                            }
                        })
                    ]
                }
            }),
            //FIXME: types
            //@ts-ignore
            stylePatch?.label?.(variant)
        ],

        child: (variant) => [
            {
                color: color?.rgb().string() || theme.color.light.rgb().string(),
                flexGrow: 0,
                flexShrink: 1,
                display: 'flex',
                alignItems: 'center',
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
            //FIXME: types
            //@ts-ignore
            stylePatch?.child?.(variant)
        ],

        clearButton: (variant) => [
            {
                cursor: 'pointer',
                ':hover': {
                    color: theme.color.primary.rgb().string(),
                }
            },
            //FIXME: types
            //@ts-ignore
            stylePatch?.clearButton?.(variant)
        ],

        hint: (variant) => [
            {
                paddingTop: '.25rem',
                paddingLeft: props.decoration != 'underline' ? '.25rem' : '',
                color: color?.rgb().string() || theme.color.hard.rgb().string(),
                ...theme.assets.typography.text.m,
            },
            variant({
                size: {
                    s: [theme.assets.typography.text.s],
                    xs: [theme.assets.typography.text.xs]
                }
            }),
            //FIXME: types
            //@ts-ignore
            stylePatch?.hint?.(variant)
        ]
    }
}

export default fieldStyles