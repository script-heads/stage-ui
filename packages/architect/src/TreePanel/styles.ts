import {css} from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    
    return {
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
        tag: [{
            padding: '0.125rem 0.5rem',
            borderRadius: '1rem',
            color: theme.color.onSecondary.hex(),
            background: theme.color.secondary.hex()
        }]
    }
}