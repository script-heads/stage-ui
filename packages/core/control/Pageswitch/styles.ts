import { StyleObject } from '@flow-ui/whale/types'
import Types from './types'

const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {

    return {
        container: [
            {
                color: theme.color.hard.css(),
                userSelect: 'none',
            },
        ],
        arrowButton: (variant) => [
            {
                color: theme.color.hardest.css(),
                ':hover': {
                    color: theme.color.primary.css()
                }
            }, 
            variant({
                disabled: {
                    cursor: 'not-allowed',
                    color: theme.color.lightest.css(),
                    ':hover': {
                        color: theme.color.lightest.css()
                    }
                }
            })
        ]
    }
}

export default styles