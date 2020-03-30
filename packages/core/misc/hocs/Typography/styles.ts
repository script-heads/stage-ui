import SystemTypes from '@flow-ui/system/types'
import Types from './types'
import { colorProp } from '@flow-ui/system'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.PrivateProps> = (props, theme) => {
    return {
        container: [
            props.specificStyles,
            theme.assets.typography[props.sizesOf][props.size || 'm'],
            /**
             * If size is custom
             * like 1rem or 1px
             */
            props.size && !['xs', 's', 'm', 'l', 'xl'].includes(props.size) && {
                fontSize: props.size,
            },
            {
                fontWeight: props.weight,
                lineHeight: props.lineHeight,
                textDecoration: props.decoration,
                textTransform: props.transform,
                textAlign: props.align,
                color: colorProp(theme, props.color)?.rgb().string(),
                background: colorProp(theme, props.backgroundColor)?.rgb().string(),
            },
            props.ellipsis && {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minWidth: 0,
            }
        ]
    }
}

export default styles