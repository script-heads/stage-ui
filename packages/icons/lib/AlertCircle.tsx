/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13 13.0001c0 .552-.448 1-1 1s-1-.448-1-1v-5.00004c0-.552.448-1 1-1s1 .448 1 1zm-1 3.9998c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-14.9999c-5.52297 0-9.99997 4.477-9.99997 10s4.477 10 9.99997 10c5.523 0 10-4.477 10-10s-4.477-10-10-10z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m11 8.00006c0-.552.448-1 1-1s1 .448 1 1v5.00004c0 .552-.448 1-1 1s-1-.448-1-1zm0 8.00004c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm1 4c-4.41103 0-8.00003-3.589-8.00003-8 0-4.41104 3.589-8.00003 8.00003-8.00003 4.411 0 8 3.58899 8 8.00003 0 4.411-3.589 8-8 8zm0-18.0001c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" fillRule="evenodd"/>,
    })
))