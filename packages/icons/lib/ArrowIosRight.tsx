/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m9.9995 19.0001c-.226 0-.453-.076-.64-.232-.424-.353-.481-.984-.128-1.408l4.476-5.371-4.315-5.36203c-.346-.43-.278-1.06.152-1.406.431-.346 1.06-.278 1.407.152l4.828 6.00003c.298.371.294.901-.011 1.267l-5 6c-.198.237-.482.36-.769.36" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m9.9995 19.0001c-.226 0-.453-.076-.64-.232-.424-.353-.481-.984-.128-1.408l4.476-5.371-4.315-5.36203c-.346-.43-.278-1.06.152-1.406.431-.346 1.06-.278 1.407.152l4.828 6.00003c.298.371.294.901-.011 1.267l-5 6c-.198.237-.482.36-.769.36" fillRule="evenodd"/>,
    })
))