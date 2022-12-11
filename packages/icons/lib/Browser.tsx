/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m19 18.0347c0 .552-.449 1-1 1h-11.99998c-.551 0-1-.448-1-1v-7h13.99998zm-11.00002-12.00003c.552 0 1 .447 1 1s-.448 1-1 1-1-.447-1-1 .448-1 1-1zm4.00002 0c.552 0 1 .447 1 1s-.448 1-1 1-1-.447-1-1 .448-1 1-1zm6-3h-12c-1.654 0-3 1.346-3 3v3 2.00003 7c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-7-2.00003-3c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m6.99998 7c0-.553.448-1 1-1s1 .447 1 1-.448 1-1 1-1-.447-1-1zm4.00002 0c0-.553.448-1 1-1s1 .447 1 1-.448 1-1 1-1-.447-1-1zm-5.99998 2.00007v-3c0-.552.449-1 1-1h11.99998c.551 0 1 .448 1 1v3zm13.99998 9.00003c0 .552-.449 1-1 1h-11.99998c-.551 0-1-.448-1-1v-7h13.99998zm-1-15.0001h-12c-1.654 0-3 1.346-3 3v3 2 7c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-7-2-3c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))