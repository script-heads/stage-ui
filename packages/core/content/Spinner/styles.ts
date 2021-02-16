import { keyframes } from '@emotion/react'
import SystemTypes from '@stage-ui/system/types'
import colorResolver from '@stage-ui/system/resolvers/color'

import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const color = (colorResolver(theme, props.color || theme.color.hardest)).rgb().string()
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