/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 2c-5.51398 0-9.99998 4.486-9.99998 10 0 .553.447 1 1 1h7.99998v6c0 1.654 1.346 3 3 3s3-1.346 3-3c0-.553-.447-1-1-1s-1 .447-1 1c0 .552-.448 1-1 1s-1-.448-1-1v-6h8c.553 0 1-.447 1-1 0-5.514-4.486-10-10-10" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m4.06253 11.0001c.493-3.94003 3.865-7.00003 7.93697-7.00003 4.073 0 7.445 3.06 7.938 7.00003zm7.93697-9.0001c-5.51299 0-9.99999 4.486-9.99999 10 0 .553.448 1 1.001 1h7.99899v6c0 1.654 1.346 3 3.001 3 1.654 0 3-1.346 3-3 0-.553-.448-1-1-1-.553 0-1 .447-1 1 0 .552-.449 1-1 1-.552 0-1-.448-1-1v-6h7.999c.553 0 1-.447 1-1 0-5.514-4.486-10-10-10z" fillRule="evenodd"/>,
    })
))