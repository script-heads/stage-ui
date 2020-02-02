import WhaleTypes, { EmotionStyles } from '@flow-ui/whale/types'
import callProp from '../../utils/callProp'
import Types from './types'

type ExtractFunction<T> = {
    [K in keyof T]: Extract<T[K], Function>
}

const fieldStyles = <T extends Types.Overrides>(
    props: Omit<Types.Props, 'onChange'>,
    theme: WhaleTypes.Theme,
    stylePatch?: Partial<ExtractFunction<WhaleTypes.Styles<T>>>
): WhaleTypes.Styles<Types.Overrides> => {

    const color = callProp(props.color, theme.color)
  
    return {
        container: (variant) => [
            {
                position: 'relative',
                display: 'flex',
                minWidth: '1rem',
                flex: 1,
                flexDirection: 'column',
                overflow: 'hidden',
                outline: 'none'
            },
            stylePatch?.container?.(variant)
        ],

        field: (variant) => [
            {
                position: 'relative',
                flexShrink: 0,
                flexGrow: 1,
                background: theme.color.surface.css(),
                borderColor: theme.color.lightest.css(),
                borderRadius: theme.radius.narrow,
                borderWidth: '1px',
                borderStyle: 'solid',
                outline: 'none',
                display: 'flex',
                alignItems: 'stretch',
                boxSizing: 'border-box',
            },
            theme.assets.field.m,
            theme.typography.text.m,
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
                                l:  { borderRadius: `calc(${theme.assets.field.l.minHeight}/2)` },
                                s:  { borderRadius: `calc(${theme.assets.field.s.minHeight}/2)` },
                                xs: { borderRadius: `calc(${theme.assets.field.xs.minHeight}/2)` }
                            },
                        })
                    ]
                },
                size: {
                    xs: [
                        theme.assets.field.xs,
                        theme.typography.text.xs,
                    ],
                    s: [
                        theme.assets.field.s,
                        theme.typography.text.s,
                    ],
                    l: [
                        theme.assets.field.l,
                        theme.typography.text.l,
                    ],
                    xl: [
                        theme.assets.field.xl,
                        theme.typography.text.xl,
                    ]
                },
                focus: {
                    borderColor: theme.color.primary.css()
                },
                disabled: {
                    color: theme.color.light.css(),
                    cursor: 'not-allowed'
                },
                decoration: {
                    outline: [
                        variant({
                            disabled: [{
                                background: theme.color.lightest.css(),
                            }]
                        })
                    ],
                    filled: [
                        {
                            borderColor: 'transparent'
                        },
                        variant({
                            disabled: [{
                                background: theme.color.lightest.css(),
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
            stylePatch?.content?.(variant)
        ],

        label: (variant) => [
            {
                color: theme.color.hard.css(),
                display: 'flex',
                userSelect: 'none',
                paddingBottom: '0.125rem'
            },
            theme.typography.text.m,
            variant({
                size: {
                    xs: [
                        theme.typography.text.xs,
                    ],
                    s: [
                        theme.typography.text.s,
                    ],
                    l: [
                        theme.typography.text.l,
                    ],
                    xl: [
                        theme.typography.text.xl,
                    ]
                }
            }),
            stylePatch?.label?.(variant)
        ],

        child: (variant) => [
            {
                color: color || theme.color.light.css(),
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
                }
            }),
            stylePatch?.child?.(variant)
        ],

        clearButton: (variant) => [
            {
                ':hover': {
                    color: theme.color.primary.css(),
                }
            },
            stylePatch?.clearButton?.(variant)
        ],

        hint: (variant) => [
            {
                paddingTop: '.25rem',
                paddingLeft: props.decoration != 'underline' ? '.25rem' : '',
                color: color || theme.color.hard.css(),
                ...theme.typography.text.m,
            },
            variant({
                size: {
                    s: [theme.typography.text.s],
                    xs: [theme.typography.text.xs]
                }
            }),
            stylePatch?.hint?.(variant)
        ]
    }
}

export default fieldStyles