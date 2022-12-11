/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m19.0064 6.00007-6.505 4.46803c-.307.175-.683.175-.99 0l-6.50497-4.46803zm0-2.00007h-13.99997c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h13.99997c1.654 0 3-1.346 3-3v-10c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m19 17.9999h-13.99998c-.551 0-1-.448-1-1v-9.74997l7.39998 5.54997c.178.134.389.2.6.2s.422-.066.6-.2l7.4-5.54997v9.74997c0 .552-.449 1-1 1zm-.667-11.99983-6.333 4.75003-6.33298-4.75003zm.667-2.00007h-14c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-10c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))