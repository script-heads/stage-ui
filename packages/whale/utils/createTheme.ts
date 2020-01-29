import Types from '../types'
import chroma from 'chroma-js'
import createID from './createID'
import mergeObjects from './mergeObjects'

const createTheme = <Overrides = {}>(theme: Types.SourceTheme<Overrides>): Types.Theme<Overrides> => {

    const main = convertColors(theme.main)
    const assets = theme.assets(main)
    const overrides = theme.overrides
    const replace = (themeReplace: Types.ReplaceTheme<Overrides>): Types.Theme<Overrides>  => {
        
        const newTheme = mergeObjects(
            theme,
            themeReplace,
        ) as Types.SourceTheme<Overrides> 

        newTheme.assets = (theme) => mergeObjects(
            assets,
            themeReplace.assets && themeReplace.assets(theme),
        ) as Types.ThemeAssets

        newTheme.main.name = newTheme.main.name || main.name + '-' + createID()

        return createTheme(newTheme)
    }

    return { ...main, assets, overrides, replace }
}

function convertColors(theme: Types.SourceTheme['main']): Types.Theme {
    return mergeObjects(
        {},
        theme,
        (value) => value instanceof Array
            ? chroma(value)
            : value
    ) as Types.Theme
}

export default createTheme