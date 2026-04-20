/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M20 13.3333H26.6667V50.6666H20V13.3333Z M37.3333 13.3333H44V50.6666H37.3333V13.3333Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M20 13.3333H26.6667V50.6666H20V13.3333Z M37.3333 13.3333H44V50.6666H37.3333V13.3333Z"/>,
    })
))