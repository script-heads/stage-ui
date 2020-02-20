
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
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
                color: theme.color.onPrimary.rgb().string(),
                alignContent: 'center',
                justifyContent: 'center',
                position: 'absolute',
                borderRadius: '1rem',
                padding: theme.spacing.xs + ' ' + theme.spacing.s,
                minWidth: `calc(${theme.assets.typography.text.l.lineHeight} - ${theme.spacing.s})`,
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%)',
                background: theme.color.primary.rgb().string(),
                ...theme.assets.typography.text.m,
            },
            variant({
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