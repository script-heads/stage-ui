import ThemeTypes from '../themes/types';
import chroma from 'chroma-js';
import createID from './createID';
import mergeObjects from './mergeObjects';

export type CreateTheme = (mainVaraibles: ThemeTypes.Variables, mainAssets: (variables: ThemeTypes.Variables<chroma.Color>) => ThemeTypes.Assets, mainOverrides?) => ThemeTypes.Index

const createTheme: CreateTheme = (mainVaraibles, mainAssets, mainOverrides?) => {
    
    const convertedMainVarables = convertColors(mainVaraibles);
    
    return {
        ...convertedMainVarables,
        assets: mainAssets(convertedMainVarables),
        overrides: mainOverrides || {},
        replace: (variables, assets, overrides) => {

            const newVariables = mergeObjects(
                mainVaraibles,
                variables,
            ) as ThemeTypes.Variables;

            const newAssets = (variables) => mergeObjects(
                mainAssets(variables),
                assets && assets(variables),
            ) as ThemeTypes.Assets

            const newOverrides = mergeObjects(
                mainOverrides,
                overrides,
            ) as ThemeTypes.Overrides

            newVariables.name = variables.name || mainVaraibles.name + '-' + createID();

            return createTheme(newVariables, newAssets, newOverrides)
        }
    }
}

function convertColors(variables: ThemeTypes.Variables): ThemeTypes.Variables<chroma.Color> {
    return mergeObjects(
        {},
        variables,
        (value) => value instanceof Array
            ? chroma(value)
            : value
    ) as ThemeTypes.Variables<chroma.Color>
}

export default createTheme