import {css} from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    
    return {
        container: css({
            width: '18rem',
            borderRight: `1px solid ${theme.color.lightest.css()}`,
        }),
        scrollView: css({ 
            height: 'calc(100vh - 7.5rem)',
        }),
        scrollContainer: css({ 
            padding: '0 1rem',
        }),
        item: (selected: boolean) => css(
            [
                {
                    margin: '0.25rem 0',
                    '&:hover': {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: theme.color.primary.hex()
                    }
                },
                selected && {
                    background: theme.color.primary.luminance(.85).css()
                }
        ]
        ),
        tag: [{
            padding: '0.125rem 0.5rem',
            borderRadius: '1rem',
            color: theme.color.onSecondary.hex(),
            background: theme.color.secondary.hex()
        }]
    }
}