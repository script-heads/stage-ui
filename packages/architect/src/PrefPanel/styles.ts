import { css } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'

export default (theme: WhaleTypes.Theme) => {
    return {
        container: css({
            width: '20rem',
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