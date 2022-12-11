/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m14 8c0 1.104-.896 2-2 2s-2.00002-.896-2.00002-2 .89602-2 2.00002-2 2 .896 2 2zm-4.00002 7.9999c0-1.104.89602-2 2.00002-2s2 .896 2 2-.896 2-2 2-2.00002-.896-2.00002-2z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m14 8c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm-4 7.9999c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z" fillRule="evenodd"/>,
    })
))