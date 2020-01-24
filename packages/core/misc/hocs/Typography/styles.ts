import { StyleObject } from '@flow-ui/whale/types'
import callProp from '../../utils/callProp'
import Types from './types'

const styles: StyleObject<Types.Overrides, Types.PrivateProps> = (props, theme, styleProps) => {
    return {
        container:  [
            props.specificStyles,
            theme.typography[props.sizesOf][props.size || 1],
            typeof props.size != 'number' && {
                fontSize: props.size,
            },
            {
                fontWeight: props.weight,
                lineHeight: props.lineHeight,
                textDecoration: props.decoration,
                textTransform: props.transform,
                textAlign: props.align,
                color: callProp(props.color, theme.color),
                background: callProp(props.background, theme.color),
            },
            props.ellipsis && {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minWidth: 0,
            },
            styleProps.all
        ]
    }
}

export default styles