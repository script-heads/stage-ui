import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction, useMemo } from 'react'
import createClasses from './styles'
import Types from './types'

const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const Typography: ForwardRefRenderFunction<Types.Ref, Types.PrivateProps> = (props, ref) => {
  const { name, download, href, hrefLang, media, ping, rel, target, type, referrerPolicy, focus } =
    props
  const { classes, attributes, events, styleProps } = useSystem(name, props, createClasses, {
    focus,
  })

  const children =
    typeof props.children === 'string' && props.capitalize
      ? capitalizeFirstLetter(props.children)
      : props.children

  return useMemo(
    () =>
      jsx(
        props.tag,
        {
          ...attributes,
          ...events,
          ref,
          css: [classes.container, styleProps.all],
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
        children,
      ),
    [props, attributes],
  )
}

export default forwardRef(Typography)
