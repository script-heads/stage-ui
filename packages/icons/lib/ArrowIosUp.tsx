/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17.9995 14.9999c-.226 0-.453-.076-.64-.232l-5.371-4.476-5.36199 4.315c-.429.347-1.059.279-1.406-.152-.346-.43-.278-1.059.153-1.406l5.99999-4.82798c.37-.299.901-.295 1.267.011l6 4.99998c.424.353.481.984.128 1.408-.198.237-.482.36-.769.36" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17.9995 14.9999c-.226 0-.453-.076-.64-.232l-5.371-4.476-5.36199 4.315c-.429.347-1.059.279-1.406-.152-.346-.43-.278-1.059.153-1.406l5.99999-4.82798c.37-.299.901-.295 1.267.011l6 4.99998c.424.353.481.984.128 1.408-.198.237-.482.36-.769.36" fillRule="evenodd"/>,
    })
))