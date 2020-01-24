import { StyleObject } from '@flow-ui/whale/types'
import callProp from '../../utils/callProp'
import Types from './types'

const styles: StyleObject<Types.Overrides, Types.Props> = (props, theme, styleProps) => {

    const labelColor = callProp(props.labelColor, theme.color)

    return {
        container: (variant) => [
            {
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: theme.color.onSurface.css(),
                outline: 'none'
            },
            variant({
                disabled: [{
                    cursor: 'not-allowed',
                }],
                animated: [{
                    transition: 'all .15s'
                }]
            }),
            styleProps.all
        ],

        label: (variant) => [
            {
                marginLeft: '0.5rem',
                userSelect: 'none',
                color: labelColor
            },
            variant({
                size: {
                    xsmall: [{
                        ...theme.typography.text[3],
                    }],
                    small: [{
                        ...theme.typography.text[2],
                    }],
                    medium: [{
                        ...theme.typography.text[1],
                    }],
                    large: [{
                        fontSize: theme.typography.header[4].fontSize,
                        lineHeight: theme.typography.header[4].lineHeight,
                    }],
                    xlarge: [{
                        fontSize: theme.typography.header[4].fontSize,
                        lineHeight: theme.typography.header[4].lineHeight,
                    }],
                },
                disabled: [{
                    color: callProp(theme.color.light.css(), theme.color)
                }],
                uppercase: [{
                    textTransform: 'uppercase'
                }],
                animated: [{
                    transition: 'all .15s'
                }]
            }),
        ],
    }
}

export default styles