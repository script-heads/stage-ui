/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m15.9995 15c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1zm-6 0c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1zm2-13c-5.514 0-10 4.486-10 10s4.486 10 10 10c5.515 0 10-4.486 10-10s-4.485-10-10-10z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m8 9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1zm5.9995 0c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1zm-1.9995 11.0001c-4.41098 0-7.99998-3.589-7.99998-8 0-4.41104 3.589-8.00003 7.99998-8.00003 4.411 0 8 3.58899 8 8.00003 0 4.411-3.589 8-8 8zm0-18.0001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10z" fillRule="evenodd"/>,
    })
))