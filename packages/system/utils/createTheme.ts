import createID from './createID'
import mergeObjects from './mergeObjects'
import isFunction from './isFunction'
import convertColors from './convertColors'

/**
 * autocomplete hack f or webkit
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

const createTheme = (themeDefinition: Stage.ThemeDefiniton): Stage.Theme => {
  const { color, breakpoints = ['1199.98px', '991.98px', '767.98px', '575.98px'] } =
    themeDefinition.main

  const main = {
    ...themeDefinition.main,
    color: convertColors(color) as Stage.Colors,
    breakpoints,
  }

  main.color.palette = main.color.palette || {}

  const assets = isFunction(themeDefinition.assets)
    ? themeDefinition.assets(main)
    : themeDefinition.assets
  const overrides = isFunction(themeDefinition.overrides)
    ? themeDefinition.overrides(main, assets)
    : themeDefinition.overrides || {}

  assets.global = [defaultGlobal, assets.global]

  const replace = (themeReplaceDefinition: Stage.ReplaceTheme): Stage.Theme => {
    const nextMain = mergeObjects(
      themeDefinition.main || {},
      themeReplaceDefinition.main || {},
    ) as Stage.ThemeDefiniton['main']

    const nextAssets = ((replacedMain) => {
      return mergeObjects(
        isFunction(themeDefinition.assets)
          ? themeDefinition.assets(replacedMain)
          : themeDefinition.assets || {},
        isFunction(themeReplaceDefinition.assets)
          ? themeReplaceDefinition.assets(replacedMain)
          : themeReplaceDefinition.assets || {},
      )
    }) as Stage.ThemeDefiniton['assets']

    const nextOverrides = ((replacedMain, replacedAssets) =>
      mergeObjects(
        isFunction(themeDefinition.overrides)
          ? themeDefinition.overrides(replacedMain, replacedAssets)
          : themeDefinition.overrides || {},
        isFunction(themeReplaceDefinition.overrides)
          ? themeReplaceDefinition.overrides(replacedMain, replacedAssets)
          : themeReplaceDefinition.overrides || {},
      )) as Stage.ThemeDefiniton['overrides']

    nextMain.name = nextMain.name || `${nextMain.name}-${createID()}`

    return createTheme({
      main: nextMain,
      assets: nextAssets,
      overrides: nextOverrides,
    })
  }

  return { ...main, assets, overrides, replace } as Stage.Theme
}

export default createTheme
