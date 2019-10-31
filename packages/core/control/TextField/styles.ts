import variant from '@flow-ui/core/misc/utils/variant'
import Types from './types'
import Global from '../../types'
import fieldStyles from '@flow-ui/core/misc/hocs/Field/styles'

const textFieldStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props, theme) => {
    
    const { 
        size = 'medium',
        decoration = 'outline',
        multiline, 
    } = props

    let multilineAdditionalPadding = ''
    switch (size) {
        case 'medium':
            multilineAdditionalPadding = '.25rem'
            break
        case 'large':
            multilineAdditionalPadding = '.25rem'
            break
        case 'xlarge':
            multilineAdditionalPadding = '.5rem'
            break
    }

    return {
        ...fieldStyles(props, theme, {
            manyLines: multiline,
            additionalStyles: {
                label: [{
                    marginLeft: multilineAdditionalPadding,
                    marginTop: multilineAdditionalPadding
                }]
            }
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

export default textFieldStyles