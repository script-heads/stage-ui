import SystemTypes from '@stage-ui/system/types'
import SharedZIndex from '../../misc/utils/SharedZIndex'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const { decoration = 'modal', size = 'm' } = props

    const isPanel = decoration === 'panel'

    const spacing = theme.spacing[size] || theme.spacing.m
    const titleSize = theme.assets.typography.header[size] || theme.assets.typography.header.m
    const subtitleSize = theme.assets.typography.text[size] || theme.assets.typography.text.m

    return {
        overlay: (variant) => [
            {
                opacity: 0,
                display: 'flex',
                flexDirection: 'column',
                zIndex: SharedZIndex.increment,
                position: 'fixed',
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
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    panel: {
                        flex: 1,
                        display: 'flex',
                        alignItems: 'flex-end',
                    },
                    fullscreen: {
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                }
            })
        ],
        window: (variant) => [
            {
                position: 'relative',
                opacity: 0,
                margin: '0 auto',
                padding: spacing,
                minHeight: '1rem',
                backgroundColor: theme.color.surface.hex(),
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
                        maxWidth: '80%',
                        marginTop: spacing,
                        marginBottom: spacing,
                        boxShadow: '0 1rem 4rem ' + theme.color.onSurface.alpha(0.2).rgb().string(),
                    },
                    panel: {
                        minWidth: '15rem',
                        maxWidth: '80%',
                        marginTop: '20%',
                        transform: 'translateY(15rem)',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        boxShadow: '0 0 4rem ' + theme.color.onSurface.alpha(0.2).rgb().string(),
                    },
                    fullscreen: {
                        borderRadius: 0,
                        minWidth: '100%',
                        minHeight: '100%',
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