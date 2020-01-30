import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="keypad"><rect width="24" height="24" opacity="0" /><path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /><path d="M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /><path d="M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" /><path d="M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /><path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /><path d="M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /><path d="M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /><path d="M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /><path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" /></g>,
        outline: <g data-name="keypad"><rect width="24" height="24" opacity="0" /><path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" /><path d="M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /><path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" /></g>,
    })
))