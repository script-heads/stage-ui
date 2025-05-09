/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import isFunction from '../utils/isFunction'

import handleFocus, { FocusOptions } from '../utils/handleFocus'

import breakpointProp from './breakpoint'
import colorProp from './color'
import spaceProp from './space'

import sizeProp from './size'
import overridesProp from './overrides'

import type { AttributeProp } from './types'

export type ResolvedProps<
  Props,
  ClassesSchema extends Stage.ClassesSchemaDefinition,
  Element,
> = {
  attributes: ResolvedAttributes
  events: ResolvedEvents<Props>
  styleProps: ResolvedStyleProps
  propOverridesClasses: Stage.OverridesClassesDefinition<ClassesSchema>
}

export type ResolvedStyleProps = {
  all: Stage.CSSInterpolation[]
  container: Stage.CSSInterpolation[]
  content: Stage.CSSInterpolation[]

  style: Stage.CSSInterpolation[]
  margin: Stage.CSSInterpolation[]
  padding: Stage.CSSInterpolation[]
  position: Stage.CSSInterpolation[]
  color: Stage.CSSInterpolation[]
  border: Stage.CSSInterpolation[]
  layout: Stage.CSSInterpolation[]
  flex: Stage.CSSInterpolation[]
  grid: Stage.CSSInterpolation[]

  shadow: Stage.CSSInterpolation[]
}

export type ResolvedAttributes = AttributeProp
export type ResolvedEvents<Props> = Pick<
  Props,
  Stage.FilterStartingWith<keyof Props, 'on'>
>

function resolveProps<
  Props extends Partial<Stage.AllProps<Element, ClassesSchema>>,
  Element extends HTMLElement,
  ClassesSchema extends Stage.ClassesSchemaDefinition,
