import useStyleProps from '../../hooks/useStyleProps'
import callProp from '../../utils/callProp'
import Types from './types'
import Shared from '../../../types'
import ThemeTypes from '../../themes/types'

const fieldStyles = <T extends Types.Overrides>(
    props: Types.Props, 
    theme: ThemeTypes.Index, 
    params: {
        manyLines?: boolean
        additionalPadding?: string
        labelOverlayPosition?: 'top' | 'center'
        overrides?: Partial<Shared.ComponentStyles<T>>
    } = {}): Shared.ComponentStyles<Types.Overrides> => {
    
    const styleProps = useStyleProps(props)
    const color = callProp(props.color, theme.color)
    const {manyLines, overrides, additionalPadding, labelOverlayPosition} = params
    
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
            styleProps.flow,
            styleProps.layout,
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
                '--headingLabelHeight': `calc(${theme.typography.text[2].lineHeight} + .25rem${additionalPadding ? ' + ' + additionalPadding : ''})`
            },
            variant({
                shape: {
                    'rounded': [{
                        borderRadius: theme.radius.narrow
                    }],
                    'round': [{
                        borderRadius: '4rem'
                    }]
                },
                size: {
                    'xsmall': [
                        {
                            flexBasis: theme.assets.fieldHeight.xsmall,
                            ...theme.typography.text[3],   
                            '--headingLabelHeight': `
                                calc(${theme.typography.text[4].lineHeight} + 2px${additionalPadding ? ' + ' + additionalPadding : ''})
                            `                         
                        },
                        !manyLines && {
                            padding: '.25rem .375rem'
                        }
                    ],
                    'small': [
                        {
                            flexBasis: theme.assets.fieldHeight.small,
                            ...theme.typography.text[2],
                            '--headingLabelHeight': `
                                calc(${theme.typography.text[4].lineHeight} + 2px${additionalPadding ? ' + ' + additionalPadding : ''})
                            `                            
                        },
                        !manyLines && {
                            padding: '.25rem .5rem'
                        }
                    ],
                    'medium': [
                        {
                            flexBasis: theme.assets.fieldHeight.medium,
                            ...theme.typography.text[1],                            
                        },
                        !manyLines && {
                            padding: '.25rem .75rem'
                        }
                    ],
                    'large': [
                        {
                            flexBasis: theme.assets.fieldHeight.large,
                            fontSize: theme.typography.header[4].fontSize,
                            lineHeight: theme.typography.header[4].lineHeight,                            
                        },
                        !manyLines && {
                            padding: '.25rem .875rem'
                        }
                    ],
                    'xlarge': [
                        {
                            flexBasis: theme.assets.fieldHeight.xlarge,
                            fontSize: theme.typography.header[4].fontSize,
                            lineHeight: theme.typography.header[4].lineHeight,                            
                        },
                        !manyLines && {
                            padding: '.25rem .875rem'
                        }
                    ]
                },
                decoration: {
                    'outline': [
                        {
                            borderWidth: '1px',
                            borderStyle: 'solid'
                        },
                        variant({disabled: [{
                            background: theme.color.lightest.css(),
                        }]})
                    ],
                    'filled': [
                        {
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: 'transparent'
                        },
                        variant({disabled: [{
                            background: theme.color.lightest.css(),
                        }]})
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
            styleProps.color,
            styleProps.border,
            styleProps.padding,
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
            theme.typography.text[2],
            variant({
                size: {
                    'small': [
                        {
                            paddingBottom: '2px',
                        },
                        theme.typography.text[4]
                    ],
                    'xsmall': [
                        {
                            paddingBottom: '2px',
                            
                        },
                        theme.typography.text[4]
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
                    labelOverlayPosition  === 'center' && {
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
                    'right': variant({
                        size: {
                            'xsmall': [{marginLeft: '.25rem'}],
                            'small': [{marginLeft: '.25rem'}],
                            'medium': [{marginLeft: '.5rem'}],
                            'large': [{marginLeft: '.5rem'}],
                            'xlarge': [{marginLeft: '.75rem'}],
                        }
                    }),
                    'left': variant({
                        size: {
                            'xsmall': [{marginRight: '.25rem'}],
                            'small': [{marginRight: '.25rem'}],
                            'medium': [{marginRight: '.5rem'}],
                            'large': [{marginRight: '.5rem'}],
                            'xlarge': [{marginRight: '.75rem'}],
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
                ...theme.typography.text[2],
            },
            variant({
                size: {
                    'small': [theme.typography.text[4]],
                    'xsmall': [theme.typography.text[4]]
                }
            }),
            overrides?.hint?.(variant)
        ]
    }
}

export default fieldStyles