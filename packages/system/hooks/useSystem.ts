import resolveProps, { ResolvedProps } from '../props'
import createVariant from '../utils/createVariant'
import isFunction from '../utils/isFunction'

import useTheme from './useTheme'

export interface Options {
  focus?: 'always' | 'tabOnly' | 'never'
  label?: string
  theme?: Stage.Theme
}

export type ComponentData<
  Props,
  ClassesSchema extends Stage.ClassesSchemaDefinition,
  Element extends HTMLElement,
> = ResolvedProps<Props, ClassesSchema, Element> & {
  classes: Stage.Classes<ClassesSchema>
}

function useSystem<
  Props extends Record<string, any>,
  ClassesSchema extends Stage.ClassesSchemaDefinition,
  Element extends HTMLElement,
>(
  name: string,
  props: Props,
  createClasses: Stage.CreateClasses<ClassesSchema, Props>,
  options: Options = {},
) {
  const currentTheme = useTheme()
  const { focus = 'always', label = name, theme = currentTheme } = options

  const data = resolveProps(props, theme, focus) as ComponentData<
    Props,
    ClassesSchema,
    Element
  >

  data.classes = {} as Stage.Classes<ClassesSchema>

  const themeOverrides = theme.overrides[
    name as keyof typeof theme.overrides
  ] as Stage.ThemeComponentOverrides<Props, ClassesSchema>

  const themeOverridesClasses = isFunction(themeOverrides)
    ? themeOverrides(props, data.styleProps)
    : themeOverrides || {}

  const componentClasses = createClasses(theme, props, data.styleProps)

  Object.keys(componentClasses).forEach((key: keyof ClassesSchema) => {
    const classLabel = { label: `${label}-${key as string}` }
    const selfClass = componentClasses[key]
    const propOverrideClass = data.propOverridesClasses[key]
    const themeOverrideClass = themeOverridesClasses[key]

    data.classes[key] = (
      isFunction(selfClass)
        ? (state: Exclude<ClassesSchema[keyof ClassesSchema], void>) => {
            const variant = createVariant(state)
            return [
              classLabel,
              selfClass(state, variant),
              isFunction(themeOverrideClass)
                ? themeOverrideClass(state, variant)
                : themeOverrideClass,
              isFunction(propOverrideClass)
                ? propOverrideClass(state, variant)
                : propOverrideClass,
            ]
          }
        : [classLabel, selfClass, themeOverrideClass, propOverrideClass]
    ) as Stage.Classes<ClassesSchema>[keyof ClassesSchema]
  })

  return data
}

export default useSystem
