import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export default (theme: ThemeTypes.Index) => {

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