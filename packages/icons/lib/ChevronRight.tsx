/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m10.5 17c-.256 0-.51199-.098-.70699-.293-.391-.391-.391-1.023 0-1.414l3.30499-3.305-3.17999-3.293c-.383-.398-.372-1.031.025-1.414.39799-.383 1.03099-.372 1.41399.024l3.862 4c.379.393.374 1.016-.012 1.402l-4 4c-.195.195-.451.293-.707.293" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m10.5 17c-.256 0-.51199-.098-.70699-.293-.391-.391-.391-1.023 0-1.414l3.30499-3.305-3.17999-3.293c-.383-.398-.372-1.031.025-1.414.39799-.383 1.03099-.372 1.41399.024l3.862 4c.379.393.374 1.016-.012 1.402l-4 4c-.195.195-.451.293-.707.293" fillRule="evenodd"/>,
    })
))