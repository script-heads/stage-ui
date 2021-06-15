/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M20 4H4C3.447 4 3 4.447 3 5V8C3 8.553 3.447 9 4 9C4.553 9 5 8.553 5 8V6H11V19H9C8.447 19 8 19.447 8 20C8 20.553 8.447 21 9 21H15C15.553 21 16 20.553 16 20C16 19.447 15.553 19 15 19H13V6H19V8C19 8.553 19.447 9 20 9C20.553 9 21 8.553 21 8V5C21 4.447 20.553 4 20 4Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M20 4H4C3.447 4 3 4.447 3 5V8C3 8.553 3.447 9 4 9C4.553 9 5 8.553 5 8V6H11V19H9C8.447 19 8 19.447 8 20C8 20.553 8.447 21 9 21H15C15.553 21 16 20.553 16 20C16 19.447 15.553 19 15 19H13V6H19V8C19 8.553 19.447 9 20 9C20.553 9 21 8.553 21 8V5C21 4.447 20.553 4 20 4Z"/>,
    })
))