/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M41.9999 5.33325C51.2044 5.33325 58.6666 17.2733 58.6666 31.9999H38.6666C38.6666 46.7266 31.2044 58.6666 21.9999 58.6666C12.7955 58.6666 5.33325 46.7266 5.33325 31.9999H25.3333C25.3333 17.2733 32.7955 5.33325 41.9999 5.33325Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M42 5.33325C51.2045 5.33325 58.6667 17.2733 58.6667 31.9999H38.6667C38.6667 46.7266 31.2045 58.6666 22 58.6666C12.7956 58.6666 5.33337 46.7266 5.33337 31.9999H25.3334C25.3334 17.2733 32.7956 5.33325 42 5.33325Z"/>,
    })
))