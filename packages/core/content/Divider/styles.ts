import WhaleTypes from '@flow-ui/whale/types'
import colorProp from '@flow-ui/whale/utils/colorProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    let { gap = 0, dash = 0, vertical } = props
    const color = colorProp(theme, props.color)?.rgb().string() || theme.assets.border.color
    
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
                    height: 'auto',
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