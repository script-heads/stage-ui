import { keyframes } from '@emotion/core'
import callProp from '@flow-ui/core/misc/utils/callProp'
import { StyleObject } from '@flow-ui/whale/types'
import Types from './types'

const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    
    const color = callProp(props.color, theme.color) || theme.color.hardest.css()
    const duration = props.duration || 1

    const spinAnimation = keyframes({
        'from': {
            transform: 'rotate(0deg)'
        },
        'to': {
            transform: 'rotate(360deg)'
        }
    })

    return {
        container: [
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
                boxSizing: 'border-box',
                color: color,
                fontSize: props.size || '1.125em'
            },
            styleProps.all,
        ],

        children: [{
            width: 'fit-content',
            animation: `${spinAnimation} ${duration}s linear infinite`
        }],
    }
}

export default styles