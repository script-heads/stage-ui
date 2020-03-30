import { css } from '@emotion/core'
import SystemTypes from '@flow-ui/system/types'

export default (theme: SystemTypes.Theme) => {
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