>(
  props: Props,
  theme: Stage.Theme,
  focus: FocusOptions,
): ResolvedProps<Props, ClassesSchema, Element> {
  const styleProps = {
    all: [],
    container: [],
    content: [],

    style: [],
    margin: [],
    flex: [],
    grid: [],

    padding: [],
    position: [],
    color: [],
    border: [],
    layout: [],

    shadow: [],
  } as ResolvedStyleProps
  let attributes = {} as ResolvedAttributes
  const events = handleFocus(props, focus) as ResolvedEvents<Props>

  const resolvers = {
    // Core
    attributes: (): void => {
      attributes = Object.assign(attributes, props.attributes)
    },
    style: (): void => {
      styleProps.style.push(
        isFunction(props.style)
          ? breakpointProp(props.style(theme), theme, (value) => value)
          : breakpointProp(props.style, theme, (value) => value),
      )
    },

    // Attributes
    id: (): void => {
      attributes.id = props.id
    },
    className: (): void => {
      attributes.className = props.className
    },
    draggable: (): void => {
      attributes.draggable = props.draggable
    },
    inlineStyle: (): void => {
      attributes.style = props.inlineStyle
    },
    tabIndex: (): void => {
      attributes.tabIndex = props.tabIndex
    },
    role: (): void => {
      attributes.role = props.role
    },

    // Margin
    m: (): void => {
      styleProps.margin.push(
        breakpointProp(props.m, theme, (value) => ({ margin: spaceProp(value, theme) })),
      )
    },
    mx: (): void => {
      styleProps.margin.push(
        breakpointProp(props.mx, theme, (value) => ({
          marginRight: spaceProp(value, theme),
          marginLeft: spaceProp(value, theme),
        })),
      )
    },
    my: (): void => {
      styleProps.margin.push(
        breakpointProp(props.my, theme, (value) => ({
          marginTop: spaceProp(value, theme),
          marginBottom: spaceProp(value, theme),
        })),
      )
    },
    mt: (): void => {
      styleProps.margin.push(
        breakpointProp(props.mt, theme, (value) => ({
          marginTop: spaceProp(value, theme),
        })),
      )
    },
    mr: (): void => {
      styleProps.margin.push(
        breakpointProp(props.mr, theme, (value) => ({
          marginRight: spaceProp(value, theme),
        })),
      )
    },
    mb: (): void => {
      styleProps.margin.push(
        breakpointProp(props.mb, theme, (value) => ({
          marginBottom: spaceProp(value, theme),
        })),
      )
    },
    ml: (): void => {
      styleProps.margin.push(
        breakpointProp(props.ml, theme, (value) => ({
          marginLeft: spaceProp(value, theme),
        })),
      )
    },

    // Padding
    p: (): void => {
      styleProps.padding.push(
        breakpointProp(props.p, theme, (value) => ({ padding: spaceProp(value, theme) })),
      )
    },
    px: (): void => {
      styleProps.padding.push(
        breakpointProp(props.px, theme, (value) => ({
          paddingRight: spaceProp(value, theme),
          paddingLeft: spaceProp(value, theme),
        })),
      )
    },
    py: (): void => {
      styleProps.padding.push(
        breakpointProp(props.py, theme, (value) => ({
          paddingTop: spaceProp(value, theme),
          paddingBottom: spaceProp(value, theme),
        })),
      )
    },
    pt: (): void => {
      styleProps.padding.push(
        breakpointProp(props.pt, theme, (value) => ({
          paddingTop: spaceProp(value, theme),
        })),
      )
    },
    pr: (): void => {
      styleProps.padding.push(
        breakpointProp(props.pr, theme, (value) => ({
          paddingRight: spaceProp(value, theme),
        })),
      )
    },
    pb: (): void => {
      styleProps.padding.push(
        breakpointProp(props.pb, theme, (value) => ({
          paddingBottom: spaceProp(value, theme),
        })),
      )
    },
    pl: (): void => {
      styleProps.padding.push(
        breakpointProp(props.pl, theme, (value) => ({
          paddingLeft: spaceProp(value, theme),
        })),
      )
    },

    // Position
    top: (): void => {
      styleProps.position.push(
        breakpointProp(props.top, theme, (value) => ({
          top: spaceProp(value, theme),
        })),
      )
    },
    bottom: (): void => {
      styleProps.position.push(
        breakpointProp(props.bottom, theme, (value) => ({
          bottom: spaceProp(value, theme),
        })),
      )
    },
    right: (): void => {
      styleProps.position.push(
        breakpointProp(props.right, theme, (value) => ({
          right: spaceProp(value, theme),
        })),
      )
    },
    left: (): void => {
      styleProps.position.push(
        breakpointProp(props.left, theme, (value) => ({
          left: spaceProp(value, theme),
        })),
      )
    },
    t: (): void => {
      styleProps.position.push(
        breakpointProp(props.t, theme, (value) => ({
          top: spaceProp(value, theme),
        })),
      )
    },
    b: (): void => {
      styleProps.position.push(
        breakpointProp(props.b, theme, (value) => ({
          bottom: spaceProp(value, theme),
        })),
      )
    },
    r: (): void => {
      styleProps.position.push(
        breakpointProp(props.r, theme, (value) => ({
          right: spaceProp(value, theme),
        })),
      )
    },
    l: (): void => {
      styleProps.position.push(
        breakpointProp(props.l, theme, (value) => ({
          left: spaceProp(value, theme),
        })),
      )
    },

    // Color
    backgroundColor: (): void => {
      styleProps.color.push(
        breakpointProp(props.backgroundColor, theme, (value) => ({
          backgroundColor: colorProp(value, theme)?.rgb().string(),
        })),
      )
    },
    textColor: (): void => {
      styleProps.color.push(
        breakpointProp(props.textColor, theme, (value) => ({
          color: colorProp(value, theme)?.rgb().string(),
        })),
      )
    },

    // Border
    borderWidth: (): void => {
      styleProps.border.push(
        breakpointProp(props.borderWidth, theme, (value) => ({ borderWidth: value })),
      )
    },
    borderStyle: (): void => {
      styleProps.border.push(
        breakpointProp(props.borderStyle, theme, (value) => ({ borderStyle: value })),
      )
    },
    borderColor: (): void => {
      styleProps.border.push(
        breakpointProp(props.borderColor, theme, (value) => ({
          borderColor: colorProp(value, theme)?.rgb().string(),
        })),
      )
    },
    borderRadius: (): void => {
      styleProps.border.push(
        breakpointProp(props.borderRadius, theme, (value) => ({
          borderRadius: sizeProp(value, theme.radius, (ov) => ov),
        })),
      )
    },

    // Layout
    display: (): void => {
      styleProps.layout.push(
        breakpointProp(props.display, theme, (value) => ({ display: value })),
      )
    },
    position: (): void => {
      styleProps.layout.push(
        breakpointProp(props.position, theme, (value) => ({ position: value })),
      )
    },
    fontSize: (): void => {
      styleProps.layout.push(
        breakpointProp(props.fontSize, theme, (value) => ({ fontSize: value })),
      )
    },
    lineHeight: (): void => {
      styleProps.layout.push(
        breakpointProp(props.lineHeight, theme, (value) => ({ lineHeight: value })),
      )
    },
    letterSpacing: (): void => {
      styleProps.layout.push(
        breakpointProp(props.letterSpacing, theme, (value) => ({ letterSpacing: value })),
      )
    },
    textAlign: (): void => {
      styleProps.layout.push(
        breakpointProp(props.textAlign, theme, (value) => ({ textAlign: value })),
      )
    },
    visibility: (): void => {
      styleProps.layout.push(
        breakpointProp(props.visibility, theme, (value) => ({ visibility: value })),
      )
    },
    w: (): void => {
      styleProps.layout.push(
        breakpointProp(props.w, theme, (value) => ({ width: value })),
      )
    },
    h: (): void => {
      styleProps.layout.push(
        breakpointProp(props.h, theme, (value) => ({ height: value })),
      )
    },

    // Flex
    flex: (): void => {
      styleProps.flex.push(
        breakpointProp(props.flex, theme, (value) => ({ flex: value })),
      )
    },
    flexBasis: (): void => {
      styleProps.flex.push(
        breakpointProp(props.flexBasis, theme, (value) => ({ flexBasis: value })),
      )
    },
    flexGrow: (): void => {
      styleProps.flex.push(
        breakpointProp(props.flexGrow, theme, (value) => ({ flexGrow: value })),
      )
    },
    flexShrink: (): void => {
      styleProps.flex.push(
        breakpointProp(props.flexShrink, theme, (value) => ({ flexShrink: value })),
      )
    },
    alignSelf: (): void => {
      styleProps.flex.push(
        breakpointProp(props.alignSelf, theme, (value) => ({ alignSelf: value })),
      )
    },
    justifySelf: (): void => {
      styleProps.flex.push(
        breakpointProp(props.justifySelf, theme, (value) => ({ justifySelf: value })),
      )
    },

    // Grid children
    gridColumnStart: (): void => {
      styleProps.grid.push(
        breakpointProp(props.gridColumnStart, theme, (value) => ({
          gridColumnStart: value,
        })),
      )
    },
    gridColumnEnd: (): void => {
      styleProps.grid.push(
        breakpointProp(props.gridColumnEnd, theme, (value) => ({ gridColumnEnd: value })),
      )
    },
    gridRowStart: (): void => {
      styleProps.grid.push(
        breakpointProp(props.gridRowStart, theme, (value) => ({ gridRowStart: value })),
      )
    },
    gridRowEnd: (): void => {
      styleProps.grid.push(
        breakpointProp(props.gridRowEnd, theme, (value) => ({ gridRowEnd: value })),
      )
    },
    gridColumn: (): void => {
      styleProps.grid.push(
        breakpointProp(props.gridColumn, theme, (value) => ({ gridColumn: value })),
      )
    },
    gridRow: (): void => {
      styleProps.grid.push(
        breakpointProp(props.gridRow, theme, (value) => ({ gridRow: value })),
      )
    },
    gridArea: (): void => {
      styleProps.grid.push(
        breakpointProp(props.gridArea, theme, (value) => ({ gridArea: value })),
      )
    },
    placeSelf: (): void => {
      styleProps.grid.push(
        breakpointProp(props.placeSelf, theme, (value) => ({ placeSelf: value })),
      )
    },

    // Shadow
    shadow: (): void => {
      styleProps.shadow.push(
        breakpointProp(props.shadow, theme, (value) => ({
          boxShadow: sizeProp(value, theme.assets.shadow, (sv) => sv),
        })),
      )
    },
  }

  Object.keys(props).forEach((key) => {
    if (key.match(/data-/g)) {
      // @ts-ignore
      attributes[key] = props[key]
    }
    if (key[0] === 'o' && key[1] === 'n') {
      events[key as Stage.FilterStartingWith<keyof Props, 'on'>] = props[
        key as keyof typeof props
      ] as ResolvedEvents<Props>[Stage.FilterStartingWith<keyof Props, 'on'>]
      return
    }
    if (Object.prototype.hasOwnProperty.call(resolvers, key)) {
      resolvers[key as keyof typeof resolvers]()
    }
  })

  // Cursor must be pointer if interactive
  if (props.onClick) {
    styleProps.container.push({
      cursor: 'pointer',
      userSelect: 'none',
    })
  }

  // Additional key handlers
  events.onKeyDown = (event: React.KeyboardEvent<Element>): void => {
    if (event.key === 'Enter' && props.onEnter) {
      props.onEnter?.(event)
    }
    if (event.key === 'Esc' && props.onEsc) {
      props.onEsc?.(event)
    }
    props.onKeyDown?.(event)
  }

  const propOverridesClasses = overridesProp(props.overrides, theme, styleProps)

  styleProps.container = styleProps.container.concat(
    styleProps.margin,
    styleProps.position,
    styleProps.flex,
    styleProps.grid,
    styleProps.style,
    styleProps.shadow,
  )
  styleProps.content = styleProps.content.concat(
    styleProps.padding,
    styleProps.color,
    styleProps.border,
    styleProps.layout,
  )
  styleProps.all = styleProps.all.concat(styleProps.container, styleProps.content)

  return { styleProps, attributes, events, propOverridesClasses }
}

export default resolveProps
