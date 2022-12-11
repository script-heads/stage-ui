/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17 21c-.198 0-.396-.059-.565-.175l-6.412-4.396h-5.02302c-.552 0-1-.448-1-1v-6.85801c0-.552.448-1 1-1h5.02302l6.412-4.396c.305-.21.702-.234 1.031-.06.328.173.534.514.534.885v16.00001c0 .371-.206.712-.534.885-.146.077-.306.115-.466.115" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m6.00002 14.4286h4.33298c.202 0 .399.062.566.175l5.101 3.498v-12.20298l-5.101 3.498c-.167.113-.364.175-.566.175h-4.33298zm10.99998 6.5711c-.198 0-.396-.058-.565-.175l-6.412-4.396h-5.023c-.552 0-1-.447-1-1v-6.85705c0-.553.448-1 1-1h5.023l6.412-4.397c.305-.21.702-.233 1.031-.059.328.172.534.513.534.884v16.00005c0 .371-.206.712-.534.885-.146.077-.306.115-.466.115z" fillRule="evenodd"/>,
    })
))