import Types from './types'
import WhaleTypes from '@flow-ui/whale/types'
import fieldStyles from '@flow-ui/core/misc/hocs/Field/styles'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {
    
    const { 
        size = 'm',
        decoration = 'outline',
        multiline, 
    } = props

    let multilineAdditionalPadding = ''

    if (multiline) {
        switch (size) {
            case 'm':
                multilineAdditionalPadding = '.25rem'
                break
            case 'l':
                multilineAdditionalPadding = '.25rem'
                break
            case 'xl':
                multilineAdditionalPadding = '.5rem'
                break
        }
    }
   
    return {
        ...fieldStyles(props, theme, styleProps, {
            manyLines: multiline,
            additionalPadding: multilineAdditionalPadding
        }),
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
            multiline && decoration != 'underline' && {
                padding: multilineAdditionalPadding
            },
            variant({
                isLabelOverlay: [{
                    opacity: '0'
                }]
            }),   
        ],
    }
}

export default styles