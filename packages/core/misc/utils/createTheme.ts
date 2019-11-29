import ThemeTypes from '../themes/types'
import chroma from 'chroma-js'
import createID from './createID'
import mergeObjects from './mergeObjects'

export type CreateTheme = (theme: ThemeTypes.SourceTheme) => ThemeTypes.Index

const createTheme: CreateTheme = (theme) => {

    const main = convertColors(theme.main)
    const assets = theme.assets(main)
    const overrides = theme.overrides
    const replace: ThemeTypes.Replace = (themeReplace) => {
        
        const newTheme = mergeObjects(
            theme,
            themeReplace,
        ) as ThemeTypes.SourceTheme

        newTheme.assets = (theme) => mergeObjects(
            assets,
            themeReplace.assets && themeReplace.assets(theme),
        ) as ThemeTypes.Assets

        newTheme.main.name = newTheme.main.name || main.name + '-' + createID()

        return createTheme(newTheme)
    }

    return { ...main, assets, overrides, replace }
}

function convertColors(theme: ThemeTypes.SourceTheme['main']): ThemeTypes.Index{
    return mergeObjects(
        {},
        theme,
        (value) => value instanceof Array
            ? chroma(value)
            : value
    ) as ThemeTypes.Index
}

export default createTheme