
import colorProp from '@flow-ui/whale/utils/colorProp'
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    const { loading } = props

    const color = colorProp(theme, props.color) || theme.color.primary

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
                background: theme.color.surface.rgb().string(),
                height: '0.75rem',
                zIndex: 1,
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
                            borderColor: color.rgb().string(),
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
            })
        ],
        thumb: (variant) => [
            {
                height: '100%',
                background: color.rgb().string(),
                animation: loading ? 'move 2s linear infinite' : 'none',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4rem',
                transition: 'width 0.25s',
                boxSizing: 'border-box',
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