import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z" /><rect x="3" y="17" width="18" height="2" rx=".95" ry=".95" /><rect x="3" y="5" width="18" height="2" rx=".95" ry=".95" /></g>,
        outline: <g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z" /><rect x="3" y="17" width="18" height="2" rx=".95" ry=".95" /><rect x="3" y="5" width="18" height="2" rx=".95" ry=".95" /></g>,
    })
))