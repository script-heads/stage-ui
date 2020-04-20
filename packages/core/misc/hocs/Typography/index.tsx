import { jsx } from '@emotion/core'
import { useComponent } from '@stage-ui/system'
import { forwardRef, RefForwardingComponent, useMemo } from 'react'
import styles from './styles'
import Types from './types'

type RefTag = HTMLSpanElement | HTMLAnchorElement | HTMLParagraphElement

const Typography: RefForwardingComponent<RefTag, Types.PrivateProps> = (props, ref) => {

    const { cs, attributes, events } = useComponent(props.overrides, {
        props,
        styles,
        styleProps: { container: ['all'] },
        focus: {
            applyDecoration: true,
            ignoreMouse: props.mouseFocus
        }
    })

    return useMemo(() => (
        jsx(
            props.tag,
            {
                ...attributes,
                ...events.all,
                ref: ref,
                css: cs.container,
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
    ), [props, attributes])
}

export default forwardRef(Typography)