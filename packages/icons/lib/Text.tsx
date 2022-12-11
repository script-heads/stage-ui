/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m20 4h-16c-.553 0-1 .447-1 1v3c0 .553.447 1 1 1s1-.447 1-1v-2h6v13h-2c-.553 0-1 .447-1 1s.447 1 1 1h6c.553 0 1-.447 1-1s-.447-1-1-1h-2v-13h6v2c0 .553.447 1 1 1s1-.447 1-1v-3c0-.553-.447-1-1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m20 4h-16c-.553 0-1 .447-1 1v3c0 .553.447 1 1 1s1-.447 1-1v-2h6v13h-2c-.553 0-1 .447-1 1s.447 1 1 1h6c.553 0 1-.447 1-1s-.447-1-1-1h-2v-13h6v2c0 .553.447 1 1 1s1-.447 1-1v-3c0-.553-.447-1-1-1" fillRule="evenodd"/>,
    })
))