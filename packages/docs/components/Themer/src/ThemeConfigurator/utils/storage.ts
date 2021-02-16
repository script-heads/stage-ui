import SystemTypes from '@stage-ui/system/types'

const KEY_TEST = '* theme-test'
const KEY_PATCH = '* theme-patch'

const ThemeStorage = {
    /**
     * Load theme patch from localstorage
     */
    load: () => {
        const themeData = localStorage.getItem(KEY_PATCH)
        if (themeData) {
            return JSON.parse(themeData) as SystemTypes.ReplaceTheme
        }
        return null
    },
    /**
     * Save theme зфеср to localstogare
     */
    save: (patch: SystemTypes.ReplaceTheme) => {
        localStorage.setItem(KEY_PATCH, JSON.stringify(patch))
    },
    /**
     * Setter/getter testflight state
     */
    test: (state?: boolean) => {
        if (state === void 0) {
            return localStorage.getItem(KEY_TEST) === 'true'
        }
        localStorage.setItem(KEY_TEST, state.toString())
        return state
    }
}

export default ThemeStorage