import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps'
import callProp from '@flow-ui/core/misc/utils/callProp'
import Shared from '../../types'
import Types from './types'

const iconStyles: Shared.FunctionalComponentStyles<Types.Overrides> = (props: Types.Props, theme) => {
    const styleProps = useStyleProps(props)
    const background = callProp(props.background, theme.color)
    const color = callProp(props.color, theme.color)

    return {
        container: [
            {
                height: 'min-content',
                width: 'min-content',
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

export default iconStyles