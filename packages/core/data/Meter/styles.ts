
import callProp from '@flow-ui/core/misc/utils/callProp'
import WhaleTypes from '@flow-ui/whale/types'
import chroma from 'chroma-js'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    const { loading } = props

    const color = chroma(callProp(props.color, theme.color) || theme.color.primary.css())

    return {
        container: (variant) => [
            {
                minWidth: '1rem',
                alignSelf: 'center',
                userSelect: 'none',
                overflow: 'hidden',
                boxSizing: 'border-box',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                background: theme.color.surface.css(),
                height: '0.75rem',
            },
            variant({
                shape: {
                    'round': [{
                        borderRadius: '100rem',
                    }]
                },
                size: {
                    xs: [{
                        height: '0.25rem',
                    }],
                    s: [{
                        height: '0.5rem',
                    }],
                    l: [{
                        height: '1rem',
                    }],
                    xl: [{
                        height: '1.25rem',
                    }]
                },
                decoration: {
                    outline: [
                        {
                            background: 'transparent',
                            borderColor: color.css(),
                            padding: '0.15rem',
                        },
                        variant({
                            size: {
                                xs: [{
                                    padding: '0rem',
                                }],
                                s: [{
                                    padding: '0.05rem',
                                    paddingLeft: '0.1rem',
                                    paddingRight: '0.1rem',
                                }],
                                l: [{
                                    padding: '0.2rem',
                                }],
                                xl: [{
                                    padding: '0.2rem',
                                }]
                            }
                        })
                    ],
                }
            }),
            styleProps.all,
        ],
        thumb: (variant) => [
            {
                height: '100%',
                background: color.css(),
                animation: loading ? 'move 2s linear infinite' : 'none',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4rem',
                '&:after': loading && [
                    {
                        content: `''`,
                        position: 'absolute',
                        top: '0; left: 0; bottom: 0; right: 0',
                        backgroundImage: `linear-gradient(
                            -45deg, 
                            rgba(255, 255, 255, .2) 25%, 
                            transparent 25%, 
                            transparent 50%, 
                            rgba(255, 255, 255, .2) 50%, 
                            rgba(255, 255, 255, .2) 75%, 
                            transparent 75%, 
                            transparent
                        )`,
                        backgroundSize: '2rem 2rem',
                        zIndex: 1,
                        animation: 'move 2s linear infinite',
                        overflow: 'hidden',
                    },
                    variant({
                        size: {
                            xs: [{
                                backgroundSize: '0.5rem 0.5rem'
                            }],
                            s: [{
                                backgroundSize: '1rem 1rem'
                            }],
                            l: [{
                                backgroundSize: '3rem 3rem'
                            }],
                            xl: [{
                                backgroundSize: '4rem 4rem'
                            }],
                        }
                    }),
                ],
                '@keyframes move': {
                    '0%': {
                        backgroundposition: '0 0'
                    },
                    '100%': {
                        backgroundPosition: '2rem 2rem'
                    }
                }
            },
            variant({
                shape: {
                    square: [{
                        borderRadius: 0
                    }]
                }
            }),
        ]
    }
}

export default styles