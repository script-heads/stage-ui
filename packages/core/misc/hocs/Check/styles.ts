import Global from '@flow-ui/core/types'
import useStyleProps from '../../hooks/useStyleProps'
import callProp from '../../utils/callProp'
import Types from './types'
import ThemeTypes from '../../themes/types'

const checkStyles = (props: Types.Props, theme: ThemeTypes.Index): Global.ComponentStyles<Types.Styles> => {
    
    const labelColor = callProp(props.labelColor, theme.color)
    const styleProps = useStyleProps(props)

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

export default checkStyles