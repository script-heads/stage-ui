
import Types from './types'
import { StyleObject } from '@flow-ui/whale/types'

const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    
    return {
        container: (variant) => [
            styleProps.all,
            variant({
                decoration: {
                    inline: [{
                        display: 'flex',
                        alignItems: 'flex-start',
                    }]
                },
                needIndent: [{
                    paddingLeft: '1rem'
                }]
            }),
        ],
        label: [
            {
                cursor: 'pointer',
                userSelect: 'none',
            },
            props.alwaysOpen && {
                cursor: 'default',
            }
        ],
        icon: (variant) => [
            {
                display: 'none',
                opacity: 1
            },
            variant({
                decoration: {
                    drop: [{
                        display: 'inline-block',
                        marginRight: '0.25rem',
                    }]
                },
                disabled: [{
                    cursor: 'not-allowed',
                    opacity: 0
                }]
            }),
        ],
        child: (variant) => [
            {
                display: 'none'
            },
            variant({
                isOpen: [{
                    display: 'block'
                }]
            })
        ]
    }
}

export default styles