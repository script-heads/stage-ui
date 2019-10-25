import variant from '@flow-ui/core/misc/utils/variant';
import Types from './types';
import Global from '../../types';
import fieldStyles from '@flow-ui/core/misc/hocs/Field/styles';

const textFieldStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props, theme) => {
    
    const { 
        size = 'medium',
        decoration = 'outline',
        multiline, 
    } = props;

    const field = fieldStyles(props, theme);

    const multilineAdditionalPadding = variant(size, {
        'medium': '.25rem',
        'large': '.25rem',
        'xlarge': '.5rem'
    })

    return {
        ...field,
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
        insideLabelStyles: [{
            marginLeft: multilineAdditionalPadding,
            marginTop: multilineAdditionalPadding
        }]
    }
}

export default textFieldStyles