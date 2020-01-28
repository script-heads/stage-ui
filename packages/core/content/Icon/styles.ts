
import callProp from '@flow-ui/core/misc/utils/callProp'
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    
    const background = callProp(props.background, theme.color)
    const color = callProp(props.color, theme.color)
    
    return {
        container: [
            {
                width: 'min-content',
                height: props.size || '1rem',
                fontSize: props.size || '1rem',
                display: 'inline-flex',
                color,
                background
            },
            props.onClick && {
                cursor: 'pointer'
            },
            props.shape === 'oval' && {
                borderRadius: '50%',
                padding: '0.4em',
            },
            props.shape === 'circle' && {
                borderRadius: '50%',
                border: '1px solid ' + color,
                padding: '0.4em',
            },
            styleProps.all,
        ],
        icon: [{
            display: 'inline-block',
            verticalAlign: 'middle',
        }]
    }
}

export default styles