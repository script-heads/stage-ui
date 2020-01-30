import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" /></g>,
        outline: <g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" /></g>,
    })
))