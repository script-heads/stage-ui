import Types from '../types'
import createID from './createID'
import mergeObjects from './mergeObjects'
import Color from 'color'

const defaultBreakpoints = ['1199.98px', '991.98px', '767.98px', '575.98px']

const createTheme = (theme: Types.SourceTheme): Types.Theme => {

    const main = convertColors(theme.main)
    const assets = theme.assets(main)
    const overrides = theme.overrides?.(main, assets)

    main.breakpoints = theme.main.breakpoints || defaultBreakpoints

    const replace = (themeReplace: Types.ReplaceTheme): Types.Theme => {

        const newTheme = mergeObjects(
            theme,
            themeReplace,
        ) as Types.SourceTheme
        newTheme.main.name = newTheme.main.name || main.name + '-' + createID()

        newTheme.assets = (main) => mergeObjects(
            theme.assets(main),
            themeReplace.assets && themeReplace.assets(main),
        ) as Types.ThemeAssets

        newTheme.overrides = (main, assets) => mergeObjects(
            overrides,
            themeReplace.overrides && themeReplace.overrides(main, assets),
        ) as Partial<{ [Component in keyof System.Overrides]: Types.Styles<System.Overrides[Component]> }>

        return createTheme(newTheme)
    }

    return Object.assign({ assets, overrides, replace }, main)
}

function convertColors(theme: Types.SourceTheme['main']): Types.Theme {
    return mergeObjects(
        {},
        theme,
        (value) => value instanceof Array
            ? Color(value)
            : value
    ) as Types.Theme
}

export default createTheme