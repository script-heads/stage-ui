/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import useTheme from './useTheme'
import propsResolvers from '../props'
import createVariant, { Variant } from '../utils/createVariant'
import isFunction from '../utils/isFunction'
import { AllEventProps, AllProps, AttributeProps } from '../props/types'

export interface Options<ClassesSchema, Props> {
  focus?: 'always' | 'tabOnly' | 'never'
  label?: string
  theme?: Stage.Theme
  additionalClasses?: CreateAdditionalClasses<ClassesSchema, Props>
}

export interface StyleProps {
  all: Stage.JSS[]
  container: Stage.JSS[]
  content: Stage.JSS[]

  style: Stage.JSS[]
  margin: Stage.JSS[]
  flex: Stage.JSS[]
  grid: Stage.JSS[]

  padding: Stage.JSS[]
  color: Stage.JSS[]
  border: Stage.JSS[]
  layout: Stage.JSS[]
}

export type FunctionClassDefinition<ClassSchema> = (variant: Variant<ClassSchema>, state: ClassSchema) => Stage.JSS

export type ClassesDefinition<ClassesSchema> = {
  [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends Object
    ? FunctionClassDefinition<ClassesSchema[ClassName]>
    : Stage.JSS
}

export type FunctionClass<ClassSchema> = (state: ClassSchema) => Stage.JSS

export type Classes<ClassesSchema> = {
  [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends Object
    ? FunctionClass<ClassesSchema[ClassName]>
    : Stage.JSS
}

export type CreateClasses<ClassesSchema, Props> = (
  theme: Stage.Theme,
  props: Props,
  styleProps: StyleProps,
) => ClassesDefinition<ClassesSchema>

export type CreateAdditionalClasses<ClassesSchema, Props> = (
  theme: Stage.Theme,
  props: Props,
  styleProps: StyleProps,
) => Partial<ClassesDefinition<ClassesSchema>>

export type ComponentData<Props extends Record<string, any>, ClassesSchema> = {
  classes: Classes<ClassesSchema>
  attributes: Pick<Props, keyof AttributeProps>
  events: Pick<Props, keyof AllEventProps<any>>
}

let IS_MOUSE_DOWN = false
let PAGE_FOCUS = false

window.addEventListener('mousedown', () => {
  IS_MOUSE_DOWN = true
})
window.addEventListener('mouseup', () => {
  IS_MOUSE_DOWN = false
})
window.addEventListener('focus', () => {
  PAGE_FOCUS = true
})

function useSystem<Props extends AllProps<HTMLElement, ClassesSchema>, ClassesSchema, AdditionalClassesSchema>(
  name: string,
  props: Props,
  createClasses: Stage.CreateClasses<ClassesSchema, Props>,
  options: Options<AdditionalClassesSchema, Props> = {},
) {
  const currentTheme = useTheme()
  const { focus = 'always', label = name, theme = currentTheme, additionalClasses } = options

  const data = {
    classes: {},
    attributes: {},
    events: {},
  } as ComponentData<Props, ClassesSchema & AdditionalClassesSchema>

  const styleProps: StyleProps = {
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
  }

  Object.keys(props).forEach((key) => {
    // Check *on* events
    if (key[0] === 'o' && key[1] === 'n') {
      data.events[key as keyof AllEventProps<any>] = props[key]
    }
    if (Object.prototype.hasOwnProperty.call(propsResolvers, key)) {
      propsResolvers[key](props, data, styleProps, theme)
    }
  })

  // Override default focus styles
  data.events.onFocus = (event: React.FocusEvent<HTMLElement>) => {
    event.stopPropagation()
    if (!PAGE_FOCUS) {
      if ((focus === 'tabOnly' && !IS_MOUSE_DOWN) || focus === 'always') {
        // eslint-disable-next-line no-param-reassign
        event.target.className += ' focused'
      }
    }
    PAGE_FOCUS = false

    props.onFocus?.(event)
  }

  // Override default focus styles
  data.events.onBlur = (event: React.FocusEvent<HTMLElement>) => {
    event.stopPropagation()
    // eslint-disable-next-line no-param-reassign
    event.target.className = event.target.className.replace(' focused', '')
    props.onBlur?.(event)
  }

  // Additional key handlers
  data.events.onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    props.onKeyPress?.(event)
    if (event.key === 'Enter' && props.onEnter) {
      props.onEnter(event)
    }
    if (event.key === 'Esc' && props.onEsc) {
      props.onEsc(event)
    }
    props.onKeyDown?.(event)
  }

  // Cursor must be pointer if interactive
  if (props.onClick) {
    styleProps.container.push({
      cursor: 'pointer',
      userSelect: 'none',
    })
  }

  styleProps.container = styleProps.container.concat(
    styleProps.margin,
    styleProps.flex,
    styleProps.grid,
    styleProps.style,
  )
  styleProps.content = styleProps.content.concat(
    styleProps.padding,
    styleProps.color,
    styleProps.border,
    styleProps.layout,
  )
  styleProps.all = styleProps.all.concat(styleProps.container, styleProps.content)

  const themeOverrides = theme.overrides[name]
  const propsOverrides = props.overrides

  const componentClasses: ClassesDefinition<ClassesSchema> = createClasses(theme, props, styleProps)
  const additionalComponentClasses: Partial<ClassesDefinition<AdditionalClassesSchema>> =
    additionalClasses?.(theme, props, styleProps) || ({} as ClassesDefinition<AdditionalClassesSchema>)

  const themeOverrideClasses: ClassesDefinition<ClassesSchema> = isFunction(themeOverrides)
    ? themeOverrides(props, styleProps)
    : themeOverrides || {}

  const propsOverrideClasses: Partial<ClassesDefinition<ClassesSchema>> = isFunction(propsOverrides)
    ? propsOverrides(theme, styleProps)
    : propsOverrides || {}

  Object.keys(componentClasses)
    .concat(
      Object.keys(additionalComponentClasses).filter(
        (className) => !Object.prototype.hasOwnProperty.call(componentClasses, className),
      ),
    )
    .forEach((key) => {
      const classLabel = { label: `${label}-${key}` }

      data.classes[key] = (
        isFunction(componentClasses[key]) || isFunction(additionalComponentClasses[key])
          ? (state) => {
              const variant = createVariant(state)
              return [
                classLabel,
                (additionalComponentClasses[key] as FunctionClassDefinition<any>)?.(variant, state),
                (componentClasses[key] as FunctionClassDefinition<any>)?.(variant, state),
                (themeOverrideClasses[key] as FunctionClassDefinition<any>)?.(variant, state),
                (propsOverrideClasses[key] as FunctionClassDefinition<any>)?.(variant, state),
              ] as Stage.JSS
            }
          : [
              classLabel,
              additionalComponentClasses,
              componentClasses[key],
              themeOverrideClasses[key],
              propsOverrideClasses[key],
            ]
      ) as Stage.JSS
    })

  return data
}

export default useSystem
