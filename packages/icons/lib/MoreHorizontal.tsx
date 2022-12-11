/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m3 12c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm9-2c-1.104 0-2.00002.896-2.00002 2s.89602 2 2.00002 2 2-.896 2-2-.896-2-2-2zm7 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m6 12c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm8.0001 0c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z" fillRule="evenodd"/>,
    })
))