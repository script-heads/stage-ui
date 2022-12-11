/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13.3623 17c-.262 0-.523-.102-.719-.305l-3.86302-4c-.378-.393-.373-1.016.013-1.402l4.00002-3.99999c.39-.391 1.023-.391 1.414 0 .39.391.39 1.023 0 1.414l-3.305 3.30499 3.179 3.293c.384.398.373 1.031-.024 1.414-.195.188-.445.281-.695.281" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m13.3623 17c-.262 0-.523-.102-.719-.305l-3.86302-4c-.378-.393-.373-1.016.013-1.402l4.00002-3.99999c.39-.391 1.023-.391 1.414 0 .39.391.39 1.023 0 1.414l-3.305 3.30499 3.179 3.293c.384.398.373 1.031-.024 1.414-.195.188-.445.281-.695.281" fillRule="evenodd"/>,
    })
))