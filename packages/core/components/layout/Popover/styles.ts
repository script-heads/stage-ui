
import Types from './types'

import colorResolver from '@stage-ui/system/resolvers/color'

const createClasses: Stage.CreateClasses<Types.Styles, Types.Props>  = (theme, props, styleProps) => {

    const background = colorResolver(theme, props.backgroundColor || theme.color.surface.rgb().string()
    const borderColor = colorResolver(theme, props.borderColor || theme.assets.border.color.rgb().string()
    const borderWidth = theme.assets.border.width
    const width = props.arrowWidth || '.75rem'
    const height = props.arrowHeight || '.5rem'
    const halfWidth = `calc(${width} / 2)`

    return {
        container: [
            {
                position: 'relative',
                width: 'fit-content',
                background,
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                borderRadius: theme.radius.m,
                filter: `drop-shadow(${theme.assets.shadow.m})`,
                padding: theme.spacing.s
            }
        ],
        arrow: (variant) => [
            {
                height, width,
                position: 'absolute',
                '&::before, &::after': {
                    position: 'absolute',
                    display: 'inline-block',
                    content: '\'\'',
                    borderColor: 'transparent',
                    borderStyle: 'solid',
                }
            },
            variant({
                align: {
                    none: [{
                        display: 'none'
                    }],
                    top: [{
                        bottom: `calc(100% + ${borderWidth})`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        '&::before': {
                            top: 0,
                            borderWidth: `0 ${halfWidth} ${height}`,
                            borderBottomColor: borderColor,
                        },
                        '&::after': {
                            top: borderWidth,
                            borderWidth: `0 ${halfWidth} ${height}`,
                            borderBottomColor: background,
                        }
                    }],
                    bottom: [{
                        top: `calc(100% + ${borderWidth})`,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        '&::before': {
                            bottom: 0,
                            borderWidth: `${height} ${halfWidth} 0`,
                            borderTopColor: borderColor,
                        },
                        '&::after': {
                            bottom: borderWidth,
                            borderWidth: `${height} ${halfWidth} 0`,
                            borderTopColor: background,
                        }
                    }],
                    right: [{
                        height: width,
                        width: height,
                        left: `calc(100% + ${borderWidth})`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        '&::before': {
                            right: 0,
                            borderWidth: `${halfWidth} 0 ${halfWidth} ${height}`,
                            borderLeftColor: borderColor,
                        },
                        '&::after': {
                            right: borderWidth,
                            borderWidth: `${halfWidth} 0 ${halfWidth} ${height}`,
                            borderLeftColor: background,
                        }
                    }],
                    left: [{
                        height: width,
                        width: height,
                        right: `calc(100% + ${borderWidth})`,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        '&::before': {
                            left: 0,
                            borderWidth: `${halfWidth} ${height} ${halfWidth} 0`,
                            borderRightColor: borderColor,
                        },
                        '&::after': {
                            left: borderWidth,
                            borderWidth: `${halfWidth} ${height} ${halfWidth} 0`,
                            borderRightColor: background,
                        }
                    }],
                }
            }),
        ]
    }
}

export default createClasses