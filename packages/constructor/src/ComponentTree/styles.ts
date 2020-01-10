import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    return {
        container: css({
            padding: '0.5rem'
        }),
        panel: {
        },
        item: (selected: boolean) => (
            css({
                padding: '0.125rem 0.5rem',
                background: theme.color.onPrimary.hex(),
                borderRadius: '0.125rem',
                borderStyle: 'dashed',
                borderWidth: 1,
                borderColor: selected
                    ? theme.color.primary.hex()
                    : theme.color.onPrimary.hex()
            })
        ),
        tag: css({
            padding: '0.125rem 0.5rem',
            borderRadius: '1rem',
            color: theme.color.onSecondary.hex(),
            background: theme.color.secondary.hex()
        })
    }
}