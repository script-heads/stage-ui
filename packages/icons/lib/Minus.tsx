/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m50.6665 34.6668h-37.3333c-1.472 0-2.6667-1.192-2.6667-2.6666 0-1.4747 1.1947-2.6667 2.6667-2.6667h37.3333c1.4747 0 2.6667 1.192 2.6667 2.6667 0 1.4746-1.192 2.6666-2.6667 2.6666z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m50.6666 34.6668h-37.3333c-1.472 0-2.6667-1.192-2.6667-2.6666 0-1.4747 1.1947-2.6667 2.6667-2.6667h37.3333c1.4747 0 2.6667 1.192 2.6667 2.6667 0 1.4746-1.192 2.6666-2.6667 2.6666z" fillRule="evenodd"/>,
    })
))