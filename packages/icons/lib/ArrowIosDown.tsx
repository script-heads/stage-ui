/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 15.9997c-.228 0-.455-.077-.64-.232l-5.99998-5c-.424-.353-.482-.98396-.128-1.40796.353-.424.983-.481 1.408-.128l5.37098 4.47596 5.362-4.31496c.43-.346 1.06-.278 1.406.152s.278 1.05896-.152 1.40596l-6 4.828c-.183.147-.405.221-.627.221" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 15.9997c-.228 0-.455-.077-.64-.232l-5.99997-5c-.424-.353-.482-.98396-.128-1.40796.353-.424.983-.481 1.408-.128l5.37097 4.47596 5.362-4.31496c.43-.346 1.06-.278 1.406.152s.278 1.05896-.152 1.40596l-6 4.828c-.183.147-.405.221-.627.221" fillRule="evenodd"/>,
    })
))