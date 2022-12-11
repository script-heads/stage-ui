/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path d="m6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12h-12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14z"/>,
        outline: <path d="m6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12h-12zm2-10h8v10h-8zm7.5-5-1-1h-5l-1 1h-3.5v2h14v-2z"/>,
    })
))