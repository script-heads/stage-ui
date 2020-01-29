import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    return {
        overlay: (variant) => [
            {
                opacity: 0,
                zIndex: 200,
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,.5)',
                justifyContent: 'center',
                alignItems: 'center',
                overflowY: 'auto',
                backdropFilter: 'blur(4px)',
                transition: 'opacity 0.25s',
                backfaceVisibility: 'hidden',
            },
            variant({
                visible: {
                    opacity: 1,
                },
                center: {
                    display: 'flex',
                }
            })
        ],
        window: (variant) => [
            {
                opacity: 0,
                zIndex: 200,
                backgroundColor: theme.color.backgroundVariant.css(),
                minHeight: '1rem',
                minWidth: '15rem',
                maxWidth: '40rem',
                padding: '2.25rem',
                margin: '0 auto',
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                borderRadius: theme.radius.default,
                transition: 'all 0.5s',
                transform: 'translateY(-20px)',
                boxSizing: 'border-box',
                overflow: 'hidden',
                position: 'relative'
            },
            variant({
                visible: {
                    opacity: 1,
                    transform: 'translateY(0)',
                },
                fullSizeCenter: {
                    display: 'flex',
                }
            })
        ],

        header: [{
            marginTop: '-0.25rem',
            lineHeight: '2.375rem'
        }],

        cross: [{
            marginTop: '-0.25rem',
            marginLeft: '2rem',
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