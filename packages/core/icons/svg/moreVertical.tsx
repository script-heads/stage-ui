import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="more-vertical"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="12" cy="19" r="2" /></g>,
        outline: <g data-name="more-vertical"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="12" cy="19" r="2" /></g>,
    })
))