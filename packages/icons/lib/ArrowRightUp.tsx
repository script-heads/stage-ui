/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17.9932 7.04876c0-.549-.444-.996-.994-.999l-7.993-.05h-.006c-.55 0-.996.444-1 .994-.004.552.441 1.003.994 1.006l5.558.035-8.259 8.25804c-.391.391-.391 1.024 0 1.414.195.196.451.293.707.293s.512-.097.707-.293l8.288-8.28804.005 5.58204c0 .552.448.999 1 .999h.001c.552 0 .999-.449.999-1.001z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17.9932 7.04876c0-.549-.444-.996-.994-.999l-7.99301-.05h-.006c-.55 0-.996.444-1 .994-.004.552.441 1.003.994 1.006l5.55801.035-8.25901 8.25804c-.391.391-.391 1.024 0 1.414.195.196.451.293.707.293s.512-.097.707-.293l8.28801-8.28804.005 5.58204c0 .552.448.999 1 .999h.001c.552 0 .999-.449.999-1.001z" fillRule="evenodd"/>,
    })
))