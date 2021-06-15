/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"/>,
    })
))