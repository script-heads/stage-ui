/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m21 8v-2c0-1.654-1.346-3-3-3h-12c-1.654 0-3 1.346-3 3v2zm-18 1.99993v7.99997c0 1.654 1.346 3 3 3h5v-10.99997zm10 10.99997v-10.99997h8v7.99997c0 1.654-1.346 3-3 3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18 18.9999h-5v-8.99997h6v7.99997c0 .552-.449 1-1 1zm-12.99998-1v-7.99997h5.99998v8.99997h-4.99998c-.551 0-1-.448-1-1zm1-12.99983h11.99998c.551 0 1 .448 1 1v1.99999h-13.99998v-1.99999c0-.552.449-1 1-1zm11.99998-2.00007h-12c-1.654 0-3 1.346-3 3v2.818.364 8.818c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-8.818-.364-2.818c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))