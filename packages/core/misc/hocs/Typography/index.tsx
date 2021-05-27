import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction, useMemo } from 'react'
import createClasses from './styles'
import Types from './types'

const Typography: ForwardRefRenderFunction<Types.Ref, Types.PrivateProps> = (props, ref) => {
  const { name, focus, download, href, hrefLang, media, ping, rel, target, type, referrerPolicy } = props
  const { classes, attributes, events } = useSystem(name, props, createClasses, { focus })

  return useMemo(
    () =>
      jsx(
        props.tag,
        {
          ...attributes,
          ...events,
          ref,
          css: classes.container,
          download,
          href,
          hrefLang,
          media,
          ping,
          rel,
          target,
          type,
          referrerPolicy,
        },
        props.children,
      ),
    [props, attributes],
  )
}

export default forwardRef(Typography)
