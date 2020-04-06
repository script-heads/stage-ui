
import colorProp from '@stage-ui/system/utils/colorProp'
import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const color = colorProp(theme, props.color) || theme.color.primary
    const field = theme.assets.field[props.size || 'm'] || theme.assets.field.m

    return {
        container: (variant) => [
            {
                position: 'relative',
                minWidth: '1rem',
                alignSelf: 'center',
                userSelect: 'none',
                overflow: 'hidden',
                boxSizing: 'border-box',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'transparent',
                background: theme.color.background.rgb().string(),
                minHeight: `calc(${field.minHeight} / 4)`,
                zIndex: 1,
            },
            variant({
                shape: {
                    'round': [{
                        borderRadius: '100rem',
                    }]
                },
                decoration: {
                    outline: [
                        {
                            background: 'transparent',
                            borderColor: color.rgb().string(),
                        },
                    ],
                }
            })
        ],
        thumb: (variant) => []
    }
}

export default styles