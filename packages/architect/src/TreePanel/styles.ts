import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {
    
    return {
        container: [{
            padding: '1rem',
            paddingTop: '5rem'
        }],
        item: (selected: boolean) => (
            [{
                background: theme.color.surface.hex(),
                margin:'0.125rem 0',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.5rem',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: selected
                    ? theme.color.primary.hex()
                    : theme.color.lightest.hex()
            }]
        ),
        tag: [{
            padding: '0.125rem 0.5rem',
            borderRadius: '1rem',
            color: theme.color.onSecondary.hex(),
            background: theme.color.secondary.hex()
        }]
    }
}