/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18 3h-12c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h7v-10h4v10h1c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 19h4v-10h-4zm-5.99998-13.99993c-.551 0-1 .449-1 1v12.00003c0 .551.449 1 1 1h11.99998c.551 0 1-.449 1-1v-12.00003c0-.551-.449-1-1-1zm11.99998 15.99993h-12c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h12c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3z" fillRule="evenodd"/>,
    })
))