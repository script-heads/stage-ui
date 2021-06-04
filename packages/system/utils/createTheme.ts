import Color from 'color'
import createID from './createID'
import mergeObjects from './mergeObjects'
import isFunction from './isFunction'

export interface ThemeDefiniton {
  main: Omit<Stage.ThemeMain, 'color' | 'breakpoints'> & {
    color: Omit<Stage.ThemeMain<Stage.ColorDefinition>['color'], 'palette'> & {
      palette?: Record<string, Stage.ColorDefinition>
    }
    breakpoints?: string[]
  }
  assets: ((main: Stage.ThemeMain) => Stage.ThemeAssets) | Stage.ThemeAssets
  overrides?: ((main: Stage.ThemeMain, assets: Stage.ThemeAssets) => Stage.ThemeOverrides) | Stage.ThemeOverrides
}

export interface ReplaceTheme {
  main?: DeepPartial<ThemeDefiniton['main']>
  assets?: ((main: Stage.ThemeMain) => DeepPartial<Stage.ThemeAssets>) | DeepPartial<Stage.ThemeAssets>
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
const defaultGlobal = {
  'input:-webkit-autofill': autocomplete,
  'input:-webkit-autofill:hover': autocomplete,
  'input:-webkit-autofill:focus': autocomplete,
  'input:-webkit-autofill:active': autocomplete,
  'input::-webkit-internal-input-suggested': {
    /**
     * Chrome bug
     * https://bugs.chromium.org/p/chromium/issues/detail?id=953689
     */
  },
}

const createTheme = (themeDefinition: ThemeDefiniton): Stage.Theme => {
  const main = convertColors(themeDefinition.main)
  const assets = isFunction(themeDefinition.assets) ? themeDefinition.assets(main) : themeDefinition.assets
  const overrides = isFunction(themeDefinition.overrides)
    ? themeDefinition.overrides(main, assets)
    : themeDefinition.overrides || {}

  main.breakpoints = themeDefinition.main.breakpoints || ['1199.98px', '991.98px', '767.98px', '575.98px']
  main.color.palette = main.color.palette || {}
  assets.global = [defaultGlobal, assets.global]

  const replace = (themeReplaceDefinition: ReplaceTheme): Stage.Theme => {
    const combinedMain = mergeObjects(
      themeDefinition.main || {},
      themeReplaceDefinition.main || {},
    ) as ThemeDefiniton['main']

    const combinedAssets = ((main) =>
      mergeObjects(
        isFunction(themeDefinition.assets) ? themeDefinition.assets(main) : themeDefinition.assets || {},
        isFunction(themeReplaceDefinition.assets)
          ? themeReplaceDefinition.assets(main)
          : themeReplaceDefinition.assets || {},
      )) as ThemeDefiniton['assets']

    const combinedOverrides = ((main, assets) =>
      mergeObjects(
        isFunction(themeDefinition.overrides)
          ? themeDefinition.overrides(main, assets)
          : themeDefinition.overrides || {},
        isFunction(themeReplaceDefinition.overrides)
          ? themeReplaceDefinition.overrides(main, assets)
          : themeReplaceDefinition.overrides || {},
      )) as ThemeDefiniton['overrides']

    combinedMain.name = combinedMain.name || `${main.name}-${createID()}`

    return createTheme({ main: combinedMain, assets: combinedAssets, overrides: combinedOverrides })
  }

  return { assets, overrides, replace, ...main }
}

function convertColors(themeMain: ThemeDefiniton['main']): Stage.ThemeMain {
  return mergeObjects({}, themeMain, (value: Stage.ColorDefinition | string) =>
    value instanceof Array ? Color(value) : value,
  ) as Stage.Theme
}

export default createTheme
