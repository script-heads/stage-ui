/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M19.2001 16.5H27.7334V25H36.2667V16.5H44.8001V8H53.3334V53.3333H44.8001V36.3333H36.2667V44.8333H27.7334V36.3333H19.2001V53.3333H10.6667V8H19.2001V16.5Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M19.2 16.5H27.7333V25H36.2667V16.5H44.8V8H53.3333V53.3333H44.8V36.3333H36.2667V44.8333H27.7333V36.3333H19.2V53.3333H10.6667V8H19.2V16.5Z"/>,
    })
))