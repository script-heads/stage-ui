import { css } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'

export default (theme: WhaleTypes.Theme) => {
    return {
        container: css({
            background: theme.color.surface.rgb().string(),
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '3rem',
            padding: '0 1rem',
        }),
    }
}