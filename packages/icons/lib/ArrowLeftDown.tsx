/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17.707 6.29301c-.391-.391-1.023-.391-1.414 0l-8.293 8.29299v-5.58599c0-.552-.447-1-1-1s-1 .448-1 1v7.99999c0 .552.447 1 1 1h8c.553 0 1-.448 1-1s-.447-1-1-1h-5.586l8.293-8.29299c.391-.391.391-1.023 0-1.414" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17.707 6.29301c-.391-.391-1.023-.391-1.414 0l-8.293 8.29299v-5.58599c0-.552-.447-1-1-1s-1 .448-1 1v7.99999c0 .552.447 1 1 1h8c.553 0 1-.448 1-1s-.447-1-1-1h-5.586l8.293-8.29299c.391-.391.391-1.023 0-1.414" fillRule="evenodd"/>,
    })
))