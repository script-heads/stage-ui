import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: css({
        }),
        panel: css({
 
        }),
        mask: css({
            opacity: 0,
            pointerEvents: 'none',
            position: 'fixed',
            border: '1px dashed red',
        }),
        maskName: css({
            position:'absolute',
            right:0,
            top: '-1rem',
            color: 'red'
        }),
        deleteArea: css({
            opacity: 0.75,
            textAlign: 'center',
            padding: '0.5rem 1rem',
            fontSize: '0.75rem',
            color: theme.color.accent.red.hex(),
            marginLeft: '0.25rem',
        })
    }
}