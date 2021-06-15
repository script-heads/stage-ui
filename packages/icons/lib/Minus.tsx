/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/>,
    })
))