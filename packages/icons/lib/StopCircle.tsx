/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M10 14H14V10H10V14ZM16 14.75C16 15.439 15.439 16 14.75 16H9.25C8.561 16 8 15.439 8 14.75V9.25C8 8.561 8.561 8 9.25 8H14.75C15.439 8 16 8.561 16 9.25V14.75ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M10 14H14V10H10V14ZM14.75 8H9.25C8.561 8 8 8.561 8 9.25V14.75C8 15.439 8.561 16 9.25 16H14.75C15.439 16 16 15.439 16 14.75V9.25C16 8.561 15.439 8 14.75 8ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/>,
    })
))