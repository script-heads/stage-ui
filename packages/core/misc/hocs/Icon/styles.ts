
import callProp from '@flow-ui/core/misc/utils/callProp'
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    
    const background = callProp(props.background, theme.color)
    const color = callProp(props.color, theme.color)
    
    return {
        container: (variant) => [
            {
                width: 'min-content',
                display: 'inline-flex',
                color,
                background,
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
                        border: '1px solid ' + color,
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
        icon: [{
            display: 'inline-block',
            verticalAlign: 'middle',
        }]
    }
}

export default styles