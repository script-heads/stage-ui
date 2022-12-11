/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16 7c0 2.206-1.794 4-4 4-2.20598 0-3.99998-1.794-3.99998-4s1.794-4 3.99998-4c2.206 0 4 1.794 4 4zm3 12.9999c0 .552-.447 1-1 1h-11.99998c-.553 0-1-.448-1-1 0-3.86 3.141-7 6.99998-7 3.859 0 7 3.14 7 7z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m14 7.00007c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2zm2-.00007c0 2.206-1.794 4-4 4s-4-1.794-4-4 1.794-4 4-4 4 1.794 4 4zm-11 12.9999c0-3.86 3.141-7 7-7s7 3.14 7 7c0 .552-.447 1-1 1s-1-.448-1-1c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 .552-.447 1-1 1s-1-.448-1-1z" fillRule="evenodd"/>,
    })
))