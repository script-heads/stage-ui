/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 4.00007c-4.41097 0-7.99997 3.58899-7.99997 8.00003 0 4.411 3.589 8 7.99997 8 4.411 0 8-3.589 8-8 0-4.41104-3.589-8.00003-8-8.00003zm0 17.99993c-5.51398 0-9.99998-4.486-9.99998-10s4.486-10 9.99998-10c5.514 0 10 4.486 10 10s-4.486 10-10 10z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m12 4.00007c-4.41098 0-7.99998 3.58899-7.99998 8.00003 0 4.411 3.589 8 7.99998 8 4.411 0 8-3.589 8-8 0-4.41104-3.589-8.00003-8-8.00003zm0 17.99993c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z" fillRule="evenodd"/>,
    })
))