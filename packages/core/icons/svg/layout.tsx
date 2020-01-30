import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="layout"><rect width="24" height="24" opacity="0" /><path d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2z" /><path d="M3 10v8a3 3 0 0 0 3 3h5V10z" /><path d="M13 10v11h5a3 3 0 0 0 3-3v-8z" /></g>,
        outline: <g data-name="layout"><rect width="24" height="24" opacity="0" /><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z" /></g>,
    })
))