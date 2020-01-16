import Types from '../types'
import chroma from 'chroma-js'
import createID from './createID'
import mergeObjects from './mergeObjects'

export type CreateTheme = (theme: Types.SourceTheme) => Types.Theme

const createTheme: CreateTheme = (theme) => {

    const main = convertColors(theme.main)
    const assets = theme.assets(main)
    const overrides = theme.overrides
    const replace: Types.Replace = (themeReplace) => {
        
        const newTheme = mergeObjects(
            theme,
            themeReplace,
        ) as Types.SourceTheme

        newTheme.assets = (theme) => mergeObjects(
            assets,
            themeReplace.assets && themeReplace.assets(theme),
        ) as Types.Assets

        newTheme.main.name = newTheme.main.name || main.name + '-' + createID()

        return createTheme(newTheme)
    }

    return { ...main, assets, overrides, replace }
}

function convertColors(theme: Types.SourceTheme['main']): Types.Theme{
    return mergeObjects(
        {},
        theme,
        (value) => value instanceof Array
            ? chroma(value)
            : value
    ) as Types.Theme
}

export default createTheme