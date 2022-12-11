/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 4c2.757 0 5 2.243 5 5 0 2.414-1.721 4.435-4 4.898v1.102c0 .553-.447 1-1 1s-1-.447-1-1v-2c0-.553.447-1 1-1 1.654 0 3-1.346 3-3s-1.346-3-3-3-3.00003 1.346-3.00003 3c0 .553-.447 1-1 1s-1-.447-1-1c0-2.757 2.243-5 5.00003-5zm-1 15.0001c0-.553.447-1 1-1s1 .447 1 1-.447 1-1 1-1-.447-1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 4c2.757 0 5 2.243 5 5 0 2.414-1.721 4.435-4 4.898v1.102c0 .553-.447 1-1 1s-1-.447-1-1v-2c0-.553.447-1 1-1 1.654 0 3-1.346 3-3s-1.346-3-3-3-3.00003 1.346-3.00003 3c0 .553-.447 1-1 1s-1-.447-1-1c0-2.757 2.243-5 5.00003-5zm-1 15.0001c0-.553.447-1 1-1s1 .447 1 1-.447 1-1 1-1-.447-1-1z" fillRule="evenodd"/>,
    })
))