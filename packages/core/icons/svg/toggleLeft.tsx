import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="toggle-left"><rect x=".02" y=".02" width="23.97" height="23.97" transform="rotate(179.92 12.002 11.998)" opacity="0" /><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zM9 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" /><path d="M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /></g>,
        outline: <g data-name="toggle-left"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z" /><path d="M9 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /></g>,
    })
))