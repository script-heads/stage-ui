/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m14.5 8.00042h-5.00002c-.553 0-1-.447-1-1s.447-1 1-1h5.00002c.553 0 1 .447 1 1s-.447 1-1 1zm-2.5 9.99998c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm5-15.99991h-10.00002c-1.654 0-3 1.346-3 3v14.00001c0 1.654 1.346 3 3 3h10.00002c1.654 0 3-1.346 3-3v-14.00001c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m9.5 5.99993h5c.553 0 1 .447 1 1s-.447 1-1 1h-5c-.553 0-1-.447-1-1s.447-1 1-1zm1 10.49997c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm7.5 2.5002c0 .552-.448 1-1 1h-9.99998c-.552 0-1-.448-1-1v-14.00004c0-.55199.448-.99999 1-.99999h9.99998c.552 0 1 .448 1 .99999zm-1-17.0001h-10c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))