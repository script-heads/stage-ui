import { css } from '@emotion/core'

export default {
    container: css({
        padding: '0.5rem'
    }),
    panel: {
        
    },
    componentName: (active: boolean) => (
        css({
            position: 'absolute',
            top: '0.25rem',
            right: '0.25rem',
            padding: '0.125rem 0.5rem',
            borderRadius: '1rem',
            color: '#bbb',
        }, active && {
            color: '#fff',
            background: '#bbb'
        })
    )
}