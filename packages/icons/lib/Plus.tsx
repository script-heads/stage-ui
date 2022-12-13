/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m50.6665 29.3332h-16v-16c0-1.4747-1.1947-2.6667-2.6667-2.6667s-2.6666 1.192-2.6666 2.6667v16h-16c-1.472 0-2.6667 1.192-2.6667 2.6666 0 1.4747 1.1947 2.6667 2.6667 2.6667h16v16c0 1.4747 1.1946 2.6667 2.6666 2.6667s2.6667-1.192 2.6667-2.6667v-16h16c1.472 0 2.6667-1.192 2.6667-2.6667 0-1.4746-1.1947-2.6666-2.6667-2.6666z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m50.6666 29.3332h-16v-16c0-1.4747-1.1946-2.6667-2.6666-2.6667s-2.6667 1.192-2.6667 2.6667v16h-16c-1.472 0-2.6667 1.192-2.6667 2.6666 0 1.4747 1.1947 2.6667 2.6667 2.6667h16v16c0 1.4747 1.1947 2.6667 2.6667 2.6667s2.6666-1.192 2.6666-2.6667v-16h16c1.472 0 2.6667-1.192 2.6667-2.6667 0-1.4746-1.1947-2.6666-2.6667-2.6666z" fillRule="evenodd"/>,
    })
))