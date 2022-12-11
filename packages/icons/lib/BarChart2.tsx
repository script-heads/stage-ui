/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m19 4c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-15c0-.55-.45-1-1-1zm-7 3.99993c-.55 0-1 .45-1 1v10.99997c0 .55.45 1 1 1s1-.45 1-1v-10.99997c0-.55-.45-1-1-1zm-8.00003 5.00017c0-.55.45-1 1-1s1 .45 1 1v7c0 .55-.45 1-1 1s-1-.45-1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m19 4c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-15c0-.55-.45-1-1-1zm-7 3.99993c-.55 0-1 .45-1 1v10.99997c0 .55.45 1 1 1s1-.45 1-1v-10.99997c0-.55-.45-1-1-1zm-8.00003 5.00017c0-.55.45-1 1-1s1 .45 1 1v7c0 .55-.45 1-1 1s-1-.45-1-1z" fillRule="evenodd"/>,
    })
))