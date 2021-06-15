/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M21 8V6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6V8H21ZM3 10V18C3 19.654 4.346 21 6 21H11V10H3ZM13 21V10H21V18C21 19.654 19.654 21 18 21H13Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M18 19H13V10H19V18C19 18.552 18.551 19 18 19ZM5 18V10H11V19H6C5.449 19 5 18.552 5 18ZM6 5H18C18.551 5 19 5.448 19 6V8H5V6C5 5.448 5.449 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V8.818V9.182V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V9.182V8.818V6C21 4.346 19.654 3 18 3Z"/>,
    })
))