import { jsx } from '@emotion/core'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps'
import callProp from '@flow-ui/core/misc/utils/callProp'
import { forwardRef } from 'react'
import Types from './types'

const Typography = (props: Types.Props, ref) => {

    const styleProps = useStyleProps(props)
    const { attributes } = useContainer(props)

    const data = props.quotes && typeof props.children === 'string'
        ? props.children.replace(/"([^"]*)"/g, '«$1»')
        : props.children

    return jsx(
        props.tag,
        {
            ref: ref,
            ...attributes,
            css: [
                props.defaultStyles,
                {
                    fontSize: props.size,
                    fontWeight: props.weight,
                    textDecoration: props.decoration,
                    textTransform: props.transform,
                    textAlign: props.align,
                    color: callProp(props.color, props.theme.color),
                    background: callProp(props.background, props.theme.color),
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
        data
    )
}

export default forwardRef(Typography)