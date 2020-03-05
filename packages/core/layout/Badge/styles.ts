
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    const { assets, spacing } = theme
    const { text } = assets.typography
    const typography = text[props.size || 'm'] || text['m']
    const padding = typography.fontSize
    
    return {
        container: [
            {
                position: 'relative',
                width: 'fit-content',
            }
        ],
        holder: (variant) => [
            {
                zIndex: 1,
                display: 'flex',
                width: 'fit-content',
                color: theme.color.onPrimary.rgb().string(),
                alignContent: 'center',
                justifyContent: 'center',
                position: 'absolute',
                padding: `calc(${padding} / 4) calc(${padding} / 2)`,
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%)',
                background: theme.color.primary.rgb().string(),
                borderRadius: '100rem',
                ...typography,
            },
            variant({
                shape: {
                    rounded: {
                        borderRadius: theme.radius.narrow
                    },
                    square: {
                        borderRadius: '0'
                    }
                },
                align: {
                'top-right': [{
                    top: 0,
                    right: 0,
                    transform: 'translate(50%, -50%)',
                }],
                'top-left': [{
                    top: 0,
                    left: 0,
                    transform: 'translate(-50%, -50%)',
                }],
                'bottom-right': [{
                    bottom: 0,
                    right: 0,
                    transform: 'translate(50%, 50%)',
                }],
                'bottom-left': [{
                    bottom: 0,
                    left: 0,
                    transform: 'translate(-50%, 50%)',
                }],
                'top': [{
                    top: 0,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }],
                'bottom': [{
                    bottom: 0,
                    left: '50%',
                    transform: 'translate(-50%, 50%)',
                }],
                'right': [{
                    top: '50%',
                    right: 0,
                    transform: 'translate(50%, -50%)',
                }],
                'left': [{
                    top: '50%',
                    left: 0,
                    transform: 'translate(-50%, -50%)',
                }]
            }})
        ],
    }
}

export default styles