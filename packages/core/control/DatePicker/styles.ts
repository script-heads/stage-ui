/**
 * styles.tsx
 * author: I.Trikoz
 */
import Shared from '../../types'
import Types from './types'
import fieldStyles from '@flow-ui/core/misc/hocs/Field/styles'

const datePickerStyles: Shared.FunctionalComponentStyles<Types.Overrides> = (props, theme) => {

    return {
        ...fieldStyles(props, theme),

        dateGrind: [{
            position: 'relative',
            background: theme.color.surface.css(),
            color: theme.color.onSurface.css(),
        }],

        weekDay: [{
            userSelect: 'none',
            ...theme.typography.text[2],
            marginTop: '0.25rem',
            marginBottom: '0.5rem',
            fontWeight: 400,
        }],

        title: [{
            color: theme.color.onSurface.css(),
            padding: '0.25rem'
        }],

        /**
         * Styles for day/month/year squire
         */
        gridBlock: (variant) => [
            {
                transition: 'all 0.2s',
                fontWeight: 500,
                minWidth: '2rem',
                height: '2rem',
                cursor: 'pointer',
                margin:'0.125rem',
                opacity: 1,
                background: theme.color.background.css(),
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.color.surface.css(),
                borderRadius: theme.radius.narrow,
                color: theme.color.onSurface.css(),
                userSelect: 'none',
                ...theme.typography.text[1],
                ':hover': {
                    background: theme.color.lightest.css()
                }
            },
            variant({
                isCurrent: [{
                    borderColor: theme.color.primary.css()
                }],
                isDisabled: [{
                    opacity: 0.3,
                    ':hover': {
                        background: theme.color.background.css()
                    }
                }], 
                isCurrentMonth: [{
                    color: theme.color.hardest.css(),
                    background: theme.color.surface.css()
                }],
                isActive: [{
                    background: theme.color.primary.css(),
                    color: theme.color.onPrimary.css(),
                    ':hover': {
                        background: theme.color.primary.css()
                    }
                }], 
            })
        ],

        drop: (variant) => [
            {
                transition: 'all 0.2s',
                transform: `translateY(-1rem) scale(0.9)`,
                opacity: 0,
                visibility: 'hidden'
            },
            variant({
                isActive: [{
                    transform: `translateY(0) scale(1)`,
                    opacity: 1,
                    visibility: 'visible'
                }]
            })
        ],
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
            variant({
                isLabelOverlay: [{
                    opacity: '0'
                }]
            }),  
        ]
    }
}

export default datePickerStyles