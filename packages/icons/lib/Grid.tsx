/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m5 3h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2h-4c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2zm10 0h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2h-4c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2zm-6 9.9999h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2zm6 0h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2h-4c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m15 19v-4h4l.001 4zm4-6.0001h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2zm-13.99998 6.0001v-4h4l.001 4zm3.99998-6.0001h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2zm6-3.99983v-4h4l.001 4zm4-6.00007h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2zm-13.99998 6.00007v-4h4l.001 4zm3.99998-6.00007h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z" fillRule="evenodd"/>,
    })
))