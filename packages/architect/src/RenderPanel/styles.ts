import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: css({
            padding: '0.5rem',
            border: '2px dashed',
            borderColor: theme.color.lightest.hex(),
            borderRadius: '1rem',
            margin: '0.75rem 0.5rem',
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