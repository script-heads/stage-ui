import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: css({
            width: '22rem',
            borderLeft: `1px solid ${theme.color.lightest.css()}`,
        }),
        scrollView: css({ 
            height: 'calc(100vh - 7.5rem)',
        }),
        scrollContainer: css({ 
            padding: '0 1rem',
        }),
        componentName: (active: boolean) => (
            css({
                position: 'absolute',
                top: '0.25rem',
                right: '0.5rem',
                borderRadius: '1rem',
                color: theme.color.light.hex(),
            }, active && {
                color: theme.color.onPrimary.hex(),
                background: theme.color.primary.hex()
            })
        )
    }
}