import SystemTypes from '@stage-ui/system/types'
import colorProp from '@stage-ui/system/utils/colorProp'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    const backgroundColor = colorProp(theme, props.color)?.rgb().string() || theme.color.primary.rgb().string()

    return {
        container: [{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: theme.color.onPrimary.rgb().string(),
            backgroundColor,
            borderRadius: theme.radius.m,
            
        }, theme.assets.typography.text.m],
        content: [{
            flex: 1,
            padding: theme.spacing.m,
        }],
        leftChild: [{
            paddingLeft: theme.spacing.m,
            marginRight: `-${theme.spacing.s}`,
            ' svg': {
                fontSize: '1.5rem',
                marginTop: '0.25rem',
            }
        }],
        rightChild: [{
            paddingRight: theme.spacing.m,
            marginLeft: `-${theme.spacing.s}`,
        }]
    }
}

export default styles