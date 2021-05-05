
import colorProp from '@stage-ui/system/utils/colorProp'
import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const background = colorProp(theme, props.background)
    const color = colorProp(theme, props.color)

    return {
        container: (variant) => [
            {
                width: 'min-content',
                display: 'inline-flex',
                color: color?.rgb().string(),
                background: background?.rgb().string(),
                height: theme.assets.typography.text.m.fontSize,
                fontSize: theme.assets.typography.text.m.fontSize,
            },
            props.size && !['xs', 's', 'm', 'l', 'xl'].includes(props.size) && {
                height: props.size,
                fontSize: props.size,
            },
            variant({
                size: {
                    xs: {
                        height: theme.assets.typography.text.xs.fontSize,
                        fontSize: theme.assets.typography.text.xs.fontSize,
                    },
                    s: {
                        height: theme.assets.typography.text.s.fontSize,
                        fontSize: theme.assets.typography.text.s.fontSize,
                    },
                    l: {
                        height: theme.assets.typography.text.l.fontSize,
                        fontSize: theme.assets.typography.text.l.fontSize,
                    },
                    xl: {
                        height: theme.assets.typography.text.xl.fontSize,
                        fontSize: theme.assets.typography.text.xl.fontSize,
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