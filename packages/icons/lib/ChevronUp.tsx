/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16 14.4999c-.256 0-.512-.098-.707-.293l-3.305-3.305-3.29301 3.18c-.398.384-1.03.374-1.414-.025-.384-.397-.373-1.031.024-1.414l4.00001-3.86199c.393-.379 1.017-.374 1.402.012l4 3.99999c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m16 14.4999c-.256 0-.512-.098-.707-.293l-3.305-3.305-3.29298 3.18c-.398.384-1.03.374-1.414-.025-.384-.397-.373-1.031.024-1.414l3.99998-3.86199c.393-.379 1.017-.374 1.402.012l4 3.99999c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293" fillRule="evenodd"/>,
    })
))