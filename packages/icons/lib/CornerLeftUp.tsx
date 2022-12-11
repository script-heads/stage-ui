/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18 17h-5c-.551 0-1-.449-1-1v-8.919l3.375 2.7c.185.147.405.219.625.219.292 0 .583-.128.781-.375.345-.432.275-1.061-.156-1.406l-5-4c-.366-.292-.884-.292-1.25 0l-5 4c-.431.345-.501.974-.156 1.406.344.431.975.5 1.406.156l3.375-2.7v8.919c0 1.654 1.346 3 3 3h5c.552 0 1-.448 1-1s-.448-1-1-1" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18 17h-5c-.551 0-1-.449-1-1v-8.919l3.375 2.7c.185.147.405.219.625.219.292 0 .583-.128.781-.375.345-.432.275-1.061-.156-1.406l-5-4c-.366-.292-.884-.292-1.25 0l-4.99997 4c-.431.345-.501.974-.156 1.406.344.431.975.5 1.406.156l3.37497-2.7v8.919c0 1.654 1.346 3 3 3h5c.552 0 1-.448 1-1s-.448-1-1-1" fillRule="evenodd"/>,
    })
))