/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m10 11c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm11-5.00007h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1.00001 1 1.00001h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45001 1-1.00001s-.45-1-1-1zm-4 13.99997c0 .552-.447 1-1 1h-12c-.553 0-1-.448-1-1 0-3.86 3.141-7 7-7s7 3.14 7 7z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m10 5.00007c1.103 0 2 .897 2 2s-.897 2-2 2c-1.10298 0-1.99998-.897-1.99998-2s.897-2 1.99998-2zm0 5.99993c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0 1.9999c-3.859 0-7 3.14-7 7 0 .552.447 1 1 1s1-.448 1-1c0-2.757 2.243-5 5-5s5 2.243 5 5c0 .552.447 1 1 1s1-.448 1-1c0-3.86-3.141-7-7-7zm10-6.99997h1c.55 0 1 .45 1 1s-.45 1.00001-1 1.00001h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45001-1-1.00001s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1z" fillRule="evenodd"/>,
    })
))