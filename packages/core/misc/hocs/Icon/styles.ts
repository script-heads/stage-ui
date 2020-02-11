
import colorProp from '@flow-ui/whale/utils/colorProp'
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    const background = colorProp(theme, props.background)
    const color = colorProp(theme, props.color)

    return {
        container: (variant) => [
            {
                width: 'min-content',
                display: 'inline-flex',
                color: color?.rgb().string(),
                background: background?.rgb().string(),
                height: theme.typography.text.m.fontSize,
                fontSize: theme.typography.text.m.fontSize,
            },
            props.size && !['xs','s','m','l','xl'].includes(props.size) && {
                height: props.size,
                fontSize: props.size,
            },
            variant({
                size: {
                    xs: {
                        height: theme.typography.text.xs.fontSize,
                        fontSize: theme.typography.text.xs.fontSize,
                    },
                    s: {
                        height: theme.typography.text.s.fontSize,
                        fontSize: theme.typography.text.s.fontSize,
                    },
                    l: {
                        height: theme.typography.text.l.fontSize,
                        fontSize: theme.typography.text.l.fontSize,
                    },
                    xl: {
                        height: theme.typography.text.xl.fontSize,
                        fontSize: theme.typography.text.xl.fontSize,
                    }
                },
                shape: {
                    circle: {
                        borderRadius: '50%',
                        border: '1px solid ' + color?.rgb().string(),
                        padding: '0.4em',
                    },
                    oval: {
                        borderRadius: '50%',
                        padding: '0.4em',
                    }
                },
                clickable: {
                    cursor: 'pointer'
                }
            })
        ],
        icon: [
            {
                display: 'inline-block',
                verticalAlign: 'middle',
            },
            props.rotate !== undefined && {
                transform: `rotate(${props.rotate}deg)`
            }
        ]
    }
}

export default styles