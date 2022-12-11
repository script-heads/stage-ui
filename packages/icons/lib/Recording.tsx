/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18 8c-2.206 0-4 1.794-4 4 0 .731.212 1.409.557 2h-5.11397c.345-.591.55697-1.269.55697-2 0-2.206-1.79397-4-3.99997-4s-4 1.794-4 4 1.794 4 4 4h11.99997c2.206 0 4-1.794 4-4s-1.794-4-4-4" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18 14.0001c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm-14.00003-2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm14.00003-4.0001c-2.206 0-4 1.794-4 4 0 .731.212 1.409.557 2h-5.114c.345-.591.557-1.269.557-2 0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4h12c2.206 0 4-1.794 4-4s-1.794-4-4-4z" fillRule="evenodd"/>,
    })
))