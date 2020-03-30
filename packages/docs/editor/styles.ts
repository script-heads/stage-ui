import { css } from '@emotion/core'
import SystemTypes from '@flow-ui/system/types'

export default (theme: SystemTypes.Theme) => ({
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