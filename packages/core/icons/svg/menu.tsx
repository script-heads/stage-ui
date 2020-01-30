import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" /><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" /><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" /></g>,
        outline: <g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" /><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" /><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" /><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" /></g>,
    })
))