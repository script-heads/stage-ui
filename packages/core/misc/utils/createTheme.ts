import ThemeTypes from '../themes/types';
import chroma from 'chroma-js';
import createID from './createID';
import mergeObjects from './mergeObjects';

export default function createTheme(mainVaraibles: ThemeTypes.Variables<chroma.Color>, mainAssets: (variables: ThemeTypes.Variables<chroma.Color>) => ThemeTypes.Assets, mainOverrides?): ThemeTypes.Index {

    return {
        ...mainVaraibles,
        assets: mainAssets(mainVaraibles),
        overrides: mainOverrides || {},
        replace: (variables, assets, overrides) => {

            const newVariables = mergeObjects(
                mainVaraibles,
                variables,
                (value) => value instanceof Array
                    ? chroma(value)
                    : value
            ) as ThemeTypes.Variables<chroma.Color>;

            const newAssets = (variables) => mergeObjects(
                mainAssets(variables),
                assets && assets(variables),
            ) as ThemeTypes.Assets

            const newOverrides = mergeObjects(
                mainOverrides,
                overrides,
            ) as ThemeTypes.Overrides

            newVariables.name = variables.name || mainVaraibles.name + '-' + createID();

            if (variables.color && variables.color.primary) {
                if (!variables.color.secondary) {
                    newVariables.color.secondary = newVariables.color.primary.set('hsl.h', 180);
                }
            }

            return createTheme(newVariables, newAssets, newOverrides)
        }
    }
}