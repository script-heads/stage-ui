import WhaleTypes from '@flow-ui/whale/types'
import callProp from '../../utils/callProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme, styleProps) => {

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
                    xs: [{
                        ...theme.typography.text.s,
                    }],
                    s: [{
                        ...theme.typography.text.m,
                    }],
                    m: [{
                        ...theme.typography.text.l,
                    }],
                    l: [{
                        fontSize: theme.typography.header.xs.fontSize,
                        lineHeight: theme.typography.header.xs.lineHeight,
                    }],
                    xl: [{
                        fontSize: theme.typography.header.xs.fontSize,
                        lineHeight: theme.typography.header.xs.lineHeight,
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