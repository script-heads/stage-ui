import { ResolvedStyleProps } from './index'

import isFunction from '../utils/isFunction'

export type OverridesProp<ClassesSchema extends Stage.ClassesSchemaDefinition> =
  | ((
      theme: Stage.Theme,
      styleProps: ResolvedStyleProps,
    ) => Partial<Stage.ClassesDefinition<ClassesSchema>>)
  | Partial<Stage.ClassesDefinition<ClassesSchema>>

function overridesProp<ClassesSchema extends Stage.ClassesSchemaDefinition>(
  prop: OverridesProp<ClassesSchema> | undefined,
  theme: Stage.Theme,
  styleProps: ResolvedStyleProps,
): Partial<Stage.ClassesDefinition<ClassesSchema>> {
  return isFunction(prop)
    ? prop(theme, styleProps)
    : prop || ({} as Stage.ClassesDefinition<ClassesSchema>)
}
export default overridesProp
