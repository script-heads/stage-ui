import WhaleTypes from '@flow-ui/whale/types'
import colorProp from '@flow-ui/whale/utils/colorProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    
    let { gap = '0px', dash = '1px', vertical } = props
    const color = colorProp(theme, props.color)?.rgb().string() || theme.assets.border.color

    if (dash && !gap) {
        gap = dash
    }

    gap = theme.spacing[gap] || gap
    dash = theme.spacing[dash] || dash

    if (typeof(gap) === 'number') {
        gap = `${gap}px`
    }

    if (typeof(dash) === 'number') {
        dash = `${dash}px`
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
                            ${color} ${dash},
                            transparent ${dash}, 
                            transparent ${gap} 
                        )`,
                            backgroundPosition: 'right top',
                            backgroundSize: `calc(${gap} + ${dash}) calc(${gap} + ${dash})`,
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
                            ${color} ${dash},
                            transparent ${dash}, 
                            transparent ${gap} 
                        )`,
                            backgroundPosition: 'left bottom',
                            backgroundSize: `calc(${gap} + ${dash}) calc(${gap} + ${dash})`,
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