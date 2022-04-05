import { CSSInterpolation as CSSI, CSSObject as CSSO } from '@emotion/serialize'
import { ColorProp as ColorPropType } from '@stage-ui/system/props/color'
import ColorType from 'color'
import CSS from 'csstype'

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

    type ColorShades<C = Color> = {
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

    type ColorAccentsShades<C = Color> = {
      A100: C
      A200: C
      A400: C
      A700: C
    }

    type ColorMain<C = Color> = {
      primary: C
      secondary: C

      surface: C
      background: C
      border: C
      text: C

      onPrimary: C
      onSecondary: C
      onSurface: C
      onBackground: C

      error: C
      warning: C
      success: C
      info: C

      black: C
      white: C

      /** @deprecated this field */
      surfaceVariant: C
      /** @deprecated this field */
      backgroundVariant: C
      /** @deprecated this field */
      light: C
      /** @deprecated this field */
      lightest: C
      /** @deprecated this field */
      hard: C
      /** @deprecated this field */
      hardest: C
    }

    type ColorCustom<C = Color> = {
      /** @deprecated this field */
      palette: Record<string, C>
    }

    type ColorPallete<C = Color> = {
      gray: ColorShades<C>
      yellow: ColorShades<C> & ColorAccentsShades<C>
      orange: ColorShades<C> & ColorAccentsShades<C>
      red: ColorShades<C>
      rose: ColorShades<C>
      pink: ColorShades<C>
      green: ColorShades<C>
      lightGreen: ColorShades<C> & ColorAccentsShades<C>
      lime: ColorAccentsShades<C>
      teal: ColorShades<C>
      cyan: ColorShades<C> & ColorAccentsShades<C>
      lightBlue: ColorShades<C> & ColorAccentsShades<C>
      blue: ColorShades<C> & ColorAccentsShades<C>
      indigo: ColorShades<C>
      purple: ColorShades<C>
    }

    type ColorNames = LiteralUnion<
      LiteralUnion<
        | keyof ColorMain
        | `gray${keyof ColorPallete['gray']}`
        | `yellow${keyof ColorPallete['yellow']}`
        | `orange${keyof ColorPallete['orange']}`
        | `red${keyof ColorPallete['red']}`
        | `rose${keyof ColorPallete['rose']}`
        | `pink${keyof ColorPallete['pink']}`
        | `green${keyof ColorPallete['green']}`
        | `lightGreen${keyof ColorPallete['lightGreen']}`
        | `lime${keyof ColorPallete['lime']}`
        | `teal${keyof ColorPallete['teal']}`
        | `cyan${keyof ColorPallete['cyan']}`
        | `lightBlue${keyof ColorPallete['lightBlue']}`
        | `blue${keyof ColorPallete['blue']}`
        | `indigo${keyof ColorPallete['indigo']}`
        | `purple${keyof ColorPallete['purple']}`,
        keyof ColorCustom['palette']
      >,
      string
    >

    type Colors<C = Color, Definition = false> = ColorMain<C> &
      ColorPallete<C> &
      (Definition extends true ? Partial<ColorCustom<C>> : ColorCustom<C>)

    interface ThemeMain<C = Color, Definition = false> {
      name: string
      color: Colors<C, Definition>
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
        header: Record<Sizes, CSSObject>
        text: Record<Sizes, CSSObject>
        paragraph: Record<Sizes, CSSObject>
      }
    }

    interface ThemeOverrides {}

    interface Theme extends ThemeMain {
      assets: ThemeAssets
      overrides: ThemeOverrides
      replace: (theme: ReplaceTheme) => Theme
    }

    interface ThemeDefiniton {
      main: Stage.ThemeMain<Stage.ColorDefinition, true>
      assets: ((main: Stage.ThemeMain) => Stage.ThemeAssets) | Stage.ThemeAssets
      overrides?:
        | ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => Stage.ThemeOverrides)
        | Stage.ThemeOverrides
    }

    interface ReplaceTheme {
      main?: DeepPartial<ThemeDefiniton['main']>
      assets?:
        | ((main: Stage.ThemeMain) => DeepPartial<Stage.ThemeAssets>)
        | DeepPartial<Stage.ThemeAssets>
      overrides?:
        | ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => Stage.ThemeOverrides)
        | Stage.ThemeOverrides
    }

    type AllProps<
      Containter,
      ClassSchema extends ClassesSchemaDefinition = ClassesSchemaDefinition,
    > = AllPropsType<Containter, ClassSchema>

    type CreateClasses<
      ClassesSchema extends ClassesSchemaDefinition,
      Props,
    > = CreateClassesType<ClassesSchema, Props>

    type ColorProp = ColorPropType

    type PropOverrides<ClassSchema extends ClassesSchemaDefinition> =
      OverridesProp<ClassSchema>

    type ComponentThemeOverrides<
      Props,
      ClassSchema extends ClassesSchemaDefinition,
    > = ThemeOverridesType<Props, ClassSchema>

    type Primitive = null | undefined | string | number | boolean | symbol | bigint

    type FilterStartingWith<Set, Needle extends string> = Set extends `${Needle}${string}`
      ? Set
      : never

    type DeepPartial<T> = {
      [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>
    }

    type LiteralUnion<LiteralType, BaseType extends Primitive> =
      | LiteralType
      | (BaseType & Record<never, never>)
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
export { default as useBreakpoint } from './hooks/useBreakpoint'

export { default as createTheme } from './utils/createTheme'
