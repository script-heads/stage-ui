/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12.7148 2.30071 7.709 7.88399c.366.376.576.9.576 1.439v8.376c0 1.103-.847 2-1.888 2h-3.112v-9c0-.552-.447-1-1-1h-6.00001c-.553 0-1 .448-1 1v9h-3.111c-1.041 0-1.889-.897-1.889-2v-8.376c0-.539.21-1.063.575-1.438l7.71001-7.88499c.377-.385 1.053-.385 1.43 0zm1.2852 18.69939h-4.00002v-7h4.00002z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18.9903 20h-2.99v-7c0-.553-.448-1-1-1h-6.00004c-.553 0-1 .447-1 1v7h-3l.006-8.417 6.99204-7.15104 7.002 7.19204zm-8.9901.0001h4v-6h-4zm10.424-9.8151-7.709-7.88404c-.377-.385-1.053-.385-1.43 0l-7.70996 7.88504c-.365.375-.575.899-.575 1.438v8.376c0 1.103.847 2 1.888 2h4.112 5.99996 4.111c1.041 0 1.889-.897 1.889-2v-8.376c0-.539-.21-1.063-.576-1.439z" fillRule="evenodd"/>,
    })
))