import SystemTypes from '@stage-ui/system/types'
import colorResolver from '@stage-ui/system/resolvers/color'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    let { gap = '0px', dash = '1px', vertical } = props
    const color = colorResolver(theme, props.color || theme.assets.border.color)?.rgb().string()

    if (dash && !gap) {
        gap = dash
    }

    gap = theme.spacing[gap] || gap
    dash = theme.spacing[dash] || dash

    if (typeof (gap) === 'number') {
        gap = `${gap}px`
    }

    if (typeof (dash) === 'number') {
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