/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import useTheme from './useTheme'
import propsResolvers from '../props'
import createVariant, { Variant } from '../utils/createVariant'
import isFunction from '../utils/isFunction'
import { AllEventProps, AttributeProps, CoreProps } from '../props/types'
import overridesProp from '../props/overrides'

export interface Options {
  focus?: 'always' | 'tabOnly' | 'never'
  label?: string
  theme?: Stage.Theme
}

export type ClassStateDefinition = Record<string, string | boolean | undefined> | void
export type ClassesSchemaDefinition = Record<string, ClassStateDefinition>

export type FunctionClassDefinition<ClassState extends Exclude<ClassStateDefinition, void>> = (
  state: ClassState,
  variant: Variant<ClassState>,
) => Stage.CSSInterpolation

export type OverridesClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = {
  [ClassName in keyof ClassesSchema]?: ClassesSchema[ClassName] extends void
    ? Stage.CSSInterpolation
    : FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>>
}

export type ThemeOverrides<Props, ClassesSchema extends ClassesSchemaDefinition> =
  | ((props: Props, styleProps: ResolvedStyleProps) => OverridesClassesDefinition<ClassesSchema>)
  | OverridesClassesDefinition<ClassesSchema>

export type ClassesDefinition<ClassesSchema extends ClassesSchemaDefinition> = {
  [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void
    ? Stage.CSSInterpolation
    : FunctionClassDefinition<Exclude<ClassesSchema[ClassName], void>>
}

export type FunctionClass<ClassSchema extends ClassStateDefinition> = (
  state: ClassSchema,
) => Stage.CSSInterpolation

export type Classes<ClassesSchema extends ClassesSchemaDefinition> = {
  [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends void
    ? Stage.CSSInterpolation
    : FunctionClass<ClassesSchema[ClassName]>
}

export type CreateClasses<ClassesSchema extends ClassesSchemaDefinition, Props> = (
  theme: Stage.Theme,
  props: Props,
  styleProps: ResolvedStyleProps,
) => ClassesDefinition<ClassesSchema>

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
}

export type ComponentData<
  Props extends SystemPropsMeta<ClassesSchema, Element>,
  ClassesSchema extends ClassesSchemaDefinition,
  Element extends HTMLElement,
> = {
  classes: Classes<ClassesSchema>
  attributes: Exclude<CoreProps<ClassesSchema, Element>['attributes'], undefined>
  events: Pick<Props, Stage.FilterStartingWith<keyof Props, 'on'>>
  styleProps: ResolvedStyleProps
  overridesPropClasses: OverridesClassesDefinition<ClassesSchema>
}

export type SystemPropsMeta<
  ClassesSchema extends ClassesSchemaDefinition,
  Element extends HTMLElement,
> = CoreProps<ClassesSchema, Element> &
  AttributeProps &
  Pick<AllEventProps<Element>, 'onFocus' | 'onBlur' | 'onClick' | 'onEnter' | 'onEsc' | 'onKeyDown'>

let IS_MOUSE_DOWN = false

window.addEventListener('mousedown', () => {
  IS_MOUSE_DOWN = true
})
window.addEventListener('mouseup', () => {
  IS_MOUSE_DOWN = false
})

function useSystem<
  Props extends SystemPropsMeta<ClassesSchema, Element>,
  ClassesSchema extends ClassesSchemaDefinition,
  Element extends HTMLElement,
>(
  name: string,
  props: Props,
  createClasses: Stage.CreateClasses<ClassesSchema, Props>,
  options: Options = {},
) {
  const currentTheme = useTheme()
  const { focus = 'always', label = name, theme = currentTheme } = options

  const data = {
    classes: {},
    attributes: {},
    events: {},
    styleProps: {
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
    } as ResolvedStyleProps,
    overridesPropClasses: {},
  } as ComponentData<Props, ClassesSchema, Element>

  Object.keys(props).forEach((key) => {
    if (key[0] === 'o' && key[1] === 'n') {
      // @ts-ignore
      data.events[key] = props[key]
    }
    if (Object.prototype.hasOwnProperty.call(propsResolvers, key)) {
      propsResolvers[key](props, data, theme)
    }
  })

  // Override default focus styles
  data.events.onFocus = (event: React.FocusEvent<Element>) => {
    if ((focus === 'tabOnly' && !IS_MOUSE_DOWN) || focus === 'always') {
      event.currentTarget.id = event.currentTarget.id
        ? `${event.currentTarget.id} focused`
        : 'focused'
    }
    props.onFocus?.(event)
    event.stopPropagation()
  }

  // Override default focus styles
  data.events.onBlur = (event: React.FocusEvent<Element>) => {
    event.currentTarget.id = event.currentTarget.id
      .split(' ')
      .filter((id) => id !== 'focused')
      .join(' ')
    props.onBlur?.(event)
    event.stopPropagation()
  }

  // Additional key handlers
  data.events.onKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.key === 'Enter' && props.onEnter) {
      props.onEnter?.(event)
    }
    if (event.key === 'Esc' && props.onEsc) {
      props.onEsc?.(event)
    }
    props.onKeyDown?.(event)
  }

  // Cursor must be pointer if interactive
  if (props.onClick) {
    data.styleProps.container.push({
      cursor: 'pointer',
      userSelect: 'none',
    })
  }

  data.styleProps.container = data.styleProps.container.concat(
    data.styleProps.margin,
    data.styleProps.flex,
    data.styleProps.grid,
    data.styleProps.style,
  )
  data.styleProps.content = data.styleProps.content.concat(
    data.styleProps.padding,
    data.styleProps.color,
    data.styleProps.border,
    data.styleProps.layout,
  )
  data.styleProps.all = data.styleProps.all.concat(
    data.styleProps.container,
    data.styleProps.content,
  )
  data.overridesPropClasses = overridesProp(props.overrides, theme, data.styleProps)

  const themeOverrides = theme.overrides[name as keyof typeof theme.overrides] as ThemeOverrides<
    Props,
    ClassesSchema
  >

  const overridesThemeClasses: OverridesClassesDefinition<ClassesSchema> = isFunction(
    themeOverrides,
  )
    ? themeOverrides(props, data.styleProps)
    : themeOverrides || {}

  const componentClasses: ClassesDefinition<ClassesSchema> = createClasses(
    theme,
    props,
    data.styleProps,
  )

  Object.keys(componentClasses).forEach((key) => {
    const classLabel = { label: `${label}-${key}` }

    // @ts-ignore
    data.classes[key] = isFunction(componentClasses[key])
      ? // @ts-ignore
        (state) => {
          const variant = createVariant(state)
          return [
            classLabel,
            (componentClasses[key] as Function)?.(state, variant),
            isFunction(overridesThemeClasses[key])
              ? (overridesThemeClasses[key] as Function)(state, variant)
              : overridesThemeClasses[key],
            isFunction(data.overridesPropClasses[key])
              ? (data.overridesPropClasses[key] as Function)(state, variant)
              : data.overridesPropClasses[key],
          ] as Stage.CSSInterpolation
        }
      : [
          classLabel,
          componentClasses[key],
          overridesThemeClasses[key],
          data.overridesPropClasses[key],
        ]
  })

  return data
}

export default useSystem
