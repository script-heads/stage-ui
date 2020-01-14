import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: {

        },
        panel: {
            margin: '2rem 4rem'
        },
        mask: (color: string) => css({
            opacity: 0,
            pointerEvents: 'none',
            position: 'fixed',
            border: '1px dotted',
            borderRadius: '0.25rem',
            borderColor: color
        }),
        maskName: (color: string) => css({
            position:'absolute',
            right:0,
            top: '-1rem',
            color: color
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