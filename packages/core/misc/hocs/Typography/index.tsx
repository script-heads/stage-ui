import { jsx } from '@emotion/core'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps'
import callProp from '@flow-ui/core/misc/utils/callProp'
import { forwardRef } from 'react'
import Types from './types'
import {useTheme} from '@flow-ui/core'

const Typography = (props: Types.PrivateProps, ref) => {

    const styleProps = useStyleProps(props)
    const { attributes } = useContainer(props)
    const theme = useTheme()
    
    return jsx(
        props.tag,
        {
            ...attributes,
            ref: ref,
            css: [
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
                styleProps.all,
            ],
            download: props.download,
            href: props.href,
            hrefLang: props.hrefLang,
            media: props.media,
            ping: props.ping,
            rel: props.rel,
            target: props.target,
            type: props.type,
            referrerPolicy: props.referrerPolicy,
        },
        props.children
    )
}

export default forwardRef(Typography)