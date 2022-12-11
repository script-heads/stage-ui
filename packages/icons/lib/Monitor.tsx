/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m5.00003 3h13.99997c1.654 0 3 1.346 3 3v5h-19.99997v-5c0-1.654 1.346-3 3-3zm0 13.9999c-1.654 0-3-1.346-3-3v-1h19.99997v1c0 1.654-1.346 3-3 3h-6v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-9.99997c-.55 0-1-.45-1-1s.45-1 1-1h3.99997v-2z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m20 14.0001c0 .551-.448 1-1 1h-6.913-.174-6.91298c-.552 0-1-.449-1-1v-8.00003c0-.551.448-1 1-1h13.99998c.552 0 1 .449 1 1zm-1-11.0001h-14c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h6v2h-4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1h-4v-2h6c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))