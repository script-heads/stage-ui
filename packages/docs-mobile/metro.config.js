/**
 * Metro Bundler configuration
 * https://facebook.github.io/metro/docs/en/configuration
 *
 * eslint-env node, es6
 */

const blacklist = require('metro-config/src/defaults/exclusionList')
const getWorkspaces = require('get-yarn-workspaces')
const path = require('path')

const { getDefaultConfig } = require('metro-config')

async function getConfig(appDir, options = {}) {
    const workspaces = getWorkspaces(appDir)
    const {
        resolver: { sourceExts },
    } = await getDefaultConfig()

    // Add additional Yarn workspace package roots to the module map
    // https://bit.ly/2LHHTP0
    const watchFolders = [
        path.resolve(appDir, '../..', 'node_modules'),
        ...workspaces.filter((workspaceDir) => !(workspaceDir === appDir)),
    ]

    return {
        watchFolders,
        resolver: {
            blacklistRE: blacklist([
                // Ignore other resolved react-native installations outside of
                // mobile - this prevents a module naming collision when mapped.
                /^((?!mobile).)+[\/\\]node_modules[/\\]react-native[/\\].*/,

                // Ignore react-native-svg dependency in other package, mapped below.
                // react-native-svg must only be included once due to a side-effect. It
                // has not been hoisted as it requires native module linking here.
                // http://bit.ly/2LJ7V4b
                // /other-package[\/\\]node_modules[/\\]react-native-svg[/\\].*/,
            ]),
            extraNodeModules: {
                // Resolve all react-native module imports to the locally-installed version
                'react-native': path.resolve(appDir, 'node_modules', 'react-native'),

                // Resolve additional nohoist modules depended on by other packages
                'react-native-svg': path.resolve(appDir, 'node_modules', 'react-native-svg'),

                // Resolve core-js imports to the locally installed version
                'core-js': path.resolve(appDir, 'node_modules', 'core-js'),
            },
            sourceExts: [...sourceExts, 'gql', 'svg'],
        },
    }
}

module.exports = getConfig(__dirname)
