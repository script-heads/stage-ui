import isFunction from '../utils/isFunction'

import type { ResolvedStyleProps } from './index'
import type Stage from '../index'

export type OverridesProp<ClassesSchema extends Stage.ClassesSchemaDefinition> =
  | ((
      theme: Stage.Theme,
      styleProps: ResolvedStyleProps,
    ) => Stage.OverridesClassesDefinition<ClassesSchema>)
  | Stage.OverridesClassesDefinition<ClassesSchema>

function overridesProp<ClassesSchema extends Stage.ClassesSchemaDefinition>(
  prop: OverridesProp<ClassesSchema> | undefined,
  theme: Stage.Theme,
  styleProps: ResolvedStyleProps,
): Stage.OverridesClassesDefinition<ClassesSchema> {
  return isFunction(prop)
    ? prop(theme, styleProps)
    : prop || ({} as Stage.ClassesDefinition<ClassesSchema>)
}
export default overridesProp
