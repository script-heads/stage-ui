/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m10 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm11-5h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm-4 13.9999c0 .552-.447 1-1 1h-12c-.553 0-1-.448-1-1 0-3.86 3.141-7 7-7s7 3.14 7 7z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m10 5.00007c1.103 0 2 .897 2 2s-.897 2-2 2c-1.10298 0-1.99998-.897-1.99998-2s.897-2 1.99998-2zm0 5.99993c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm11-5h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm-18 13.9999c0-3.86 3.141-7 7-7s7 3.14 7 7c0 .552-.447 1-1 1s-1-.448-1-1c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 .552-.447 1-1 1s-1-.448-1-1z" fillRule="evenodd"/>,
    })
))