import { css, SerializedStyles } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'

export type StyleTypes = {
    container: SerializedStyles
    scrollView: SerializedStyles
    scrollContainer: SerializedStyles
    item: (selected: boolean ) => SerializedStyles
    tag: SerializedStyles
}

const createTheme: (theme: WhaleTypes.Theme) => StyleTypes = (theme) => ({
    container: css({
        width: '20rem',
        borderRight: `1px solid ${theme.color.lightest.css()}`,
    }),
    scrollView: css({ 
        height: 'calc(100vh - 7.5rem)',
    }),
    scrollContainer: css({ 
        padding: '1rem 0 0 1rem',
    }),
    item: (selected: boolean) => css(
        [
            {
                display: 'block',
                padding: '0.5rem 0 0.5rem 1rem',
                margin: '1px 0',
                borderRightWidth: '4px',
                borderRightStyle: 'solid',
                borderBottomLeftRadius: '1rem',
                borderTopLeftRadius: '1rem',
                borderRightColor: theme.color.primary.alpha(0).hex(),
                'span[id^=\'ctrl\']': {
                    visibility: 'hidden'
                },
                '&:hover': {
                    background: theme.color.hard.alpha(.1).css(),
                    'span[id^=\'ctrl\']': {
                        visibility: 'visible'
                    }
                    
                }
            },
            selected && {
                borderRightColor: theme.color.primary.alpha(1).hex(),
                background: theme.color.primary.alpha(.1).css(),
                '&:hover': {
                    background: theme.color.primary.alpha(.1).css()
                },
            }
    ]
    ),
    tag: css([{
        padding: '0.125rem 0.5rem',
        borderRadius: '1rem',
        color: theme.color.onSecondary.hex(),
        background: theme.color.secondary.hex()
    }])
})

export default createTheme