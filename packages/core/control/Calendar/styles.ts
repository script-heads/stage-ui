import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {

    return {
        dateGrind: [{
            position: 'relative',
            color: theme.color.onSurface.rgb().string(),
        }],

        weekDay: [{
            userSelect: 'none',
            ...theme.assets.typography.text.m,
            marginTop: '0.25rem',
            marginBottom: '0.5rem',
            fontWeight: 500,
        }],

        title: [{
            color: theme.color.onSurface.rgb().string(),
            padding: '0.25rem'
        }],

        /**
         * Styles for day/month/year squire
         */
        gridBlock: (variant) => [
            {
                transition: 'all 0.2s',
                fontWeight: 400,
                minWidth: '2rem',
                height: '2rem',
                cursor: 'pointer',
                margin:'0.125rem',
                opacity: 1,
                background: theme.color.background.rgb().string(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.color.surface.rgb().string(),
                borderRadius: theme.radius.s,
                color: theme.color.hardest.rgb().string(),
                userSelect: 'none',
                ...theme.assets.typography.text.m,
                ':hover': {
                    background: theme.color.lightest.rgb().string()
                }
            },
            variant({
                isCurrent: [{
                    borderColor: theme.color.primary.rgb().string()
                }],
                isDisabled: [{
                    opacity: 0.3,
                    ':hover': {
                        background: theme.color.background.rgb().string()
                    }
                }], 
                isCurrentMonth: [{
                    color: theme.color.onSurface.rgb().string(),
                    background: theme.color.surface.rgb().string()
                }],
                isActive: [{
                    background: theme.color.primary.rgb().string(),
                    color: theme.color.onPrimary.rgb().string(),
                    ':hover': {
                        background: theme.color.primary.rgb().string()
                    }
                }], 
            })
        ],
    }
}

export default styles