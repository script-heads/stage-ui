import isFunction from '../utils/isFunction'

import handleFocus, { FocusOptions } from '../utils/handleFocus'

import breakpointProp from './breakpoint'
import colorProp from './color'
import spaceProp from './space'

import sizeProp from './size'
import overridesProp from './overrides'
import { AttributeProp } from './types'

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
    color: [],
    border: [],
    layout: [],

    shadow: [],
  } as ResolvedStyleProps
  let attributes = {} as ResolvedAttributes
  const events = handleFocus(props, focus) as ResolvedEvents<Props>

  const resolvers = {
    // Core
    attributes: () => {
      attributes = Object.assign(attributes, props.attributes)
    },
    style: () =>
      styleProps.style.push(
        isFunction(props.style)
          ? breakpointProp(props.style(theme), theme, (value) => value)
          : breakpointProp(props.style, theme, (value) => value),
      ),

    // Attributes
    id: () => {
      attributes.id = props.id
    },
    className: () => {
      attributes.className = props.className
    },
    draggable: () => {
      attributes.draggable = props.draggable
    },
    inlineStyle: () => {
      attributes.style = props.inlineStyle
    },
    tabIndex: () => {
      attributes.tabIndex = props.tabIndex
    },
    role: () => {
      attributes.role = props.role
    },

    // Margin
    m: () =>
      styleProps.margin.push(
        breakpointProp(props.m, theme, (value) => ({ margin: spaceProp(value, theme) })),
      ),
    mx: () =>
      styleProps.margin.push(
        breakpointProp(props.mx, theme, (value) => ({
          marginRight: spaceProp(value, theme),
          marginLeft: spaceProp(value, theme),
        })),
      ),
    my: () =>
      styleProps.margin.push(
        breakpointProp(props.my, theme, (value) => ({
          marginTop: spaceProp(value, theme),
          marginBottom: spaceProp(value, theme),
        })),
      ),
    mt: () =>
      styleProps.margin.push(
        breakpointProp(props.mt, theme, (value) => ({
          marginTop: spaceProp(value, theme),
        })),
      ),
    mr: () =>
      styleProps.margin.push(
        breakpointProp(props.mr, theme, (value) => ({
          marginRight: spaceProp(value, theme),
        })),
      ),
    mb: () =>
      styleProps.margin.push(
        breakpointProp(props.mb, theme, (value) => ({
          marginBottom: spaceProp(value, theme),
        })),
      ),
    ml: () =>
      styleProps.margin.push(
        breakpointProp(props.ml, theme, (value) => ({
          marginLeft: spaceProp(value, theme),
        })),
      ),

    // Padding
    p: () =>
      styleProps.padding.push(
        breakpointProp(props.p, theme, (value) => ({ padding: spaceProp(value, theme) })),
      ),
    px: () =>
      styleProps.padding.push(
        breakpointProp(props.px, theme, (value) => ({
          paddingRight: spaceProp(value, theme),
          paddingLeft: spaceProp(value, theme),
        })),
      ),
    py: () =>
      styleProps.padding.push(
        breakpointProp(props.py, theme, (value) => ({
          paddingTop: spaceProp(value, theme),
          paddingBottom: spaceProp(value, theme),
        })),
      ),
    pt: () =>
      styleProps.padding.push(
        breakpointProp(props.pt, theme, (value) => ({
          paddingTop: spaceProp(value, theme),
        })),
      ),
    pr: () =>
      styleProps.padding.push(
        breakpointProp(props.pr, theme, (value) => ({
          paddingRight: spaceProp(value, theme),
        })),
      ),
    pb: () =>
      styleProps.padding.push(
        breakpointProp(props.pb, theme, (value) => ({
          paddingBottom: spaceProp(value, theme),
        })),
      ),
    pl: () =>
      styleProps.padding.push(
        breakpointProp(props.pl, theme, (value) => ({
          paddingLeft: spaceProp(value, theme),
        })),
      ),

    // Color
    backgroundColor: () =>
      styleProps.color.push(
        breakpointProp(props.backgroundColor, theme, (value) => ({
          backgroundColor: colorProp(value, theme)?.rgb().string(),
        })),
      ),
    textColor: () =>
      styleProps.color.push(
        breakpointProp(props.textColor, theme, (value) => ({
          color: colorProp(value, theme)?.rgb().string(),
        })),
      ),

    // Border
    borderWidth: () =>
      styleProps.border.push(
        breakpointProp(props.borderWidth, theme, (value) => ({ borderWidth: value })),
      ),
    borderStyle: () =>
      styleProps.border.push(
        breakpointProp(props.borderStyle, theme, (value) => ({ borderStyle: value })),
      ),
    borderColor: () =>
      styleProps.border.push(
        breakpointProp(props.borderColor, theme, (value) => ({
          borderColor: colorProp(value, theme)?.rgb().string(),
        })),
      ),
    borderRadius: () =>
      styleProps.border.push(
        breakpointProp(props.borderRadius, theme, (value) => ({
          borderRadius: sizeProp(value, theme.radius, (ov) => ov),
        })),
      ),

    // Layout
    display: () =>
      styleProps.layout.push(
        breakpointProp(props.display, theme, (value) => ({ display: value })),
      ),
    position: () =>
      styleProps.layout.push(
        breakpointProp(props.position, theme, (value) => ({ position: value })),
      ),
    fontSize: () =>
      styleProps.layout.push(
        breakpointProp(props.fontSize, theme, (value) => ({ fontSize: value })),
      ),
    lineHeight: () =>
      styleProps.layout.push(
        breakpointProp(props.lineHeight, theme, (value) => ({ lineHeight: value })),
      ),
    letterSpacing: () =>
      styleProps.layout.push(
        breakpointProp(props.letterSpacing, theme, (value) => ({ letterSpacing: value })),
      ),
    textAlign: () =>
      styleProps.layout.push(
        breakpointProp(props.textAlign, theme, (value) => ({ textAlign: value })),
      ),
    visibility: () =>
      styleProps.layout.push(
        breakpointProp(props.visibility, theme, (value) => ({ visibility: value })),
      ),
    w: () =>
      styleProps.layout.push(
        breakpointProp(props.w, theme, (value) => ({ width: value })),
      ),
    h: () =>
      styleProps.layout.push(
        breakpointProp(props.h, theme, (value) => ({ height: value })),
      ),

    // Flex
    flex: () =>
      styleProps.flex.push(
        breakpointProp(props.flex, theme, (value) => ({ flex: value })),
      ),
    flexBasis: () =>
      styleProps.flex.push(
        breakpointProp(props.flexBasis, theme, (value) => ({ flexBasis: value })),
      ),
    flexGrow: () =>
      styleProps.flex.push(
        breakpointProp(props.flexGrow, theme, (value) => ({ flexGrow: value })),
      ),
    flexShrink: () =>
      styleProps.flex.push(
        breakpointProp(props.flexShrink, theme, (value) => ({ flexShrink: value })),
      ),
    alignSelf: () =>
      styleProps.flex.push(
        breakpointProp(props.alignSelf, theme, (value) => ({ alignSelf: value })),
      ),
    justifySelf: () =>
      styleProps.flex.push(
        breakpointProp(props.justifySelf, theme, (value) => ({ justifySelf: value })),
      ),

    // Grid children
    gridColumnStart: () =>
      styleProps.grid.push(
        breakpointProp(props.gridColumnStart, theme, (value) => ({
          gridColumnStart: value,
        })),
      ),
    gridColumnEnd: () =>
      styleProps.grid.push(
        breakpointProp(props.gridColumnEnd, theme, (value) => ({ gridColumnEnd: value })),
      ),
    gridRowStart: () =>
      styleProps.grid.push(
        breakpointProp(props.gridRowStart, theme, (value) => ({ gridRowStart: value })),
      ),
    gridRowEnd: () =>
      styleProps.grid.push(
        breakpointProp(props.gridRowEnd, theme, (value) => ({ gridRowEnd: value })),
      ),
    gridColumn: () =>
      styleProps.grid.push(
        breakpointProp(props.gridColumn, theme, (value) => ({ gridColumn: value })),
      ),
    gridRow: () =>
      styleProps.grid.push(
        breakpointProp(props.gridRow, theme, (value) => ({ gridRow: value })),
      ),
    gridArea: () =>
      styleProps.grid.push(
        breakpointProp(props.gridArea, theme, (value) => ({ gridArea: value })),
      ),
    placeSelf: () =>
      styleProps.grid.push(
        breakpointProp(props.placeSelf, theme, (value) => ({ placeSelf: value })),
      ),

    // Shadow
    shadow: () =>
      styleProps.shadow.push(
        breakpointProp(props.shadow, theme, (value) => ({
          boxShadow: sizeProp(value, theme.assets.shadow, (sv) => sv),
        })),
      ),
  }

  Object.keys(props).forEach((key) => {
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
  events.onKeyDown = (event: React.KeyboardEvent<Element>) => {
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
