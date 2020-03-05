import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    
    const { decoration = 'modal', size = 'm' } = props
    
    const isPanel = decoration === 'panel'

    const spacing = theme.spacing[size] || theme.spacing.m
    const titleSize = theme.assets.typography.header[size] || theme.assets.typography.header.m
    const subtitleSize = theme.assets.typography.text[size] || theme.assets.typography.text.m
    
    return {
        overlay: (variant) => [
            {
                opacity: 0.2,
                zIndex: 200,
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: isPanel
                    ? 'transparent'
                    : 'rgba(0,0,0,.5)',
                overflowY: 'auto',
                backdropFilter: isPanel
                    ? 'none'
                    : 'blur(4px)',
                transition: 'opacity 0.25s',
                backfaceVisibility: 'hidden',
            },
            variant({
                visible: {
                    opacity: 1,
                },
            })
        ],
        wrapper: (variant) => [
            variant({
                decoration: {
                    modal: {
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    panel: {
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'flex-end',
                    }
                }
            })
        ],
        window: (variant) => [
            {
                position: 'relative',
                opacity: 0,
                zIndex: 200,
                margin: '0 auto',
                padding: spacing,
                minHeight: '1rem',
                backgroundColor: theme.color.surface.hex(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                borderRadius: theme.radius.m,
                boxSizing: 'border-box',
                overflow: 'hidden',
                transition: 'all 0.25s',
            },
            variant({
                decoration: {
                    modal: {
                        transform: 'translateY(-2rem)',
                        minWidth: '15rem',
                        maxWidth: '80vw',
                        marginTop: spacing,
                        marginBottom: spacing,
                    },
                    panel: {
                        minWidth: '15rem',
                        maxWidth: '80vw',
                        marginTop: '20vh',
                        transform: 'translateY(15rem)',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        
                    }
                },
                visible: [
                    {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                ],
            })
        ],

        header: (variant) => [{
            'h3': titleSize,    
            'p': [subtitleSize, {
                marginBottom: spacing
            }],     
        }],

        cross: () => [titleSize, {
            cursor: 'pointer',
            transition: 'all 0.25s',
            transform: 'scale(1)',
            opacity: .7,
            ':hover': {
                transform: 'scale(1.1)'
            },
            ':active': {
                transform: 'scale(1)'
            }
        }]
    }
}

export default styles