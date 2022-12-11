/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m19 11h-6v-6c0-.553-.448-1-1-1s-1 .447-1 1v6h-6.00002c-.552 0-1 .447-1 1s.448 1 1 1h6.00002v6c0 .553.448 1 1 1s1-.447 1-1v-6h6c.552 0 1-.447 1-1s-.448-1-1-1" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m19 11h-6v-6c0-.553-.448-1-1-1s-1 .447-1 1v6h-6c-.552 0-1 .447-1 1s.448 1 1 1h6v6c0 .553.448 1 1 1s1-.447 1-1v-6h6c.552 0 1-.447 1-1s-.448-1-1-1" fillRule="evenodd"/>,
    })
))