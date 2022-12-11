/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 15.4998c-.256 0-.512-.098-.707-.293l-4.00002-4c-.391-.391-.391-1.023 0-1.41404.391-.391 1.023-.391 1.414 0l3.30502 3.30504 3.293-3.18004c.399-.383 1.03-.372 1.414.025.384.39704.373 1.03104-.024 1.41404l-4 3.862c-.195.188-.445.281-.695.281" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 15.4998c-.256 0-.512-.098-.707-.293l-3.99999-4c-.391-.391-.391-1.023 0-1.41404.391-.391 1.023-.391 1.414 0l3.30499 3.30504 3.293-3.18004c.399-.383 1.03-.372 1.414.025.384.39704.373 1.03104-.024 1.41404l-4 3.862c-.195.188-.445.281-.695.281" fillRule="evenodd"/>,
    })
))