
import { StyleObject } from '@flow-ui/whale/types'
import Types from './types'

const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    return {
        container: [
            {
                position: 'relative',
                width: 'fit-content',
            },
            styleProps.flow
        ],
        holder: (variant) => [
            {
                zIndex: 1,
                display: 'flex',
                color: theme.color.onPrimary.css(),
                alignContent: 'center',
                justifyContent: 'center',
                position: 'absolute',
                borderRadius: '1rem',
                padding: theme.distance.xsmall + ' ' + theme.distance.small,
                ...theme.typography.text[1],
                minWidth: `calc(${theme.typography.text[1].lineHeight} - ${theme.distance.small})`,
                top: 0,
                right: 0,
                transform: 'translate(50%, -50%)',
                background: theme.color.primary.css()
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
            }}),
            styleProps.self
        ],
    }
}

export default styles