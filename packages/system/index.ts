import { CSSInterpolation } from '@emotion/serialize'
import ColorType from 'color'
import { ColorProp as ColorPropType } from '@stage-ui/system/props/color'
import { ReplaceTheme } from './utils/createTheme'
import { AllProps as AllPropsType } from './props/types'
import {
  ClassesSchemaDefinition,
  CreateClasses as CreateClassesType,
  PropOverrides as PropOverridesType,
  ThemeOverrides as ThemeOverridesType,
} from './hooks/useSystem'

declare global {
  namespace Stage {
    type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl'
    type JSS = CSSInterpolation
    type ColorDefinition = [number, number, number, number?]
    type Color = ColorType<ColorDefinition>

    interface ThemeMain<C = Color> {
      name: string
      color: {
        background: C
        backgroundVariant: C
        surface: C
        surfaceVariant: C
        primary: C
        secondary: C

        onBackground: C
        onSurface: C
        onPrimary: C
        onSecondary: C

        lightest: C
        light: C
        hard: C
        hardest: C

        error: C
        warning: C
        success: C
        info: C

        palette: Record<string, Color>
      }
      breakpoints: string[]
      radius: Record<Sizes, string>
      spacing: Record<Sizes, string>
    }

    interface ThemeAssets {
      global?: Stage.JSS
      border: {
        width: string
        style: string
        color: string
      }
      shadow: Record<Sizes, string>
      innerShadow: Record<Sizes, string>
      focus: Stage.JSS
      field: Record<
        Sizes,
        {
          minHeight: string
          padding: string
        }
      >
      typography: {
        header: Record<
          Sizes,
          {
            fontSize: string
            lineHeight: string | number
          }
        >
        text: Record<
          Sizes,
          {
            fontSize: string
            lineHeight: string | number
          }
        >
        paragraph: Record<
          Sizes,
          {
            fontSize: string
            lineHeight: string | number
          }
        >
      }
    }

    interface ThemeOverrides {}

    interface Theme extends ThemeMain {
      assets: ThemeAssets
      overrides: ThemeOverrides
      replace: (theme: ReplaceTheme) => Theme
    }

    type AllProps<Containter, ClassSchema extends ClassesSchemaDefinition> = AllPropsType<Containter, ClassSchema>
    type CreateClasses<ClassesSchema extends ClassesSchemaDefinition, Props> = CreateClassesType<ClassesSchema, Props>
    type ColorProp = ColorPropType
    type PropOverrides<ClassSchema extends ClassesSchemaDefinition> = PropOverridesType<ClassSchema>
    type ComponentThemeOverrides<Props, ClassSchema extends ClassesSchemaDefinition> = ThemeOverridesType<
      Props,
      ClassSchema
    >

    type FilterStartingWith<Set, Needle extends string> = Set extends `${Needle}${infer X}` ? Set : never
  }
}

declare module 'csstype' {
  interface Properties {
    display?:
      | 'block'
      | 'inline'
      | 'inline-block'
      | 'inline-table'
      | 'list-item'
      | 'none'
      | 'run-in'
      | 'table'
      | 'table-caption'
      | 'table-cell'
      | 'table-column-group'
      | 'table-column'
      | 'table-footer-group'
      | 'table-header-group'
      | 'table-row'
      | 'table-row-group'
      | 'flex'
      | 'grid'
    overflow?: 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit'
  }
}

export { default as Provider } from './components/Provider'

export { default as useTheme } from './hooks/useTheme'
export { default as useSystem } from './hooks/useSystem'

export { default as createTheme } from './utils/createTheme'
