/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16 13.0001h-4c-.552 0-1-.447-1-1v-4.00004c0-.553.448-1 1-1s1 .447 1 1v3.00004h3c.553 0 1 .447 1 1s-.447 1-1 1zm-4-11.0001c-5.51397 0-9.99997 4.486-9.99997 10s4.486 10 9.99997 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m16 11.0001h-3v-3.00004c0-.553-.448-1-1-1s-1 .447-1 1v4.00004c0 .553.448 1 1 1h4c.553 0 1-.447 1-1s-.447-1-1-1zm-4 9c-4.41095 0-7.99995-3.589-7.99995-8 0-4.41104 3.589-8.00003 7.99995-8.00003 4.411 0 8 3.58899 8 8.00003 0 4.411-3.589 8-8 8zm0-18.0001c-5.51397 0-9.99997 4.486-9.99997 10s4.486 10 9.99997 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z" fillRule="evenodd"/>,
    })
))