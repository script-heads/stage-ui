import { css } from '@emotion/core'

export default {
    container: css({
        padding: '0.5rem',
        border: '2px dashed rgba(0,0,0,0.25)',
        borderRadius: '8px',
        margin: '0.75rem 0.5rem',
    }),
    deleteArea: css({
        opacity: 0.75,
        textAlign: 'center',
        padding: '0.5rem 1rem',
        fontSize: '0.75rem',
        color: 'rgb(255,0,0)',
        marginLeft:'0.25rem',
    })
}