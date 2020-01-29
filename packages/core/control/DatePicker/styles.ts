import fieldStyles from '@flow-ui/core/misc/hocs/Field/styles'
import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {

    return {
        ...fieldStyles(props, theme),

        drop: (variant) => [
            {
                transition: 'all 0.2s',
                transform: `translateY(-1rem) scale(0.9)`,
                opacity: 0,
                visibility: 'hidden'
            },
            variant({
                isActive: [{
                    transform: `translateY(0) scale(1)`,
                    opacity: 1,
                    visibility: 'visible'
                }]
            })
        ],
        input: (variant) => [
            {
                outline: 0,
                padding: 0,
                margin: 0,
                border: 'none',
                backgroundImage: 'none',
                backgroundColor: 'transparent',
                resize: 'vertical',
                boxShadow: 'none',
                color: 'inherit',
                font: 'inherit',
                cursor: 'inherit',
                '&::placeholder': {
                    color: theme.color.light.css()
                }
            },
            variant({
                isLabelOverlay: [{
                    opacity: '0'
                }]
            }),  
        ]
    }
}

export default styles