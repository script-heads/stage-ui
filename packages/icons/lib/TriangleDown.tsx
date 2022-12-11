/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 17c-.506 0-.99-.233-1.326-.642l-4.213-5.098c-.504-.611-.605-1.478-.259-2.211.305-.647.912-1.049 1.585-1.049h8.426c.673 0 1.28.402 1.585 1.049.346.733.245 1.6-.258 2.21l-4.214 5.099c-.336.409-.82.642-1.326.642" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m8.0918 10.0001 3.91 4.822 3.985-4.822zm3.908 6.9999c-.506 0-.99-.233-1.326-.642l-4.21299-5.098c-.504-.611-.604-1.478-.259-2.211.305-.647.912-1.049 1.585-1.049h8.42599c.673 0 1.28.402 1.585 1.049.346.733.245 1.6-.258 2.21l-4.214 5.099c-.336.409-.82.642-1.326.642z" fillRule="evenodd"/>,
    })
))