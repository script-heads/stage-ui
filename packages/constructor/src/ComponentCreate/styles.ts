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
                background: theme.color.background.hex(),
                margin:'0.125rem 0',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: selected
                    ? theme.color.primary.hex()
                    : theme.color.backgroundVariant.hex()
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