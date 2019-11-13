import ThemeTypes from '../themes/types'
import chroma from 'chroma-js'
import createID from './createID'
import mergeObjects from './mergeObjects'

export type CreateTheme = (theme: ThemeTypes.SourceTheme) => ThemeTypes.Index

const createTheme: CreateTheme = (theme) => {
    
    const convertedTheme = convertColors(theme)

    convertedTheme.assets = theme.assets(convertedTheme)
    convertedTheme.overrides = theme.overrides || {}
    convertedTheme.replace = (themeReplace) => {
        
        const newTheme = mergeObjects(
            theme,
            themeReplace,
        ) as ThemeTypes.SourceTheme

        newTheme.assets = (theme) => mergeObjects(
            convertedTheme.assets,
            themeReplace.assets && themeReplace.assets(theme),
        ) as ThemeTypes.Assets

        newTheme.name = newTheme.name || convertedTheme.name + '-' + createID()

        return createTheme(newTheme)
    }

    return convertedTheme
}

function convertColors(theme: ThemeTypes.SourceTheme): ThemeTypes.Index{
    return mergeObjects(
        {},
        theme,
        (value) => value instanceof Array
            ? chroma(value)
            : value
    ) as ThemeTypes.Index
}

export default createTheme