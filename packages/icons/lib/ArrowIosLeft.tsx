/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13.8286 19c-.292 0-.582-.127-.78-.373l-4.82803-6c-.298-.371-.294-.901.011-1.267l5.00003-6.00002c.353-.424.984-.481 1.409-.128.424.353.481.984.127 1.408l-4.475 5.37102 4.315 5.362c.346.43.278 1.06-.153 1.406-.184.149-.406.221-.626.221" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m13.8286 19c-.292 0-.582-.127-.78-.373l-4.82803-6c-.298-.371-.294-.901.011-1.267l5.00003-6.00002c.353-.424.984-.481 1.409-.128.424.353.481.984.127 1.408l-4.475 5.37102 4.315 5.362c.346.43.278 1.06-.153 1.406-.184.149-.406.221-.626.221" fillRule="evenodd"/>,
    })
))