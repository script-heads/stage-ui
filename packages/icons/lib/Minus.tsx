/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m19 13h-14.00003c-.552 0-1-.447-1-1s.448-1 1-1h14.00003c.553 0 1 .447 1 1s-.447 1-1 1" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m19 13h-14c-.552 0-1-.447-1-1s.448-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1" fillRule="evenodd"/>,
    })
))