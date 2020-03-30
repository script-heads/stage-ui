import { css } from '@emotion/core'
import SystemTypes from '@flow-ui/system/types'

export default (theme: SystemTypes.Theme) => {

    return {
        container: css({
            padding: '1rem',
            border: '1px solid',
            borderColor: theme.color.lightest.rgb().string(),
            borderRadius: theme.radius.m
        }),
        legatureButton: css({
            width: '100%',
            fontFamily: 'Courier'
        }),
    }
}