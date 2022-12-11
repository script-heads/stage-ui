/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m12 9.00007c-.552 0-1-.448-1-1s.448-1.00001 1-1.00001 1 .44801 1 1.00001-.448 1-1 1zm1 7.00003c0 .552-.448 1-1 1s-1-.448-1-1v-5c0-.552.448-1 1-1s1 .448 1 1zm-1-14.0001c-5.52298 0-9.99998 4.477-9.99998 10s4.477 10 9.99998 10c5.522 0 10-4.477 10-10s-4.478-10-10-10z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m11 8.00007c0-.55201.448-1.00001 1-1.00001s1 .448 1 1.00001c0 .552-.448 1-1 1s-1-.448-1-1zm0 3.00003c0-.552.448-1 1-1s1 .448 1 1v5c0 .552-.448 1-1 1s-1-.448-1-1zm1 9c-4.41098 0-7.99998-3.589-7.99998-8 0-4.41104 3.589-8.00003 7.99998-8.00003 4.411 0 8 3.58899 8 8.00003 0 4.411-3.589 8-8 8zm0-18.0001c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10z" fillRule="evenodd"/>,
    })
))