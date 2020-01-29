import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'
import callProp from '@flow-ui/core/misc/utils/callProp'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    let { gap = 0, dash = 0, vertical } = props
    const color = callProp(props.color, theme.color) || theme.assets.border.color
    
    if (gap && !dash) {
        dash = 1
    }

    if (dash && !gap) {
        gap = dash
    }
    
    return {
        container: [
            vertical
                ? {
                    height: '100%',
                    width: '1px',
                    ...(gap || dash)
                        ? {
                            backgroundImage: `linear-gradient(
                            to bottom,
                            ${color},
                            ${color} ${dash}px,
                            transparent ${dash}px, 
                            transparent ${gap}px 
                        )`,
                            backgroundPosition: 'right top',
                            backgroundSize: `${props.w || '1px'} ${gap + dash}px`,
                            backgroundRepeat: 'repeat-y',
                        }
                        : {
                            background: color
                        }
                }
                : {
                    width: '100%',
                    height: '1px',
                    ...(gap || dash)
                        ? {
                            backgroundImage: `linear-gradient(
                            to right,
                            ${color},
                            ${color} ${dash}px,
                            transparent ${dash}px, 
                            transparent ${gap}px 
                        )`,
                            backgroundPosition: 'left bottom',
                            backgroundSize: `${gap + dash}px`,
                            backgroundRepeat: 'repeat-x',
                        }
                        : {
                            background: color
                        }
                },
        ]
    }
}

export default styles