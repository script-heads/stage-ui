import { keyframes } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'
import colorProp from '@flow-ui/whale/utils/colorProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    const color = (colorProp(props.color, theme.color) || theme.color.hardest).rgb().string()
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
            }
        ],

        children: [{
            width: 'fit-content',
            animation: `${spinAnimation} ${duration}s linear infinite`
        }],
    }
}

export default styles