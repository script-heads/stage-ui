import { css } from '@emotion/core'
import WhaleTypes from '@flow-ui/whale/types'

export default (theme: WhaleTypes.Theme) => {

    return {
        container: css({
            padding: '1rem',
            border: '1px solid',
            borderColor: theme.color.lightest.hex(),
            borderRadius: theme.radius.default
        }),
        legatureButton: css({
            width: '100%',
            fontFamily: 'Courier'
        }),
    }
}