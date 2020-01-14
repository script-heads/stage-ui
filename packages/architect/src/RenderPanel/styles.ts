import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: css({
            paddingTop: '5rem',
        }),
        panel: css({
            padding: '2rem',
            border: '1px solid',
            borderColor: theme.color.lightest.hex(),
            background: theme.color.background.hex(),
            borderRadius: '0.5rem',
            marginTop:'0.5rem',
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