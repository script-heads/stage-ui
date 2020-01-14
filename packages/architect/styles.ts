import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => ({
    container: css({
        position: 'absolute',
        left: 0, 
        right: 0, 
        top: 0,
        bottom: 0,
        background: theme.color.background.hex()
    })
})