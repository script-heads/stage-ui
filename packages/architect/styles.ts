import { css } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'

export default (theme: WhaleTypes.Theme) => ({
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