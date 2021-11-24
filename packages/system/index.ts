import { CSSInterpolation as CSSI, CSSObject as CSSO } from '@emotion/serialize'
import { ColorProp as ColorPropType } from '@stage-ui/system/props/color'
import ColorType from 'color'
import CSS from 'csstype'
import { ReplaceTheme } from './utils/createTheme'
import { AllProps as AllPropsType } from './props/types'
import {
  ClassesSchemaDefinition,
  CreateClasses as CreateClassesType,
  ThemeOverrides as ThemeOverridesType,
} from './hooks/useSystem'
import { OverridesProp } from './props/overrides'

declare global {
  namespace Stage {
    type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl'
    type CSSInterpolation = CSSI
    type CSSObject = CSSO
    type ColorDefinition = string | [number, number, number, number?]
    type Color = ColorType<ColorDefinition>
    type ColorMain<C = Color> = {
      primary: C
      secondary: C

      /** @deprecated this field */
      onPrimary: C
      /** @deprecated this field */
      onSecondary: C
      /** @deprecated this field */
      onSurface: C
      /** @deprecated this field */
      onBackground: C

      /** @deprecated this field */
      light: C
      /** @deprecated this field */
      lightest: C
      /** @deprecated this field */
      hard: C
      /** @deprecated this field */
      hardest: C

      surface: C
      /** @deprecated this field */
      surfaceVariant: C

      background: C
      /** @deprecated this field */
      backgroundVariant: C

      border: C
      text: C

      error: C
      warning: C
      success: C
      info: C

      black: C
      white: C
    }
    type ColorPallete<C = Color> = {
      gray: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }

      yellow: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
        A100: C
        A200: C
        A400: C
        A700: C
      }

      orange: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
        A100: C
        A200: C
        A400: C
        A700: C
      }

      red: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }

      rose: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }

      pink: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }

      green: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }

      lightGreen: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
        A100: C
        A200: C
        A400: C
        A700: C
      }

      lime: {
        A100: C
        A200: C
        A400: C
        A700: C
      }

      teal: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }

      cyan: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
        A100: C
        A200: C
        A400: C
        A700: C
      }

      lightBlue: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
        A100: C
        A200: C
        A400: C
        A700: C
      }

      blue: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
        A100: C
        A200: C
        A400: C
        A700: C
      }

      indigo: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }

      purple: {
        50: C
        100: C
        200: C
        300: C
        400: C
        500: C
        600: C
        700: C
        800: C
        900: C
      }
    }

    type ColorCustomPallete<C = Color> = {
      /** @deprecated this field, please add new colors to the color field, e.g: name: '#000' */
      palette: Record<string, C>
    }

    type Colors<C = Color> = ColorMain<C> & ColorPallete<C> & ColorCustomPallete<C>

    interface ThemeMain {
      name: string
      color: Colors
      breakpoints: string[]
      radius: Record<Sizes, string>
      spacing: Record<Sizes, string>
    }

    interface ThemeAssets {
      global?: Stage.CSSInterpolation
      border: {
        width: string
        style: CSS.Properties['borderStyle']
        color: string
      }
      shadow: Record<Sizes, string>
      innerShadow: Record<Sizes, string>
      focus: CSSObject
      field: Record<
        Sizes,
        {
          indent: string | number
          height: string | number
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

    type AllProps<Containter, ClassSchema extends ClassesSchemaDefinition> = AllPropsType<
      Containter,
      ClassSchema
    >
    type CreateClasses<ClassesSchema extends ClassesSchemaDefinition, Props> = CreateClassesType<
      ClassesSchema,
      Props
    >
    type ColorProp = ColorPropType
    type PropOverrides<ClassSchema extends ClassesSchemaDefinition> = OverridesProp<ClassSchema>
    type ComponentThemeOverrides<Props, ClassSchema extends ClassesSchemaDefinition> =
      ThemeOverridesType<Props, ClassSchema>

    type FilterStartingWith<Set, Needle extends string> = Set extends `${Needle}${string}`
      ? Set
      : never
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

export { default as Provider } from './Provider'

export { default as useTheme } from './hooks/useTheme'
export { default as useSystem } from './hooks/useSystem'

export { default as createTheme } from './utils/createTheme'
