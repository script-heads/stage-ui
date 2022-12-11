/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m6.99999 19.0001c-.551 0-1-.449-1-1s.449-1 1-1h11.00001v2zm12.00001-16.0001h-12.00003c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h11.00003 1c.552 0 1-.448 1-1v-1-2-13c0-.552-.448-1-1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m7.00002 19.0001c-.551 0-1-.449-1-1s.449-1 1-1h10.99998v2zm0-14.00003h10.99998v10.00003h-10.99998c-.353 0-.686.072-1 .184v-9.18403c0-.551.449-1 1-1zm11.99998-2.00007h-12c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h11 1c.552 0 1-.448 1-1v-1-2-13c0-.552-.448-1-1-1z" fillRule="evenodd"/>,
    })
))