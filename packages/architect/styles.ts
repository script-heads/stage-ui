import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => ({
    container: css({
        position: 'absolute',
        overflow: 'hidden',
        left: 0, 
        right: 0, 
        top: '4.5rem',
        bottom: 0,
        background: theme.color.background.hex(),
        borderTop: `1px solid ${theme.color.lightest.css()}`
    })
})