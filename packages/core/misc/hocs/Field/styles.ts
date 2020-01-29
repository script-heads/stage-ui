import WhaleTypes from '@flow-ui/whale/types'
import callProp from '../../utils/callProp'
import Types from './types'

type ExtractFunction<T> = {
    [K in keyof T]: Extract<T[K], Function>
}

const fieldStyles = <T extends Types.Overrides>(
    props: Omit<Types.Props, 'onChange'>,
    theme: WhaleTypes.Theme,
    params: {
        manyLines?: boolean
        additionalPadding?: string
        labelOverlayPosition?: 'top' | 'center'
        overrides?: Partial<ExtractFunction<WhaleTypes.Styles<T>>>
    } = {}): WhaleTypes.Styles<Types.Overrides> => {

    const color = callProp(props.color, theme.color)
    const { manyLines, overrides, additionalPadding, labelOverlayPosition, } = params

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
            overrides?.container?.(variant)
        ],

        field: (variant) => [
            {
                position: 'relative',
                flexShrink: 0,
                flexGrow: 1,
                background: theme.color.surface.css(),
                borderColor: theme.color.lightest.css(),
                outline: 'none',
                padding: '.25rem',
                display: 'flex',
                alignItems: 'stretch',
                boxSizing: 'border-box',
                '--headingLabelHeight': `calc(${theme.typography.text.m.lineHeight} + .25rem${additionalPadding ? ' + ' + additionalPadding : ''})`
            },
            variant({
                shape: {
                    rounded: [{
                        borderRadius: theme.radius.narrow
                    }],
                    round: [
                        variant({
                            size: {
                                xl: { borderRadius: '1.75rem' },
                                l:  { borderRadius: '2.062rem' },
                                m:  { borderRadius: '1.25rem' },
                                s:  { borderRadius: '1rem' },
                                xs: { borderRadius: '0.812rem' }
                            },
                        })
                    ]
                },
                size: {
                    'xs': [
                        {
                            flexBasis: theme.assets.fieldHeight.xs,
                            ...theme.typography.text.xs,
                            '--headingLabelHeight': `
                                calc(${theme.typography.text.xs.lineHeight} + 2px${additionalPadding ? ' + ' + additionalPadding : ''})
                            `
                        },
                        !manyLines && {
                            padding: '.25rem .375rem'
                        }
                    ],
                    's': [
                        {
                            flexBasis: theme.assets.fieldHeight.s,
                            ...theme.typography.text.m,
                            '--headingLabelHeight': `
                                calc(${theme.typography.text.xs.lineHeight} + 2px${additionalPadding ? ' + ' + additionalPadding : ''})
                            `
                        },
                        !manyLines && {
                            padding: '.25rem .5rem'
                        }
                    ],
                    'm': [
                        {
                            flexBasis: theme.assets.fieldHeight.m,
                            ...theme.typography.text.m,
                        },
                        !manyLines && {
                            padding: '.25rem .75rem'
                        }
                    ],
                    'l': [
                        {
                            flexBasis: theme.assets.fieldHeight.l,
                            ...theme.typography.header.l
                        },
                        !manyLines && {
                            padding: '.25rem .875rem'
                        }
                    ],
                    'xl': [
                        {
                            flexBasis: theme.assets.fieldHeight.xl,
                            ...theme.typography.header.xl
                        },
                        !manyLines && {
                            padding: '.5rem 1rem'
                        }
                    ]
                },
                decoration: {
                    'outline': [
                        {
                            borderWidth: '1px',
                            borderStyle: 'solid'
                        },
                        variant({
                            disabled: [{
                                background: theme.color.lightest.css(),
                            }]
                        })
                    ],
                    'filled': [
                        {
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'transparent'
                        },
                        variant({
                            disabled: [{
                                background: theme.color.lightest.css(),
                            }]
                        })
                    ],
                    'underline': [{
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        background: 'transparent',
                        paddingLeft: 0,
                        paddingRight: 0,
                    }],
                    'none': [{
                        background: 'transparent',
                    }]
                },
                focus: [{
                    borderColor: theme.color.primary.css()
                }],
                disabled: [{
                    color: theme.color.light.css(),
                    cursor: 'not-allowed'
                }]
            }),
            {
                borderColor: color,
            },
            overrides?.field?.(variant)
        ],

        content: (variant) => [
            {
                display: 'flex',
                flexBasis: '12rem',
                flexGrow: 1,
                flexShrink: 1,
                borderColor: 'inherit',
                background: 'inherit',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden'
            },
            variant({
                isLabelOverlay: [{
                    paddingTop: 'var(--headingLabelHeight)',
                }]
            }),
            overrides?.content?.(variant)
        ],

        label: (variant) => [
            {
                color: theme.color.hard.css(),
                paddingBottom: '.25rem',
            },
            additionalPadding && {
                marginLeft: additionalPadding,
                marginTop: additionalPadding
            },
            theme.typography.text.m,
            variant({
                size: {
                    's': [
                        {
                            paddingBottom: '2px',
                        },
                        theme.typography.text.s
                    ],
                    'xs': [
                        {
                            paddingBottom: '2px',

                        },
                        theme.typography.text.xs
                    ]
                },
                isLabelOutside: [{
                    paddingBottom: '.25rem',
                    paddingLeft: '.25rem',
                }],
                isLabelOverlay: [
                    {
                        fontSize: 'inherit',
                        position: 'absolute',
                        display: 'flex',
                        userSelect: 'none',
                        marginTop: 0,
                        paddingBottom: 0
                    },
                    (!labelOverlayPosition || labelOverlayPosition === 'top') && {
                        top: 0,
                        paddingTop: 'var(--headingLabelHeight)'
                    },
                    labelOverlayPosition === 'center' && {
                        top: '50%',
                        transform: 'translateY(-50%)'
                    }
                ],
            }),
            overrides?.label?.(variant)
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
                    right: variant({
                        size: {
                            'xs': [{ marginLeft: '.25rem' }],
                            's': [{ marginLeft: '.25rem' }],
                            'm': [{ marginLeft: '.5rem' }],
                            'l': [{ marginLeft: '.5rem' }],
                            'xl': [{ marginLeft: '.75rem' }],
                        }
                    }),
                    left: variant({
                        size: {
                            'xs': [{ marginRight: '.25rem' }],
                            's': [{ marginRight: '.25rem' }],
                            'm': [{ marginRight: '.5rem' }],
                            'l': [{ marginRight: '.5rem' }],
                            'xl': [{ marginRight: '.75rem' }],
                        }
                    })
                }
            }),
            overrides?.child?.(variant)
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
                    's': [theme.typography.text.s],
                    'xs': [theme.typography.text.xs]
                }
            }),
            overrides?.hint?.(variant)
        ]
    }
}

export default fieldStyles