import { useSystem } from '@stage-ui/system'
import React, { ForwardRefRenderFunction } from 'react'
import createClasses from './styles'
import Types from './types'

type SVG = ForwardRefRenderFunction<
  HTMLSpanElement,
  Types.Props & { reference?: React.ForwardedRef<HTMLSpanElement> }
>

const Svg: SVG = (props) => {
  const { size = 'm', shape } = props
  const { classes, attributes, events } = useSystem('Icon', props, createClasses)

  return (
    <span
      ref={props.reference}
      {...attributes}
      {...events}
      css={classes.container({
        size,
        shape,
      })}
    >
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid"
        fill="currentColor"
        height="1em"
        width="1em"
        css={classes.icon}
      >
        {props.svg}
      </svg>
    </span>
  )
}

type Icons = {
  filled: React.ReactElement
  outline: React.ReactElement
}

export const createIcon = (
  props: Types.IconProps = {},
  ref: React.ForwardedRef<HTMLSpanElement>,
  icons: Icons,
) => {
  return <Svg reference={ref} {...props} svg={icons[props.type || 'outline']} />
}

export type Props = Types.IconProps
