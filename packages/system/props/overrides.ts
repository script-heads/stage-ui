import { ClassesSchemaDefinition, OverridesClassesDefinition, StyleProps } from '../hooks/useSystem'
import isFunction from '../utils/isFunction'

export type OverridesProp<ClassesSchema extends ClassesSchemaDefinition> =
  | ((theme: Stage.Theme, styleProps: StyleProps) => OverridesClassesDefinition<ClassesSchema>)
  | OverridesClassesDefinition<ClassesSchema>

function overridesProp<ClassesSchema extends ClassesSchemaDefinition>(
  prop: OverridesProp<ClassesSchema> | undefined,
  theme: Stage.Theme,
  styleProps: StyleProps,
): OverridesClassesDefinition<ClassesSchema> {
  if (isFunction(prop)) {
    return prop(theme, styleProps)
  }
  return prop || {}
}
export default overridesProp
