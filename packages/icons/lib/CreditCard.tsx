/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m20 9.00007h-15.99997v-1c0-.55101.448-1.00001 1-1.00001h13.99997c.552 0 1 .449 1 1.00001zm-3 6.00003h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm-6 0h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zm8-10.0001h-13.99998c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h13.99998c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m11 15.0001h-4.00002c-.55 0-1-.45-1-1s.45-1 1-1h4.00002c.55 0 1 .45 1 1s-.45 1-1 1zm6 0h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm3 .9999c0 .551-.448 1-1 1h-13.99998c-.552 0-1-.449-1-1v-5h15.99998zm-15.99998-7.99993c0-.55101.448-1.00001 1-1.00001h13.99998c.552 0 1 .449 1 1.00001v1h-15.99998zm14.99998-3.00007h-14c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))