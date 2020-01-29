import WhaleTypes from '@flow-ui/whale/types'
import callProp from '../../utils/callProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.PrivateProps> = (props, theme, styleProps) => {
    return {
        container:  [
            props.specificStyles,
            theme.typography[props.sizesOf][props.size || 'm'],
            /**
             * If size is custom
             * like 1rem or 1px
             */
            props.size && !['xs','s','m','l','xl'].includes(props.size) && {
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