/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m10 14.0001h4v-4h-4zm6 .7499c0 .689-.561 1.25-1.25 1.25h-5.49998c-.689 0-1.25-.561-1.25-1.25v-5.5c0-.689.561-1.25 1.25-1.25h5.49998c.689 0 1.25.561 1.25 1.25zm-4-12.75c-5.51398 0-9.99998 4.486-9.99998 10s4.486 10 9.99998 10c5.514 0 10-4.486 10-10s-4.486-10-10-10z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m10 14.0001h4v-4h-4zm4.75-6.0001h-5.5c-.689 0-1.25.561-1.25 1.25v5.5c0 .689.561 1.25 1.25 1.25h5.5c.689 0 1.25-.561 1.25-1.25v-5.5c0-.689-.561-1.25-1.25-1.25zm-2.75 12.0001c-4.41098 0-7.99998-3.589-7.99998-8 0-4.41104 3.589-8.00003 7.99998-8.00003 4.411 0 8 3.58899 8 8.00003 0 4.411-3.589 8-8 8zm0-18.0001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10z" fillRule="evenodd"/>,
    })
))