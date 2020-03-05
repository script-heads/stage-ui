import WhaleTypes from '@flow-ui/whale/types'
import colorProp from '@flow-ui/whale/utils/colorProp'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const labelColor = colorProp(theme, props.labelColor)

    return {
        container: (variant) => [
            {
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: theme.color.onSurface.rgb().string(),
                outline: 'none'
            },
            variant({
                disabled: [{
                    cursor: 'not-allowed',
                }],
                animated: [{
                    transition: 'all .15s'
                }]
            })
        ],

        label: (variant) => [
            {
                marginLeft: '0.5rem',
                userSelect: 'none',
                color: labelColor?.rgb().string()
            },
            variant({
                size: theme.assets.typography.text,
                disabled: [{
                    color: colorProp(theme, theme.color.light)?.rgb().string()
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