/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 10.154 4.635 8.458 5.688 7.103L16.897 18.312C15.542 19.366 13.846 20 12 20C7.589 20 4 16.411 4 12ZM20 12C20 13.846 19.365 15.542 18.312 16.897L7.103 5.688C8.458 4.634 10.154 4 12 4C16.411 4 20 7.589 20 12ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 10.154 4.635 8.458 5.688 7.103L16.897 18.312C15.542 19.366 13.846 20 12 20C7.589 20 4 16.411 4 12ZM20 12C20 13.846 19.365 15.542 18.312 16.897L7.103 5.688C8.458 4.634 10.154 4 12 4C16.411 4 20 7.589 20 12ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
    })
))