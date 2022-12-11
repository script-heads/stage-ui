/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m15 13.0001h-5.99998c-.55 0-1-.45-1-1s.45-1 1-1h5.99998c.55 0 1 .45 1 1s-.45 1-1 1zm3-10.0001h-12c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m15 11.0001h-5.99998c-.55 0-1 .45-1 1s.45 1 1 1h5.99998c.55 0 1-.45 1-1s-.45-1-1-1zm4 7c0 .551-.448 1-1 1h-11.99998c-.552 0-1-.449-1-1v-12.00003c0-.551.448-1 1-1h11.99998c.552 0 1 .449 1 1zm-1-15.0001h-12c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))