/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path d="m15.9999 50.6667c0 2.9333 2.4 5.3333 5.3334 5.3333h21.3333c2.9333 0 5.3333-2.4 5.3333-5.3333v-32h-32zm34.6667-40h-9.3333l-2.6667-2.6667h-13.3333l-2.6667 2.6667h-9.3333v5.3333h37.3333z"/>,
        outline: <path d="m16 50.6667c0 2.9333 2.4 5.3333 5.3333 5.3333h21.3334c2.9333 0 5.3333-2.4 5.3333-5.3333v-32h-32zm5.3333-26.6667h21.3334v26.6667h-21.3334zm20-13.3333-2.6666-2.6667h-13.3334l-2.6666 2.6667h-9.3334v5.3333h37.3334v-5.3333z"/>,
    })
))