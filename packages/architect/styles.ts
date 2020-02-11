import { css } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'

export default (theme: WhaleTypes.Theme) => ({
    container: css({
        position: 'absolute',
        overflow: 'hidden',
        left: 0, 
        right: 0, 
        top: '3rem',
        bottom: 0,
        background: theme.color.background.rgb().string(),
        borderTop: `1px solid ${theme.color.lightest}`
    })
})