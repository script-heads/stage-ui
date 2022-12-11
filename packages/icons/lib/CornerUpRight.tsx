/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m19.7812 10.3756-4-5.00003c-.347-.431-.975-.502-1.406-.156-.431.344-.501.974-.156 1.405l2.701 3.37603h-8.92002c-1.655 0-3 1.345-3 3v5c0 .552.448 1 1 1s1-.448 1-1v-5c0-.552.448-1 1-1h8.92002l-2.701 3.375c-.345.431-.275 1.061.156 1.405.184.148.405.22.624.22.294 0 .584-.129.782-.376l4-5c.292-.365.292-.884 0-1.249" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m19.7811 10.3756-4-5.00003c-.347-.431-.975-.502-1.406-.156-.431.344-.501.974-.156 1.405l2.701 3.37603h-8.91998c-1.655 0-3 1.345-3 3v5c0 .552.448 1 1 1s1-.448 1-1v-5c0-.552.448-1 1-1h8.91998l-2.701 3.375c-.345.431-.275 1.061.156 1.405.184.148.405.22.624.22.294 0 .584-.129.782-.376l4-5c.292-.365.292-.884 0-1.249" fillRule="evenodd"/>,
    })
))