/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m10 4.32758c0-.155.214-.328.5-.328h3c.286 0 .5.173.5.328v1.672h-4zm11 1.67193h-1-4v-1.672c0-1.284-1.121-2.328-2.5-2.328h-3c-1.37898 0-2.49998 1.044-2.49998 2.328v1.672h-4-1c-.55 0-1 .451-1 1 0 .55.45 1 1 1h1v10.99999c0 1.655 1.346 3 3 3h9.99998c1.654 0 3-1.345 3-3v-10.99999h1c.55 0 1-.45 1-1 0-.549-.45-1-1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18 19c0 .551-.448 1-1 1h-10.00002c-.552 0-1-.449-1-1v-11h12.00002zm-8-14.67193c0-.155.214-.328.5-.328h3c.286 0 .5.173.5.328v1.672h-4zm11 1.67193h-1-4v-1.672c0-1.284-1.121-2.328-2.5-2.328h-3c-1.379 0-2.5 1.044-2.5 2.328v1.672h-4-1c-.55 0-1 .45-1 1s.45 1 1 1h1v11c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-11h1c.55 0 1-.45 1-1s-.45-1-1-1z" fillRule="evenodd"/>,
    })
))