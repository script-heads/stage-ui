import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Overrides, Types.Props> = (props, theme) => {
    return {
        container: [
            {
                position: 'relative',
                display: props.inline ? 'inline-flex' : 'flex',
                alignItems: props.alignItems,
                alignContent: props.alignContent,
                justifyContent: props.justifyContent,
                justifyItems: props.justifyItems,
                flexDirection: props.column ? 'column' : props.direction,
                flexFlow: props.flow,
                flexWrap: props.wrap,
            }
        ]
    }
}

export default styles