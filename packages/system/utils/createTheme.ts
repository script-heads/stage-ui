import createID from './createID'
import mergeObjects from './mergeObjects'
import isFunction from './isFunction'
import convertColors from './convertColors'

export interface ThemeDefiniton {
  main: Omit<Stage.ThemeMain, 'color' | 'breakpoints'> & {
    color: Omit<Stage.ThemeMain<Stage.ColorDefinition>['color'], 'palette'> & {
      palette?: Record<string, Stage.ColorDefinition>
    }
    breakpoints?: string[]
  }
  assets: ((main: Stage.ThemeMain) => Stage.ThemeAssets) | Stage.ThemeAssets
  overrides?:
    | ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => Stage.ThemeOverrides)
    | Stage.ThemeOverrides
}

export interface ReplaceTheme {
  main?: DeepPartial<ThemeDefiniton['main']>
  assets?:
    | ((main: Stage.ThemeMain) => DeepPartial<Stage.ThemeAssets>)
    | DeepPartial<Stage.ThemeAssets>
  overrides?:
    | ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => DeepPartial<Stage.ThemeOverrides>)
    | DeepPartial<Stage.ThemeOverrides>
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

/**
 * autocomplete hack for webkit
 */
const autocomplete = {
  transition: 'all 604800s ease-in-out 0s',
  transitionProperty: 'background-color, color',
}
/**
 * Chrome bug
 * https://bugs.chromium.org/p/chromium/issues/detail?id=953689
 */
const defaultGlobal = {
  'input:-webkit-autofill': autocomplete,
  'input:-webkit-autofill:hover': autocomplete,
  'input:-webkit-autofill:focus': autocomplete,
  'input:-webkit-autofill:active': autocomplete,
  'input::-webkit-internal-input-suggested': {},
}

const createTheme = (themeDefinition: ThemeDefiniton): Stage.Theme => {
  const {
    color: { palette: paletteDefinitions = {}, ...colorDefinitions },
    breakpoints = ['1199.98px', '991.98px', '767.98px', '575.98px'],
  } = themeDefinition.main

  const main = {
    ...themeDefinition.main,
    color: convertColors(colorDefinitions) as Stage.Theme['color'],
    breakpoints,
  }

  main.color.palette = convertColors(paletteDefinitions)

  const assets = isFunction(themeDefinition.assets)
    ? themeDefinition.assets(main)
    : themeDefinition.assets
  const overrides = isFunction(themeDefinition.overrides)
    ? themeDefinition.overrides(main, assets)
    : themeDefinition.overrides || {}

  assets.global = [defaultGlobal, assets.global]

  const replace = (themeReplaceDefinition: ReplaceTheme): Stage.Theme => {
    const nextMain = mergeObjects(
      themeDefinition.main || {},
      themeReplaceDefinition.main || {},
    ) as ThemeDefiniton['main']

    const nextAssets = ((replacedMain) =>
      mergeObjects(
        isFunction(themeDefinition.assets)
          ? themeDefinition.assets(replacedMain)
          : themeDefinition.assets || {},
        isFunction(themeReplaceDefinition.assets)
          ? themeReplaceDefinition.assets(replacedMain)
          : themeReplaceDefinition.assets || {},
      )) as ThemeDefiniton['assets']

    const nextOverrides = ((replacedMain, replacedAssets) =>
      mergeObjects(
        isFunction(themeDefinition.overrides)
          ? themeDefinition.overrides(replacedMain, replacedAssets)
          : themeDefinition.overrides || {},
        isFunction(themeReplaceDefinition.overrides)
          ? themeReplaceDefinition.overrides(replacedMain, replacedAssets)
          : themeReplaceDefinition.overrides || {},
      )) as ThemeDefiniton['overrides']

    nextMain.name = nextMain.name || `${nextMain.name}-${createID()}`

    return createTheme({
      main: nextMain,
      assets: nextAssets,
      overrides: nextOverrides,
    })
  }

  return { ...main, assets, overrides, replace }
}

export default createTheme
