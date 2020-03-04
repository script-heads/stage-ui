import Types from '../types'
import createID from './createID'
import mergeObjects from './mergeObjects'
import Color from 'color'

const createTheme = (theme: Types.SourceTheme): Types.Theme=> {

    const main = convertColors(theme.main)
    const assets = theme.assets(main)
    const overrides = theme.overrides?.(main,assets)

    const replace = (themeReplace: Types.ReplaceTheme): Types.Theme  => {
        
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
        ) as Partial<{[Component in keyof Whale.Overrides]: Types.Styles<Whale.Overrides[Component]>}>

        return createTheme(newTheme)
    }

    return { ...main, assets, overrides, replace }
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