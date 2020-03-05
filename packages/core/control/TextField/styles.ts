import Types from './types'
import WhaleTypes from '@flow-ui/whale/types'
import fieldStyles from '@flow-ui/core/misc/hocs/Field/styles'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    
    const minHeight =
        theme.assets.field[props.size || 'm']?.minHeight ||
        theme.assets.field.m.minHeight ||
        '2.5rem'

    return {
        ...fieldStyles(props, theme, {}),
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
                textOverflow: 'ellipsis',
                '&::placeholder': {
                    color: theme.color.light.rgb().string()
                },
            },
            variant({
                multiline: {
                    margin: `calc(${minHeight} / 4.5) 0`,
                    minHeight: `calc(${minHeight} * 2)`
                },
            })
        ],
    }
}

export default styles