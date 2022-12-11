/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18 5h-5c-1.654 0-3 1.346-3 3v8.919l-3.375-2.7c-.431-.344-1.062-.275-1.406.156-.345.432-.275 1.061.156 1.406l5 4c.183.146.404.219.625.219s.442-.073.625-.219l5-4c.431-.345.501-.974.156-1.406-.344-.431-.974-.501-1.406-.156l-3.375 2.7v-8.919c0-.551.449-1 1-1h5c.552 0 1-.448 1-1s-.448-1-1-1" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18 5h-4.9999c-1.654 0-3 1.346-3 3v8.919l-3.37494-2.7c-.43099-.344-1.06199-.275-1.40598.156-.345.432-.275 1.061.156 1.406l4.99992 4c.183.146.404.219.625.219s.442-.073.625-.219l5-4c.431-.345.501-.974.156-1.406-.344-.431-.974-.501-1.406-.156l-3.375 2.7v-8.919c0-.551.449-1 1-1h4.9999c.552 0 1-.448 1-1s-.448-1-1-1" fillRule="evenodd"/>,
    })
))