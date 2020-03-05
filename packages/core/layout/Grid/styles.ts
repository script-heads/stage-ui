import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'
import applyLayoutDecoration from '@flow-ui/core/misc/utils/applyLayoutDecoration'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
    return {
        container: (variant) => [
            applyLayoutDecoration(props, theme),
            {
                position: 'relative',
                display: props.inline ? 'inline-grid' : 'grid',

                gridTemplateColumns: props.templateColumns,
                gridTemplateRows: props.templateRows,
                gridTemplateAreas: props.templateAreas,

                gridColumnGap: props.columnGap,
                gridRowGap: props.rowGap,
                gridGap: props.gap,

                gridAutoColumns: props.autoColumns,
                gridAutoRows: props.autoRows,
                gridAutoFlow: props.autoFlow,

                alignItems: props.alignItems,
                alignContent: props.alignContent,
                justifyContent: props.justifyContent,
                justifyItems: props.justifyItems,
            },
        ]
    }
}

export default styles