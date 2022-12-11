/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17 8.00001c-.553 0-1 .448-1 1v5.58599l-8.29301-8.29299c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l8.29301 8.29299h-5.58601c-.553 0-1 .448-1 1s.447 1 1 1h8.00001c.553 0 1-.448 1-1v-7.99999c0-.552-.447-1-1-1" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17 8.00001c-.553 0-1 .448-1 1v5.58599l-8.29299-8.29299c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l8.29299 8.29299h-5.58599c-.553 0-1 .448-1 1s.447 1 1 1h7.99999c.553 0 1-.448 1-1v-7.99999c0-.552-.447-1-1-1" fillRule="evenodd"/>,
    })
))