import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction, useMemo } from 'react'
import styles from './styles'
import Types from './types'

const capitalizeFirstLetter = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

type RefTag = HTMLSpanElement | HTMLAnchorElement | HTMLParagraphElement

const Typography: ForwardRefRenderFunction<RefTag, Types.PrivateProps> = (props, ref) => {

    const { cs, attributes, events } = useComponent(props.overrides, {
        props,
        styles,
        styleProps: { container: ['all'] },
        focus: {
            applyDecoration: true,
            ignoreMouse: props.mouseFocus
        }
    })

    const children = typeof props.children === 'string' && props.capitalize  
        ? capitalizeFirstLetter(props.children) 
        : props.children

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
            children
        )
    ), [props, attributes])
}

export default forwardRef(Typography)